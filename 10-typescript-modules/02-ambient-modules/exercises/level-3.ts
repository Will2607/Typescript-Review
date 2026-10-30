/**
 * Topic: ambient modules
 * Level: 3
 *
 * Goal:
 * Declare a config module and mirror it with a local object.
 *
 * Requirements:
 * 1. Create declare module "app-settings" exporting appName: string and debug: boolean.
 * 2. Keep the import commented.
 * 3. Create localSettings with the same fields and log them.
 *
 * Expected behavior:
 * Local settings print. the ambient module does not load at runtime.
 *
 * Acceptance criteria:
 * - declare module "app-settings" exists.
 * - No live import is executed.
 * - localSettings is logged.
 */

// Keep this file a script (no import/export) so declare module creates a new ambient module.

console.log("=== ambient modules - Level 3 ===");

// TODO: Create declare module "app-settings" with appName and debug.

// import { appName, debug } from "app-settings";

const localSettings = {
  appName: "Billing",
  debug: true,
};

console.log(localSettings);

