/**
 * Small example used by the tsc lesson.
 * Type-check and compile this file with the TypeScript compiler.
 */

const productName: string = "Wireless Mouse";
const unitPrice: number = 24.99;

function calculateTotal(unitPrice: number, quantity: number): number {
  return unitPrice * quantity;
}

const orderTotal = calculateTotal(unitPrice, 2);
console.log("Product:", productName);
console.log("Order total:", orderTotal);

// Incorrect call — kept commented so the file type-checks:
// const brokenTotal = calculateTotal(unitPrice, "two");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

export {};
