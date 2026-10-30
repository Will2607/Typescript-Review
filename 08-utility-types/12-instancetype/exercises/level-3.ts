/**
 * Topic: InstanceType
 * Level: 3
 *
 * Goal:
 * Collect invoice instances in a typed array.
 *
 * Requirements:
 * 1. Create class Invoice { constructor(public total: number) {} }.
 * 2. Create type InvoiceInstance = InstanceType<typeof Invoice>.
 * 3. Create invoices: InvoiceInstance[] with two items.
 * 4. Log both totals.
 *
 * Expected behavior:
 * Two totals print.
 *
 * Acceptance criteria:
 * - InvoiceInstance uses InstanceType.
 * - The array uses that instance type.
 * - Both totals are logged.
 */

export {};

console.log("=== InstanceType - Level 3 ===");

class Invoice {
  constructor(public total: number) {}
}

// TODO: Create InvoiceInstance = InstanceType<typeof Invoice> and invoices: InvoiceInstance[], then log totals.

