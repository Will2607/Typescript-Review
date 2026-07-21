/**
 * 01 — Introduction to TypeScript
 *
 * A short, beginner-friendly overview of what TypeScript is
 * and how it relates to JavaScript.
 */

// ---------------------------------------------------------------------------
// What is TypeScript?
// ---------------------------------------------------------------------------
// TypeScript is a programming language built on top of JavaScript.
// It adds a static type system and tools that help catch mistakes early.
// You write TypeScript (.ts), then compile it to plain JavaScript (.js).

// ---------------------------------------------------------------------------
// How does TypeScript relate to JavaScript?
// ---------------------------------------------------------------------------
// JavaScript is the language that browsers and Node.js run.
// TypeScript is designed to work with JavaScript: almost all valid JS
// is also valid TypeScript. You can adopt TypeScript gradually.

// ---------------------------------------------------------------------------
// What does "superset of JavaScript" mean?
// ---------------------------------------------------------------------------
// A "superset" means TypeScript includes JavaScript and adds extra features
// (mainly types). If something is valid JavaScript, it is usually valid
// TypeScript as well — then you can layer type annotations on top.

// ---------------------------------------------------------------------------
// Why use TypeScript?
// ---------------------------------------------------------------------------
// - Catch certain bugs before the code runs
// - Make intent clearer (what a value is supposed to be)
// - Improve editor help (autocomplete, refactoring, navigation)
// - Scale better in larger projects and teams

// ---------------------------------------------------------------------------
// What is static typing?
// ---------------------------------------------------------------------------
// Static typing means types are checked at compile time (when you build
// or check the file), not only when the program runs. You describe the
// expected shape of values; the compiler verifies that your code matches.

// ---------------------------------------------------------------------------
// How can TypeScript detect errors before running the code?
// ---------------------------------------------------------------------------
// The TypeScript compiler (tsc) analyzes your code and compares values
// with their declared types. If you assign the wrong kind of value or
// call a function incorrectly, tsc reports an error without executing it.

// ---------------------------------------------------------------------------
// What happens to types when TypeScript becomes JavaScript?
// ---------------------------------------------------------------------------
// Types exist only for the developer and the compiler. When TypeScript
// is compiled to JavaScript, type annotations are erased. The runtime
// runs plain JavaScript — there are no TypeScript types left at runtime.

// ---------------------------------------------------------------------------
// .ts vs .js (basic difference)
// ---------------------------------------------------------------------------
// - .js  → JavaScript source; run directly by the engine (browser / Node).
// - .ts  → TypeScript source; usually checked/compiled before running as JS.
//   Tools like tsx can run .ts files by compiling them on the fly.

// ---------------------------------------------------------------------------
// What does the tsc compiler do?
// ---------------------------------------------------------------------------
// tsc (TypeScript Compiler) reads .ts files, checks types, and emits
// equivalent .js files (plus optional declaration files). It is the main
// tool for verifying and compiling TypeScript projects.

// =============================================================================
// Examples
// =============================================================================

// 1) Valid JavaScript that is also valid TypeScript
const greetingMessage = "Hello from TypeScript";
const visitorCount = 3;

// 2) A variable with a simple type annotation
const courseTitle: string = "Introduction to TypeScript";

// 3) A type error TypeScript can detect (kept commented so this file compiles)
// const publishedYear: number = "2026";
// Error: Type 'string' is not assignable to type 'number'.

// 4) Approximate JavaScript after compilation
// Type annotations are removed. The compiled output looks roughly like:
//
//   const greetingMessage = "Hello from TypeScript";
//   const visitorCount = 3;
//   const courseTitle = "Introduction to TypeScript";
//   console.log(greetingMessage);
//   console.log(courseTitle);
//   console.log("Visitors:", visitorCount);

// 5) Runnable example with console.log
console.log(greetingMessage);
console.log(courseTitle);
console.log("Visitors:", visitorCount);

// =============================================================================
// Review questions
// =============================================================================
// 1) What does it mean that TypeScript is a superset of JavaScript?
// 2) What happens to type annotations when TypeScript is compiled to JavaScript?
// 3) What is the main job of the tsc compiler?

// =============================================================================
// How to run / check this file
// =============================================================================
// Run with tsx:
//   npx tsx 01-introduction-to-typescript.ts
//
// Type-check with tsc (no emit):
//   npx tsc --noEmit 01-introduction-to-typescript.ts
