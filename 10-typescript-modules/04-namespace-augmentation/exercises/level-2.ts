/**
 * Topic: namespace augmentation
 * Level: 2
 *
 * Goal:
 * Add exported constants across two namespace blocks.
 *
 * Requirements:
 * 1. Create namespace AppInfo with export const name.
 * 2. Augment AppInfo with export const version.
 * 3. Log both members.
 *
 * Expected behavior:
 * name and version print from the merged namespace.
 *
 * Acceptance criteria:
 * - The namespace name is AppInfo in both blocks.
 * - Both members are exported.
 * - Global augmentation is not used.
 */

export {};

console.log("=== namespace augmentation - Level 2 ===");

// TODO: Create two namespace AppInfo blocks and log AppInfo.name and AppInfo.version.

