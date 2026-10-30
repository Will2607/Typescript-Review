/**
 * Topic: useful packages
 * Level: 1
 *
 * Goal:
 * Choose a package category without installing anything.
 *
 * Requirements:
 * 1. Create type PackageCategory = "runtime" | "types" | "lint" | "test" | "build".
 * 2. Create choice: PackageCategory for adding static checking rules.
 * 3. Log choice.
 *
 * Expected behavior:
 * lint prints for a linting scenario.
 */

export {};

console.log("=== useful packages - Level 1 ===");

type PackageCategory =
  | "runtime"
  | "types"
  | "lint"
  | "test"
  | "build";

// TODO: Create choice: PackageCategory = "lint" and log it.

