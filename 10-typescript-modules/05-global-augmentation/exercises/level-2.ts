/**
 * Topic: global augmentation
 * Level: 2
 *
 * Goal:
 * Augment Array with lastItem().
 *
 * Requirements:
 * 1. declare global interface Array<T> { lastItem(): T | undefined }.
 * 2. Implement Array.prototype.lastItem.
 * 3. Log ["a", "b"].lastItem().
 *
 * Expected behavior:
 * b prints. empty arrays would return undefined.
 *
 * Acceptance criteria:
 * - declare global is used.
 * - Runtime implementation is separate from the declaration.
 * - lastItem is logged.
 */

export {};

console.log("=== global augmentation - Level 2 ===");

declare global {
  interface Array<T> {
    lastItem(): T | undefined;
  }
}

// TODO: Implement Array.prototype.lastItem so it returns the last element or undefined.
// TODO: Log ["a", "b"].lastItem() and [].lastItem().

// Validation (uncomment after implementing):
// console.log(["a", "b"].lastItem());

