/**
 * Topic: as const
 * Level: 2
 *
 * Goal:
 * Lock a region configuration object at the type level.
 *
 * Requirements:
 * 1. Create regionConfig with region and currency using as const.
 * 2. Log both properties.
 *
 * Expected behavior:
 * region and currency print. Properties are read-only in the type.
 *
 * Acceptance criteria:
 * - as const is applied to the object.
 * - region and currency are logged.
 * - A property reassignment is shown only in comments.
 */

export {};

console.log("=== as const - Level 2 ===");

// TODO: Create regionConfig = { region: "eu-west", currency: "EUR" } as const
// and log regionConfig.region and regionConfig.currency.

// Invalid (keep commented):
// regionConfig.currency = "USD";

