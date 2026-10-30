/**
 * Topic: linting
 * Level: 1
 *
 * Goal:
 * Identify a compiler error versus a lint-style concern.
 *
 * Requirements:
 * 1. Create validCount: number = 3.
 * 2. Keep the type-incorrect assignment commented.
 * 3. Log validCount.
 *
 * Expected behavior:
 * 3 prints. the commented line is a compiler error, not merely a lint issue.
 */

export {};

console.log("=== linting - Level 1 ===");

// Compiler error (keep commented):
// const validCount: number = "3";

// Lint-style concern: a magic number without a named constant.
const validCount: number = 3;

console.log(validCount);

// TODO: Create named constant retryLimit: number = 3 and log it instead of using an unexplained literal if you prefer.

