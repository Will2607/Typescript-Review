/**
 * Topic: Readonly
 * Level: 3
 *
 * Goal:
 * Publish a read-only feature flag snapshot.
 *
 * Requirements:
 * 1. Create interface Flags { checkout: boolean; invoices: boolean; beta: boolean }.
 * 2. Create type PublishedFlags = Readonly<Flags>.
 * 3. Create flags and log checkout and beta.
 *
 * Expected behavior:
 * checkout and beta print.
 *
 * Acceptance criteria:
 * - PublishedFlags is Readonly<Flags>.
 * - Two flags are logged.
 * - Property assignment stays commented.
 */

export {};

console.log("=== Readonly - Level 3 ===");

interface Flags {
  checkout: boolean;
  invoices: boolean;
  beta: boolean;
}

// TODO: Create PublishedFlags and a snapshot value, then log checkout and beta.

