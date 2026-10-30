/**
 * Topic: NonNullable
 * Level: 1
 *
 * Goal:
 * Remove null and undefined from a title type.
 *
 * Requirements:
 * 1. Create type MaybeTitle = string | null | undefined.
 * 2. Create type Title = NonNullable<MaybeTitle>.
 * 3. Create title: Title = "Quarterly Review" and log it.
 *
 * Expected behavior:
 * The title prints. null is not allowed.
 */

export {};

console.log("=== NonNullable - Level 1 ===");

type MaybeTitle = string | null | undefined;

// TODO: Create Title = NonNullable<MaybeTitle> and title: Title, then log it.

// Invalid (keep commented):
// const title: Title = null;

