/**
 * Topic: intersection types
 * Level: 2
 *
 * Goal:
 * Attach audit fields to a user profile.
 *
 * Requirements:
 * 1. Create UserProfile with name: string.
 * 2. Create AuditFields with createdBy: string.
 * 3. Create audited: UserProfile & AuditFields and log both fields.
 *
 * Expected behavior:
 * name and createdBy print from the intersection value.
 *
 * Acceptance criteria:
 * - The value includes every property from both types.
 * - The type is an intersection.
 * - Both fields are logged.
 */

export {};

console.log("=== intersection types - Level 2 ===");

type UserProfile = { name: string };
type AuditFields = { createdBy: string };

// TODO: Create audited: UserProfile & AuditFields and log name and createdBy.

