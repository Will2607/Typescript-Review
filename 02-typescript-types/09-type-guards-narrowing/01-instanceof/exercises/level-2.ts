/**
 * Topic: instanceof
 * Level: 2
 *
 * Goal:
 * Distinguish an Error from a string message.
 *
 * Requirements:
 * 1. Create failure: Error | string.
 * 2. If it is an Error, log failure.message.
 * 3. Otherwise log the string.
 *
 * Expected behavior:
 * The error message or the string prints.
 *
 * Acceptance criteria:
 * - instanceof Error is used.
 * - message is only read after the guard.
 * - Both branches exist.
 */

export {};

console.log("=== instanceof - Level 2 ===");

const failure: Error | string = new Error("Payment declined");

// TODO: Narrow failure with instanceof Error and log the useful text.

