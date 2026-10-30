/**
 * Topic: mapped types
 * Level: 1
 *
 * Goal:
 * Clone an employee type with a mapped type.
 *
 * Requirements:
 * 1. Use the provided Employee interface.
 * 2. Create type Clone<T> = { [K in keyof T]: T[K] }.
 * 3. Create type EmployeeClone = Clone<Employee> and a value, then log it.
 *
 * Expected behavior:
 * The cloned employee object prints.
 */

export {};

console.log("=== mapped types - Level 1 ===");

interface Employee {
  id: number;
  name: string;
  active: boolean;
}

type CloneShape<T> = {
  [K in keyof T]: T[K];
};

type EmployeeCloneShape = CloneShape<Employee>;

const unusedClone: EmployeeCloneShape = {
  id: 1,
  name: "shape",
  active: true,
};

void unusedClone;

// TODO: Create Clone<T>, EmployeeClone, and a matching value, then log it.

