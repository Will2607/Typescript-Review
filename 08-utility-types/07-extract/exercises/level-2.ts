/**
 * Topic: Extract
 * Level: 2
 *
 * Goal:
 * Extract success-like statuses.
 *
 * Requirements:
 * 1. Create type Status = "pending" | "paid" | "refunded" | number.
 * 2. Create type Completed = Extract<Status, "paid" | "refunded">.
 * 3. Create completed: Completed = "paid" and log it.
 *
 * Expected behavior:
 * paid prints. pending and number are not included.
 *
 * Acceptance criteria:
 * - Completed uses Extract.
 * - paid is allowed.
 * - pending stays commented.
 */

export {};

console.log("=== Extract - Level 2 ===");

type Status = "pending" | "paid" | "refunded" | number;

// TODO: Create Completed = Extract<Status, "paid" | "refunded"> and a value, then log it.

// Invalid (keep commented):
// const completed: Completed = "pending";

