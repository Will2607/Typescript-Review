/**
 * Topic: never
 * Level: 3
 *
 * Goal:
 * Document a helper that stops execution for unsupported report formats.
 *
 * Requirements:
 * 1. Create rejectFormat(format: string): never.
 * 2. Throw an error that includes the format name.
 * 3. Keep the call commented.
 *
 * Expected behavior:
 * The helper is never-returning and is not executed.
 *
 * Acceptance criteria:
 * - Return type is never.
 * - The function throws.
 * - Active code does not call it.
 */

export {};

console.log("=== never - Level 3 ===");

// TODO: Implement rejectFormat(format: string): never.

// Invalid/runtime (keep commented):
// rejectFormat("xml");

