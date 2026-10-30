/**
 * Topic: Awaited
 * Level: 2
 *
 * Goal:
 * Unwrap a nested promise for an invoice id.
 *
 * Requirements:
 * 1. Create type InvoiceId = Awaited<Promise<Promise<string>>>.
 * 2. Create invoiceId: InvoiceId = "INV-40" and log it.
 *
 * Expected behavior:
 * INV-40 prints as a string.
 *
 * Acceptance criteria:
 * - InvoiceId uses Awaited.
 * - The value is a string, not a Promise.
 * - The id is logged.
 */

export {};

console.log("=== Awaited - Level 2 ===");

// TODO: Create InvoiceId = Awaited<Promise<Promise<string>>> and a string value, then log it.

