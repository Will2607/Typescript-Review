/**
 * Topic: build tools
 * Level: 2
 *
 * Goal:
 * Classify tools by responsibility.
 *
 * Requirements:
 * 1. Create type ToolRole = "type-checker" | "transpiler" | "bundler" | "minifier".
 * 2. Create roles: Record<string, ToolRole> for tsc, a bundler, and a minifier.
 * 3. Log roles.tsc.
 *
 * Expected behavior:
 * tsc is classified as a type-checker or transpiler according to your mapping.
 *
 * Acceptance criteria:
 * - tsc is not classified as a minifier.
 * - At least three tools are mapped.
 * - roles.tsc is logged.
 */

export {};

console.log("=== build tools - Level 2 ===");

type ToolRole =
  | "type-checker"
  | "transpiler"
  | "bundler"
  | "minifier";

const roles: Record<string, ToolRole> = {
  tsc: "type-checker",
};

console.log(roles.tsc);

// TODO: Add entries for bundler and minifier tools, then log the full roles object.

