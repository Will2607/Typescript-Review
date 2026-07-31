/**
 * 04 — void
 *
 * Practical examples of void as a function return type in TypeScript.
 * void means the return value is not meant to be used.
 */

function logCourseStart(courseName: string): void {
  console.log("Starting course:", courseName);
}

logCourseStart("Introduction to TypeScript");

function printLessonProgress(completedLessons: number, totalLessons: number): void {
  console.log("Progress:", completedLessons + "/" + totalLessons);
}

printLessonProgress(4, 10);

function updateLessonStatus(lessonName: string, isCompleted: boolean): void {
  if (isCompleted) {
    console.log("Lesson completed:", lessonName);
    return;
  }

  console.log("Lesson still in progress:", lessonName);
}

updateLessonStatus("void", true);
updateLessonStatus("void", false);

// No explicit return type: TypeScript can infer void when nothing useful is returned.
function logReminder() {
  console.log("Remember to practice TypeScript every day.");
}

logReminder();

function executeCallback(callback: () => void): void {
  callback();
}

executeCallback(() => {
  console.log("Callback executed successfully.");
});

// Comparison: this function returns a useful number value.
function calculateCompletedPercentage(
  completedLessons: number,
  totalLessons: number,
): number {
  return (completedLessons / totalLessons) * 100;
}

const completedPercentage = calculateCompletedPercentage(4, 10);
console.log("Completed percentage:", completedPercentage);

// Difference:
// - void functions perform work (often side effects) and their return value should not be used.
// - number functions compute and return a numeric result you are expected to use.

// Calling a void function still produces a JavaScript value at runtime: undefined.
// The declared return type is void (do not consume the result).
// That runtime undefined value is related, but void and undefined are not the same concept.
const logResult = logCourseStart("TypeScript");
console.log("logResult observed at runtime:", logResult);

// Incorrect examples — kept commented so this file type-checks:
//
// function missingNumberReturn(totalLessons: number): number {
//   console.log("Total lessons:", totalLessons);
// }
// Error: A function whose declared type is neither 'undefined', 'void', nor 'any'
// must return a value.
//
// function wrongStringReturn(): string {
//   return 42;
// }
// Error: Type 'number' is not assignable to type 'string'.
//
// const wrongNumberFromVoid: number = logCourseStart("TypeScript");
// Error: Type 'void' is not assignable to type 'number'.
//
// const wrongMath = logCourseStart("TypeScript") + 1;
// Error: Operator '+' cannot be applied to types 'void' and 'number'.
//
// executeCallback("not-a-function");
// Error: Argument of type 'string' is not assignable to parameter of type '() => void'.
//
// const wrongVoidVariable: void = true;
// Error: Type 'boolean' is not assignable to type 'void'.
// (Declaring ordinary variables as void is unusual and not useful.)

export {};
