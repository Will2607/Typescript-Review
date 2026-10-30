/**
 * Topic: type compatibility
 * Level: 2
 *
 * Goal:
 * Show structural compatibility between two similar object types.
 *
 * Requirements:
 * 1. Create employee: { id: number; name: string }.
 * 2. Create assignee with the same shape.
 * 3. Assign employee to assignee and log assignee.name.
 *
 * Expected behavior:
 * The employee name prints from the compatible object.
 *
 * Acceptance criteria:
 * - The two object types share id and name.
 * - The assignment compiles because of matching structure.
 * - name is logged.
 */

export {};

console.log("=== type compatibility - Level 2 ===");

const employee: { id: number; name: string } = { id: 7, name: "Dana Ruiz" };

// TODO: Create assignee: { id: number; name: string }, assign employee to it, and log name.

