/**
 * Topic: typeof
 * Level: 2
 *
 * Goal:
 * Add a surcharge only when the fee is a number.
 *
 * Requirements:
 * 1. Create fee: number | string = 8.
 * 2. If typeof fee === "number", log fee + 1.
 * 3. Otherwise log the string.
 *
 * Expected behavior:
 * 9 prints for the numeric fee.
 *
 * Acceptance criteria:
 * - typeof number is checked before arithmetic.
 * - Both branches exist.
 * - A result is logged.
 */

export {};

console.log("=== typeof - Level 2 ===");

const fee: number | string = 8;

// TODO: Narrow fee with typeof and log fee + 1 or the string.

