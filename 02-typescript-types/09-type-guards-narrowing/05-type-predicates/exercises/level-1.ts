/**
 * Topic: type predicates
 * Level: 1
 *
 * Goal:
 * Write a predicate that identifies a string.
 *
 * Requirements:
 * 1. Create function isString(value: string | number): value is string.
 * 2. Return typeof value === "string".
 * 3. Use it to log toUpperCase on a sample value.
 *
 * Expected behavior:
 * A string sample prints in uppercase after the predicate.
 */

export {};

console.log("=== type predicates - Level 1 ===");

function isStringShape(value: string | number): value is string {
  return typeof value === "string";
}

void isStringShape;

const sample: string | number = "ready";

// TODO: Create isString with a type predicate and use it before logging sample.toUpperCase().

