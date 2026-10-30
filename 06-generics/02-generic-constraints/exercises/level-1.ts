/**
 * Topic: generic constraints
 * Level: 1
 *
 * Goal:
 * Constrain a helper to values that have a length.
 *
 * Requirements:
 * 1. Create function readLength<T extends { length: number }>(value: T): number.
 * 2. Return value.length.
 * 3. Log readLength("orders") and readLength([1, 2]).
 *
 * Expected behavior:
 * 6 and 2 print.
 */

export {};

console.log("=== generic constraints - Level 1 ===");

function readLengthShape<T extends { length: number }>(value: T): number {
  return value.length;
}

void readLengthShape;

// TODO: Create readLength with the constraint and log string and array lengths.

// Invalid (keep commented):
// readLength(10);

