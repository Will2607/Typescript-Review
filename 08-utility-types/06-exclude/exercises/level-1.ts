/**
 * Topic: Exclude
 * Level: 1
 *
 * Goal:
 * Remove a failed status from a union.
 *
 * Requirements:
 * 1. Create type Status = "queued" | "sent" | "failed".
 * 2. Create type Deliverable = Exclude<Status, "failed">.
 * 3. Create current: Deliverable = "sent" and log it.
 *
 * Expected behavior:
 * sent prints. failed is not allowed.
 */

export {};

console.log("=== Exclude - Level 1 ===");

type Status = "queued" | "sent" | "failed";

// TODO: Create Deliverable = Exclude<Status, "failed"> and current: Deliverable = "sent", then log it.

// Invalid (keep commented):
// const current: Deliverable = "failed";

