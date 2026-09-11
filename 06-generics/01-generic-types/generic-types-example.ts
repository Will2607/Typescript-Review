/**
 * 01 — Generic Types
 *
 * Type parameters such as <T> let one definition work with many types
 * while preserving type information.
 */

// Example 1: Generic identity function
function identity<T>(value: T): T {
  return value;
}

const textResult = identity("TypeScript");
const numberResult = identity(42);
const booleanResult = identity(true);

console.log(textResult);
console.log(numberResult);
console.log(booleanResult);

// Example 2: Explicit generic type arguments
console.log(identity<string>("Hello"));
console.log(identity<number>(100));

// Invalid: argument does not match the explicit type argument.
// identity<number>("Hello");

// Example 3: Generic inference
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = firstItem(["Alice", "Bob"]);
const firstScore = firstItem([10, 20, 30]);

console.log(firstName);
console.log(firstScore);

// Example 4: Multiple generic parameters
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const agePair = createPair("age", 30);
const flagPair = createPair(true, "enabled");

console.log(agePair);
console.log(flagPair);

// Example 5: Generic type alias
type Box<T> = {
  value: T;
};

const stringBox: Box<string> = {
  value: "hello",
};

const numberBox: Box<number> = {
  value: 100,
};

console.log(stringBox.value);
console.log(numberBox.value);

// Invalid assignment.
// const invalidBox: Box<string> = {
//   value: 100,
// };

// Example 6: Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

const stringContainer: Container<string> = {
  value: "TypeScript",
  getValue(): string {
    return this.value;
  },
};

const numberContainer: Container<number> = {
  value: 42,
  getValue(): number {
    return this.value;
  },
};

console.log(stringContainer.getValue());
console.log(numberContainer.getValue());

// Example 7: Generic class
class StorageBox<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const textStorage = new StorageBox<string>("TypeScript");
const numberStorage = new StorageBox<number>(100);

console.log(textStorage.getValue());
console.log(numberStorage.getValue());

// Example 8: Descriptive generic parameter name
function wrap<ValueType>(value: ValueType): ValueType {
  return value;
}

console.log(wrap("wrapped"));
console.log(wrap(7));
