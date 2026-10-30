/**
 * Topic: instanceof
 * Level: 1
 *
 * Goal:
 * Detect a Date instance before reading a time value.
 *
 * Requirements:
 * 1. Create maybeDate: Date | string.
 * 2. Use instanceof Date before logging getTime().
 *
 * Expected behavior:
 * When maybeDate is a Date, a numeric timestamp prints.
 */

export {};

console.log("=== instanceof - Level 1 ===");

const maybeDate: Date | string = new Date("2026-01-15");

// TODO: If maybeDate instanceof Date, log maybeDate.getTime().

