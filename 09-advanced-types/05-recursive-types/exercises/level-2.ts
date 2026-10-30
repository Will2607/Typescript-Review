/**
 * Topic: recursive types
 * Level: 2
 *
 * Goal:
 * Model comments that can contain replies.
 *
 * Requirements:
 * 1. Create type CommentNode = { text: string; replies?: CommentNode[] }.
 * 2. Create a comment with one nested reply.
 * 3. Log the top-level text.
 *
 * Expected behavior:
 * The top-level comment text prints.
 *
 * Acceptance criteria:
 * - CommentNode refers to itself.
 * - replies is optional.
 * - The top-level text is logged.
 */

export {};

console.log("=== recursive types - Level 2 ===");

// TODO: Create CommentNode and a nested comment, then log text.

