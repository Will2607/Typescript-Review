/**
 * Topic: Omit
 * Level: 2
 *
 * Goal:
 * Hide internal cost from a catalog item.
 *
 * Requirements:
 * 1. Create interface Item { sku: string; name: string; cost: number }.
 * 2. Create type CatalogItem = Omit<Item, "cost">.
 * 3. Create two catalog items and log them.
 *
 * Expected behavior:
 * Two items print without cost.
 *
 * Acceptance criteria:
 * - CatalogItem uses Omit.
 * - cost is omitted.
 * - Two values are logged.
 */

export {};

console.log("=== Omit - Level 2 ===");

interface Item {
  sku: string;
  name: string;
  cost: number;
}

// TODO: Create CatalogItem = Omit<Item, "cost"> and two values, then log them.

