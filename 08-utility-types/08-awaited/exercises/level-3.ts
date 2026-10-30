/**
 * Topic: Awaited
 * Level: 3
 *
 * Goal:
 * Describe the resolved type of a settings loader.
 *
 * Requirements:
 * 1. Create function loadSettings(): Promise<{ theme: string }>.
 * 2. Create type Settings = Awaited<SettingsPromise>.
 * 3. Create settings: Settings with theme "light" and log theme.
 *
 * Expected behavior:
 * light prints from the awaited object type.
 *
 * Acceptance criteria:
 * - Awaited is the central utility.
 * - The resulting type is the object, not the Promise.
 * - theme is logged.
 */

export {};

console.log("=== Awaited - Level 3 ===");

type SettingsPromise = Promise<{ theme: string }>;

// TODO: Create type Settings = Awaited<SettingsPromise> and a settings value, then log theme.

