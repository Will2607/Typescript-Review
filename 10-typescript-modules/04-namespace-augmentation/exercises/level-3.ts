/**
 * Topic: namespace augmentation
 * Level: 3
 *
 * Goal:
 * Keep a non-exported value local while exporting helpers.
 *
 * Requirements:
 * 1. Create namespace Metrics with a local total variable and export function add(n: number): number.
 * 2. Augment Metrics with export function current(): number that cannot see total unless you keep current in the first block.
 * 3. Prefer: first block holds private total plus add; second block exports label(): string.
 * 4. Log add(2) and label().
 *
 * Expected behavior:
 * The exported members from both blocks work. private state stays in the first block.
 *
 * Acceptance criteria:
 * - Two Metrics namespace blocks merge.
 * - A non-exported member stays local to its block.
 * - No declare global is used.
 */

export {};

console.log("=== namespace augmentation - Level 3 ===");

// TODO: Create two namespace Metrics blocks, export add from one and label from the other, then log both.

