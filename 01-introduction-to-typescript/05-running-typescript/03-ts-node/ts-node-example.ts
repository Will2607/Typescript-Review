/**
 * Small example used by the ts-node lesson.
 * Run this file with ts-node during development.
 */

const courseName: string = "Introduction to TypeScript";
const completedLessons: number = 5;

function buildProgressMessage(courseName: string, completedLessons: number): string {
  return "Course: " + courseName + " | Completed lessons: " + completedLessons;
}

const progressMessage = buildProgressMessage(courseName, completedLessons);
console.log(progressMessage);

// Incorrect call — kept commented so the file type-checks:
// const brokenMessage = buildProgressMessage(courseName, "five");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

export {};
