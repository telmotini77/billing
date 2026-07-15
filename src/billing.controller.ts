import { Controller, Get, Post, Body, Query, Param, Headers } from '@nestjs/common';
import { BillingService, CreateBillingInvoiceInput } from './billing.service.js';

@Controller('invoices')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  async findAll(
    @Query('userId') queryUserId?: string,
    @Headers('x-user-id') headerUserId?: string,
  ) {
    const userId = queryUserId || headerUserId;
    if (!userId) return [];
    return this.billingService.findAll(userId);
  }

  @Post()
  async create(@Body() input: CreateBillingInvoiceInput) {
    return this.billingService.create(input);
  }

  @Get(':id/xml')
  async getXml(
    @Param('id') id: string,
    @Query('userId') queryUserId?: string,
    @Headers('x-user-id') headerUserId?: string,
  ) {
    const userId = queryUserId || headerUserId || '';
    const xml = await this.billingService.getInvoiceXml(userId, id);
    return { xml };
  }

  @Post(':id/send')
  async send(@Param('id') id: string) {
    return { success: true };
  }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly billingService: BillingService) {}

  @Post('login-employee')
  async loginEmployee(@Body() body: { email?: string; password?: string }) {
    const email = body.email || '';
    const password = body.password || '';
    return this.billingService.loginEmployee(email, password);
  }
}

