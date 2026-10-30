/**
 * Topic: satisfies
 * Level: 2
 *
 * Goal:
 * Validate an employee badge object with satisfies.
 *
 * Requirements:
 * 1. Create badge with id: number and active: boolean.
 * 2. Use satisfies { id: number; active: boolean }.
 * 3. Log id and active.
 *
 * Expected behavior:
 * The badge fields print after a satisfies check.
 *
 * Acceptance criteria:
 * - satisfies is used instead of a variable annotation as the main check.
 * - id and active are logged.
 * - An invalid extra-type example stays commented.
 */

export {};

console.log("=== satisfies - Level 2 ===");

// TODO: Create badge with satisfies { id: number; active: boolean }.

// Invalid (keep commented):
// const badBadge = { id: "E-1", active: true } satisfies { id: number; active: boolean };

