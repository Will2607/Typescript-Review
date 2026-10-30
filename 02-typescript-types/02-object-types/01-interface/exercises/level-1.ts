/**
 * Topic: interface
 * Level: 1
 *
 * Goal:
 * Describe a customer with an interface and create a matching value.
 *
 * Requirements:
 * 1. Create interface Customer with id: number and name: string.
 * 2. Create a Customer value named primaryCustomer.
 * 3. Log it.
 *
 * Expected behavior:
 * A customer object with id and name prints.
 */

export {};

console.log("=== interface - Level 1 ===");

interface Customer {
  id: number;
  name: string;
}

// TODO: Create primaryCustomer: Customer and log it.
// Suggested values: id 501, name "Samira Cole".

// Invalid (keep commented):
// const badCustomer: Customer = { id: "501", name: "Samira Cole" };

