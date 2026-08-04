/**
 * 01 — unknown
 *
 * Practical examples of the unknown top type:
 * assign many value kinds, observe usage restrictions,
 * and perform one minimal check before string-specific use.
 *
 * unknown is a TypeScript compile-time type and does not exist at runtime.
 */

// 1) A variable declared as unknown
let receivedValue: unknown;

// 2) Assign a string
receivedValue = "TypeScript";
console.log(receivedValue);

// 3) Assign a number
receivedValue = 42;
console.log(receivedValue);

// 4) Assign a boolean
receivedValue = true;
console.log(receivedValue);

// 5) Assign an object
receivedValue = {
  source: "API",
};
console.log(receivedValue);

// 6) Assign an array
receivedValue = ["TypeScript", "JavaScript"];
console.log(receivedValue);

// 7–8) Assign one unknown variable to another unknown variable
let copiedValue: unknown = receivedValue;
console.log(copiedValue);

// 9) Function that accepts unknown
function displayValue(value: unknown): void {
  console.log("Received value:", value);
}

displayValue("Hello");
displayValue(100);
displayValue(false);

// 10) Minimal safe check before using an unknown value as a string.
// This only demonstrates the restriction — not a full type-guard lesson.
function printTextLength(value: unknown): void {
  if (typeof value === "string") {
    console.log("Text length:", value.length);
  }
}

printTextLength("TypeScript");
printTextLength(250);

// Incorrect examples — kept commented so this file type-checks:
//
let uncertainValue: unknown = "Hello";
//
// const text: string = uncertainValue;
// Error: Type 'unknown' is not assignable to type 'string'.
//
// const amount: number = uncertainValue;
// Error: Type 'unknown' is not assignable to type 'number'.
//
// console.log(uncertainValue.length);
// Error: 'uncertainValue' is of type 'unknown'.
//
// uncertainValue.toUpperCase();
// Error: 'uncertainValue' is of type 'unknown'.
