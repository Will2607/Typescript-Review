/**
 * Topic: template literal types
 * Level: 1
 *
 * Goal:
 * Require event names to start with user.
 *
 * Requirements:
 * 1. Create type UserEvent = `user.${string}`.
 * 2. Create eventName: UserEvent = "user.created" and log it.
 *
 * Expected behavior:
 * user.created prints.
 */

export {};

console.log("=== template literal types - Level 1 ===");

// TODO: Create UserEvent = `user.${string}` and eventName, then log it.

// Invalid (keep commented):
// const eventName: UserEvent = "order.created";

