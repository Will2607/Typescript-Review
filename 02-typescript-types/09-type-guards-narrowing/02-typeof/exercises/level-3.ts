/**
 * Topic: typeof
 * Level: 3
 *
 * Goal:
 * Normalize a configuration flag that may be boolean or string.
 *
 * Requirements:
 * 1. Create flag: boolean | string = true.
 * 2. If typeof flag === "boolean", log flag.
 * 3. If typeof flag === "string", log flag.length.
 *
 * Expected behavior:
 * true prints for the boolean branch.
 *
 * Acceptance criteria:
 * - typeof is used for both boolean and string.
 * - length is only used on string.
 * - A value is logged.
 */

export {};

console.log("=== typeof - Level 3 ===");

const flag: boolean | string = true;

// TODO: Narrow flag with typeof and log the boolean or the string length.

