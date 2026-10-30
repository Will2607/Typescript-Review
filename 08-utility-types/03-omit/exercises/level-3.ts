/**
 * Topic: Omit
 * Level: 3
 *
 * Goal:
 * Create an order summary that omits internal notes.
 *
 * Requirements:
 * 1. Create interface Order { orderId: string; total: number; internalNotes: string }.
 * 2. Create type OrderSummary = Omit<Order, "internalNotes">.
 * 3. Create a summary and log orderId and total.
 *
 * Expected behavior:
 * orderId and total print.
 *
 * Acceptance criteria:
 * - OrderSummary uses Omit.
 * - internalNotes is not required.
 * - orderId and total are logged.
 */

export {};

console.log("=== Omit - Level 3 ===");

interface Order {
  orderId: string;
  total: number;
  internalNotes: string;
}

// TODO: Create OrderSummary with Omit and a value, then log orderId and total.

