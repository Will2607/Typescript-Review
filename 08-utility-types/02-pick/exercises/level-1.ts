/**
 * Topic: Pick
 * Level: 1
 *
 * Goal:
 * Pick id and name from an employee.
 *
 * Requirements:
 * 1. Use the provided Employee interface.
 * 2. Create type EmployeePreview = Pick<Employee, "id" | "name">.
 * 3. Create a preview value and log it.
 *
 * Expected behavior:
 * Only id and name print.
 */

export {};

console.log("=== Pick - Level 1 ===");

interface Employee {
  id: number;
  name: string;
  salary: number;
}

// TODO: Create EmployeePreview with Pick and a matching value, then log it.

// Invalid (keep commented):
// const preview: EmployeePreview = { id: 1, name: "Ada", salary: 100 };

