/**
 * Topic: Parameters
 * Level: 2
 *
 * Goal:
 * Reuse the arguments of a charge function.
 *
 * Requirements:
 * 1. Create function charge(amount: number, currency: string): string.
 * 2. Create type ChargeParams = Parameters<typeof charge>.
 * 3. Create params and call charge(...params), then log the result.
 *
 * Expected behavior:
 * The charged description prints.
 *
 * Acceptance criteria:
 * - ChargeParams uses Parameters.
 * - The tuple matches amount and currency.
 * - The call result is logged.
 */

export {};

console.log("=== Parameters - Level 2 ===");

function charge(amount: number, currency: string): string {
  return amount + " " + currency;
}

// TODO: Create ChargeParams = Parameters<typeof charge>, create params, and log charge(...params).

