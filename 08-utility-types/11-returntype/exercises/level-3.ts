/**
 * Topic: ReturnType
 * Level: 3
 *
 * Goal:
 * Store the result type of a report builder.
 *
 * Requirements:
 * 1. Create function buildReport(): { title: string; rows: number }.
 * 2. Create type Report = ReturnType<typeof buildReport>.
 * 3. Create report: Report and log title and rows.
 *
 * Expected behavior:
 * title and rows print.
 *
 * Acceptance criteria:
 * - Report uses ReturnType.
 * - Both fields exist.
 * - Both fields are logged.
 */

export {};

console.log("=== ReturnType - Level 3 ===");

function buildReport(): { title: string; rows: number } {
  return { title: "Aging", rows: 12 };
}

// TODO: Create Report = ReturnType<typeof buildReport> and a report value, then log title and rows.

