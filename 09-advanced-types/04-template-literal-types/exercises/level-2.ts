/**
 * Topic: template literal types
 * Level: 2
 *
 * Goal:
 * Build CSS-like size tokens from two unions.
 *
 * Requirements:
 * 1. Create type Axis = "x" | "y".
 * 2. Create type Size = "sm" | "lg".
 * 3. Create type Token = `${Axis}-${Size}`.
 * 4. Create token: Token = "x-sm" and log it.
 *
 * Expected behavior:
 * x-sm prints. combinations come from the template.
 *
 * Acceptance criteria:
 * - Token is a template literal type.
 * - infer is not used.
 * - The token is logged.
 */

export {};

console.log("=== template literal types - Level 2 ===");

type Axis = "x" | "y";
type Size = "sm" | "lg";

// TODO: Create Token = `${Axis}-${Size}` and token: Token = "x-sm", then log it.

// Invalid (keep commented):
// const token: Token = "z-sm";

