import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { SriSignerService } from './sri-signer.service.js';
import { SriSoapService } from './sri-soap.service.js';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export class BillingInvoiceItemInput {
  productId!: string;
  quantity!: number;
}

export class CreateBillingInvoiceInput {
  clientName!: string;
  amount!: number;
  hasIva?: boolean;
  ivaRate?: number;
  items?: BillingInvoiceItemInput[];
  user!: {
    id: string;
    ruc: string;
    name: string;
    sriEnvironment: string;
    signatureBase64?: string;
    signaturePassword?: string;
    sriSimulate: boolean;
    isBranch?: boolean;
    parentCompanyRuc?: string;
    establishmentCode?: string;
    emissionPoint?: string;
    establishmentAddress?: string;
  };
}

@Injectable()
export class BillingService {
  constructor(
    private prisma: PrismaService,
    private signer: SriSignerService,
    private soap: SriSoapService,
  ) {}

  async findAll(userId: string) {
    return this.prisma.billingInvoice.findMany({
      where: { userId },
      include: { items: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getInvoiceXml(userId: string, id: string) {
    const inv = await this.prisma.billingInvoice.findFirst({
      where: { id, userId },
    });
    if (!inv) throw new BadRequestException('Factura no encontrada.');

    let address = 'Av. de los Granados N45 y Eloy Alfaro, Quito';
    try {
      const dbUser = await this.prisma.user.findUnique({
        where: { id: userId },
      });
      if (dbUser && dbUser.establishmentAddress) {
        address = dbUser.establishmentAddress;
      }
    } catch (e) {
      console.error('Failed to fetch address for XML preview from DB:', e);
    }

    const estab = inv.claveAcceso.slice(24, 27);
    const ptoEmi = inv.claveAcceso.slice(27, 30);

    return this.signer.generateInvoiceXml({
      clientName: inv.clientName,
      amount: inv.amount,
      claveAcceso: inv.claveAcceso,
      createdAt: inv.createdAt,
      ivaRate: inv.iva > 0 ? 15 : 0,
      establishmentCode: estab,
      emissionPoint: ptoEmi,
      establishmentAddress: address,
    });
  }

  private getModulo11Digit(key: string): string {
    let multiplier = 2;
    let sum = 0;
    for (let i = key.length - 1; i >= 0; i--) {
      sum += parseInt(key[i], 10) * multiplier;
      multiplier++;
      if (multiplier > 7) {
        multiplier = 2;
      }
    }
    const remainder = sum % 11;
    const digit = 11 - remainder;
    if (digit === 11) return '0';
    if (digit === 10) return '1';
    return digit.toString();
  }

  async create(input: CreateBillingInvoiceInput) {
    const { clientName, amount, hasIva, ivaRate, items, user } = input;

    if (amount <= 0) {
      throw new BadRequestException('El monto debe ser mayor a 0.');
    }

    const isIva = hasIva !== false;
    const rate = ivaRate !== undefined ? Number(ivaRate) : 15;
    let subtotal = amount;
    let iva = 0;

    if (isIva) {
      subtotal = Number((amount / (1 + rate / 100)).toFixed(2));
      iva = Number((amount - subtotal).toFixed(2));
    }

    const backendUrl = process.env.BACKEND_URL || `http://127.0.0.1:${process.env.BACKEND_PORT || '3000'}`;

    // Determine initial values or query backend fallback profile
    let p12Buffer = user.signatureBase64
      ? Buffer.from(user.signatureBase64, 'base64')
      : undefined;
    let passphrase = user.signaturePassword;
    let estab = user.establishmentCode || '001';
    let ptoEmi = user.emissionPoint || '002';
    let address = user.establishmentAddress || 'Av. de los Granados N45 y Eloy Alfaro, Quito';

    if (!p12Buffer || !user.establishmentCode) {
      try {
        const dbUser = await this.prisma.user.findUnique({
          where: { id: user.id },
        });
        if (dbUser) {
          if (dbUser.signatureBase64 && !p12Buffer) {
            p12Buffer = Buffer.from(dbUser.signatureBase64, 'base64');
            passphrase = dbUser.signaturePassword ?? undefined;
          }
          if (dbUser.establishmentCode) {
            estab = dbUser.establishmentCode;
          }
          if (dbUser.emissionPoint) {
            ptoEmi = dbUser.emissionPoint;
          }
          if (dbUser.establishmentAddress) {
            address = dbUser.establishmentAddress;
          }
        }
      } catch (err) {
        console.error('Failed to fetch signature from database:', err);
      }
    }

    // Generate 49-digit access key
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const typeCode = '01';
    const ruc = user.ruc;
    const environment = user.sriEnvironment || '1';
    const series = `${estab}${ptoEmi}`;
    const sequential = Math.floor(Math.random() * 900000000 + 100000000).toString();
    const numericCode = Math.floor(Math.random() * 90000000 + 10000000).toString();
    const mode = '1';

    const keyWithoutVerify = `${dateStr}${typeCode}${ruc}${environment}${series}${sequential}${numericCode}${mode}`;
    const verifyDigit = this.getModulo11Digit(keyWithoutVerify);
    const accessKey = `${keyWithoutVerify}${verifyDigit}`;

    // Sign and send XML
    const rawXml = this.signer.generateInvoiceXml({
      clientName,
      amount,
      claveAcceso: accessKey,
      createdAt: new Date(),
      ruc,
      companyName: user.name,
      environment,
      ivaRate: isIva ? rate : 0,
      establishmentCode: estab,
      emissionPoint: ptoEmi,
      establishmentAddress: address,
    });

    const signedXml = this.signer.signXml(rawXml, p12Buffer, passphrase);

    const reception = await this.soap.sendToSri(signedXml, user.sriSimulate, environment);
    const status = reception.status === 'RECEIVED' ? 'RECEIVED' : 'REJECTED';

    // 1. Create Invoice in SQLite DB
    const invoice = await this.prisma.billingInvoice.create({
      data: {
        claveAcceso: accessKey,
        clientName,
        amount,
        subtotal,
        iva,
        status,
        userId: user.id,
        items: {
          create: items?.map(item => ({
            productId: item.productId,
            quantity: Number(item.quantity),
          })) || [],
        },
      },
    });

    // 2. Notify the main Accounting system webhook to register accounting entries and stock
    try {
      const res = await fetch(`${backendUrl}/invoices/sync-sale`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          invoiceId: invoice.id,
          claveAcceso: accessKey,
          clientName,
          amount,
          subtotal,
          iva,
          status,
          items: items || [],
        }),
      });
      if (!res.ok) {
        console.error('Accounting system sync failed with status:', res.status);
      }
    } catch (err) {
      console.error('Error connecting to Accounting system for sync:', err);
    }

    // 3. SRI Background Authorization
    if (status === 'RECEIVED') {
      setTimeout(() => {
        void (async () => {
          try {
            const authResult = await this.soap.authorizeComprobante(accessKey, user.sriSimulate, environment);
            const finalStatus = authResult.status === 'AUTHORIZED' ? 'AUTHORIZED' : 'REJECTED';
            
            await this.prisma.billingInvoice.update({
              where: { id: invoice.id },
              data: { status: finalStatus },
            });

            // Update status on the accounting system side as well
            await fetch(`${backendUrl}/invoices/sync-status`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                userId: user.id,
                claveAcceso: accessKey,
                status: finalStatus,
              }),
            }).catch(err => console.error('Failed to sync auth status back to accounting system:', err));
            
          } catch (err) {
            console.error('Error in microservice background SRI authorization:', err);
          }
        })();
      }, 4000);
    }

    return invoice;
  }

  async loginEmployee(email: string, password: string) {
    // 1. Find employee
    const employee = await this.prisma.employee.findUnique({
      where: { email },
      include: { owner: true },
    });

    if (employee) {
      const isPasswordValid = await bcrypt.compare(password, employee.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Credenciales incorrectas.');
      }

      const payload = { email: employee.email, sub: employee.id, role: 'employee', ownerId: employee.ownerId };
      const token = jwt.sign(payload, process.env.JWT_SECRET || 'super-secret-jwt-key-2026-aura-contable', { expiresIn: '24h' });
      return {
        user: {
          id: employee.id,
          email: employee.email,
          name: employee.name,
          role: 'employee',
          ownerId: employee.ownerId,
          ownerRuc: employee.owner.ruc,
          ownerName: employee.owner.name,
        },
        accessToken: token,
      };
    }

    // 2. Fallback: Find User (Owner)
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas.');
    }

    const payload = { email: user.email, sub: user.id, role: 'owner', ownerId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'super-secret-jwt-key-2026-aura-contable', { expiresIn: '24h' });
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: 'owner',
        ownerId: user.id,
        ownerRuc: user.ruc,
        ownerName: user.name,
      },
      accessToken: token,
    };
  }
}
