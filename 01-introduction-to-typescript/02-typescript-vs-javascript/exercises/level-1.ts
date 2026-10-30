/**
 * Topic: TypeScript vs JavaScript
 * Level: 1
 *
 * Goal:
 * Show how TypeScript rejects an incompatible assignment that JavaScript would allow.
 *
 * Requirements:
 * 1. Create productSku with an explicit string type.
 * 2. Assign a valid SKU such as "SKU-1001".
 * 3. Keep an invalid number assignment commented out.
 * 4. Log the SKU.
 *
 * Expected behavior:
 * The valid SKU prints. The commented assignment would be a TypeScript error.
 */

export {};

console.log("=== TypeScript vs JavaScript - Level 1 ===");

// In JavaScript, a SKU variable could later become a number.
// TODO: Create productSku: string, assign a string SKU, and log it.

// Invalid in TypeScript (keep commented):
// productSku = 1001;

