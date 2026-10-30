/**
 * Topic: Introduction to TypeScript
 * Level: 1
 *
 * Goal:
 * Identify TypeScript-only type annotations in a small service snippet.
 *
 * Requirements:
 * 1. Create a string variable named serviceName with an explicit type annotation.
 * 2. Assign the value "Billing Service".
 * 3. Log the variable.
 *
 * Expected behavior:
 * The console prints Billing Service. The annotation is TypeScript-only syntax.
 */

export {};

console.log("=== Introduction to TypeScript - Level 1 ===");

// JavaScript would store the same runtime value without the type annotation.
// TODO: Declare serviceName with an explicit string type and log it.

const exampleShape: string = "example";
console.log("Starter shape only:", exampleShape);

// Invalid TypeScript (keep commented):
// const serviceName: string = 100;

