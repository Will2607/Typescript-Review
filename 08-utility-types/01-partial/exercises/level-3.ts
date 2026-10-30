/**
 * Topic: Partial
 * Level: 3
 *
 * Goal:
 * Store optional configuration overrides.
 *
 * Requirements:
 * 1. Create interface AppConfig { host: string; port: number; secure: boolean }.
 * 2. Create type ConfigOverride = Partial<AppConfig>.
 * 3. Create two overrides: one with host, one with port and secure.
 * 4. Log both.
 *
 * Expected behavior:
 * Two partial configs print.
 *
 * Acceptance criteria:
 * - ConfigOverride is Partial<AppConfig>.
 * - Neither override includes every field.
 * - Both values are logged.
 */

export {};

console.log("=== Partial - Level 3 ===");

interface AppConfig {
  host: string;
  port: number;
  secure: boolean;
}

// TODO: Create ConfigOverride = Partial<AppConfig> and two override values, then log them.

