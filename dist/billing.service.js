"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = exports.CreateBillingInvoiceInput = exports.BillingInvoiceItemInput = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_js_1 = require("./prisma.service.js");
const sri_signer_service_js_1 = require("./sri-signer.service.js");
const sri_soap_service_js_1 = require("./sri-soap.service.js");
class BillingInvoiceItemInput {
    productId;
    quantity;
}
exports.BillingInvoiceItemInput = BillingInvoiceItemInput;
class CreateBillingInvoiceInput {
    clientName;
    amount;
    hasIva;
    ivaRate;
    items;
    user;
}
exports.CreateBillingInvoiceInput = CreateBillingInvoiceInput;
let BillingService = class BillingService {
    prisma;
    signer;
    soap;
    constructor(prisma, signer, soap) {
        this.prisma = prisma;
        this.signer = signer;
        this.soap = soap;
    }
    async findAll(userId) {
        return this.prisma.billingInvoice.findMany({
            where: { userId },
            include: { items: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getInvoiceXml(userId, id) {
        const inv = await this.prisma.billingInvoice.findFirst({
            where: { id, userId },
        });
        if (!inv)
            throw new common_1.BadRequestException('Factura no encontrada.');
        let address = 'Av. de los Granados N45 y Eloy Alfaro, Quito';
        const backendPort = process.env.BACKEND_PORT || '3000';
        try {
            const res = await fetch(`http://127.0.0.1:${backendPort}/auth/profile/sri-config-internal?userId=${userId}`);
            if (res.ok) {
                const data = (await res.json());
                if (data.establishmentAddress)
                    address = data.establishmentAddress;
            }
        }
        catch (e) {
            console.error('Failed to fetch address for XML preview:', e);
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
    getModulo11Digit(key) {
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
        if (digit === 11)
            return '0';
        if (digit === 10)
            return '1';
        return digit.toString();
    }
    async create(input) {
        const { clientName, amount, hasIva, ivaRate, items, user } = input;
        if (amount <= 0) {
            throw new common_1.BadRequestException('El monto debe ser mayor a 0.');
        }
        const isIva = hasIva !== false;
        const rate = ivaRate !== undefined ? Number(ivaRate) : 15;
        let subtotal = amount;
        let iva = 0;
        if (isIva) {
            subtotal = Number((amount / (1 + rate / 100)).toFixed(2));
            iva = Number((amount - subtotal).toFixed(2));
        }
        let p12Buffer = user.signatureBase64
            ? Buffer.from(user.signatureBase64, 'base64')
            : undefined;
        let passphrase = user.signaturePassword;
        let estab = user.establishmentCode || '001';
        let ptoEmi = user.emissionPoint || '002';
        let address = user.establishmentAddress || 'Av. de los Granados N45 y Eloy Alfaro, Quito';
        const backendPort = process.env.BACKEND_PORT || '3000';
        if (!p12Buffer || !user.establishmentCode) {
            try {
                const res = await fetch(`http://127.0.0.1:${backendPort}/auth/profile/sri-config-internal?userId=${user.id}`);
                if (res.ok) {
                    const data = (await res.json());
                    if (data.signatureBase64 && !p12Buffer) {
                        p12Buffer = Buffer.from(data.signatureBase64, 'base64');
                        passphrase = data.signaturePassword;
                    }
                    if (data.establishmentCode) {
                        estab = data.establishmentCode;
                    }
                    if (data.emissionPoint) {
                        ptoEmi = data.emissionPoint;
                    }
                    if (data.establishmentAddress) {
                        address = data.establishmentAddress;
                    }
                }
            }
            catch (err) {
                console.error('Failed to fetch signature from accounting backend:', err);
            }
        }
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
        try {
            const res = await fetch(`http://127.0.0.1:${backendPort}/invoices/sync-sale`, {
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
        }
        catch (err) {
            console.error('Error connecting to Accounting system for sync:', err);
        }
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
                        await fetch(`http://127.0.0.1:${backendPort}/invoices/sync-status`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                userId: user.id,
                                claveAcceso: accessKey,
                                status: finalStatus,
                            }),
                        }).catch(err => console.error('Failed to sync auth status back to accounting system:', err));
                    }
                    catch (err) {
                        console.error('Error in microservice background SRI authorization:', err);
                    }
                })();
            }, 4000);
        }
        return invoice;
    }
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService,
        sri_signer_service_js_1.SriSignerService,
        sri_soap_service_js_1.SriSoapService])
], BillingService);
//# sourceMappingURL=billing.service.js.map