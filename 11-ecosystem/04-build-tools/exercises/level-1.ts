/**
 * Topic: build tools
 * Level: 1
 *
 * Goal:
 * Name the main build pipeline tasks.
 *
 * Requirements:
 * 1. Create type BuildTask = "type-checking" | "transpilation" | "bundling" | "minification".
 * 2. Create pipeline: BuildTask[] in a sensible order.
 * 3. Log pipeline.
 *
 * Expected behavior:
 * The four tasks print in order.
 */

export {};

console.log("=== build tools - Level 1 ===");

type BuildTask =
  | "type-checking"
  | "transpilation"
  | "bundling"
  | "minification";

const pipeline: BuildTask[] = [
  // TODO: Add the four BuildTask values in order.
];

console.log(pipeline);

