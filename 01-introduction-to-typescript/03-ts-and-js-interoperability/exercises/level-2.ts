/**
 * Topic: TS and JS Interoperability
 * Level: 2
 *
 * Goal:
 * Separate runtime values from type-only information in a config snippet.
 *
 * Requirements:
 * 1. Create timeoutMs as number and retryCount as number.
 * 2. Log both runtime values.
 * 3. Comment that the type annotations are not present at runtime.
 *
 * Expected behavior:
 * timeoutMs and retryCount print as ordinary JavaScript numbers.
 *
 * Acceptance criteria:
 * - Both config values are explicitly typed numbers.
 * - A comment states that annotations are erased.
 * - No extra files or config changes are required.
 */

export {};

console.log("=== TS and JS Interoperability - Level 2 ===");

// TODO: Create timeoutMs (3000) and retryCount (2) with explicit number types.

