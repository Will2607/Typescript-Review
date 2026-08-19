/**
 * 03 — Equality Narrowing
 *
 * Practical examples of narrowing with === and !==.
 * These comparisons are real JavaScript operators.
 * TypeScript uses their results at compile time to reduce possible types.
 */

// 1) Equality narrowing with string literal values
function printStatus(status: "success" | "error"): void {
  if (status === "success") {
    console.log("Operation succeeded");
  } else {
    console.log("Operation failed");
  }
}

printStatus("success");
printStatus("error");

// 2) Inequality narrowing with !==
function printMode(mode: "light" | "dark"): void {
  if (mode !== "dark") {
    console.log("Light mode");
  } else {
    console.log("Dark mode");
  }
}

printMode("light");
printMode("dark");

// 3) Comparing a string | number value against a string literal
function processValue(value: string | number): void {
  if (value === "admin") {
    console.log("Administrator:", value.toUpperCase());
  } else {
    console.log("Other value:", value);
  }
}

processValue("admin");
processValue("user");
processValue(100);

// 4) Comparing two union-typed values
// Shared type inside first === second is string.
function compareValues(
  first: string | number,
  second: string | boolean
): void {
  if (first === second) {
    console.log("Shared string value:", first.toUpperCase());
    console.log("Second value:", second.toUpperCase());
  } else {
    console.log("Values are different");
  }
}

compareValues("TypeScript", "TypeScript");
compareValues(42, false);

function compare(
  left: string | number,
  right: string | boolean
): void {
  if (left === right) {
    console.log("compare left:", left.toUpperCase());
    console.log("compare right:", right.toUpperCase());
  } else {
    console.log("compare: values are different");
  }
}

compare("narrow", "narrow");
compare(1, true);

// 5) Comparing against null
function printUsername(username: string | null): void {
  if (username === null) {
    console.log("Username is missing");
  } else {
    console.log("Username:", username.toUpperCase());
  }
}

printUsername("Alice");
printUsername(null);

// 6) Comparing against undefined
function printScore(score: number | undefined): void {
  if (score === undefined) {
    console.log("Score is unavailable");
  } else {
    console.log("Score:", score);
    console.log("Next score:", score + 1);
  }
}

printScore(100);
printScore(undefined);

// 7) Strict equality at runtime
console.log("10 === 10:", 10 === 10);
console.log('"10" === "10":', "10" === "10");

// Invalid or unsafe examples — kept commented so this file type-checks:
//
function invalidStatus(status: "success" | "error"): void {
  // Invalid because "pending" is not part of the union.
  // if (status === "pending") {
  //   console.log(status);
  // }
  console.log("invalidStatus needs a valid union member");
}

function unsafeUsername(username: string | null): void {
  // Invalid because username may be null.
  // console.log(username.toUpperCase());
  console.log("unsafeUsername needs an equality check first");
}

function unsafeScore(score: number | undefined): void {
  // Invalid because score may be undefined.
  // console.log(score + 1);
  console.log("unsafeScore needs an equality check first");
}

let mode: "light" | "dark" = "light";
console.log("mode:", mode);

// Invalid assignment.
// mode = "automatic";

function invalidCompare(
  first: string | number,
  second: string | boolean
): void {
  // Before equality narrowing, neither value is guaranteed to be a string.
  // console.log(first.toUpperCase());
  // console.log(second.toUpperCase());
  console.log("invalidCompare needs first === second first");
}
