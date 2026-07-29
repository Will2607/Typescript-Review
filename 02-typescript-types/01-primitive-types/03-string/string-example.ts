/**
 * 03 — string
 *
 * Practical examples of the string primitive type in TypeScript.
 */

// Inference: TypeScript sees a text literal and infers type string.
const courseTitle = "Introduction to TypeScript";

// Explicit annotation: you declare the type yourself.
const studentName: string = "Ada Lovelace";

// Three common ways to write strings.
const singleQuotedLabel = 'Module';
const doubleQuotedLabel = "Primitive Types";
const templateLabel = `Lesson topic`;

const completedTopic = "string";

// Template literals are usually easier to read than many + concatenations.
const progressMessage = `${studentName} completed the ${completedTopic} topic.`;
console.log(progressMessage);

function buildWelcomeMessage(name: string, course: string): string {
  return `Welcome, ${name}! You are studying ${course}.`;
}

const welcomeMessage = buildWelcomeMessage(studentName, courseTitle);
console.log(welcomeMessage);

// Concatenation with + works, but nested + expressions get harder to read.
const concatenatedMessage =
  "Student: " + studentName + " | Course: " + courseTitle;
console.log(concatenatedMessage);

// length and common string methods (each call returns a new string when applicable).
const sampleText = "  TypeScript Strings  ";
console.log("length:", sampleText.length);
console.log("toUpperCase:", sampleText.toUpperCase());
console.log("toLowerCase:", sampleText.toLowerCase());
console.log("trim:", sampleText.trim());
console.log("includes('Script'):", sampleText.includes("Script"));
console.log("startsWith('  Type'):", sampleText.startsWith("  Type"));
console.log("endsWith('ings  '):", sampleText.endsWith("ings  "));
console.log("slice(2, 12):", sampleText.slice(2, 12));
console.log("replace:", sampleText.replace("Strings", "Basics"));

// Character access
const firstLetterByBracket = courseTitle[0];
const firstLetterByCharAt = courseTitle.charAt(0);
console.log("First letter [0]:", firstLetterByBracket);
console.log("First letter charAt(0):", firstLetterByCharAt);

// String comparisons produce boolean values and are case-sensitive.
const isSameTitle = courseTitle === "Introduction to TypeScript";
const isDifferentStudent = studentName !== "Grace Hopper";
console.log("isSameTitle:", isSameTitle);
console.log("isDifferentStudent:", isDifferentStudent);

// Strings are immutable: methods return a new value; the original stays the same.
const originalCity = "London";
const upperCity = originalCity.toUpperCase();
console.log("originalCity:", originalCity);
console.log("upperCity:", upperCity);

// Convert other values to string.
const priceAsText = String(19.99);
const accessAsText = String(true);
console.log("String(19.99):", priceAsText);
console.log("String(true):", accessAsText);

// Empty string vs whitespace-only string.
const emptyText = "";
const whitespaceText = "   ";
console.log("empty length:", emptyText.length);
console.log("whitespace length:", whitespaceText.length);
console.log("whitespace trim().length:", whitespaceText.trim().length);

// Incorrect examples — kept commented so this file type-checks:
//
// const wrongTitle: string = 42;
// Error: Type 'number' is not assignable to type 'string'.
//
// const wrongName: string = true;
// Error: Type 'boolean' is not assignable to type 'string'.
//
// const wrongWelcome = buildWelcomeMessage(100, courseTitle);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//
// const wrongMethod = courseTitle.toFixed(2);
// Error: Property 'toFixed' does not exist on type 'string'.

export {};
