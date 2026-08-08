/**
 * 03 — as any
 *
 * Demonstrates the as any assertion as an escape hatch that bypasses
 * TypeScript checking. Prefer safer types in real projects.
 *
 * This lesson uses any only through as any (not : any annotations).
 * as any is erased at compile time and does not convert values by itself.
 */

// 1) A normally typed value
const language = "TypeScript";
console.log("language:", language);

// 2) The same value asserted with as any
const flexibleLanguage = language as any;
console.log("flexibleLanguage:", flexibleLanguage);

// 3) Accessing a property through as any
console.log("flexibleLanguage.length:", flexibleLanguage.length);

// 4) Calling a method through as any
console.log("flexibleLanguage.toUpperCase():", flexibleLanguage.toUpperCase());

const user = {
  id: 1,
  name: "Alice",
};

console.log("user.name:", user.name);

const flexibleUser = user as any;
console.log("flexibleUser.id:", flexibleUser.id);
console.log("flexibleUser.name:", flexibleUser.name);

// 5) Bypassing a property assignment restriction with as any.
// TypeScript allows this write. The runtime value of port actually changes.
const configuration = {
  port: 3000,
};

(configuration as any).port = "not-a-number";
console.log("configuration.port:", configuration.port);
console.log("typeof configuration.port:", typeof configuration.port);

// 6) Assigning an as any value to a specifically typed variable.
// TypeScript accepts it because any is assignable to number.
// Runtime value remains the string "123".
const receivedValue = "123" as any;
const numericValue: number = receivedValue;
console.log("numericValue:", numericValue);
console.log("typeof numericValue:", typeof numericValue);

// 7) Runtime value itself is not converted by the assertion alone.
const originalText = "TypeScript";
const assertedText = originalText as any;
console.log("originalText:", originalText);
console.log("assertedText:", assertedText);
console.log("typeof assertedText:", typeof assertedText);

// Comparison: regular as Type vs as any (brief unknown usage only)
const unknownText: unknown = "TypeScript";

const textValue = unknownText as string;
console.log("textValue.toUpperCase():", textValue.toUpperCase());

const uncheckedText = unknownText as any;
console.log("uncheckedText.toUpperCase():", uncheckedText.toUpperCase());

// Risky examples that can throw at runtime — kept commented:
//
const unsafeObject = {} as any;
//
// console.log(unsafeObject.user.name);
// Runtime risk: reading nested properties that do not exist.
//
// unsafeObject.execute();
// Runtime risk: calling a method that does not exist.
//
// unsafeObject.nonExistingMethod();
// Runtime risk: calling another missing method.
//
// const invalidResult: number = ({} as any).missing.value;
// Runtime risk: deep access on a missing path.
