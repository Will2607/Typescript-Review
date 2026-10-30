/**
 * Topic: type predicates
 * Level: 3
 *
 * Goal:
 * Filter employee records from mixed directory entries.
 *
 * Requirements:
 * 1. Create type Employee = { id: number; name: string }.
 * 2. Create function isEmployee(value: Employee | string): value is Employee.
 * 3. Create entries: (Employee | string)[].
 * 4. Log names of values that pass isEmployee.
 *
 * Expected behavior:
 * Employee names print; raw strings are skipped.
 *
 * Acceptance criteria:
 * - isEmployee is a type predicate.
 * - At least one employee and one string are in entries.
 * - Only employee names are logged.
 */

export {};

console.log("=== type predicates - Level 3 ===");

type Employee = {
  id: number;
  name: string;
};

const entries: (Employee | string)[] = [
  { id: 1, name: "Priya Shah" },
  "contractor-pool",
  { id: 2, name: "Owen Blake" },
];

// TODO: Create isEmployee and log name for each entry that passes the predicate.

