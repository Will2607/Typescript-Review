# 04 — Installation and Configuration

A practical introduction to installing TypeScript in a project and understanding the basic role of `tsconfig.json`.

This lesson stays at a beginner level: enough to set up a local TypeScript project and know what the main files and options do.

---

## 1. Prerequisites

Before you use TypeScript, you need:

- **Node.js** — the JavaScript runtime that also provides the tools used to install packages
- **npm** — the package manager that usually comes with Node.js (used to install TypeScript and manage project dependencies)

You do not need a separate “TypeScript runtime.” TypeScript is installed as a development tool that checks and compiles your code.

---

## 2. Check installed versions

Verify that Node.js and npm are available:

```bash
node --version
```

```bash
npm --version
```

If both commands print a version number, you are ready to continue.

---

## 3. Initialize a project

In an empty (or new) project folder, create a starting `package.json`:

```bash
npm init -y
```

The `-y` flag accepts the default values so npm creates `package.json` without asking questions interactively.

---

## 4. Install TypeScript locally

Install TypeScript as a **development dependency**:

```bash
npm install --save-dev typescript
```

`--save-dev` records TypeScript under `devDependencies` in `package.json`. That is appropriate because TypeScript is a build/check tool for developers, not something your finished JavaScript app needs at runtime in most cases.

---

## 5. Why prefer a local install over a global install?

A **local** install (inside the project) is recommended because:

- Every project can use its **own TypeScript version**
- Teammates and CI get the **same version** listed in `package.json` / `package-lock.json`
- You avoid “works on my machine” issues caused by a different global `tsc`

A global install can be convenient for quick experiments, but for a real repository, local installation is the safer default.

---

## 6. What do these files and folders do?

### `package.json`

The project manifest. It stores:

- project name and metadata
- scripts
- dependencies and development dependencies (including `typescript`)

### `package-lock.json`

A lockfile that records the **exact versions** of installed packages (and their dependency tree). It helps make installs reproducible across machines.

### `node_modules`

The folder where npm places downloaded packages. It can be large and is normally **not** committed to Git. Instead, other people recreate it with `npm install`.

---

## 7. Check the local TypeScript version

Use `npx` to run the project’s local `tsc`:

```bash
npx tsc --version
```

`npx` prefers the TypeScript binary installed in this project’s `node_modules`, which is what you want with a local setup.

---

## 8. Generate a `tsconfig.json`

Create a starter TypeScript configuration file:

```bash
npx tsc --init
```

This generates `tsconfig.json` with many commented options. You can later simplify it to only what your project needs.

---

## 9. What does `tsconfig.json` do?

`tsconfig.json` tells the TypeScript compiler **how to treat your project**:

- which files to include
- which language/features to target
- how strict type-checking should be
- where to emit compiled JavaScript (if you emit at all)

When you run `tsc` in a folder that contains `tsconfig.json`, TypeScript uses that file as the project configuration.

---

## 10. Main sections (simple introduction)

### `compilerOptions`

Settings that control checking and compilation (for example `target`, `strict`, `outDir`).

### `include`

Patterns for files TypeScript should consider part of the project (for example `src/**/*`).

### `exclude`

Patterns for files or folders to skip (for example `node_modules` or build output).

You do not need to master every option on day one. Start with a small, clear config and grow it as the project needs more control.

---

## 11. A small starter `tsconfig.json`

Example of a compact initial configuration:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

This is a **learning example**. Do not treat it as the only correct setup for every project.

---

## 12. What each option means (briefly)

| Option | Simple meaning |
| --- | --- |
| `target` | Which JavaScript version the compiler aims to emit (for example modern `ES2020` features). |
| `module` | Which module format the emitted JavaScript should use. |
| `strict` | Turns on a set of stronger type-checking rules. A good default for learning. |
| `rootDir` | The root folder of your TypeScript source files. |
| `outDir` | The folder where compiled `.js` files are written. |
| `esModuleInterop` | Improves interoperability when importing CommonJS modules with ESM-style `import` syntax. |
| `forceConsistentCasingInFileNames` | Helps catch import path casing problems (important across operating systems). |
| `skipLibCheck` | Skips type-checking of declaration files in dependencies, which often makes checks faster. |

Later lessons can go deeper into individual compiler options. For now, focus on recognizing these names and their purpose.

---

## 13. Validate without generating JavaScript

Type-check the project **without** writing `.js` output:

```bash
npx tsc --noEmit
```

Useful while learning and in CI: you want to know about type errors without producing build files.

---

## 14. Compile the project

Emit JavaScript according to `tsconfig.json`:

```bash
npx tsc
```

With an `outDir` such as `./dist`, compiled files appear there (for example `dist/index.js` from `src/index.ts`).

---

## 15. What is `dist`, and why ignore it in Git?

`dist` (short for “distribution”) is a common name for the **compiled output folder**.

It usually should be listed in `.gitignore` because:

- it is **generated** from your `.ts` sources
- committing it duplicates information and can drift out of sync
- other developers (and CI) can recreate it by running `npx tsc`

Typical idea:

- **commit** source files (`.ts`) and config (`package.json`, `tsconfig.json`)
- **ignore** generated folders such as `dist` and `node_modules`

---

## Review questions

1. Why is TypeScript usually installed with `--save-dev` instead of as a regular runtime dependency?
2. What is the difference between `package.json` and `package-lock.json`?
3. What command creates a starter `tsconfig.json`?
4. What is the difference between `npx tsc --noEmit` and `npx tsc`?
5. Why should the `dist` folder normally be added to `.gitignore`?

---

## Completion checklist

- [ ] Node.js and npm are installed (`node --version`, `npm --version`)
- [ ] I understand what `npm init -y` creates
- [ ] I know how to install TypeScript locally with `npm install --save-dev typescript`
- [ ] I can explain why a local install is preferred over a global one
- [ ] I know the roles of `package.json`, `package-lock.json`, and `node_modules`
- [ ] I can check the local compiler with `npx tsc --version`
- [ ] I know that `npx tsc --init` generates `tsconfig.json`
- [ ] I recognize `compilerOptions`, `include`, and `exclude`
- [ ] I can describe the starter options: `target`, `module`, `strict`, `rootDir`, `outDir`, `esModuleInterop`, `forceConsistentCasingInFileNames`, `skipLibCheck`
- [ ] I know how to type-check with `npx tsc --noEmit` and compile with `npx tsc`
- [ ] I understand why `dist` belongs in `.gitignore`
