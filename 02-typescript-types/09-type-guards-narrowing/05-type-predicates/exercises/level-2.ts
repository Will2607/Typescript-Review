/**
 * Topic: type predicates
 * Level: 2
 *
 * Goal:
 * Identify a product object with a type predicate.
 *
 * Requirements:
 * 1. Create type Product = { sku: string; price: number }.
 * 2. Create function isProduct(value: Product | string): value is Product.
 * 3. Check for an object with sku.
 * 4. Log price when the predicate passes.
 *
 * Expected behavior:
 * The product price prints.
 *
 * Acceptance criteria:
 * - The return type is a type predicate.
 * - price is only read after the guard.
 * - The product sample is logged.
 */

export {};

console.log("=== type predicates - Level 2 ===");

type Product = {
  sku: string;
  price: number;
};

const incoming: Product | string = { sku: "NB-2", price: 899 };

function isProductShape(value: Product | string): value is Product {
  return typeof value !== "string";
}

void isProductShape;

// TODO: Create isProduct and, if isProduct(incoming), log incoming.price.

