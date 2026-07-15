"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = exports.CreateBillingInvoiceInput = exports.BillingInvoiceItemInput = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_js_1 = require("./prisma.service.js");
const sri_signer_service_js_1 = require("./sri-signer.service.js");
const sri_soap_service_js_1 = require("./sri-soap.service.js");
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
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
        try {
            const dbUser = await this.prisma.user.findUnique({
                where: { id: userId },
            });
            if (dbUser && dbUser.establishmentAddress) {
                address = dbUser.establishmentAddress;
            }
        }
        catch (e) {
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
        const backendUrl = process.env.BACKEND_URL || `http://127.0.0.1:${process.env.BACKEND_PORT || '3000'}`;
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
            }
            catch (err) {
                console.error('Failed to fetch signature from database:', err);
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
                        await fetch(`${backendUrl}/invoices/sync-status`, {
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
    async loginEmployee(email, password) {
        const employee = await this.prisma.employee.findUnique({
            where: { email },
            include: { owner: true },
        });
        if (employee) {
            const isPasswordValid = await bcrypt.compare(password, employee.password);
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Credenciales incorrectas.');
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
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas.');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas.');
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
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService,
        sri_signer_service_js_1.SriSignerService,
        sri_soap_service_js_1.SriSoapService])
], BillingService);
//# sourceMappingURL=billing.service.js.map