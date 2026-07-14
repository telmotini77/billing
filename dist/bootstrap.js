"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrapBilling = bootstrapBilling;
const core_1 = require("@nestjs/core");
const billing_module_js_1 = require("./billing.module.js");
async function bootstrapBilling() {
    const app = await core_1.NestFactory.create(billing_module_js_1.BillingModule);
    app.enableCors();
    const port = process.env.BILLING_PORT || 3001;
    await app.listen(port, '0.0.0.0');
    console.log(`Billing Microservice is running on: http://localhost:${port}`);
    return app;
}
//# sourceMappingURL=bootstrap.js.map