import { Module } from '@nestjs/common';
import { BillingController, AuthController } from './billing.controller.js';
import { BillingService } from './billing.service.js';
import { PrismaService } from './prisma.service.js';
import { SriSignerService } from './sri-signer.service.js';
import { SriSoapService } from './sri-soap.service.js';

@Module({
  imports: [],
  controllers: [BillingController, AuthController],
  providers: [BillingService, PrismaService, SriSignerService, SriSoapService],
  exports: [BillingService],
})
export class BillingModule {}
