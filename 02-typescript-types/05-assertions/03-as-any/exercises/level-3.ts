/**
 * Topic: as any
 * Level: 3
 *
 * Goal:
 * Document a last-resort bridge for an untyped vendor field.
 *
 * Requirements:
 * 1. Create vendorField: unknown assigned to 1.
 * 2. Create bridged = vendorField as any.
 * 3. Log both with labels.
 *
 * Expected behavior:
 * Both values print. The lesson is about as any, not about keeping it in later topics.
 *
 * Acceptance criteria:
 * - as any is used once.
 * - vendorField is unknown.
 * - Both values are logged.
 */

export {};

console.log("=== as any - Level 3 ===");

const vendorField: unknown = 1;

// TODO: Create bridged = vendorField as any and log vendorField and bridged.

