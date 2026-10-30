/**
 * Topic: unknown
 * Level: 3
 *
 * Goal:
 * Safely read a numeric retry count from unknown input.
 *
 * Requirements:
 * 1. Create incoming: unknown assigned to 3.
 * 2. If it is a number, log incoming + 1.
 *
 * Expected behavior:
 * 4 prints after a typeof number check.
 *
 * Acceptance criteria:
 * - incoming is unknown.
 * - A number check happens before arithmetic.
 * - No any is used.
 */

export {};

console.log("=== unknown - Level 3 ===");

const incoming: unknown = 3;

// TODO: Narrow incoming with typeof and log incoming + 1 when it is a number.

