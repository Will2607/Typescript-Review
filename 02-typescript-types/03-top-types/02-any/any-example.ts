/**
 * 02 — any
 *
 * Demonstrates how any disables TypeScript checking:
 * flexible assignment, unchecked property/method access,
 * and assignment into specific types.
 *
 * Warning: any removes compile-time guarantees.
 * This file uses any only because it is the lesson topic.
 * Prefer safer types in real projects when possible.
 *
 * any is erased at compile time and does not exist at runtime.
 */

// 1) Explicit any variable
let flexibleValue: any;

// 2) Assign a string
flexibleValue = "TypeScript";
console.log(flexibleValue);

// 3) Assign a number
flexibleValue = 42;
console.log(flexibleValue);

// 4) Assign a boolean
flexibleValue = true;
console.log(flexibleValue);

// 5) Assign an object — property access is allowed without checking
flexibleValue = {
  language: "TypeScript",
  version: 5,
};
console.log(flexibleValue.language);

// 6) Assign an array — length access is allowed without checking
flexibleValue = ["TypeScript", "JavaScript"];
console.log(flexibleValue.length);

// 7–8) Method call on any — no compile-time method validation
let textValue: any = "Hello";
console.log(textValue.toUpperCase());

// 9) Assign any into a specifically typed variable
const assignedString: string = textValue;
console.log(assignedString);

// 10) Function parameter explicitly typed as any
function displayFlexibleValue(value: any): void {
  console.log("Received value:", value);
}

displayFlexibleValue("Hello");
displayFlexibleValue(100);
displayFlexibleValue(false);

// 11) Safe-looking operations that compile because of any,
// even though TypeScript is not verifying the value shape.
let demoValue: any = "TypeScript";
console.log("demoValue upper:", demoValue.toUpperCase());
demoValue = { title: "Roadmap Lesson" };
console.log("demoValue title:", demoValue.title);

// Risky examples — kept commented.
// They show how any can hide problems that fail at runtime
// (or that bypass checking with a type assertion, which this lesson avoids in active code).
//
let unsafeValue: any = null;
//
// console.log(unsafeValue.name);
// Runtime risk: reading .name from null.
//
// unsafeValue.execute();
// Runtime risk: calling a method that does not exist.
//
// const amount: number = "not a number" as any;
// Risk: a type assertion through any can force an invalid value into number.
// Do not use assertions like this in active lesson code.
