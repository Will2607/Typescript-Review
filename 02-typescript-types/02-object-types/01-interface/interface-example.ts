/**
 * 01 — Interface
 *
 * Practical examples of interfaces that describe object shapes in TypeScript.
 *
 * An interface defines the expected shape of an object for the type checker.
 * It does not create an object at runtime and is erased from compiled JavaScript.
 */

interface Course {
  id: number;
  title: string;
  isPublished: boolean;
}

const typescriptCourse: Course = {
  id: 1,
  title: "Introduction to TypeScript",
  isPublished: true,
};

console.log("typescriptCourse:", typescriptCourse);

interface Student {
  id: number;
  name: string;
  email?: string;
  readonly registrationCode: string;
}

// email is optional: it may be absent (or read as undefined if missing).
// registrationCode is readonly: TypeScript prevents reassigning that property.
// readonly does not make the whole object immutable at runtime.
const student: Student = {
  id: 10,
  name: "Ada Lovelace",
  registrationCode: "REG-001",
};

console.log("student:", student);

// Incorrect: reassigning a readonly property.
// student.registrationCode = "REG-999";
// Error: Cannot assign to 'registrationCode' because it is a read-only property.

interface LessonProgress {
  lessonName: string;
  completed: boolean;
  completedAt?: string;
}

const completedLessonProgress: LessonProgress = {
  lessonName: "boolean",
  completed: true,
  completedAt: "2026-07-31",
};

const pendingLessonProgress: LessonProgress = {
  lessonName: "interface",
  completed: false,
};

console.log("completedLessonProgress:", completedLessonProgress);
console.log("pendingLessonProgress:", pendingLessonProgress);

function printCourseSummary(course: Course): void {
  console.log("Course id:", course.id);
  console.log("Course title:", course.title);
  console.log("Course published:", course.isPublished);
}

printCourseSummary(typescriptCourse);

function createCourse(id: number, title: string, isPublished: boolean): Course {
  return {
    id,
    title,
    isPublished,
  };
}

const newCourse = createCourse(2, "Object Types", false);
console.log("newCourse:", newCourse);

// Interfaces can also describe methods. The object must provide a compatible implementation.
interface LearningResource {
  title: string;
  url: string;
  open(): void;
}

const documentationResource: LearningResource = {
  title: "TypeScript Handbook",
  url: "https://www.typescriptlang.org/docs/",
  open() {
    console.log("Opening resource:", this.title);
  },
};

documentationResource.open();

interface CourseStatistics {
  totalLessons: number;
  completedLessons: number;
}

function calculateProgress(stats: CourseStatistics): number {
  return (stats.completedLessons / stats.totalLessons) * 100;
}

const courseStats: CourseStatistics = {
  totalLessons: 10,
  completedLessons: 4,
};

const progressPercentage = calculateProgress(courseStats);
console.log("Progress percentage:", progressPercentage);

// Excess property checking (introductory):
// A direct object literal passed where Course is expected is checked strictly.
// Extra properties on that fresh literal can cause an error.
//
// printCourseSummary({
//   id: 2,
//   title: "Advanced TypeScript",
//   isPublished: true,
//   instructor: "Willy",
// });
// Error: Object literal may only specify known properties,
// and 'instructor' does not exist in type 'Course'.

// A separately created object that has the required Course fields
// may still be accepted even if it also has extra properties.
// This is only an introductory observation — deeper compatibility rules come later.
const courseWithExtraField = {
  id: 3,
  title: "Running TypeScript",
  isPublished: true,
  instructor: "Willy",
};

printCourseSummary(courseWithExtraField);

// Incorrect examples — kept commented so this file type-checks:
//
// const missingTitle: Course = {
//   id: 4,
//   isPublished: false,
// };
// Error: Property 'title' is missing in type '{ id: number; isPublished: boolean; }'
// but required in type 'Course'.
//
// const wrongIdType: Course = {
//   id: "5",
//   title: "Wrong Id",
//   isPublished: true,
// };
// Error: Type 'string' is not assignable to type 'number'.
//
// const missingStudentName: Student = {
//   id: 11,
//   registrationCode: "REG-002",
// };
// Error: Property 'name' is missing in type '{ id: number; registrationCode: string; }'
// but required in type 'Student'.
//
// const directExtraProperty: Course = {
//   id: 6,
//   title: "Extra Property",
//   isPublished: true,
//   level: "beginner",
// };
// Error: Object literal may only specify known properties,
// and 'level' does not exist in type 'Course'.
//
// student.registrationCode = "REG-CHANGED";
// Error: Cannot assign to 'registrationCode' because it is a read-only property.
//
// const wrongOpenMethod: LearningResource = {
//   title: "Bad Method",
//   url: "https://example.com",
//   open: "not-a-function",
// };
// Error: Type 'string' is not assignable to type '() => void'.
//
// printCourseSummary({ id: 7, title: "Incomplete" });
// Error: Argument of type '{ id: number; title: string; }' is not assignable to
// parameter of type 'Course'. Property 'isPublished' is missing...

export {};
