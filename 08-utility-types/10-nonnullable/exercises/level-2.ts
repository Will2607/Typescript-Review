/**
 * Topic: NonNullable
 * Level: 2
 *
 * Goal:
 * Require a present department name.
 *
 * Requirements:
 * 1. Create type Department = string | null.
 * 2. Create type AssignedDepartment = NonNullable<Department>.
 * 3. Create department: AssignedDepartment = "Support" and log it.
 *
 * Expected behavior:
 * Support prints.
 *
 * Acceptance criteria:
 * - AssignedDepartment uses NonNullable.
 * - A string is assigned.
 * - null stays commented.
 */

export {};

console.log("=== NonNullable - Level 2 ===");

type Department = string | null;

// TODO: Create AssignedDepartment = NonNullable<Department> and a string value, then log it.

