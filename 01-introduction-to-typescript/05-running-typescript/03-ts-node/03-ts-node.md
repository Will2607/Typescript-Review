# 03 — ts-node

Learn what `ts-node` is and how it lets you run TypeScript files directly in a Node.js development workflow.

Example file for this lesson:

- `ts-node-example.ts`

---

## 1. What is ts-node?

**ts-node** is a development tool that helps you execute TypeScript files in a **Node.js** environment.

Instead of manually compiling a `.ts` file to `.js` and then running that JavaScript, you can often run the TypeScript file in one step with `ts-node`.

---

## 2. An external tool (not the official compiler)

`ts-node` is **not** the official TypeScript compiler.

- The official compiler command is `tsc` (from the `typescript` package).
- `ts-node` is a **separate** package that builds on TypeScript and Node.js for a smoother development experience.

You still need TypeScript knowledge — and you still need `tsc` for many real workflows.

---

## 3. Run `.ts` files without a manual `.js` step

With the classic flow you often do:

1. compile TypeScript → JavaScript
2. run the JavaScript with Node.js

With `ts-node`, you can point at a `.ts` file and run it **without manually creating and saving a `.js` file first**.

That is the main convenience for learning and local scripts.

---

## 4. TypeScript is still transformed before it runs

Important detail: Node.js still ends up running JavaScript-compatible code.

`ts-node` **transforms** TypeScript behind the scenes before execution. You skip the manual “save a `.js` file, then run it” workflow, but transformation still happens internally.

So:

- you write TypeScript
- `ts-node` prepares it for Node.js
- Node.js executes the result

---

## 5. ts-node uses TypeScript and can read `tsconfig.json`

`ts-node` works together with the TypeScript toolchain. In many projects it can read **`tsconfig.json`** so its behavior follows your project settings.

That is why the same file might behave differently in two projects: configuration matters.

---

## 6. Install it locally

Install `ts-node` as a development dependency:

```bash
npm install --save-dev ts-node
```

Use a local install so the project pins a known version for everyone on the team.

> This lesson documents the command. It does not install the package for you automatically.

---

## 7. Check the version

```bash
npx ts-node --version
```

`npx` runs the locally installed `ts-node` binary from the project when available.

---

## 8. Run the example file

From the project root:

```bash
npx ts-node 01-introduction-to-typescript/05-running-typescript/03-ts-node/ts-node-example.ts
```

You should see a progress message printed with `console.log`.

---

## 9. `tsc` + `node` vs `ts-node`

### Classic two-step flow

```bash
npx tsc archivo.ts
node archivo.js
```

1. `tsc` compiles TypeScript to JavaScript
2. `node` executes the generated JavaScript

### One-step development flow

```bash
npx ts-node archivo.ts
```

`ts-node` handles transformation and execution in a single developer command.

---

## 10. `tsc` compiles, but does not execute

`tsc` is for **type-checking** and **compilation** (emitting JavaScript).

Running `tsc` alone does **not** print your `console.log` output. Compilation is not execution.

---

## 11. Node.js normally executes JavaScript

Node.js is a JavaScript runtime. In the classic workflow, you give Node.js a `.js` file:

```bash
node archivo.js
```

That is why the compile step exists when you are not using a TypeScript execution helper.

---

## 12. ts-node combines transform + execute for development

`ts-node` is popular in development because it combines:

- transforming TypeScript
- executing the result in Node.js

into one convenient command for scripts and experiments.

---

## 13. When ts-node is useful

`ts-node` is especially handy for:

- **local scripts**
- **learning** TypeScript with fast feedback
- **prototypes**
- **development tooling**
- **Node.js backend** work during development

It shortens the loop from “edit code” to “see output.”

---

## 14. Production often prefers compile-then-run

For many production deployments, teams prefer to:

1. compile ahead of time with `tsc` (or another build step)
2. run the generated JavaScript with Node.js

That is a common preference, **not an absolute rule**. Some setups use other runners or build pipelines. As a beginner, remember: development convenience and production deployment can use different tools.

---

## 15. ts-node does not replace learning `tsc`

Even if you use `ts-node` daily:

- you still need to understand what `tsc` does
- you still need to understand type-checking and compilation
- many CI and production builds rely on compiling with TypeScript’s compiler

`ts-node` is a helper. `tsc` remains a core concept.

---

## 16. Behavior can depend on project configuration

Results may vary based on:

- **`tsconfig.json`**
- the **module system** your project uses
- **`package.json`** settings related to modules and tooling

If something fails, check those files before assuming `ts-node` itself is broken.

---

## 17. ESM and CommonJS may need different setup

Projects using **ESM** or **CommonJS** can require different configuration for TypeScript runners.

That topic comes later. For this lesson, just know that module format can affect how `ts-node` is invoked and configured.

---

## 18. Clear comparison: `tsc` vs Node.js vs `ts-node`

| Tool | Main job | Executes your program? |
| --- | --- | --- |
| **`tsc`** | Type-check and/or compile TypeScript → JavaScript | No |
| **Node.js** | Run JavaScript | Yes (for `.js`) |
| **`ts-node`** | Transform TypeScript and run it in Node.js during development | Yes (for `.ts`, via transformation) |

---

## 19. Practical workflow

```text
Write TypeScript
  → Execute with ts-node
  → See the result immediately
```

Commands for this lesson:

```bash
# Install once in the project (documented; run yourself when ready)
npm install --save-dev ts-node

# Check the tool
npx ts-node --version

# Run the example
npx ts-node 01-introduction-to-typescript/05-running-typescript/03-ts-node/ts-node-example.ts
```

---

## 20. Common beginner mistakes

| Mistake | What goes wrong | Better approach |
| --- | --- | --- |
| Not installing `ts-node` | `npx ts-node` may fail or behave unexpectedly | Install with `npm install --save-dev ts-node` |
| Running from the wrong folder | Paths and config resolution break | Run commands from the project root |
| Confusing `ts-node` with `tsc` | Expect compile-only behavior, or vice versa | Remember: `tsc` compiles; `ts-node` runs for development |
| Incompatible module configuration | Imports/exports fail at runtime | Check `tsconfig.json` / `package.json` (details later) |
| Expecting a visible `.js` file | No manual output file appears | `ts-node` transforms in memory for execution; it does not have to write a `.js` file you can see |

---

## Review questions

1. What is `ts-node`, and how is it different from the official `tsc` compiler?
2. Does `ts-node` mean TypeScript runs “as TypeScript” with no transformation at all? Why or why not?
3. How does `npx ts-node archivo.ts` differ from `npx tsc archivo.ts` followed by `node archivo.js`?
4. Give three situations where `ts-node` is especially useful.
5. Why should you still learn `tsc` even if you use `ts-node` for local development?

---

## Completion checklist

- [ ] I know that `ts-node` is an external development tool, not the official compiler
- [ ] I understand that TypeScript is still transformed before Node.js runs it
- [ ] I know how to install `ts-node` locally with `npm install --save-dev ts-node`
- [ ] I can check the version with `npx ts-node --version`
- [ ] I can run `ts-node-example.ts` with `npx ts-node ...`
- [ ] I can explain `tsc` vs Node.js vs `ts-node`
- [ ] I know `tsc` compiles but does not execute
- [ ] I understand why production often compiles first (without treating it as an absolute rule)
- [ ] I know `ts-node` does not replace learning `tsc`
- [ ] I recognize that `tsconfig.json`, modules, and `package.json` can affect behavior
