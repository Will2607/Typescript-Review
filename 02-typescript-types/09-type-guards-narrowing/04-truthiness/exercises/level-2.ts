/**
 * Topic: truthiness
 * Level: 2
 *
 * Goal:
 * Treat undefined as missing for an optional assignee.
 *
 * Requirements:
 * 1. Create assignee: string | undefined = "Morgan Ellis".
 * 2. If assignee, log assignee.
 * 3. Otherwise log "unassigned".
 *
 * Expected behavior:
 * Morgan Ellis prints.
 *
 * Acceptance criteria:
 * - A truthiness check is used.
 * - Both branches exist.
 * - The name is logged when present.
 */

export {};

console.log("=== truthiness - Level 2 ===");

const assignee: string | undefined = "Morgan Ellis";

// TODO: Use if (assignee) to log the name or "unassigned".

