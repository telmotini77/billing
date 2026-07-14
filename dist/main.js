"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_js_1 = require("./bootstrap.js");
(0, bootstrap_js_1.bootstrapBilling)().catch((err) => {
    console.error('Error starting Billing Microservice:', err);
});
//# sourceMappingURL=main.js.map