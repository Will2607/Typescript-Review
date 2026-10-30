/**
 * Topic: any
 * Level: 3
 *
 * Goal:
 * Contrast a typed id with an any fallback field.
 *
 * Requirements:
 * 1. Create userId: number.
 * 2. Create extra: any assigned to an object or string.
 * 3. Log both.
 *
 * Expected behavior:
 * userId stays a number while extra remains any.
 *
 * Acceptance criteria:
 * - userId is number, not any.
 * - extra is any.
 * - Both values are logged.
 */

export {};

console.log("=== any - Level 3 ===");

const userId: number = 44;

// TODO: Create extra: any with a temporary payload and log userId plus extra.

