/**
 * Topic: generic constraints
 * Level: 3
 *
 * Goal:
 * Merge a named entity into a display label.
 *
 * Requirements:
 * 1. Create function labelOf<T extends { name: string }>(entity: T): string.
 * 2. Return the name prefixed with "Entity: ".
 * 3. Log labels for an employee and a project.
 *
 * Expected behavior:
 * Both labels include the original name.
 *
 * Acceptance criteria:
 * - The constraint requires name: string.
 * - Two entity objects are used.
 * - Both labels are logged.
 */

export {};

console.log("=== generic constraints - Level 3 ===");

// TODO: Create labelOf with a name constraint and log labels for
// { name: "Kai Jones", role: "Editor" } and { name: "Atlas", budget: 12000 }.

