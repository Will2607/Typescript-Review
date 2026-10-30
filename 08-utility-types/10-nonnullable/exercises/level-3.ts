/**
 * Topic: NonNullable
 * Level: 3
 *
 * Goal:
 * Normalize a search filter that may be missing.
 *
 * Requirements:
 * 1. Create type Filter = string | undefined | null.
 * 2. Create type ActiveFilter = NonNullable<Filter>.
 * 3. Create two filters: "paid" and "overdue" and log both.
 *
 * Expected behavior:
 * Both filter strings print.
 *
 * Acceptance criteria:
 * - ActiveFilter uses NonNullable.
 * - Two string values are used.
 * - undefined stays commented.
 */

export {};

console.log("=== NonNullable - Level 3 ===");

type Filter = string | undefined | null;

// TODO: Create ActiveFilter = NonNullable<Filter> and two values, then log them.

