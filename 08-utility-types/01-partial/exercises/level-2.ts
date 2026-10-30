/**
 * Topic: Partial
 * Level: 2
 *
 * Goal:
 * Accept a partial product patch in a function.
 *
 * Requirements:
 * 1. Create interface Product { sku: string; price: number; stock: number }.
 * 2. Create function applyPatch(patch: Partial<Product>): void that logs the patch.
 * 3. Call it with only price.
 *
 * Expected behavior:
 * The patch object with price prints.
 *
 * Acceptance criteria:
 * - The parameter is Partial<Product>.
 * - Only price is provided in the call.
 * - The patch is logged.
 */

export {};

console.log("=== Partial - Level 2 ===");

interface Product {
  sku: string;
  price: number;
  stock: number;
}

// TODO: Create applyPatch(patch: Partial<Product>) and call it with { price: 18 }.

