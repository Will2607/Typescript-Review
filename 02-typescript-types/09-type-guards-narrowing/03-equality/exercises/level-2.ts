/**
 * Topic: equality
 * Level: 2
 *
 * Goal:
 * Handle a nullable department by comparing to null.
 *
 * Requirements:
 * 1. Create department: string | null = "Logistics".
 * 2. If department !== null, log department.
 * 3. Otherwise log "unassigned".
 *
 * Expected behavior:
 * Logistics prints.
 *
 * Acceptance criteria:
 * - An equality check against null is used.
 * - The string is only used after the check.
 * - Both branches exist.
 */

export {};

console.log("=== equality - Level 2 ===");

const department: string | null = "Logistics";

// TODO: Narrow department with !== null and log the name or "unassigned".

