/**
 * Topic: as type
 * Level: 3
 *
 * Goal:
 * Treat a JSON-like value as an order total.
 *
 * Requirements:
 * 1. Create jsonTotal: unknown = 249.5.
 * 2. Assert it as number into orderTotal.
 * 3. Log orderTotal.
 *
 * Expected behavior:
 * 249.5 prints as a number.
 *
 * Acceptance criteria:
 * - jsonTotal remains unknown.
 * - orderTotal is produced with as number.
 * - The number is logged.
 */

export {};

console.log("=== as type - Level 3 ===");

const jsonTotal: unknown = 249.5;

// TODO: Create orderTotal = jsonTotal as number and log it.

