/**
 * Topic: TS and JS Interoperability
 * Level: 3
 *
 * Goal:
 * Model a log event that TypeScript types at compile time and JavaScript stores at runtime.
 *
 * Requirements:
 * 1. Create level as string, message as string, and timestamp as number.
 * 2. Log all three.
 * 3. Comment one invalid assignment TypeScript would catch that JavaScript would not.
 *
 * Expected behavior:
 * A complete log event prints using runtime values only.
 *
 * Acceptance criteria:
 * - All fields are explicitly typed.
 * - The invalid assignment remains commented.
 * - Comments distinguish compile-time types from runtime values.
 */

export {};

console.log("=== TS and JS Interoperability - Level 3 ===");

// TODO: Create a log event for an authentication service.
// Suggested: level "info", message "Token refreshed", timestamp 1710000000000.

// Invalid (keep commented):
// level = 200;

