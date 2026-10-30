/**
 * Topic: Omit
 * Level: 1
 *
 * Goal:
 * Remove password from a user type.
 *
 * Requirements:
 * 1. Use the provided User interface.
 * 2. Create type PublicUser = Omit<User, "password">.
 * 3. Create a public user and log it.
 *
 * Expected behavior:
 * id and name print. password is not required.
 */

export {};

console.log("=== Omit - Level 1 ===");

interface User {
  id: number;
  name: string;
  password: string;
}

// TODO: Create PublicUser = Omit<User, "password"> and a matching value, then log it.

// Invalid (keep commented):
// const publicUser: PublicUser = { id: 1, name: "Ada", password: "secret" };

