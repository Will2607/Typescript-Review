/**
 * 06 — null
 *
 * Practical examples of null as a JavaScript value and a TypeScript type.
 *
 * Notes:
 * - null is a real JavaScript value.
 * - null can also be used as a TypeScript type.
 * - It usually represents an intentional, explicit absence of a value.
 */

const emptySelection: null = null;
console.log("emptySelection:", emptySelection);

// string | null is introduced only to model "text or intentional absence".
// This lesson does not cover union types in depth.
let selectedCourse: string | null = null;
console.log("selectedCourse (cleared):", selectedCourse);

selectedCourse = "Introduction to TypeScript";
console.log("selectedCourse (chosen):", selectedCourse);

function findStudentName(studentId: number): string | null {
  if (studentId === 1) {
    return "Ada Lovelace";
  }

  if (studentId === 2) {
    return "Grace Hopper";
  }

  // Intentional "not found" result for this search helper.
  return null;
}

const foundStudentName = findStudentName(1);
const missingStudentName = findStudentName(99);

console.log("foundStudentName:", foundStudentName);
console.log("missingStudentName:", missingStudentName);

// TypeScript requires a null check before using string methods on string | null.
if (foundStudentName !== null) {
  console.log("foundStudentName upper:", foundStudentName.toUpperCase());
}

function printSelectedCourse(courseName: string | null): void {
  if (courseName !== null) {
    console.log("Selected course:", courseName);
    return;
  }

  console.log("No course selected");
}

printSelectedCourse("Primitive Types");
printSelectedCourse(null);

// null as an explicit state in a data model:
// endedAt is present on the object, and null means "session still active".
const userSession: { userName: string; endedAt: string | null } = {
  userName: "ada",
  endedAt: null,
};

console.log("userSession (active):", userSession);

userSession.endedAt = "2026-07-31T21:00:00Z";
console.log("userSession (ended):", userSession);

// typeof null is "object" — a historical JavaScript quirk.
// Do not use typeof to detect null. Use a strict comparison instead.
console.log("typeof null:", typeof null);
console.log("missingStudentName === null:", missingStudentName === null);
console.log("foundStudentName !== null:", foundStudentName !== null);

// Conceptual comparison of three states for one field:
// - undefined → selection has not been loaded yet
// - null      → user intentionally cleared the selection
// - string    → a real selection exists
//
// string | null | undefined is used here only to compare these states.
let favoriteTopic: string | null | undefined = undefined;
console.log("favoriteTopic (not loaded yet):", favoriteTopic);

favoriteTopic = null;
console.log("favoriteTopic (intentionally cleared):", favoriteTopic);

favoriteTopic = "boolean";
console.log("favoriteTopic (loaded selection):", favoriteTopic);

// Incorrect examples — kept commented so this file type-checks
// (assuming strict mode / strictNullChecks):
//
// const wrongString: string = null;
// Error: Type 'null' is not assignable to type 'string'.
//
// const wrongNumber: number = null;
// Error: Type 'null' is not assignable to type 'number'.
//
// const unsafeUpper = foundStudentName.toUpperCase();
// Error: 'foundStudentName' is possibly 'null'.
//
// const wrongNullOnly: null = undefined;
// Error: Type 'undefined' is not assignable to type 'null'.
//
// console.log(missingStudentName.length);
// Error: 'missingStudentName' is possibly 'null'.

export {};
