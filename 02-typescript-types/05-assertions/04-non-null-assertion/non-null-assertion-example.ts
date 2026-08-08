/**
 * 04 — Non-null Assertion
 *
 * Practical examples of the non-null assertion operator (!).
 * value! tells TypeScript the value is not null and not undefined.
 * It does not validate or change the runtime value.
 *
 * Note: value! is NOT the same as !value (boolean negation).
 */

// 1) A variable whose type includes string | undefined
let username: string | undefined = "Alice";

// 2) Safe assignment guarantees the value exists before using !
console.log("username:", username);

// 3) Accessing .length with a non-null assertion
console.log("username!.length:", username!.length);

// 4) Calling .toUpperCase() with a non-null assertion
console.log("username!.toUpperCase():", username!.toUpperCase());

// 5) A function that may return string | undefined
function findLanguage(code: string): string | undefined {
  if (code === "ts") {
    return "TypeScript";
  }

  return undefined;
}

// 6) Calling that function in a case where a value is known to exist
const language = findLanguage("ts");

// 7) Using ! on the returned value
console.log("language!.toUpperCase():", language!.toUpperCase());

// Value known to be present
const message: string | undefined = "TypeScript is ready";
console.log("message!.length:", message!.length);

// 8) Comparison: normal runtime check verifies the value.
// ! only tells TypeScript to trust the developer.
const optionalValue: string | undefined = "Hello";

if (optionalValue !== undefined) {
  console.log("checked optionalValue:", optionalValue.toUpperCase());
}

console.log("asserted optionalValue!:", optionalValue!.toUpperCase());

// Unsafe examples — kept commented because they can crash at runtime:
//
const missingName: string | undefined = undefined;
//
// console.log(missingName!.length);
// Runtime risk: value is undefined.
//
// console.log(missingName!.toUpperCase());
// Runtime risk: calling a method on undefined.
//
const missingLanguage = findLanguage("js");
//
// console.log(missingLanguage!.toUpperCase());
// Runtime risk: findLanguage("js") returns undefined.
//
let emptyValue: string | undefined;
//
// console.log(emptyValue!.length);
// Runtime risk: emptyValue was never assigned a string.
