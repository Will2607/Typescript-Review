/**
 * Topic: intersection types
 * Level: 1
 *
 * Goal:
 * Combine id and label into one object type.
 *
 * Requirements:
 * 1. Create type Identified = { id: number }.
 * 2. Create type Labeled = { label: string }.
 * 3. Create item: Identified & Labeled and log it.
 *
 * Expected behavior:
 * An object with id and label prints.
 */

export {};

console.log("=== intersection types - Level 1 ===");

type Identified = { id: number };
type Labeled = { label: string };

// TODO: Create item: Identified & Labeled and log it.

// Invalid (keep commented):
// const item: Identified & Labeled = { id: 1 };

