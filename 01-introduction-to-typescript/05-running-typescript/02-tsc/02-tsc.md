# 02 — tsc (TypeScript Compiler)

Learn what the official TypeScript compiler does, how to type-check files, and how to turn TypeScript into JavaScript you can run with Node.js.

Example file for this lesson:

- `tsc-example.ts`

---

## 1. What does `tsc` mean?

`tsc` stands for **TypeScript Compiler**.

It is the command-line program you run to work with TypeScript source files from the terminal.

---

## 2. The official TypeScript compiler

`tsc` is the **official compiler** that ships with the `typescript` package.

When TypeScript is installed locally in a project, you typically invoke it with `npx`:

```bash
npx tsc
```

That runs the project’s local compiler instead of relying on a global install.

---

## 3. What does `tsc` do?

At a high level, `tsc` can:

1. **Analyze types** in your TypeScript code (type-checking)
2. **Generate JavaScript** from that TypeScript (compilation / emit)

You can ask it to do only type-checking, or type-checking plus JavaScript output, depending on the flags and configuration you use.

---

## 4. Check the installed version

```bash
npx tsc --version
```

If TypeScript is installed in the project, this prints the local compiler version.

---

## 5. Validate a file without generating JavaScript

Type-check one file and do **not** write any `.js` output:

```bash
npx tsc --noEmit 01-introduction-to-typescript/05-running-typescript/02-tsc/tsc-example.ts
```

Use this when you only want to know whether the types are valid.

---

## 6. What does `--noEmit` mean?

`--noEmit` tells `tsc`:

- still **check** the TypeScript
- do **not emit** (do not write) JavaScript files

“Emit” means producing output files. With `--noEmit`, validation happens without creating `.js` files.

---

## 7. Silent success

If the command finishes and prints **no type error messages**, the validation succeeded.

`tsc` does not need to print “OK.” An empty error list usually means the checked code passed.

---

## 8. Compile the example file

Ask `tsc` to compile the example:

```bash
npx tsc 01-introduction-to-typescript/05-running-typescript/02-tsc/tsc-example.ts
```

---

## 9. Compilation produces JavaScript

When you compile without `--noEmit`, `tsc` generates a **JavaScript** file from your TypeScript source.

Important: the **exact output location** can vary. For a single-file compile, it often appears next to the `.ts` file, but project settings (such as `outDir` in `tsconfig.json`) can place output somewhere else. After compiling, check your terminal context and project folders to find the generated `.js` file.

---

## 10. Run the generated JavaScript with Node.js

Once you know where the `.js` file was written, execute it with Node.js:

```bash
node <path-to-generated-js-file>
```

Example shape (adjust the path to match what `tsc` actually produced):

```bash
node 01-introduction-to-typescript/05-running-typescript/02-tsc/tsc-example.js
```

You should see the `console.log` output from the example.

---

## 11. Type-checking vs compilation vs execution

Keep these three steps separate:

| Step | Tool | What happens |
| --- | --- | --- |
| **Type-checking** | `tsc` (often with `--noEmit`) | Verifies that types are consistent. Does not run your program. |
| **Compilation** | `tsc` (without `--noEmit`) | Transforms TypeScript into JavaScript files. Still does not run the program. |
| **Execution** | Node.js (`node ...`) | Runs the generated JavaScript and performs side effects such as `console.log`. |

`tsc` helps you check and build. Node.js runs the result.

---

## 12. Using `tsconfig.json` for a whole project

When a folder contains `tsconfig.json`, `tsc` can treat that folder as a **TypeScript project**.

Instead of listing every file yourself, the compiler reads `include` / `exclude` / `compilerOptions` from `tsconfig.json` and processes the configured set of files.

---

## 13. Validate the whole project

From the project root (where `tsconfig.json` lives):

```bash
npx tsc --noEmit
```

This type-checks the project according to `tsconfig.json` without emitting JavaScript.

---

## 14. Compile the whole project

```bash
npx tsc
```

This compiles according to `tsconfig.json` (including options such as `outDir`, if configured).

---

## 15. File argument vs project mode

### Compile / check a specific file

```bash
npx tsc --noEmit path/to/file.ts
npx tsc path/to/file.ts
```

You point `tsc` at one file (or a short list of files). Behavior and output location can differ from full project mode.

### Use `tsconfig.json` (no file list)

```bash
npx tsc --noEmit
npx tsc
```

With no input file arguments, `tsc` looks for `tsconfig.json` and follows that project configuration.

**Beginner rule of thumb:**

- pass a file path when you want to focus on one example
- run plain `npx tsc` when you want the configured project build

---

## 16. Types disappear in the generated JavaScript

Type annotations such as `: string` and `: number` exist for TypeScript’s checker.

After compilation, those annotations are **erased**. The `.js` file keeps the runtime values and logic, not the TypeScript types.

Open the generated JavaScript and compare it with `tsc-example.ts` to see this clearly.

---

## 17. `tsc` does not execute your program

Running `tsc` (with or without `--noEmit`) does **not** print your `console.log` results by itself.

- `--noEmit` → check only
- compile → write `.js` files

Neither step is “running the app.”

---

## 18. Node.js executes the generated JavaScript

After compilation, use Node.js:

```bash
node <path-to-generated-js-file>
```

Node.js understands JavaScript. That is why you execute the **`.js`** output, not the TypeScript types.

---

## 19. Practical workflow

```text
Write TypeScript
  → Type-check with tsc
  → Compile to JavaScript
  → Execute with Node.js
```

Concrete commands for this lesson’s example:

```bash
# 1) Type-check only
npx tsc --noEmit 01-introduction-to-typescript/05-running-typescript/02-tsc/tsc-example.ts

# 2) Compile to JavaScript
npx tsc 01-introduction-to-typescript/05-running-typescript/02-tsc/tsc-example.ts

# 3) Run the generated JavaScript (adjust the path if needed)
node 01-introduction-to-typescript/05-running-typescript/02-tsc/tsc-example.js
```

Always confirm where the `.js` file was created before step 3.

---

## 20. Common beginner mistakes

| Mistake | Why it confuses people | Better approach |
| --- | --- | --- |
| Confusing compile with execute | `tsc` builds/checks; it does not run logs | Compile with `tsc`, then run with `node` |
| Expecting `console.log` from `--noEmit` | `--noEmit` only type-checks | Use `node` on generated JS to see output |
| Running a `.ts` file directly with Node.js | Node.js expects JavaScript | Compile first, then `node` the `.js` file |
| Not checking where `.js` was written | Output location depends on command and config | Locate the generated file after `tsc`, then run that path |

---

## Review questions

1. What does `tsc` stand for, and what are its two main jobs?
2. What does `--noEmit` do, and how do you know a check succeeded?
3. What is the difference between type-checking, compilation, and execution?
4. How does running `npx tsc path/to/file.ts` differ from running `npx tsc` with a `tsconfig.json`?
5. Why can you not rely on `tsc` alone to show `console.log` output?

---

## Completion checklist

- [ ] I know that `tsc` is the official TypeScript compiler
- [ ] I can check the version with `npx tsc --version`
- [ ] I can type-check a file with `npx tsc --noEmit <file>`
- [ ] I understand that no error messages usually means success
- [ ] I can compile a file with `npx tsc <file>` and look for the generated `.js`
- [ ] I can run the generated JavaScript with `node <generated-js>`
- [ ] I can explain type-checking vs compilation vs execution
- [ ] I know that project-wide `npx tsc` / `npx tsc --noEmit` use `tsconfig.json`
- [ ] I understand that types are erased in the JavaScript output
- [ ] I remember that `tsc` does not execute the program — Node.js does
