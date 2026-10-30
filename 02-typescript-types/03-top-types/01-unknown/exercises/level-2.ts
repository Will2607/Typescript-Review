/**
 * Topic: unknown
 * Level: 2
 *
 * Goal:
 * Narrow an unknown config value before using it as a string.
 *
 * Requirements:
 * 1. Create rawValue: unknown.
 * 2. Use typeof to check for string before logging it as text.
 *
 * Expected behavior:
 * If rawValue is a string, the text prints.
 *
 * Acceptance criteria:
 * - rawValue is unknown.
 * - A typeof string check is used before string usage.
 * - No any is used.
 */

export {};

console.log("=== unknown - Level 2 ===");

const rawValue: unknown = "production";

// TODO: If typeof rawValue === "string", log rawValue.

