/**
 * Topic: ambient modules
 * Level: 2
 *
 * Goal:
 * Describe an analytics package with types only.
 *
 * Requirements:
 * 1. Create declare module "analytics-sdk" with export function track(event: string): void and export type EventName = string.
 * 2. Do not import it at runtime.
 * 3. Create localTrack(event: string): void and call it.
 *
 * Expected behavior:
 * The local tracker logs an event name.
 *
 * Acceptance criteria:
 * - declare module is used.
 * - Imports of analytics-sdk stay commented.
 * - A local runtime function is called.
 */

// Keep this file a script (no import/export) so declare module creates a new ambient module.

console.log("=== ambient modules - Level 2 ===");

// TODO: Create declare module "analytics-sdk" with track and EventName.

// import { track } from "analytics-sdk";

function localTrack(event: string): void {
  console.log(event);
}

localTrack("checkout_started");

