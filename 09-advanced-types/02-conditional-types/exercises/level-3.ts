/**
 * Topic: conditional types
 * Level: 3
 *
 * Goal:
 * Distribute a conditional type over a union of ids.
 *
 * Requirements:
 * 1. Create type ToLabel<T> = T extends string ? "text-id" : "other-id".
 * 2. Create type Id = string | number.
 * 3. Create type Labels = ToLabel<Id>.
 * 4. Create labels: Labels assigned to "text-id" and another to "other-id", then log both.
 *
 * Expected behavior:
 * Both distributed results are valid Labels members.
 *
 * Acceptance criteria:
 * - The conditional distributes over the union.
 * - infer is not used.
 * - Both labels are logged.
 */

export {};

console.log("=== conditional types - Level 3 ===");

// TODO: Create ToLabel<T>, Id, Labels, and two Labels values, then log them.

