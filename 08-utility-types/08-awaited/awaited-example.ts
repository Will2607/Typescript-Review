/**
 * 08 — Awaited
 *
 * Awaited<T> is the type of the value produced after awaiting T.
 * Nested promises are unwrapped. Non-promise types stay the same.
 */

// Example 1: Basic Awaited
type TextResult =
  Awaited<Promise<string>>;

const textResult: TextResult = "TypeScript";

console.log(textResult);

// const invalidTextResult: TextResult = 123;

// Example 2: Number Promise
type NumberResult =
  Awaited<Promise<number>>;

const numberResult: NumberResult = 42;

console.log(numberResult);

// const invalidNumberResult: NumberResult = "42";

// Example 3: Non-Promise type
// Non-Promise values remain unchanged.
type DirectValue = Awaited<string>;

const directValue: DirectValue = "Hello";

console.log(directValue);

// Example 4: Nested Promise type
// Awaited recursively unwraps nested promises.
type NestedResult =
  Awaited<Promise<Promise<number>>>;

const nestedResult: NestedResult = 100;

console.log(nestedResult);

// Example 5: Object resolved from Promise
type ApiResponse = Promise<{
  id: number;
  name: string;
}>;

type ResolvedApiResponse =
  Awaited<ApiResponse>;

const response: ResolvedApiResponse = {
  id: 1,
  name: "Alice",
};

console.log(response);

// Invalid: name must still be a string.
// const invalidResponse: ResolvedApiResponse = {
//   id: 1,
//   name: 100,
// };

// Example 6: Async function
async function getMessage(): Promise<string> {
  return "Hello from async function";
}

async function runAsyncExample(): Promise<void> {
  const message = await getMessage();
  console.log(message);
}

void runAsyncExample();

// Example 7: Awaited with a union
type MaybeAsync =
  | string
  | Promise<number>;

type ResolvedMaybeAsync =
  Awaited<MaybeAsync>;

const textValue: ResolvedMaybeAsync = "hello";
const numericValue: ResolvedMaybeAsync = 123;

console.log(textValue);
console.log(numericValue);

// const invalidValue: ResolvedMaybeAsync = true;
