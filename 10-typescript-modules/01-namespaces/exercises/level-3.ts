/**
 * Topic: namespaces
 * Level: 3
 *
 * Goal:
 * Keep a private helper inside a logging namespace.
 *
 * Requirements:
 * 1. Create namespace AppLog.
 * 2. Keep function prefix() local (not exported).
 * 3. Export function info(message: string): string that uses the prefix.
 * 4. Log AppLog.info("ready").
 *
 * Expected behavior:
 * A prefixed message prints. prefix is not used from outside.
 *
 * Acceptance criteria:
 * - info is exported.
 * - prefix is not exported.
 * - External prefix access stays commented.
 */

export {};

console.log("=== namespaces - Level 3 ===");

// TODO: Create AppLog with a non-exported prefix and exported info, then log AppLog.info("ready").

// Invalid (keep commented):
// AppLog.prefix();

