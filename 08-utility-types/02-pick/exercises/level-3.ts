/**
 * Topic: Pick
 * Level: 3
 *
 * Goal:
 * Build an order receipt using Pick.
 *
 * Requirements:
 * 1. Create interface Order { orderId: string; total: number; notes: string; paid: boolean }.
 * 2. Create type Receipt = Pick<Order, "orderId" | "total" | "paid">.
 * 3. Create a receipt and log orderId and total.
 *
 * Expected behavior:
 * orderId and total print. notes is not required.
 *
 * Acceptance criteria:
 * - Receipt is Pick of three keys.
 * - notes is not on Receipt.
 * - orderId and total are logged.
 */

export {};

console.log("=== Pick - Level 3 ===");

interface Order {
  orderId: string;
  total: number;
  notes: string;
  paid: boolean;
}

// TODO: Create Receipt with Pick and a value, then log orderId and total.

