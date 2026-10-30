/**
 * Topic: Pick
 * Level: 2
 *
 * Goal:
 * Expose a public product card with Pick.
 *
 * Requirements:
 * 1. Create interface Product { sku: string; name: string; cost: number }.
 * 2. Create type ProductCard = Pick<Product, "sku" | "name">.
 * 3. Create two cards and log them.
 *
 * Expected behavior:
 * Two cards print without cost.
 *
 * Acceptance criteria:
 * - ProductCard uses Pick.
 * - cost is not part of the card type.
 * - Two values are logged.
 */

export {};

console.log("=== Pick - Level 2 ===");

interface Product {
  sku: string;
  name: string;
  cost: number;
}

// TODO: Create ProductCard = Pick<Product, "sku" | "name"> and two values, then log them.

