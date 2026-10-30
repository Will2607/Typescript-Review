/**
 * Topic: TypeScript vs JavaScript
 * Level: 3
 *
 * Goal:
 * Describe an order line with typed fields that JavaScript would not protect.
 *
 * Requirements:
 * 1. Create quantity (number), unitPrice (number), and itemName (string).
 * 2. Create lineTotal as quantity * unitPrice with an explicit number type.
 * 3. Log itemName and lineTotal.
 *
 * Expected behavior:
 * lineTotal is a number computed from typed quantity and unitPrice.
 *
 * Acceptance criteria:
 * - All four values are explicitly typed.
 * - lineTotal is calculated, not hard-coded.
 * - Incompatible assignments remain commented.
 */

export {};

console.log("=== TypeScript vs JavaScript - Level 3 ===");

// TODO: Model one order line for "Wireless Mouse".
// Suggested quantity 3 and unitPrice 24.5.

// Invalid (keep commented):
// quantity = "3";

