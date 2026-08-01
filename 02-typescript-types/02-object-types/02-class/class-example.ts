/**
 * 02 — Class
 *
 * Practical examples of TypeScript classes: properties, constructors, methods,
 * and instances that exist at runtime.
 *
 * Conceptual comparison (no implements in this lesson):
 * - An interface describes a structure and disappears from compiled JavaScript.
 * - A class can create instances with new, holds implementation/behavior,
 *   and generates real JavaScript that exists at runtime.
 */

class Course {
  id: number;
  title: string;
  isPublished: boolean;

  constructor(id: number, title: string, isPublished: boolean) {
    // this refers to the current instance being created.
    this.id = id;
    this.title = title;
    this.isPublished = isPublished;
  }

  publish(): void {
    this.isPublished = true;
    console.log("Course published:", this.title);
  }

  getSummary(): string {
    return `Course #${this.id}: ${this.title} (published: ${this.isPublished})`;
  }
}

// Course is the class (template).
// typescriptCourse is one instance created from that template.
const typescriptCourse = new Course(1, "Introduction to TypeScript", false);
console.log("typescriptCourse:", typescriptCourse);
console.log("id:", typescriptCourse.id);
console.log("title:", typescriptCourse.title);
console.log("isPublished:", typescriptCourse.isPublished);

typescriptCourse.publish();
console.log("isPublished after publish():", typescriptCourse.isPublished);
console.log("summary:", typescriptCourse.getSummary());

class Student {
  id: number;
  name: string;
  email?: string;

  constructor(id: number, name: string, email?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getContactInformation(): string {
    if (this.email !== undefined) {
      return this.email;
    }

    return "Email not available";
  }
}

const studentWithEmail = new Student(10, "Ada Lovelace", "ada@example.com");
const studentWithoutEmail = new Student(11, "Grace Hopper");

console.log("studentWithEmail:", studentWithEmail);
console.log("studentWithoutEmail:", studentWithoutEmail);
console.log("contact (with email):", studentWithEmail.getContactInformation());
console.log("contact (without email):", studentWithoutEmail.getContactInformation());

class LessonProgress {
  lessonName: string;
  completed: boolean;

  constructor(lessonName: string, completed: boolean) {
    this.lessonName = lessonName;
    this.completed = completed;
  }

  complete(): void {
    this.completed = true;
  }

  getStatus(): string {
    if (this.completed) {
      return "Completed";
    }

    return "Pending";
  }
}

const interfaceLessonProgress = new LessonProgress("interface", false);
console.log("initial status:", interfaceLessonProgress.getStatus());
interfaceLessonProgress.complete();
console.log("updated status:", interfaceLessonProgress.getStatus());

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const studyDesk = new Rectangle(4, 3);
console.log("rectangle area:", studyDesk.calculateArea());

// A class can contain:
// - properties (data / state)
// - a constructor (initialization)
// - methods (behavior)
// - behavior that updates instance state (for example publish() or complete())
//
// this.id / this.title refer to properties of the current instance.
// Each instance keeps its own values separately.

const advancedCourse = new Course(2, "Advanced TypeScript", true);
const basicsCourse = new Course(3, "TypeScript Basics", false);

console.log("advancedCourse summary:", advancedCourse.getSummary());
console.log("basicsCourse summary:", basicsCourse.getSummary());

// Incorrect examples — kept commented so this file type-checks:
//
// const wrongIdType = new Course("1", "Wrong Id", true);
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
//
// const missingArgument = new Course(4, "Missing Argument");
// Error: Expected 3 arguments, but got 2.
//
// const wrongTitle = new Course(5, 100, true);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//
// const wrongPublished = new Course(6, "Wrong Flag", "yes");
// Error: Argument of type 'string' is not assignable to parameter of type 'boolean'.
//
// typescriptCourse.archive();
// Error: Property 'archive' does not exist on type 'Course'.
//
// const wrongNumberFromVoid: number = typescriptCourse.publish();
// Error: Type 'void' is not assignable to type 'number'.
//
// console.log(typescriptCourse.instructor);
// Error: Property 'instructor' does not exist on type 'Course'.

export {};
