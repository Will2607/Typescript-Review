/**
 * Topic: Readonly
 * Level: 1
 *
 * Goal:
 * Make an api key record read-only.
 *
 * Requirements:
 * 1. Use the provided Credentials interface.
 * 2. Create type FrozenCredentials = Readonly<Credentials>.
 * 3. Create a value and log clientId.
 *
 * Expected behavior:
 * clientId prints. Reassignment of properties stays invalid.
 */

export {};

console.log("=== Readonly - Level 1 ===");

interface Credentials {
  clientId: string;
  clientSecret: string;
}

// TODO: Create FrozenCredentials = Readonly<Credentials> and a value, then log clientId.

// Invalid (keep commented):
// frozen.clientId = "other";

