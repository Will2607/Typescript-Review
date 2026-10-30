/**
 * Topic: Extract
 * Level: 1
 *
 * Goal:
 * Keep only string from a mixed union.
 *
 * Requirements:
 * 1. Create type Field = string | number | boolean.
 * 2. Create type TextField = Extract<Field, string>.
 * 3. Create label: TextField = "sku" and log it.
 *
 * Expected behavior:
 * sku prints. only string remains.
 */

export {};

console.log("=== Extract - Level 1 ===");

type Field = string | number | boolean;

// TODO: Create TextField = Extract<Field, string> and label: TextField = "sku", then log it.

// Invalid (keep commented):
// const label: TextField = 12;

