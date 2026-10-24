/**
 * 05 — Global Augmentation
 *
 * declare global extends global types from inside a module.
 * The declaration is type-only. Runtime behavior is implemented separately.
 */

export {};

declare global {
  interface Array<T> {
    first(): T | undefined;
  }

  interface String {
    shout(): string;
  }
}

// The declaration tells TypeScript the method exists.
// The prototype assignment provides the actual runtime behavior.
Array.prototype.first = function <T>(
  this: T[]
): T | undefined {
  return this[0];
};

String.prototype.shout =
  function (this: string): string {
    return this.toUpperCase();
  };

// Example 1: Augment Array<T>
const numbers = [10, 20, 30];

const firstNumber =
  numbers.first();

console.log(firstNumber);

const emptyNumbers: number[] = [];

console.log(emptyNumbers.first());

// Example 2: Generic behavior
// The augmented method preserves the array element type.
const names = [
  "Alice",
  "Bob",
  "Charlie"
];

const firstName =
  names.first();

console.log(firstName);

// Example 3: String augmentation
const message = "typescript";

console.log(message.shout());

// Example 5: Invalid runtime assumption
// If `Array.prototype.first` were not implemented,
// TypeScript could still accept the call after the declaration,
// but the program would fail at runtime.

// Example 6: Invalid type implementation
// Array.prototype.first = function <T>(
//   this: T[]
// ): string {
//   return "invalid";
// };
