/**
 * Topic: recursive types
 * Level: 3
 *
 * Goal:
 * Model a file tree of folders and files.
 *
 * Requirements:
 * 1. Create type FileNode = { kind: "file"; name: string }.
 * 2. Create type FolderNode = { kind: "folder"; name: string; children: Array<FileNode | FolderNode> }.
 * 3. Create a folder with one nested folder and one file.
 * 4. Log the root folder name.
 *
 * Expected behavior:
 * The root folder name prints.
 *
 * Acceptance criteria:
 * - FolderNode is recursive through children.
 * - No advanced recursive conditionals are used.
 * - The root name is logged.
 */

export {};

console.log("=== recursive types - Level 3 ===");

// TODO: Create FileNode, FolderNode, and a small tree, then log the root name.

