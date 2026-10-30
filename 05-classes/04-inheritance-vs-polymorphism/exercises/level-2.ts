/**
 * Topic: inheritance vs polymorphism
 * Level: 2
 *
 * Goal:
 * Call a base method through a subclass instance.
 *
 * Requirements:
 * 1. Create class Employee { describe(): string { return "employee"; } }.
 * 2. Create class Manager extends Employee.
 * 3. Create staff: Employee = new Manager().
 * 4. Log staff.describe().
 *
 * Expected behavior:
 * employee prints through the Employee-typed variable.
 *
 * Acceptance criteria:
 * - Manager extends Employee.
 * - The variable is typed as Employee.
 * - describe is called polymorphically.
 */

export {};

console.log("=== inheritance vs polymorphism - Level 2 ===");

// TODO: Create Employee, Manager, staff: Employee = new Manager(), and log describe().

