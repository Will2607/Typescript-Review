/**
 * Topic: union types
 * Level: 2
 *
 * Goal:
 * Accept a string | number sku and handle each side.
 *
 * Requirements:
 * 1. Create function formatSku(sku: string | number): void.
 * 2. If sku is a string, log it in uppercase.
 * 3. Otherwise log the number.
 *
 * Expected behavior:
 * Both a string sku and a numeric sku can be logged.
 *
 * Acceptance criteria:
 * - The parameter is string | number.
 * - typeof is used before string-only methods.
 * - Both kinds of values are demonstrated.
 */

export {};

console.log("=== union types - Level 2 ===");

function formatSkuShape(sku: string | number): void {
  if (typeof sku === "string") {
    console.log(sku);
  } else {
    console.log(sku);
  }
}

void formatSkuShape;

// TODO: Create formatSku(sku: string | number): void following the requirements, then call it
// with "sku-44" and 44.

