/**
 * 05 — undefined
 *
 * Practical examples of undefined as a JavaScript value and a TypeScript type.
 *
 * Notes:
 * - undefined is a real JavaScript value.
 * - undefined can also be used as a TypeScript type.
 * - It usually represents the absence of an assigned value.
 */

const missingLesson: undefined = undefined;
console.log("missingLesson:", missingLesson);

// string | undefined is introduced only to model "text or missing".
// This lesson does not cover union types in depth.
let selectedTopic: string | undefined;
selectedTopic = "undefined";
console.log("selectedTopic:", selectedTopic);

function findLessonTitle(lessonNumber: number): string | undefined {
  if (lessonNumber === 1) {
    return "boolean";
  }

  if (lessonNumber === 2) {
    return "number";
  }

  if (lessonNumber === 3) {
    return "string";
  }

  return undefined;
}

const existingTitle = findLessonTitle(3);
const missingTitle = findLessonTitle(99);

console.log("existingTitle:", existingTitle);
console.log("missingTitle:", missingTitle);

// TypeScript requires a check before using string methods on string | undefined.
if (existingTitle !== undefined) {
  console.log("existingTitle upper:", existingTitle.toUpperCase());
}

// Optional property: completedAt may be absent.
// Reading a missing optional property can yield undefined at runtime.
// That is not the same as saying the property always "exists" with value undefined.
const courseProgress: { title: string; completedAt?: string } = {
  title: "Primitive Types",
};

console.log("courseProgress.completedAt:", courseProgress.completedAt);

function printCompletionDate(completedAt: string | undefined): void {
  if (completedAt !== undefined) {
    console.log("Completed at:", completedAt);
    return;
  }

  console.log("Completion date not available");
}

printCompletionDate("2026-07-30");
printCompletionDate(undefined);

// A function with no return statement produces undefined at runtime.
function logCurrentLesson(): void {
  console.log("Current lesson: undefined");
}

const logCurrentLessonResult = logCurrentLesson();
console.log("logCurrentLessonResult at runtime:", logCurrentLessonResult);

// Conceptual comparison (not equivalence):
// - Runtime observed value: undefined
// - Common TypeScript return type for "do not use the result": void
// void and undefined are related in practice, but not exactly the same concept.

console.log('typeof undefined:', typeof undefined);
console.log("missingTitle === undefined:", missingTitle === undefined);
console.log("existingTitle !== undefined:", existingTitle !== undefined);

// Incorrect examples — kept commented so this file type-checks
// (assuming strict mode / strictNullChecks):
//
// const wrongString: string = undefined;
// Error: Type 'undefined' is not assignable to type 'string'.
//
// const wrongNumber: number = undefined;
// Error: Type 'undefined' is not assignable to type 'number'.
//
// const unsafeUpper = existingTitle.toUpperCase();
// Error: 'existingTitle' is possibly 'undefined'.
//
// console.log(missingTitle.length);
// Error: 'missingTitle' is possibly 'undefined'.
//
// const wrongUndefinedOnly: undefined = null;
// Error: Type 'null' is not assignable to type 'undefined'.

export {};
