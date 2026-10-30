/**
 * Topic: global augmentation
 * Level: 1
 *
 * Goal:
 * Add a small String prototype helper through declare global.
 *
 * Requirements:
 * 1. Use declare global to add interface String { labelize(): string }.
 * 2. Implement String.prototype.labelize to return this.toUpperCase().
 * 3. Log "invoice".labelize().
 *
 * Expected behavior:
 * INVOICE prints.
 */

export {};

console.log("=== global augmentation - Level 1 ===");

declare global {
  interface String {
    labelize(): string;
  }
}

// TODO: Implement String.prototype.labelize so it returns this.toUpperCase().
// TODO: Log "invoice".labelize().

// Validation (uncomment after implementing):
// console.log("invoice".labelize());

