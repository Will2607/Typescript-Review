/**
 * Topic: InstanceType
 * Level: 1
 *
 * Goal:
 * Capture the instance type of a User class.
 *
 * Requirements:
 * 1. Use the provided User class.
 * 2. Create type UserInstance = InstanceType<typeof User>.
 * 3. Create user: UserInstance and log name.
 *
 * Expected behavior:
 * The user name prints.
 */

export {};

console.log("=== InstanceType - Level 1 ===");

class User {
  constructor(public name: string) {}
}

// TODO: Create UserInstance = InstanceType<typeof User> and user: UserInstance = new User("Ada"), then log name.

