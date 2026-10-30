/**
 * Topic: method overriding
 * Level: 3
 *
 * Goal:
 * Override a discount rate on a wholesale customer.
 *
 * Requirements:
 * 1. Create class Customer { discount(): number { return 0; } }.
 * 2. Create class WholesaleCustomer extends Customer { override discount(): number { return 0.15; } }.
 * 3. Log the wholesale discount.
 *
 * Expected behavior:
 * 0.15 prints.
 *
 * Acceptance criteria:
 * - override is used on discount.
 * - The subclass returns 0.15.
 * - The value is logged.
 */

export {};

console.log("=== method overriding - Level 3 ===");

// TODO: Create Customer and WholesaleCustomer, then log new WholesaleCustomer().discount().

