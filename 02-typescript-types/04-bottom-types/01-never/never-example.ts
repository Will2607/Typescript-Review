/**
 * 01 — never
 *
 * Practical examples of the never bottom type:
 * functions that never return normally, contrast with void,
 * and assignability restrictions.
 *
 * Safety for this lesson:
 * - do not call keepRunning() (it loops forever)
 * - do not call throwError() in active code (it stops the program)
 * - do not call processImpossibleValue() (no regular argument is valid)
 *
 * never is a TypeScript compile-time type and does not exist at runtime.
 */

// Function that always throws — return type is never.
function throwError(message: string): never {
  throw new Error(message);
}

// Intentional infinite loop — return type is never.
// Do not call this function in active lesson code.
function keepRunning(): never {
  while (true) {
    // Intentional infinite loop
  }
}

// Comparison: void completes normally without a useful return value.
function logMessage(message: string): void {
  console.log(message);
}

// Parameter of type never — no regular value can be passed here.
function processImpossibleValue(value: never): never {
  return value;
}

// Safe executable examples
logMessage("never lesson: void functions complete normally");
logMessage("throwError and keepRunning are defined, but not called");
logMessage("processImpossibleValue is defined, but not called");

console.log("typeof throwError:", typeof throwError);
console.log("typeof keepRunning:", typeof keepRunning);
console.log("typeof processImpossibleValue:", typeof processImpossibleValue);

// Demonstrating throwError is left commented so the program can finish normally:
// throwError("Something went wrong");

// keepRunning(); // would hang the process — never call in this lesson

// Commented never variable (for study only):
// let impossibleSlot: never;

// Incorrect examples — kept commented so this file type-checks:
//
// const impossibleText: never = "TypeScript";
// Error: Type 'string' is not assignable to type 'never'.
//
// const impossibleNumber: never = 42;
// Error: Type 'number' is not assignable to type 'never'.
//
// const impossibleBoolean: never = true;
// Error: Type 'boolean' is not assignable to type 'never'.
//
// const nothing: void = undefined;
// const impossibleValue: never = nothing;
// Error: Type 'void' is not assignable to type 'never'.
//
// processImpossibleValue("unexpected");
// Error: Argument of type 'string' is not assignable to parameter of type 'never'.
