/**
 * Topic: literal types
 * Level: 3
 *
 * Goal:
 * Model a payment method as literal values.
 *
 * Requirements:
 * 1. Create type Method = "card" | "transfer" | "cash".
 * 2. Create function describe(method: Method): string that returns the method.
 * 3. Log describe("card").
 *
 * Expected behavior:
 * card prints. invalid methods stay commented.
 *
 * Acceptance criteria:
 * - Method is a string literal union.
 * - describe accepts only Method.
 * - No template literal types are used.
 */

export {};

console.log("=== literal types - Level 3 ===");

// TODO: Create Method, describe, and log describe("card").

// Invalid (keep commented):
// describe("crypto");

