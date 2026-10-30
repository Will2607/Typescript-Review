/**
 * Topic: linting
 * Level: 2
 *
 * Goal:
 * Clean up an unused variable and a confusing boolean name.
 *
 * Requirements:
 * 1. Remove or void the unused value.
 * 2. Rename noNotActive-style confusion to isActive.
 * 3. Log isActive.
 *
 * Expected behavior:
 * true prints from a clearly named boolean.
 *
 * Acceptance criteria:
 * - The unused value does not remain as an unread binding.
 * - The boolean name is positive (isActive).
 * - isActive is logged.
 */

export {};

console.log("=== linting - Level 2 ===");

const unusedFlag: boolean = false;
void unusedFlag;

const noNotActive: boolean = true;
console.log("Confusing starter name:", noNotActive);

// TODO: Create isActive: boolean = true and log isActive.

