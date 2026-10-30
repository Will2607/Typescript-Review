/**
 * Topic: Exclude
 * Level: 2
 *
 * Goal:
 * Exclude number from a mixed id union.
 *
 * Requirements:
 * 1. Create type Id = string | number | boolean.
 * 2. Create type TextId = Exclude<Id, number>.
 * 3. Assign a string to textId and log it.
 *
 * Expected behavior:
 * The string id prints. number is excluded.
 *
 * Acceptance criteria:
 * - TextId uses Exclude.
 * - A string assignment works.
 * - A number assignment stays commented.
 */

export {};

console.log("=== Exclude - Level 2 ===");

type Id = string | number | boolean;

// TODO: Create TextId = Exclude<Id, number> and a string value, then log it.

// Invalid (keep commented):
// const textId: TextId = 44;

