/**
 * Topic: enum
 * Level: 2
 *
 * Goal:
 * Use a string enum for payment methods.
 *
 * Requirements:
 * 1. Create enum PaymentMethod { Card = "card", Transfer = "transfer" }.
 * 2. Create selectedMethod: PaymentMethod.
 * 3. Log selectedMethod.
 *
 * Expected behavior:
 * A string enum value such as card prints.
 *
 * Acceptance criteria:
 * - PaymentMethod is a string enum.
 * - selectedMethod uses a member, not a raw untyped string only.
 * - The value is logged.
 */

export {};

console.log("=== enum - Level 2 ===");

// TODO: Create PaymentMethod and selectedMethod = PaymentMethod.Card, then log it.

// Invalid (keep commented):
// const selectedMethod: PaymentMethod = "cash";

