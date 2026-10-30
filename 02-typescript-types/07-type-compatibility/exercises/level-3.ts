/**
 * Topic: type compatibility
 * Level: 3
 *
 * Goal:
 * Accept an object with extra properties when assigned through a variable.
 *
 * Requirements:
 * 1. Create fullProduct with id, name, and sku.
 * 2. Create catalogItem: { id: number; name: string }.
 * 3. Assign fullProduct to catalogItem and log catalogItem.name.
 *
 * Expected behavior:
 * The name prints. Extra sku is allowed via a variable assignment.
 *
 * Acceptance criteria:
 * - fullProduct has an extra sku property.
 * - catalogItem only requires id and name.
 * - The assignment uses the variable, not a fresh excess-property literal on catalogItem.
 */

export {};

console.log("=== type compatibility - Level 3 ===");

const fullProduct = {
  id: 31,
  name: "Monitor Arm",
  sku: "ARM-31",
};

// TODO: Create catalogItem: { id: number; name: string } = fullProduct and log catalogItem.name.

// Invalid excess property on a fresh literal (keep commented):
// const catalogItem: { id: number; name: string } = { id: 31, name: "Monitor Arm", sku: "ARM-31" };

