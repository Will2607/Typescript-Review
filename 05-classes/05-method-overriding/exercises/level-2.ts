/**
 * Topic: method overriding
 * Level: 2
 *
 * Goal:
 * Override summarize on a paid invoice.
 *
 * Requirements:
 * 1. Create class Invoice { summarize(): string { return "unpaid"; } }.
 * 2. Create class PaidInvoice extends Invoice { override summarize(): string { return "paid"; } }.
 * 3. Log both base and subclass results.
 *
 * Expected behavior:
 * unpaid and paid print.
 *
 * Acceptance criteria:
 * - override is used.
 * - Both classes are instantiated.
 * - Both summaries are logged.
 */

export {};

console.log("=== method overriding - Level 2 ===");

// TODO: Create Invoice and PaidInvoice, then log both summarize() results.

