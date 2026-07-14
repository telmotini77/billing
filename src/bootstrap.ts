import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module.js';

export async function bootstrapBilling() {
  const app = await NestFactory.create(BillingModule);
  app.enableCors();
  const port = process.env.BILLING_PORT || 3001;
  await app.listen(port, '0.0.0.0');
  console.log(`Billing Microservice is running on: http://localhost:${port}`);
  return app;
}
