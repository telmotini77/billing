import { BillingService, CreateBillingInvoiceInput } from './billing.service.js';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    findAll(queryUserId?: string, headerUserId?: string): Promise<({
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
    getXml(id: string, queryUserId?: string, headerUserId?: string): Promise<{
        xml: string;
    }>;
    send(id: string): Promise<{
        success: boolean;
    }>;
}
