/**
 * Topic: Parameters
 * Level: 1
 *
 * Goal:
 * Capture the parameter tuple of a greet function.
 *
 * Requirements:
 * 1. Use the provided greet function.
 * 2. Create type GreetParams = Parameters<typeof greet>.
 * 3. Create args: GreetParams and call greet(...args).
 *
 * Expected behavior:
 * The greeting logs using the Parameters tuple.
 */

export {};

console.log("=== Parameters - Level 1 ===");

function greet(name: string): void {
  console.log("Hello", name);
}

// TODO: Create GreetParams = Parameters<typeof greet> and args: GreetParams = ["Ada"], then greet(...args).

