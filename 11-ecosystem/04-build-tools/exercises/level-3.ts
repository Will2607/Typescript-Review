/**
 * Topic: build tools
 * Level: 3
 *
 * Goal:
 * Describe what happens to a type annotation in the pipeline.
 *
 * Requirements:
 * 1. Create type StageResult = { stage: string; typesPresent: boolean }.
 * 2. Create sourceStage for TypeScript source with typesPresent true.
 * 3. Create emitStage for emitted JavaScript with typesPresent false.
 * 4. Log both stages.
 *
 * Expected behavior:
 * Source keeps types; emitted JavaScript does not.
 *
 * Acceptance criteria:
 * - sourceStage.typesPresent is true.
 * - emitStage.typesPresent is false.
 * - Both objects are logged.
 */

export {};

console.log("=== build tools - Level 3 ===");

type StageResult = {
  stage: string;
  typesPresent: boolean;
};

// TODO: Create sourceStage and emitStage, then log both.

