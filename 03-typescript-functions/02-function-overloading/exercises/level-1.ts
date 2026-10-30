/**
 * Topic: function overloading
 * Level: 1
 *
 * Goal:
 * Overload a formatter that accepts string or number ids.
 *
 * Requirements:
 * 1. Create overloads formatId(id: string): string and formatId(id: number): string.
 * 2. Implement formatId(id: string | number): string.
 * 3. Log both calls.
 *
 * Expected behavior:
 * Both a string id and a numeric id can be formatted.
 */

export {};

console.log("=== function overloading - Level 1 ===");

function formatIdShape(id: string): string;
function formatIdShape(id: number): string;
function formatIdShape(id: string | number): string {
  return String(id);
}

void formatIdShape;

// TODO: Create formatId with the same overload pattern and log formatId("A-1") and formatId(1).

