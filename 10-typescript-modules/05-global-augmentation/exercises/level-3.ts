/**
 * Topic: global augmentation
 * Level: 3
 *
 * Goal:
 * Augment Number with asPercentLabel().
 *
 * Requirements:
 * 1. declare global interface Number { asPercentLabel(): string }.
 * 2. Implement Number.prototype.asPercentLabel to return this + "%".
 * 3. Log (15).asPercentLabel().
 *
 * Expected behavior:
 * 15% prints.
 *
 * Acceptance criteria:
 * - The declaration is type-only.
 * - The prototype assignment provides runtime behavior.
 * - The result is logged.
 */

export {};

console.log("=== global augmentation - Level 3 ===");

declare global {
  interface Number {
    asPercentLabel(): string;
  }
}

// TODO: Implement Number.prototype.asPercentLabel so it returns this + "%".
// TODO: Log (15).asPercentLabel() and (0).asPercentLabel().

// Validation (uncomment after implementing):
// console.log((15).asPercentLabel());

