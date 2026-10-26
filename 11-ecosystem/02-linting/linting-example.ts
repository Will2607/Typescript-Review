/**
 * 02 — Linting
 *
 * Valid TypeScript can still be analyzed by lint rules.
 * Formatting controls presentation. Linting reports configured patterns.
 */

// Example 1: Code TypeScript accepts but a linter may analyze
function greet(
  name: string
): string {
  return "Hello, " + name;
}

console.log(greet("Alice"));

// Example 2: Unused variable concept
// A linter may report this variable if it is never used.
// const unusedValue = 42;

// Example 3: TypeScript type checking
// This is primarily a TypeScript type error rather than a linting concern.
// const age: number = "30";

// Example 4: Suspicious condition concept
// Some linters can flag suspicious conditions even when the code is syntactically valid.
// const value = 10;
//
// if (value === value) {
//   console.log("Always true");
// }

// Example 5: Unreachable code concept
// Statements after an unconditional return are unreachable.
function getNumber(): number {
  return 10;

  // console.log("This cannot execute");
}

console.log(getNumber());

// Example 6: Formatting vs linting
// Formatting controls visual presentation.
// Linting analyzes configured coding rules and suspicious patterns.
// const result=1+2;

const result = 1 + 2;

console.log(result);

// Example 7: Simple clean code
// Clean TypeScript can pass type checking while still being subject to lint rules.
interface Product {
  id: number;
  name: string;
  price: number;
}

function formatProduct(
  product: Product
): string {
  return product.id + ": " + product.name + " - " + product.price;
}

const product: Product = {
  id: 1,
  name: "Keyboard",
  price: 79,
};

console.log(formatProduct(product));
