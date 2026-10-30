/**
 * Topic: Readonly
 * Level: 2
 *
 * Goal:
 * Freeze a tax rate table at the type level.
 *
 * Requirements:
 * 1. Create interface TaxRates { standard: number; reduced: number }.
 * 2. Create type FrozenTaxRates = Readonly<TaxRates>.
 * 3. Create rates and log both fields.
 *
 * Expected behavior:
 * Both rates print.
 *
 * Acceptance criteria:
 * - FrozenTaxRates uses Readonly.
 * - Both fields are logged.
 * - A mutation example stays commented.
 */

export {};

console.log("=== Readonly - Level 2 ===");

interface TaxRates {
  standard: number;
  reduced: number;
}

// TODO: Create FrozenTaxRates and a value, then log both rates.

// Invalid (keep commented):
// rates.standard = 0.2;

