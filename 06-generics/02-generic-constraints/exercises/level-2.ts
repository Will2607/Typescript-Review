/**
 * Topic: generic constraints
 * Level: 2
 *
 * Goal:
 * Require an id field before logging a record.
 *
 * Requirements:
 * 1. Create function readId<T extends { id: number }>(record: T): number.
 * 2. Return record.id.
 * 3. Log readId for a user and a product.
 *
 * Expected behavior:
 * Both numeric ids print.
 *
 * Acceptance criteria:
 * - T extends { id: number }.
 * - Two different record shapes are used.
 * - Both ids are logged.
 */

export {};

console.log("=== generic constraints - Level 2 ===");

// TODO: Create readId<T extends { id: number }> and log ids for { id: 4, name: "Ada" }
// and { id: 88, sku: "KB-1" }.

