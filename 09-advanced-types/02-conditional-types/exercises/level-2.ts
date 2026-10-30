/**
 * Topic: conditional types
 * Level: 2
 *
 * Goal:
 * Describe a value as numeric or other.
 *
 * Requirements:
 * 1. Create type Kind<T> = T extends number ? "numeric" : "other".
 * 2. Create type PriceKind = Kind<number> and type NameKind = Kind<string>.
 * 3. Create matching string values and log them.
 *
 * Expected behavior:
 * numeric and other print.
 *
 * Acceptance criteria:
 * - Kind is a conditional type.
 * - infer is not used.
 * - Both results are logged.
 */

export {};

console.log("=== conditional types - Level 2 ===");

// TODO: Create Kind<T>, PriceKind, NameKind, and two values, then log them.

