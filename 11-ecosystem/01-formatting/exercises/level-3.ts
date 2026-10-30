/**
 * Topic: formatting
 * Level: 3
 *
 * Goal:
 * Normalize an inconsistently formatted order payload.
 *
 * Requirements:
 * 1. Rewrite the order object with consistent quotes, commas, and indentation.
 * 2. Keep orderId, total, and paid.
 * 3. Log each field.
 *
 * Expected behavior:
 * The three fields print from a consistently formatted object.
 *
 * Acceptance criteria:
 * - Formatting is consistent.
 * - Values are unchanged.
 * - All three fields are logged.
 */

export {};

console.log("=== formatting - Level 3 ===");

const messyOrder={orderId:'ORD-9', total:19.5,paid:true};

console.log("Messy starter:", messyOrder);

// TODO: Create cleanOrder with consistent formatting and log orderId, total, and paid.

