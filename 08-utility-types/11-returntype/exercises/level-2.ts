/**
 * Topic: ReturnType
 * Level: 2
 *
 * Goal:
 * Reuse the return type of a user loader.
 *
 * Requirements:
 * 1. Create function loadUser(): { id: number; name: string }.
 * 2. Create type LoadedUser = ReturnType<typeof loadUser>.
 * 3. Create user: LoadedUser and log name.
 *
 * Expected behavior:
 * The user name prints.
 *
 * Acceptance criteria:
 * - LoadedUser uses ReturnType.
 * - The object has id and name.
 * - name is logged.
 */

export {};

console.log("=== ReturnType - Level 2 ===");

function loadUser(): { id: number; name: string } {
  return { id: 9, name: "Samira Cole" };
}

// TODO: Create LoadedUser = ReturnType<typeof loadUser> and a user value, then log name.

