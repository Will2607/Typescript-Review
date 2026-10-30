/**
 * Topic: as type
 * Level: 2
 *
 * Goal:
 * Assert a payload as a product summary object type.
 *
 * Requirements:
 * 1. Create payload: unknown with id and name.
 * 2. Assert it as { id: number; name: string }.
 * 3. Log name.
 *
 * Expected behavior:
 * The product name prints after the assertion.
 *
 * Acceptance criteria:
 * - The source value is unknown.
 * - as is used to a specific object type.
 * - name is logged.
 */

export {};

console.log("=== as type - Level 2 ===");

const payload: unknown = { id: 19, name: "USB Hub" };

// TODO: Assert payload as { id: number; name: string } and log the name.

