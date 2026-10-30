/**
 * Topic: extending interfaces
 * Level: 1
 *
 * Goal:
 * Extend a base user interface with an email field.
 *
 * Requirements:
 * 1. Create interface User { id: number; name: string }.
 * 2. Create interface UserWithEmail extends User { email: string }.
 * 3. Create a value and log email.
 *
 * Expected behavior:
 * The email prints and the value includes id and name.
 */

export {};

console.log("=== extending interfaces - Level 1 ===");

interface User {
  id: number;
  name: string;
}

// TODO: Create UserWithEmail extends User and a matching value, then log email.

// Invalid (keep commented):
// const incomplete: UserWithEmail = { id: 1, name: "Ada" };

