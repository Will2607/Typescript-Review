/**
 * 03 — TypeScript and JavaScript Interoperability
 *
 * How TypeScript and JavaScript can live side by side in the same project,
 * and how that helps with a gradual migration.
 */

import { calculateSubtotal, formatCustomerName } from "./javascript-utils.js";

// ---------------------------------------------------------------------------
// 1) What does interoperability mean?
// ---------------------------------------------------------------------------
// Interoperability means TypeScript and JavaScript can work together.
// A .ts file can import functions from a .js file (and, with the right setup,
// a project can mix both kinds of source files).

// ---------------------------------------------------------------------------
// 2) Coexistence during a gradual migration
// ---------------------------------------------------------------------------
// You do not have to rewrite an entire JavaScript codebase at once.
// Keep existing .js modules, add new code in .ts, and convert files step by
// step. Both can coexist until the migration is complete.

// ---------------------------------------------------------------------------
// 3–5) Import JavaScript helpers and call them with correct values
// ---------------------------------------------------------------------------
const lineSubtotal = calculateSubtotal(19.99, 3);
const customerFullName = formatCustomerName("Ada", "Lovelace");

console.log("Subtotal from JS helper:", lineSubtotal);
console.log("Customer name from JS helper:", customerFullName);

// ---------------------------------------------------------------------------
// 6) What can TypeScript learn from JSDoc?
// ---------------------------------------------------------------------------
// javascript-utils.js documents parameters and return values with JSDoc
// (@param, @returns). When TypeScript is configured to understand that
// JavaScript file, those comments can provide type information — similar
// in spirit to writing types in a .ts file, but written inside .js.

// ---------------------------------------------------------------------------
// 7) Incorrect arguments (commented — keep the lesson runnable)
// ---------------------------------------------------------------------------
// With good JSDoc + the right compiler settings, TypeScript may flag these:
//
//   calculateSubtotal("19.99", 3);
//   formatCustomerName(42, "Lovelace");
//
// Without type information, those mistakes might only show up at runtime.

// ---------------------------------------------------------------------------
// 8) Limitation: JavaScript without type information
// ---------------------------------------------------------------------------
// If a .js module has no JSDoc (and no separate type declarations), TypeScript
// knows much less about parameter and return types. Imports may still work,
// but you get weaker editor help and fewer compile-time checks.

// ---------------------------------------------------------------------------
// 9) allowJs (introductory)
// ---------------------------------------------------------------------------
// allowJs is a TypeScript project setting. When enabled, TypeScript can
// include .js files in the compilation / project graph — not only .ts files.
// That is a key switch for mixed JS + TS codebases.
// (Full setup belongs in tsconfig.json later; we do not configure it here.)

// ---------------------------------------------------------------------------
// 10) checkJs (introductory)
// ---------------------------------------------------------------------------
// checkJs asks TypeScript to type-check JavaScript files as well.
// Combined with allowJs (and ideally JSDoc), it can report type problems
// inside .js sources. Without checkJs, .js files may be present but not
// deeply type-checked.

// ---------------------------------------------------------------------------
// 11) Declaration files (.d.ts) — concept only
// ---------------------------------------------------------------------------
// A .d.ts file can describe the types of existing JavaScript code without
// changing the .js implementation. That is another way to improve
// interoperability. We do not create any .d.ts files in this lesson.

// ---------------------------------------------------------------------------
// 12) Gradual migration
// ---------------------------------------------------------------------------
// Because TS and JS interoperate, teams can migrate gradually:
// keep shipping .js, add .ts where it helps most, improve types with JSDoc
// or .d.ts over time, and convert modules when ready.

// =============================================================================
// Review questions
// =============================================================================
// 1) What does TypeScript / JavaScript interoperability mean in a project?
// 2) Why is coexistence of .ts and .js useful during a migration?
// 3) How can JSDoc help TypeScript understand a JavaScript module?
// 4) In one sentence, what does allowJs do?
// 5) In one sentence, what does checkJs do?

// =============================================================================
// How to check / run this lesson
// =============================================================================
// Run with tsx (resolves the .js import at runtime):
//   npx tsx 01-introduction-to-typescript/03-ts-and-js-interoperability/03-ts-and-js-interoperability.ts
//
// About tsc validation:
//   A single-file `npx tsc --noEmit ...` command may not fully validate this
//   lesson by itself, because the entry point imports a .js module.
//   Complete checking of mixed TypeScript + JavaScript usually needs project
//   settings such as allowJs (and optionally checkJs) in tsconfig.json.
//   Those options are introduced here only conceptually; we do not configure
//   them in this lesson.
