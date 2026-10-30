/**
 * Topic: linting
 * Level: 3
 *
 * Goal:
 * Separate equality mistakes from type errors.
 *
 * Requirements:
 * 1. Create status: string = "paid".
 * 2. Use === in a comparison against "paid".
 * 3. Keep a type-invalid comparison commented.
 * 4. Log whether the status is paid.
 *
 * Expected behavior:
 * true prints for a paid status using strict equality.
 *
 * Acceptance criteria:
 * - === is used.
 * - A type-invalid example stays commented.
 * - The boolean result is logged.
 */

export {};

console.log("=== linting - Level 3 ===");

const status: string = "paid";

// Compiler error (keep commented):
// const invalid = status === 1;

// TODO: Create isPaid using status === "paid" and log isPaid.

