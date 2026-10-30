/**
 * Topic: generic types
 * Level: 1
 *
 * Goal:
 * Write a generic identity helper.
 *
 * Requirements:
 * 1. Create function identity<T>(value: T): T.
 * 2. Call it with a string and a number.
 * 3. Log both results.
 *
 * Expected behavior:
 * The same values print with preserved types.
 */

export {};

console.log("=== generic types - Level 1 ===");

function identityShape<T>(value: T): T {
  return value;
}

void identityShape;

// TODO: Create identity<T>(value: T): T and log identity("ok") and identity(3).

// Invalid (keep commented):
// identity<number>("ok");

