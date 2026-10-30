/**
 * Topic: never
 * Level: 2
 *
 * Goal:
 * Mark an impossible payment branch as never.
 *
 * Requirements:
 * 1. Create function assertNever(value: never): never.
 * 2. Throw inside it.
 * 3. Do not call it with a real value.
 *
 * Expected behavior:
 * assertNever is typed with a never parameter and never return.
 *
 * Acceptance criteria:
 * - The parameter type is never.
 * - The function throws.
 * - It is not called with a string or number.
 */

export {};

console.log("=== never - Level 2 ===");

// TODO: Create assertNever(value: never): never that throws.

function unusedReference(value: never): never {
  throw new Error("Unexpected value");
}

void unusedReference;

