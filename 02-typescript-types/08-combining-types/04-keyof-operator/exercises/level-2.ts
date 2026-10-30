/**
 * Topic: keyof operator
 * Level: 2
 *
 * Goal:
 * Read a product field using a keyof parameter.
 *
 * Requirements:
 * 1. Create type Product = { name: string; stock: number }.
 * 2. Create function readProductField(product: Product, field: keyof Product): string | number.
 * 3. Return product[field] and log one result.
 *
 * Expected behavior:
 * A valid key such as name returns the matching value.
 *
 * Acceptance criteria:
 * - The field parameter is keyof Product.
 * - A valid key is used in a call.
 * - An invalid key example stays commented.
 */

export {};

console.log("=== keyof operator - Level 2 ===");

type Product = {
  name: string;
  stock: number;
};

const product: Product = { name: "Cable", stock: 40 };

function readProductFieldShape(
  item: Product,
  field: keyof Product
): string | number {
  return item[field];
}

void readProductFieldShape;

// TODO: Create readProductField and log readProductField(product, "name").

// Invalid (keep commented):
// readProductField(product, "sku");

