/**
 * Topic: non-null assertion
 * Level: 3
 *
 * Goal:
 * Confirm a nullable order reference after a lookup that you know succeeded.
 *
 * Requirements:
 * 1. Create orderRef: string | null = "ORD-700".
 * 2. Create confirmedRef = orderRef!.
 * 3. Log confirmedRef.
 *
 * Expected behavior:
 * ORD-700 prints. The assertion is compile-time only.
 *
 * Acceptance criteria:
 * - orderRef allows null.
 * - ! is used to produce confirmedRef.
 * - confirmedRef is logged.
 */

export {};

console.log("=== non-null assertion - Level 3 ===");

const orderRef: string | null = "ORD-700";

// TODO: Create confirmedRef = orderRef! and log it.

