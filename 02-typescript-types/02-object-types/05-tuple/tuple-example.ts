/**
 * 05 — Tuple
 *
 * Practical examples of TypeScript tuples: fixed positions and types,
 * named elements, optional elements, read-only tuples, and tuple returns.
 *
 * Reminder: tuple rules are checked by TypeScript.
 * At runtime, these values are regular JavaScript arrays.
 */

// 1) Basic numeric coordinate tuple
const coordinate: [number, number] = [10, 20];
console.log("coordinate:", coordinate);

// 2) Reading tuple elements by index
const x = coordinate[0];
const y = coordinate[1];
console.log("x:", x);
console.log("y:", y);

// 3) Updating valid tuple positions
coordinate[0] = 15;
coordinate[1] = 25;
console.log("coordinate after update:", coordinate);

// 4) Tuple with different element types
const httpResponse: [number, string] = [404, "Not Found"];
console.log("httpResponse:", httpResponse);

// 5) User tuple: id, name, active
const user: [number, string, boolean] = [
  1,
  "Alice",
  true,
];
console.log("user:", user);
console.log("user id:", user[0]);
console.log("user name:", user[1]);
console.log("user active:", user[2]);

// 6) Named tuple elements (labels help readability; runtime is still an array)
const response: [statusCode: number, message: string] = [
  200,
  "OK",
];
console.log("response:", response);
console.log("statusCode:", response[0]);
console.log("message:", response[1]);

// 7) Optional trailing element
const product: [string, number, boolean?] = [
  "Keyboard",
  75,
];
const featuredProduct: [string, number, boolean?] = [
  "Mouse",
  25,
  true,
];
console.log("product:", product);
console.log("featuredProduct:", featuredProduct);

// 8) Read-only tuple — mutation is blocked by TypeScript
const fixedCoordinate: readonly [number, number] = [
  15,
  30,
];
console.log("fixedCoordinate:", fixedCoordinate);
console.log("fixedCoordinate[0]:", fixedCoordinate[0]);

// 9) Function that returns a tuple
function getOperationResult(): [boolean, string] {
  return [true, "Operation completed"];
}

// 10) Destructure and print the returned tuple
const [success, message] = getOperationResult();
console.log("success:", success);
console.log("message:", message);

// Incorrect examples — kept commented so this file type-checks:
//
// const wrongOrder: [number, string, boolean] = ["Alice", 1, true];
// Error: Type 'string' is not assignable to type 'number' (wrong order/types).
//
// coordinate[0] = "fifteen";
// Error: Type 'string' is not assignable to type 'number'.
//
// const missingValue: [number, string, boolean] = [1, "Alice"];
// Error: Source has 2 element(s) but target requires 3.
//
// const tooManyValues: [number, number] = [10, 20, 30];
// Error: Source has 3 element(s) but target allows only 2.
//
// fixedCoordinate[0] = 99;
// Error: Cannot assign to '0' because it is a read-only property.
