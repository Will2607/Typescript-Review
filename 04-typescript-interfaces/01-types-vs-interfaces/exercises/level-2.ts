/**
 * Topic: types vs interfaces
 * Level: 2
 *
 * Goal:
 * Use a type alias for a union that an interface cannot express as a union by itself.
 *
 * Requirements:
 * 1. Create type Id = string | number.
 * 2. Create interface Account { id: Id; owner: string }.
 * 3. Create two accounts, one with a string id and one with a number id.
 *
 * Expected behavior:
 * Both accounts print.
 *
 * Acceptance criteria:
 * - Id is a type alias union.
 * - Account is an interface that uses Id.
 * - Both union members are used.
 */

export {};

console.log("=== types vs interfaces - Level 2 ===");

// TODO: Create Id, Account, and two account values, then log them.

