/**
 * Topic: conditional types
 * Level: 1
 *
 * Goal:
 * Branch on whether a type is string.
 *
 * Requirements:
 * 1. Create type IsString<T> = T extends string ? true : false.
 * 2. Create type A = IsString<string> and type B = IsString<number>.
 * 3. Create a: A = true and b: B = false, then log both.
 *
 * Expected behavior:
 * true and false print.
 */

export {};

console.log("=== conditional types - Level 1 ===");

type IsStringShape<T> = T extends string ? true : false;
type AShape = IsStringShape<string>;
const unusedA: AShape = true;
void unusedA;

// TODO: Create IsString<T>, A, B, a: A = true, b: B = false, then log a and b.

// Invalid (keep commented):
// const a: A = false;

