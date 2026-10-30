/**
 * Topic: abstract classes
 * Level: 3
 *
 * Goal:
 * Model abstract payment processors with a shared process method.
 *
 * Requirements:
 * 1. Create abstract class Processor with abstract channel(): string.
 * 2. Add process(amount: number): string that includes channel() and amount.
 * 3. Create CardProcessor that returns "card" from channel().
 * 4. Log process(50).
 *
 * Expected behavior:
 * A string including card and 50 prints.
 *
 * Acceptance criteria:
 * - Processor is abstract.
 * - CardProcessor is concrete.
 * - process uses channel().
 */

export {};

console.log("=== abstract classes - Level 3 ===");

// TODO: Create Processor and CardProcessor, then log new CardProcessor().process(50).

