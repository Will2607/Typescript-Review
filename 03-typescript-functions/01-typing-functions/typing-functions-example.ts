/**
 * 01 — Typing Functions
 *
 * Practical examples of typed parameters, return types, void,
 * optional and default parameters, function expressions, arrow functions,
 * function types, and a simple call signature.
 *
 * Type annotations are removed during compilation.
 * Runtime functions are ordinary JavaScript functions.
 */

// 1) Function with one typed parameter
function greet(name: string): void {
  console.log("Hello, " + name);
}

greet("Alice");

// Invalid.
// greet(123);

// 2–3) Multiple typed parameters and an explicit return type
function add(a: number, b: number): number {
  return a + b;
}

const total = add(10, 20);
console.log("total:", total);

// Invalid argument type.
// add("10", 20);

// 4) Function returning void
function printMessage(message: string): void {
  console.log(message);
}

printMessage("Learning TypeScript functions");

function logValue(value: string): void {
  console.log(value);
}

logValue("void means no useful return value");

// 5) Optional parameter
function introduce(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(name + " is " + age + " years old");
  } else {
    console.log("My name is " + name);
  }
}

introduce("Alice");
introduce("Bob", 30);

// 6) Default parameter
function createGreeting(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name;
}

console.log(createGreeting("Alice"));
console.log(createGreeting("Bob", "Welcome"));

// 7) Typed function expression
const subtract = function (a: number, b: number): number {
  return a - b;
};

console.log("subtract:", subtract(10, 4));

// 8) Typed arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log("multiply:", multiply(5, 4));

// 9) Variable with an explicit function type
let calculate: (a: number, b: number) => number;

calculate = (a: number, b: number): number => {
  return a + b;
};

console.log("calculate:", calculate(3, 7));

// Call signature: describes how a callable value is invoked
let formatter: {
  (value: number): string;
};

formatter = (value: number): string => {
  return "Value: " + value;
};

console.log(formatter(42));

// 10) Return type inferred from the implementation (number)
function divide(a: number, b: number) {
  return a / b;
}

const result = divide(20, 4);
console.log("result:", result);

// Invalid examples — kept commented so this file type-checks:
//
function double(value: number): number {
  return value * 2;
}

console.log("double:", double(5));

// Invalid argument type.
// double("5");

function getUsername(): string {
  return "Alice";
}

console.log("getUsername:", getUsername());

// Invalid return type example.
// function getAge(): number {
//   return "thirty";
// }

function sendMessage(message: string, priority?: number): void {
  console.log(message, priority);
}

sendMessage("queued");

// Invalid parameter order concept.
// function invalidOrder(optional?: string, required: number): void {
//   console.log(optional, required);
// }

let operation: (a: number, b: number) => number;

operation = (a: number, b: number): number => {
  return a * b;
};

console.log("operation:", operation(2, 8));

// Invalid function shape.
// operation = (a: string, b: string): string => {
//   return a + b;
// };

const increment = (value: number): number => value + 1;

console.log("increment:", increment(3));

// Invalid.
// increment(true);
