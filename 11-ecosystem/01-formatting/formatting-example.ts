/**
 * 01 — Formatting
 *
 * Formatting improves readability without changing intended behavior.
 * Active examples use consistent indentation, spacing, and line breaks.
 */

// Example 1: Basic formatting
// const add=(a:number,b:number)=>{return a+b}

function add(
  a: number,
  b: number
): number {
  return a + b;
}

console.log(add(10, 20));

// Example 2: Object formatting
interface User {
  id: number;
  name: string;
  active: boolean;
}

// const user:User={id:1,name:"Alice",active:true};

const user: User = {
  id: 1,
  name: "Alice",
  active: true,
};

console.log(user);

// Example 3: Conditional formatting
function getStatus(
  active: boolean
): string {
  if (active) {
    return "active";
  }

  return "inactive";
}

console.log(getStatus(true));
console.log(getStatus(false));

// Example 4: Long function parameters
// Long declarations can be split across lines consistently.
function createProduct(
  id: number,
  name: string,
  price: number,
  available: boolean
): string {
  return id + ": " + name + " - " + price + " - " + available;
}

console.log(createProduct(1, "Keyboard", 79, true));

// Example 5: Arrays and objects
const products = [
  {
    id: 1,
    name: "Keyboard",
  },
  {
    id: 2,
    name: "Mouse",
  },
];

console.log(products);

// Example 6: Formatting expressions
const subtotal = 100;
const tax = 18;

const total =
  subtotal + tax;

console.log(total);

// Example 7: Same behavior, different presentation
// Formatting concerns presentation, not the intended operation.
// const multiply=(a:number,b:number)=>a*b;

// const multiply = (
//   a: number,
//   b: number
// ): number => a * b;

function multiply(
  a: number,
  b: number
): number {
  return a * b;
}

console.log(multiply(5, 4));
