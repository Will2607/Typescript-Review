/**
 * 03 — Useful Packages
 *
 * This file uses only built-in TypeScript and JavaScript.
 * External libraries are mentioned as concepts, not imported.
 */

// Example 1: Runtime validation concept
// Libraries such as Zod provide more powerful runtime validation capabilities.
interface User {
  id: number;
  name: string;
}

function isUser(
  value: unknown
): value is User {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const candidate =
    value as Record<string, unknown>;

  return (
    typeof candidate.id === "number" &&
    typeof candidate.name === "string"
  );
}

const unknownValue: unknown = {
  id: 1,
  name: "Alice",
};

if (isUser(unknownValue)) {
  console.log(unknownValue.id, unknownValue.name);
}

// Example 2: HTTP concept
// Libraries such as Axios can handle HTTP requests.
function buildApiUrl(
  resource: string
): string {
  return "https://api.example.com/" + resource;
}

console.log(buildApiUrl("users"));

// Example 3: Date utility concept
// Libraries such as date-fns provide reusable date utilities.
const now = new Date();

const nextDay = new Date(now);

nextDay.setDate(
  now.getDate() + 1
);

console.log(now);
console.log(nextDay);

// Example 4: Utility library concept
// Many utility operations can already be handled with native JavaScript.
// Libraries such as Lodash provide additional helpers.
const numbers = [
  1,
  2,
  3,
  4,
  5,
];

const evenNumbers =
  numbers.filter(
    (number) =>
      number % 2 === 0
  );

console.log(evenNumbers);

// Example 5: Testing concept
// A testing tool such as Vitest could automatically verify that the result equals 5.
function add(
  a: number,
  b: number
): number {
  return a + b;
}

const result = add(2, 3);

console.log("2 + 3 = " + result);

// Example 6: Dependency decision concept
// A dependency would be unnecessary for such a trivial operation.
function double(
  value: number
): number {
  return value * 2;
}

console.log(double(21));
