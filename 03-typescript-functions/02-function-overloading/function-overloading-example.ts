/**
 * 02 — Function Overloading
 *
 * Overload signatures describe allowed calls.
 * One implementation signature provides the runtime body.
 * Overloads exist only at compile time.
 */

// 1–3) Basic overload: string and number inputs, one implementation
function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}

console.log(formatValue("typescript"));
console.log(formatValue(42));

// 4) Different parameter combinations (string+string or number+number)
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }

  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Unsupported argument combination");
}

console.log(combine("Type", "Script"));
console.log(combine(10, 20));

// 5) Different return types per call
function getValue(type: "text"): string;
function getValue(type: "count"): number;
function getValue(type: "text" | "count"): string | number {
  if (type === "text") {
    return "TypeScript";
  }

  return 42;
}

const textResult = getValue("text");
const countResult = getValue("count");

console.log(textResult.toUpperCase());
console.log(countResult + 1);

// 6) Different valid argument counts
function createLabel(name: string): string;
function createLabel(name: string, id: number): string;
function createLabel(name: string, id?: number): string {
  if (id !== undefined) {
    return id + ": " + name;
  }

  return name;
}

console.log(createLabel("Alice"));
console.log(createLabel("Bob", 10));

// 7) Union parameter versus overloads
function printValue(value: string | number): void {
  console.log(value);
}

printValue("same return type for every call");
printValue(7);

function convert(value: string): number;
function convert(value: number): string;
function convert(value: string | number): string | number {
  if (typeof value === "string") {
    return value.length;
  }

  return String(value);
}

console.log(convert("hello"));
console.log(convert(100));

function parse(value: string): number;
function parse(value: number): string;
function parse(value: string | number): string | number {
  if (typeof value === "string") {
    return value.length;
  }

  return value.toString();
}

console.log(parse("TypeScript"));
console.log(parse(9));

function describe(value: string): string;
function describe(value: number): string;
function describe(value: string | number): string {
  return String(value);
}

console.log(describe("ok"));
console.log(describe(3));

// Invalid argument type.
// describe(true);

// Invalid because the implementation cannot accept the number overload.
//
// function invalid(value: string): string;
// function invalid(value: number): string;
// function invalid(value: string): string {
//   return value;
// }

// Invalid implementation return type.
//
// function getData(value: string): string;
// function getData(value: number): number;
// function getData(value: string | number): boolean {
//   return true;
// }

function mergeValues(a: string, b: string): string;
function mergeValues(a: number, b: number): number;
function mergeValues(
  a: string | number,
  b: string | number
): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }

  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Invalid combination");
}

console.log(mergeValues("A", "B"));
console.log(mergeValues(1, 2));

// Invalid because no overload accepts mixed argument types.
// mergeValues("10", 20);

function buildName(first: string): string;
function buildName(first: string, last: string): string;
function buildName(first: string, last?: string): string {
  return last ? first + " " + last : first;
}

console.log(buildName("Alice"));
console.log(buildName("Alice", "Smith"));

// Invalid.
// buildName();

// Invalid.
// buildName("Alice", "Smith", "Extra");
