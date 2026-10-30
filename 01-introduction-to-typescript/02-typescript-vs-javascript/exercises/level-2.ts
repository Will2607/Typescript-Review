/**
 * Topic: TypeScript vs JavaScript
 * Level: 2
 *
 * Goal:
 * Type a payment amount and currency that must stay compatible.
 *
 * Requirements:
 * 1. Create amountUsd as number.
 * 2. Create currencyCode as string.
 * 3. Log both.
 * 4. Comment one invalid reassignment that would mix those types.
 *
 * Expected behavior:
 * amountUsd stays numeric and currencyCode stays a string.
 *
 * Acceptance criteria:
 * - Both variables have explicit types.
 * - An incompatible assignment is shown only in comments.
 * - No any is used.
 */

export {};

console.log("=== TypeScript vs JavaScript - Level 2 ===");

// TODO: Declare amountUsd and currencyCode with explicit types.
// Suggested values: 49.99 and "USD".

// Invalid (keep commented):
// amountUsd = "49.99";

