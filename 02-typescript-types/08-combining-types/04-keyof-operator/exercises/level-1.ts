/**
 * Topic: keyof operator
 * Level: 1
 *
 * Goal:
 * Collect the keys of a settings object type.
 *
 * Requirements:
 * 1. Create type Settings = { theme: string; notifications: boolean }.
 * 2. Create type SettingsKey = keyof Settings.
 * 3. Create key: SettingsKey = "theme" and log it.
 *
 * Expected behavior:
 * theme prints. key only allows Settings keys.
 */

export {};

console.log("=== keyof operator - Level 1 ===");

type Settings = {
  theme: string;
  notifications: boolean;
};

type SettingsKey = keyof Settings;

// TODO: Create key: SettingsKey = "theme" and log it.

// Invalid (keep commented):
// const key: SettingsKey = "timezone";

