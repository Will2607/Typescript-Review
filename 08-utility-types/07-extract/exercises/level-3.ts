/**
 * Topic: Extract
 * Level: 3
 *
 * Goal:
 * Extract numeric log levels from mixed events.
 *
 * Requirements:
 * 1. Create type EventValue = string | number | boolean.
 * 2. Create type NumericEvent = Extract<EventValue, number>.
 * 3. Create severity: NumericEvent = 3 and log it.
 *
 * Expected behavior:
 * 3 prints.
 *
 * Acceptance criteria:
 * - NumericEvent uses Extract.
 * - A number is assigned.
 * - A string assignment stays commented.
 */

export {};

console.log("=== Extract - Level 3 ===");

type EventValue = string | number | boolean;

// TODO: Create NumericEvent = Extract<EventValue, number> and severity: NumericEvent = 3, then log it.

