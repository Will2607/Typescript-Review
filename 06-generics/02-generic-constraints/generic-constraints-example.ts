/**
 * 02 — Generic Constraints
 *
 * Use extends to limit type parameters so TypeScript knows
 * which properties and keys are safe to access.
 */

// Example 1: Object-shape constraint
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3]));

// Invalid: number has no length property.
// console.log(getLength(123));

// Example 2: Interface constraint
interface Identifiable {
  id: number;
}

function printId<T extends Identifiable>(item: T): void {
  console.log(item.id);
}

const user = {
  id: 1,
  name: "Alice",
};

const product = {
  id: 42,
  title: "Keyboard",
  price: 79,
};

printId(user);
printId(product);

// Invalid: missing required id.
// printId({ name: "No id" });

// Example 3: Constraint preserves T
function keepItem<T extends Identifiable>(item: T): T {
  return item;
}

const keptProduct = keepItem(product);

console.log(keptProduct.id);
console.log(keptProduct.title);
console.log(keptProduct.price);

// Example 4: Multiple constrained type parameters
function combine<T extends object, U extends object>(
  first: T,
  second: U
): T & U {
  return { ...first, ...second };
}

const combined = combine({ name: "Alice" }, { age: 30 });

console.log(combined);

// Invalid: primitives do not satisfy object constraints.
// combine("Alice", 30);

// Example 5: keyof constraint
function getProperty<T, K extends keyof T>(
  object: T,
  key: K
): T[K] {
  return object[key];
}

const account = {
  name: "Alice",
  age: 30,
  active: true,
};

console.log(getProperty(account, "name"));
console.log(getProperty(account, "age"));
console.log(getProperty(account, "active"));

// Invalid: "email" is not a key of account.
// getProperty(account, "email");

// Example 6: Generic vs constrained generic
function identity<T>(value: T): T {
  return value;
}

function describeLength<T extends { length: number }>(value: T): string {
  return "Length: " + value.length;
}

console.log(identity(123));
console.log(identity("hello"));
console.log(describeLength("hello"));
console.log(describeLength([1, 2]));

// identity accepts values broadly; describeLength requires length.
// console.log(describeLength(123));
