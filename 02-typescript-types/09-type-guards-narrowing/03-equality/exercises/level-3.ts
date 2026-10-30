/**
 * Topic: equality
 * Level: 3
 *
 * Goal:
 * Switch a payment result using equality narrowing.
 *
 * Requirements:
 * 1. Create result: "paid" | "failed" | "pending" = "paid".
 * 2. If result === "paid", log "capture complete".
 * 3. If result === "failed", log "retry".
 * 4. Otherwise log "wait".
 *
 * Expected behavior:
 * capture complete prints for paid.
 *
 * Acceptance criteria:
 * - Equality checks narrow the union.
 * - All three members are handled.
 * - A message is logged.
 */

export {};

console.log("=== equality - Level 3 ===");

const result: "paid" | "failed" | "pending" = "paid";

// TODO: Narrow result with === checks and log the matching message.

