/**
 * Topic: never
 * Level: 1
 *
 * Goal:
 * Write a function whose return type is never because it always throws.
 *
 * Requirements:
 * 1. Create fail(message: string): never.
 * 2. Throw an Error inside it.
 * 3. Do not call it in active code.
 *
 * Expected behavior:
 * The function is declared with return type never.
 */

export {};

console.log("=== never - Level 1 ===");

// TODO: Implement fail(message: string): never by throwing new Error(message).
// Do not call fail() in this file.

function exampleNeverShape(message: string): never {
  throw new Error(message);
}

void exampleNeverShape;

