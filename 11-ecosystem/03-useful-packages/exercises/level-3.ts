/**
 * Topic: useful packages
 * Level: 3
 *
 * Goal:
 * Record a dependency trade-off for a date-formatting need.
 *
 * Requirements:
 * 1. Create type Decision = { need: string; nativeOption: string; packageOption: string; chosen: "native" | "package" }.
 * 2. Create decision for formatting YYYY-MM-DD.
 * 3. Choose native unless you document why a package is justified.
 * 4. Log decision.chosen.
 *
 * Expected behavior:
 * native or package prints according to your documented choice.
 *
 * Acceptance criteria:
 * - No packages are installed.
 * - nativeOption and packageOption are both described.
 * - chosen is logged.
 */

export {};

console.log("=== useful packages - Level 3 ===");

type Decision = {
  need: string;
  nativeOption: string;
  packageOption: string;
  chosen: "native" | "package";
};

// TODO: Create decision: Decision for date formatting and log decision.chosen.

