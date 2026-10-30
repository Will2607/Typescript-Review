/**
 * Topic: hybrid types
 * Level: 3
 *
 * Goal:
 * Model a callable cache lookup with a size method.
 *
 * Requirements:
 * 1. Create interface CacheLookup { (key: string): string; size(): number }.
 * 2. Calling it returns a stored string.
 * 3. size returns how many keys you track.
 * 4. Log one lookup and size().
 *
 * Expected behavior:
 * A cached value and a size number print.
 *
 * Acceptance criteria:
 * - The interface is hybrid: callable plus size().
 * - A lookup is logged.
 * - size() is logged.
 */

export {};

console.log("=== hybrid types - Level 3 ===");

// TODO: Create CacheLookup and a value, then log lookup("user:1") and size().

