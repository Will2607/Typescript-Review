/**
 * Topic: keyof operator
 * Level: 3
 *
 * Goal:
 * List allowed employee record keys.
 *
 * Requirements:
 * 1. Create type Employee = { id: number; department: string; active: boolean }.
 * 2. Create type EmployeeKey = keyof Employee.
 * 3. Create keys: EmployeeKey[] with id, department, and active.
 * 4. Log the array.
 *
 * Expected behavior:
 * The three keys print.
 *
 * Acceptance criteria:
 * - EmployeeKey is keyof Employee.
 * - The array only contains valid keys.
 * - The array is logged.
 */

export {};

console.log("=== keyof operator - Level 3 ===");

type Employee = {
  id: number;
  department: string;
  active: boolean;
};

// TODO: Create EmployeeKey and keys: EmployeeKey[], then log keys.

