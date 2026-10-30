/**
 * Topic: Exclude
 * Level: 3
 *
 * Goal:
 * Allow only active employee states.
 *
 * Requirements:
 * 1. Create type EmployeeState = "active" | "leave" | "terminated".
 * 2. Create type Assignable = Exclude<EmployeeState, "terminated">.
 * 3. Create two assignable states and log them.
 *
 * Expected behavior:
 * active and leave can print. terminated is excluded.
 *
 * Acceptance criteria:
 * - Assignable uses Exclude.
 * - Two allowed states are used.
 * - terminated stays commented.
 */

export {};

console.log("=== Exclude - Level 3 ===");

type EmployeeState = "active" | "leave" | "terminated";

// TODO: Create Assignable = Exclude<EmployeeState, "terminated"> and two values, then log them.

