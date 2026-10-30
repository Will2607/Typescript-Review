/**
 * Topic: Record
 * Level: 2
 *
 * Goal:
 * Index status labels by a known key union.
 *
 * Requirements:
 * 1. Create type Status = "open" | "closed".
 * 2. Create type StatusLabel = Record<Status, string>.
 * 3. Create labels for both keys and log labels.open.
 *
 * Expected behavior:
 * The open label prints. both keys are required.
 *
 * Acceptance criteria:
 * - StatusLabel is Record<Status, string>.
 * - Both open and closed exist.
 * - labels.open is logged.
 */

export {};

console.log("=== Record - Level 2 ===");

type Status = "open" | "closed";

// TODO: Create StatusLabel = Record<Status, string> and a labels object, then log labels.open.

// Invalid (keep commented):
// const labels: StatusLabel = { open: "Open" };

