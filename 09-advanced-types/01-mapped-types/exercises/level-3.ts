/**
 * Topic: mapped types
 * Level: 3
 *
 * Goal:
 * Make a configuration object read-only via mapping.
 *
 * Requirements:
 * 1. Create interface Config { host: string; port: number }.
 * 2. Create type Locked<T> = { readonly [K in keyof T]: T[K] }.
 * 3. Create type LockedConfig = Locked<Config>.
 * 4. Create config and log host and port.
 *
 * Expected behavior:
 * host and port print. mapped readonly is used, not the Readonly utility as the main solution.
 *
 * Acceptance criteria:
 * - Locked uses a mapped readonly modifier.
 * - No conditional types are used.
 * - host and port are logged.
 */

export {};

console.log("=== mapped types - Level 3 ===");

interface Config {
  host: string;
  port: number;
}

// TODO: Create Locked<T>, LockedConfig, and a config value, then log host and port.

// Invalid (keep commented):
// config.port = 80;

