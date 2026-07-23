/**
 * 02 — TypeScript vs JavaScript
 *
 * Practical differences between dynamic typing in JavaScript
 * and static typing added by TypeScript.
 */

// ---------------------------------------------------------------------------
// 1) JavaScript uses dynamic typing
// ---------------------------------------------------------------------------
// In JavaScript, a variable can hold different kinds of values over time.
// The language checks types mainly while the program is running (runtime),
// not before you execute the code.
//
// In plain JavaScript this is allowed:
//
//   let productLabel = "Notebook";
//   productLabel = 42;
//
// The variable starts with a string value and later receives a number.
// JavaScript does not report a type error before execution.

// ---------------------------------------------------------------------------
// 2) TypeScript adds static typing on top of JavaScript
// ---------------------------------------------------------------------------
// TypeScript lets you write JavaScript-like code while adding a static
// type system. It can detect many incompatible operations before the
// program runs.

const itemName: string = "Keyboard";
const itemPrice: number = 59;

console.log("Typed item:", itemName, itemPrice);

// ---------------------------------------------------------------------------
// 3) Why TypeScript is called a superset of JavaScript
// ---------------------------------------------------------------------------
// TypeScript understands JavaScript syntax and extends it with a type system.
//
// However, some JavaScript code may still produce TypeScript errors when
// stricter type-checking rules are enabled.
//
// This means that developers can start with JavaScript-style code and
// progressively add type annotations and stronger type checks.

// ---------------------------------------------------------------------------
// 4) Development-time errors vs runtime errors
// ---------------------------------------------------------------------------
// Development-time errors:
//
// TypeScript and the editor analyze the code before execution.
// Many mistakes appear as editor warnings or tsc errors.
//
// Runtime errors:
//
// Runtime errors happen while Node.js or the browser is executing the
// generated JavaScript. Some problems throw an error, while others only
// produce unexpected results.

// JavaScript can perform implicit type coercion.
const userAgeText = "25";
const yearsToAdd = 5;

const unexpectedAgeResult = userAgeText + yearsToAdd;

// JavaScript converts the number to a string and concatenates both values.
// The result is "255", not 30.
console.log("Unexpected JavaScript coercion result:", unexpectedAgeResult);

// ---------------------------------------------------------------------------
// 5) TypeScript types disappear after compilation
// ---------------------------------------------------------------------------
// Type annotations are used by the TypeScript compiler and development tools.
//
// When TypeScript is compiled into JavaScript, the type annotations are
// removed. The generated file contains only executable JavaScript.

// ---------------------------------------------------------------------------
// 6) Node.js and browsers execute JavaScript
// ---------------------------------------------------------------------------
// JavaScript engines do not execute TypeScript type annotations directly.
//
// A TypeScript file must first be transformed into JavaScript. Tools such as
// tsc compile the file beforehand, while tools such as tsx can perform that
// transformation automatically when the file is executed.

// ---------------------------------------------------------------------------
// 7) TypeScript cannot prevent every runtime problem
// ---------------------------------------------------------------------------
// Static typing prevents many common mistakes, but it cannot know everything
// that will happen while the application is running.
//
// Examples include:
//
// - Invalid user input.
// - Unexpected API responses.
// - Network failures.
// - Missing external data.
// - Invalid text converted into a number.

// =============================================================================
// Examples
// =============================================================================

// ---------------------------------------------------------------------------
// Example 1: A variable changing from string to number
// ---------------------------------------------------------------------------
//
// JavaScript version:
//
//   let productLabel = "Notebook";
//   productLabel = 42;
//
// This is allowed because JavaScript variables are dynamically typed.

// In this TypeScript file, the variable is inferred as string.
let productLabel = "Notebook";

console.log("productLabel:", productLabel);

// TypeScript rejects assigning a number to this variable:
//
// productLabel = 42;
//
// Error:
// Type 'number' is not assignable to type 'string'.

// ---------------------------------------------------------------------------
// Example 2: JavaScript-style function without type validation
// ---------------------------------------------------------------------------
// The parameters use unknown because the values have not been validated.
//
// This simulates a JavaScript function that receives values without knowing
// whether the caller supplied the expected types or argument order.

function formatPriceLabelJavaScript(
  price: unknown,
  currencyCode: unknown,
): string {
  return String(currencyCode) + " " + String(price);
}

// The arguments are supplied in the wrong order.
const wrongJavaScriptLabel = formatPriceLabelJavaScript("USD", 19.99);

console.log("JavaScript-style swapped arguments:", wrongJavaScriptLabel);

// Runtime result:
//
//   19.99 USD
//
// The program runs, but the arguments were provided in the wrong order.

// ---------------------------------------------------------------------------
// Example 3: The same function with TypeScript types
// ---------------------------------------------------------------------------

function formatPriceLabelTypeScript(
  price: number,
  currencyCode: string,
): string {
  return currencyCode + " " + price;
}

const correctTypeScriptLabel = formatPriceLabelTypeScript(19.99, "USD");

console.log(
  "TypeScript function with correct arguments:",
  correctTypeScriptLabel,
);

// TypeScript detects swapped arguments before execution:
//
// const rejectedTypeScriptLabel = formatPriceLabelTypeScript("USD", 19.99);
//
// Error:
// Argument of type 'string' is not assignable to parameter of type 'number'.

// ---------------------------------------------------------------------------
// Example 4: A runtime problem TypeScript cannot fully predict
// ---------------------------------------------------------------------------
// Imagine that this value comes from a form, an API, or another external
// source. TypeScript knows that the value is a string, but it cannot determine
// whether its content represents a valid number until the program runs.

const externalQuantityText = "not-a-number";
const parsedQuantity = Number(externalQuantityText);

console.log("Parsed external quantity:", parsedQuantity);

// Number("not-a-number") produces NaN at runtime.
// TypeScript cannot determine the final numeric result from the string content.

if (Number.isNaN(parsedQuantity)) {
  console.log("Runtime issue: quantity is not a valid number.");
}

// ---------------------------------------------------------------------------
// Example 5: TypeScript source vs generated JavaScript
// ---------------------------------------------------------------------------
//
// TypeScript source:
//
//   function calculateTotal(price: number, quantity: number): number {
//     return price * quantity;
//   }
//
//   const orderTotal: number = calculateTotal(20, 3);
//
// Approximate generated JavaScript:
//
//   function calculateTotal(price, quantity) {
//     return price * quantity;
//   }
//
//   const orderTotal = calculateTotal(20, 3);
//
// The parameter types, return type, and variable annotation disappear.
// Only executable JavaScript remains.

// =============================================================================
// Summary
// =============================================================================
//
// JavaScript:
//
// - Uses dynamic typing.
// - Determines value types during execution.
// - Can perform implicit type coercion.
// - May allow invalid values to reach runtime.
//
// TypeScript:
//
// - Adds static analysis to JavaScript.
// - Detects many incompatible operations during development.
// - Improves editor assistance and code understanding.
// - Removes its type annotations when compiled.
// - Still produces JavaScript for Node.js or browsers.
// - Cannot prevent every possible runtime problem.

// =============================================================================
// Review questions
// =============================================================================
//
// 1) What does dynamic typing mean in JavaScript?
//
// 2) How does TypeScript's static analysis differ from JavaScript's
//    runtime type behavior?
//
// 3) Why is TypeScript described as a superset of JavaScript?
//
// 4) What happens to TypeScript type annotations after compilation?
//
// 5) Why can TypeScript not prevent every runtime error?

// =============================================================================
// How to check and run this file
// =============================================================================
//
// Type-check without generating JavaScript:
//
//   npx tsc --noEmit 01-introduction-to-typescript/02-typescript-vs-javascript/02-typescript-vs-javascript.ts
//
// Run with tsx:
//
//   npx tsx 01-introduction-to-typescript/02-typescript-vs-javascript/02-typescript-vs-javascript.ts

export {};