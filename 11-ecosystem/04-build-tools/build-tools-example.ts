/**
 * 04 — Build Tools
 *
 * These examples use only TypeScript and built-in JavaScript.
 * They illustrate build-tool ideas without installing bundlers.
 */

// Example 1: TypeScript source vs JavaScript output concept
// The `: string` annotation exists only in TypeScript and is removed from emitted JavaScript.
const applicationName: string =
  "TypeScript Review";

console.log(applicationName);

// Example 2: Multiple source functions
// Build tools may process many source modules into production output.
function add(
  a: number,
  b: number
): number {
  return a + b;
}

function subtract(
  a: number,
  b: number
): number {
  return a - b;
}

console.log(add(10, 4));
console.log(subtract(10, 4));

// Example 3: Tree-shaking concept
// An optimizing bundler may remove unused code such as unusedFeature
// if it can safely determine that it is not needed.
function usedFeature(): string {
  return "Used feature";
}

function unusedFeature(): string {
  return "Unused feature";
}

console.log(usedFeature());

// Keep unusedFeature in this educational source file.
void unusedFeature;

// Example 4: Minification concept
// Minification can reduce the size of the emitted JavaScript without
// intentionally changing behavior.
function multiply(
  first: number,
  second: number
): number {
  return first * second;
}

console.log(multiply(6, 7));

// Example 5: Build pipeline concept
// This is a conceptual representation of a build pipeline.
const sourceFiles = [
  "app.ts",
  "math.ts",
  "user.ts",
];

const buildSteps = [
  "type checking",
  "transpilation",
  "bundling",
  "minification",
];

console.log(sourceFiles);
console.log(buildSteps);

// Example 6: Type checking vs runtime behavior
// The interface is used by TypeScript during type checking
// but does not exist in the emitted JavaScript.
interface Product {
  id: number;
  name: string;
}

const product: Product = {
  id: 1,
  name: "Keyboard",
};

console.log(product);

// Example 7: Build tools overview
// These tools have overlapping capabilities but different focuses.
type BuildTool = {
  name: string;
  mainRole: string;
};

const buildTools: BuildTool[] = [
  {
    name: "Vite",
    mainRole: "Development server and production build",
  },
  {
    name: "esbuild",
    mainRole: "Fast transpilation and bundling",
  },
  {
    name: "SWC",
    mainRole: "Fast code transformation",
  },
  {
    name: "Webpack",
    mainRole: "Module bundling",
  },
];

console.log(buildTools);
