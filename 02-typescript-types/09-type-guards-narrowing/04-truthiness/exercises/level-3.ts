/**
 * Topic: truthiness
 * Level: 3
 *
 * Goal:
 * Guard a search query before measuring its length.
 *
 * Requirements:
 * 1. Create query: string | null | undefined = "orders".
 * 2. If query, log query.length.
 * 3. Otherwise log 0.
 *
 * Expected behavior:
 * 6 prints for the truthy query.
 *
 * Acceptance criteria:
 * - Truthiness narrows away null and undefined.
 * - length is only used after the check.
 * - A number is logged.
 */

export {};

console.log("=== truthiness - Level 3 ===");

const query: string | null | undefined = "orders";

// TODO: Use if (query) to log query.length or 0.

