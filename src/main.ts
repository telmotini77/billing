import { bootstrapBilling } from './bootstrap.js';

bootstrapBilling().catch((err) => {
  console.error('Error starting Billing Microservice:', err);
});
