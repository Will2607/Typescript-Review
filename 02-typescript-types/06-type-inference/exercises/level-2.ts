/**
 * Topic: type inference
 * Level: 2
 *
 * Goal:
 * Infer number and boolean fields for a feature flag record.
 *
 * Requirements:
 * 1. Create rolloutPercent = 25 without annotation.
 * 2. Create isEnabled = true without annotation.
 * 3. Log both.
 *
 * Expected behavior:
 * 25 and true print with inferred number and boolean types.
 *
 * Acceptance criteria:
 * - No explicit type annotations on the two variables.
 * - Both values are logged.
 * - Invalid reassignments stay commented.
 */

export {};

console.log("=== type inference - Level 2 ===");

// TODO: Create rolloutPercent and isEnabled using inference and log them.

// Invalid (keep commented):
// rolloutPercent = "25";
// isEnabled = "yes";

