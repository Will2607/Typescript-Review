/**
 * Topic: Partial
 * Level: 1
 *
 * Goal:
 * Create a draft user update with Partial.
 *
 * Requirements:
 * 1. Use the provided User interface.
 * 2. Create type UserDraft = Partial<User>.
 * 3. Create a draft with only name and log it.
 *
 * Expected behavior:
 * A partial user with only name prints.
 */

export {};

console.log("=== Partial - Level 1 ===");

interface User {
  id: number;
  name: string;
  email: string;
}

// TODO: Create type UserDraft = Partial<User> and a draft with only name, then log it.

// Invalid (keep commented):
// const draft: User = { name: "Ada" };

