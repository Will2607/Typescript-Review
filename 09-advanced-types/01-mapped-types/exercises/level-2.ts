/**
 * Topic: mapped types
 * Level: 2
 *
 * Goal:
 * Make every product field optional with a mapped type.
 *
 * Requirements:
 * 1. Create interface Product { sku: string; price: number }.
 * 2. Create type OptionalOf<T> = { [K in keyof T]?: T[K] }.
 * 3. Create type ProductDraft = OptionalOf<Product>.
 * 4. Create a draft with only sku and log it.
 *
 * Expected behavior:
 * A partial-like product with only sku prints.
 *
 * Acceptance criteria:
 * - A mapped type adds ? to each key.
 * - No conditional types are used.
 * - The draft is logged.
 */

export {};

console.log("=== mapped types - Level 2 ===");

interface Product {
  sku: string;
  price: number;
}

// TODO: Create OptionalOf<T>, ProductDraft, and a draft with only sku, then log it.

