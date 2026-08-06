/**
 * 02 — as Type
 *
 * Practical examples of type assertions with as Type.
 * Assertions tell TypeScript how to treat a value.
 * They do not convert or validate the runtime value.
 */

// 1) A value declared as unknown
const unknownText: unknown = "TypeScript";

// 2) Assert unknown string value to string
const assertedText = unknownText as string;
console.log("assertedText:", assertedText);

// 3) Access string length after the assertion
console.log("assertedText.length:", assertedText.length);

// 4) Call a string method after the assertion
console.log("assertedText.toUpperCase():", assertedText.toUpperCase());

// 5) Unknown numeric value asserted to number
const unknownAmount: unknown = 100;
const assertedAmount = unknownAmount as number;
console.log("assertedAmount:", assertedAmount);

// 6) Numeric operation after a correct assertion
console.log("assertedAmount + 50:", assertedAmount + 50);

// 7) Unknown object asserted to an explicit inline object type
const unknownUser: unknown = {
  id: 1,
  name: "Alice",
};

const assertedUser = unknownUser as {
  id: number;
  name: string;
};

// 8) Reading object properties after the assertion
console.log("assertedUser.id:", assertedUser.id);
console.log("assertedUser.name:", assertedUser.name);

// 9) Comparison: type annotation vs type assertion
const annotatedLanguage: string = "TypeScript";
console.log("annotatedLanguage:", annotatedLanguage);

const receivedLanguage: unknown = "JavaScript";
const assertedLanguage = receivedLanguage as string;
console.log("assertedLanguage:", assertedLanguage);

// Annotation declares the expected type of a variable.
// Assertion tells TypeScript how to treat an existing expression.

// 10) Assertions do not convert runtime values.
// TypeScript is told this is a number, but runtime remains a string.
const unknownValue: unknown = "123";
const assertedNumber = unknownValue as number;

console.log("assertedNumber:", assertedNumber);
console.log("typeof assertedNumber:", typeof assertedNumber);
// Do not perform arithmetic with this incorrectly asserted value in active code.

// Risky or invalid examples — kept commented:
//
const uncertainText: unknown = "Hello";
//
// console.log(uncertainText.length);
// Error: 'uncertainText' is of type 'unknown'.
//
// uncertainText.toUpperCase();
// Error: 'uncertainText' is of type 'unknown'.
//
const wrongNumber: unknown = "100";
//
// const amount = wrongNumber as number;
// console.log(amount + 50);
// Compiles after assertion, but runtime risk: string + number behaves unexpectedly.
//
const incompleteObject: unknown = {
  id: 1,
};
//
// const incorrectUser = incompleteObject as {
//   id: number;
//   name: string;
// };
//
// console.log(incorrectUser.name.toUpperCase());
// Compiles after assertion, but runtime risk: name is missing.
