# External Modules

Learn how TypeScript files become modules through top-level `import` and `export`, and how named exports, default exports, and type-only imports organize code across files.

Example files for this lesson:

- `math-utils.ts`
- `user-model.ts`
- `external-modules-example.ts`

---

## What an external module is

A TypeScript file becomes a module when it contains a top-level `import` or `export`.

Module files have their own scope.

```ts
export const appName = "TypeScript Review";
```

The declaration is exported from that file rather than placed in the global scope.

---

## Module scope

Declarations inside a module are local to that file unless they are exported.

```ts
const internalValue = 10;

export const publicValue = 20;
```

Another file can import `publicValue` but cannot directly import `internalValue`.

---

## Named exports

```ts
export function add(
  a: number,
  b: number
): number {
  return a + b;
}

export function subtract(
  a: number,
  b: number
): number {
  return a - b;
}
```

These are named exports. Each export keeps its own name.

---

## Named imports

```ts
import {
  add,
  subtract
} from "./math-utils";
```

Imported names normally match exported names.

---

## Import aliases

```ts
import {
  add as sum
} from "./math-utils";
```

`as` gives the imported binding a local name. The export is still `add`; this file uses `sum`.

---

## Exporting constants

```ts
export const PI = 3.14159;
```

Values can be exported just like functions.

---

## Exporting types and interfaces

```ts
export interface User {
  id: number;
  name: string;
}

export type UserRole =
  | "admin"
  | "user";
```

Modules can export both runtime values and type-only declarations. This lesson does not revisit interfaces or literal types in depth.

---

## import type

TypeScript supports:

```ts
import type {
  User,
  UserRole
} from "./user-model";
```

This indicates the import is used only in the type system. It does not create a runtime binding.

---

## Default exports

```ts
export default function multiply(
  a: number,
  b: number
): number {
  return a * b;
}
```

A module can have one default export.

---

## Default imports

```ts
import multiply
  from "./math-utils";
```

Default imports do not use braces.

---

## Named Export vs Default Export

Named:

```ts
export function add() {}
```

Imported with:

```ts
import { add } from "./module";
```

Default:

```ts
export default function multiply() {}
```

Imported with:

```ts
import multiply from "./module";
```

- A module can have multiple named exports.
- A module has at most one default export.
- Default imports can use a different local identifier.

---

## Export lists

```ts
function divide(
  a: number,
  b: number
): number {
  return a / b;
}

export {
  divide
};
```

Declarations may also be exported after being defined.

---

## Importing multiple members

```ts
import {
  add,
  subtract,
  PI
} from "./math-utils";
```

Braces list the named exports this file needs.

---

## External Modules vs Namespaces

- External modules organize code across files using `import`/`export`.
- Namespaces group declarations under a named TypeScript scope.
- Modern applications commonly use modules for file-level organization.

This lesson does not revisit namespaces in depth.

---

## Runtime and type-level distinction

- Exported functions and constants exist at runtime.
- Exported interfaces and types exist only for TypeScript type checking.

`import type` is the import form that matches that type-only case.

---

## Invalid examples

Keep all invalid executable examples commented:

```ts
// importing a non-exported declaration
// importing a named export with the wrong name
// assigning the wrong type to an imported interface
// calling an imported function with incorrect arguments
```

---

## Key Takeaways

- Top-level `import`/`export` makes a file a module.
- Modules have their own scope.
- Named exports use named imports.
- Default exports use default imports.
- Aliases can rename imported bindings.
- Values and types can both be exported.
- `import type` imports type information only.
- External modules organize code across files.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 10-typescript-modules/03-external-modules/external-modules-example.ts
```

Execute:

```bash
npx tsx 10-typescript-modules/03-external-modules/external-modules-example.ts
```
