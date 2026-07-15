import { PrismaService } from './prisma.service.js';
import { SriSignerService } from './sri-signer.service.js';
import { SriSoapService } from './sri-soap.service.js';
export declare class BillingInvoiceItemInput {
    productId: string;
    quantity: number;
}
export declare class CreateBillingInvoiceInput {
    clientName: string;
    amount: number;
    hasIva?: boolean;
    ivaRate?: number;
    items?: BillingInvoiceItemInput[];
    user: {
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
export declare class BillingService {
    private prisma;
    private signer;
    private soap;
    constructor(prisma: PrismaService, signer: SriSignerService, soap: SriSoapService);
    findAll(userId: string): Promise<({
        items: {
            id: string;
            productId: string;
            quantity: number;
            invoiceId: string;
        }[];
    } & {
        status: string;
        id: string;
        claveAcceso: string;
        clientName: string;
        amount: number;
        subtotal: number;
        iva: number;
        sentToClient: boolean;
        userId: string;
        createdAt: Date;
    })[]>;
    getInvoiceXml(userId: string, id: string): Promise<string>;
    private getModulo11Digit;
    create(input: CreateBillingInvoiceInput): Promise<{
        status: string;
        id: string;
        claveAcceso: string;
        clientName: string;
        amount: number;
        subtotal: number;
        iva: number;
        sentToClient: boolean;
        userId: string;
        createdAt: Date;
    }>;
    loginEmployee(email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
            ownerId: string;
            ownerRuc: string;
            ownerName: string;
        };
        accessToken: string;
    }>;
}
