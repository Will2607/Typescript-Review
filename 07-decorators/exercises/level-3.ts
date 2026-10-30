/**
 * Topic: decorators
 * Level: 3
 *
 * Goal:
 * Trace a service method before and after it runs.
 *
 * Requirements:
 * 1. Create a method decorator that logs before and after the original call.
 * 2. Apply it to charge(amount: number): number on class BillingClient.
 * 3. Return amount from charge and log the result of charge(25).
 *
 * Expected behavior:
 * Before/after messages print and 25 prints.
 *
 * Acceptance criteria:
 * - Modern decorator context objects are used.
 * - The original method still returns amount.
 * - No legacy decorator features are used.
 */

export {};

console.log("=== decorators - Level 3 ===");

// TODO: Create a tracing method decorator and BillingClient.charge, then log charge(25).

