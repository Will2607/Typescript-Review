# Build Tools

Learn how build tools prepare TypeScript source for development and production, and how they differ from the TypeScript compiler.

Example file for this lesson:

- `build-tools-example.ts`

---

## What a build tool is

A build tool prepares source code for development or production.

Build tools may handle tasks such as:

- transpilation
- bundling
- minification
- development servers
- dependency processing

---

## TypeScript compiler vs build tool

`tsc` is primarily the TypeScript compiler.

It can:

- type-check TypeScript
- transpile TypeScript to JavaScript
- emit declaration files when configured

`tsc` is not primarily a bundler. Compiling files one by one is not the same as combining a module graph into a deployment bundle.

---

## Type checking

Type checking validates TypeScript types without necessarily producing JavaScript.

A conceptual example is:

```bash
tsc --noEmit
```

This lesson does not modify project scripts.

---

## Transpilation

Transpilation transforms source code from one syntax level or language form into another.

TypeScript:

```ts
const value: number = 10;
```

JavaScript output:

```js
const value = 10;
```

Type annotations disappear at runtime.

---

## Bundling

Bundling combines multiple modules into one or more output files for deployment.

Conceptual example:

```text
app.ts
math.ts
user.ts
```

may be processed into:

```text
bundle.js
```

Bundling is different from simple TypeScript compilation. A compiler transforms files; a bundler follows imports and produces combined output.

---

## Minification

Minification reduces output size by removing unnecessary formatting and shortening code where safe.

```ts
function add(a, b) {
  return a + b;
}
```

might become something compact. The intended behavior stays the same.

---

## Tree shaking

Tree shaking removes code that is exported but never used when the build tool can safely determine that it is unnecessary.

```ts
export function used() {}
export function unused() {}
```

If only `used` is imported, a build tool may omit `unused` from the final bundle.

---

## Development servers

Some build tools provide development servers with features such as:

- serving local files
- watching file changes
- fast reloads
- module updates

This lesson does not teach hot module replacement in depth.

---

## Vite

Vite is a modern development/build tool often used for frontend projects.

It commonly provides:

- a fast development server
- module processing
- production builds

This lesson does not install or configure it.

---

## esbuild

esbuild is a fast JavaScript/TypeScript build tool written with performance in mind.

Conceptually it can handle:

- transpilation
- bundling
- minification

This lesson does not teach its CLI.

---

## SWC

SWC is a fast compiler/transformation tool commonly used to process JavaScript and TypeScript syntax.

It focuses on code transformation rather than TypeScript type checking.

---

## Webpack

Webpack is a mature bundler with a large ecosystem.

Conceptually it supports:

- bundling
- loaders
- plugins
- asset processing

This lesson does not introduce configuration syntax.

---

## Type Checking vs Transpilation

Type checking:

- validates type relationships

Transpilation:

- converts TypeScript syntax to JavaScript syntax

Some fast build tools can transpile TypeScript without fully type-checking it.

Therefore projects may still run `tsc --noEmit` separately.

---

## Bundler vs compiler

Compiler:

- transforms source code

Bundler:

- follows module dependencies and combines code for output

Some tools can perform both roles.

---

## Why modern projects use multiple tools

A project might use:

- `tsc` for type checking
- Vite or another build tool for development/build
- ESLint for linting
- Prettier for formatting

This is a conceptual ecosystem overview. This lesson does not create configuration.

---

## Build pipeline concept

```text
TypeScript source
→ type checking
→ transpilation
→ bundling
→ minification
→ production output
```

Actual projects may arrange these steps differently.

---

## Key Takeaways

- Build tools prepare source code for development or production.
- `tsc` type-checks and transpiles TypeScript.
- Bundling combines modules.
- Minification reduces output size.
- Tree shaking removes unused code when possible.
- Tools such as Vite, esbuild, SWC, and Webpack serve different build roles.
- Fast transpilers may not perform TypeScript type checking.
- Modern projects often combine several specialized tools.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 11-ecosystem/04-build-tools/build-tools-example.ts
```

Execute:

```bash
npx tsx 11-ecosystem/04-build-tools/build-tools-example.ts
```
