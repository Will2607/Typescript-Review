/**
 * 02 — typeof
 *
 * Practical examples of typeof as a TypeScript type guard.
 * typeof is a real JavaScript operator that remains at runtime.
 * TypeScript uses its result to narrow primitive union types.
 */

// 9) Basic runtime demonstration of typeof
console.log('typeof "TypeScript":', typeof "TypeScript");
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log('typeof { language: "TypeScript" }:', typeof { language: "TypeScript" });
console.log('typeof ["TypeScript", "JavaScript"]:', typeof ["TypeScript", "JavaScript"]);
console.log("typeof null:", typeof null);

// 1–4) string | number parameter with typeof narrowing
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
    console.log("Length:", value.length);
  } else {
    console.log("Number value:", value);
    console.log("Doubled:", value * 2);
  }
}

printValue("TypeScript");
printValue(21);

function formatValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("formatValue string:", value.toUpperCase());
  } else {
    console.log("formatValue number:", value.toFixed(2));
  }
}

formatValue("hello");
formatValue(21);

// 5–6) string | boolean parameter
function printStatus(value: string | boolean): void {
  if (typeof value === "boolean") {
    console.log("Boolean status:", value);
  } else {
    console.log("Status message:", value.toUpperCase());
  }
}

printStatus(true);
printStatus("ready");

// 7–8) number | undefined, checked with typeof
function printScore(score: number | undefined): void {
  if (typeof score === "undefined") {
    console.log("Score is not available");
  } else {
    console.log("Score:", score);
    console.log("Next score:", score + 1);
  }
}

printScore(100);
printScore(undefined);

// Invalid examples — kept commented so this file type-checks:
//
function unsafeText(value: string | number): void {
  // Invalid because value may be a number.
  // console.log(value.toUpperCase());
  console.log("unsafeText needs a typeof check first");
}

function unsafeNumber(value: string | number): void {
  // Invalid because value may be a string.
  // console.log(value * 2);
  console.log("unsafeNumber needs a typeof check first");
}

function unsafeStatus(value: string | boolean): void {
  // Invalid because boolean does not have toUpperCase().
  // console.log(value.toUpperCase());
  console.log("unsafeStatus needs a typeof check first");
}

function unsafeScore(score: number | undefined): void {
  // Invalid because score may be undefined.
  // console.log(score + 1);
  console.log("unsafeScore needs a typeof check first");
}

let mixedValue: string | number = "TypeScript";
console.log("mixedValue:", mixedValue);

// Invalid assignment because boolean is not part of the union.
// mixedValue = true;
