/**
 * Topic: useful packages
 * Level: 2
 *
 * Goal:
 * Prefer a native helper before adding a dependency.
 *
 * Requirements:
 * 1. Create function uniqueNames(names: string[]): string[] using a loop or object keys, not a library.
 * 2. Log uniqueNames(["Ada", "Ada", "Grace"]).
 *
 * Expected behavior:
 * Ada and Grace print without installing a package.
 *
 * Acceptance criteria:
 * - No dependency is installed.
 * - Duplicates are removed with native TypeScript/JavaScript.
 * - The result is logged.
 */

export {};

console.log("=== useful packages - Level 2 ===");

function uniqueNamesShape(names: string[]): string[] {
  return names;
}

void uniqueNamesShape;

// TODO: Create uniqueNames(names: string[]): string[] that drops duplicates, then log uniqueNames(["Ada", "Ada", "Grace"]).

