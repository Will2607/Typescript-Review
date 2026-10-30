/**
 * Topic: ReturnType
 * Level: 1
 *
 * Goal:
 * Capture the return type of a total helper.
 *
 * Requirements:
 * 1. Use the provided total function.
 * 2. Create type Total = ReturnType<typeof total>.
 * 3. Create value: Total = 30 and log it.
 *
 * Expected behavior:
 * 30 prints as a number.
 */

export {};

console.log("=== ReturnType - Level 1 ===");

function total(a: number, b: number): number {
  return a + b;
}

// TODO: Create Total = ReturnType<typeof total> and value: Total = 30, then log it.

