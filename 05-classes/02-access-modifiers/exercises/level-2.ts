/**
 * Topic: access modifiers
 * Level: 2
 *
 * Goal:
 * Use public, private, and protected on a service class.
 *
 * Requirements:
 * 1. Create class Service with public name, private apiKey, and protected region.
 * 2. Add public describe(): string that uses name and region.
 * 3. Log describe().
 *
 * Expected behavior:
 * The public description prints. apiKey is not accessed from outside.
 *
 * Acceptance criteria:
 * - All three modifiers are used.
 * - describe is public.
 * - External apiKey access stays commented.
 */

export {};

console.log("=== access modifiers - Level 2 ===");

// TODO: Create Service with public name, private apiKey, protected region, and describe().

// Invalid (keep commented):
// console.log(new Service("Billing", "secret", "us-east").apiKey);

