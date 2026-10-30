/**
 * Topic: equality
 * Level: 1
 *
 * Goal:
 * Narrow a status union by comparing to a known value.
 *
 * Requirements:
 * 1. Create status: "open" | "closed" = "open".
 * 2. If status === "open", log "needs review".
 *
 * Expected behavior:
 * needs review prints for the open status.
 */

export {};

console.log("=== equality - Level 1 ===");

const status: "open" | "closed" = "open";

// TODO: Use === "open" to narrow status and log "needs review".

