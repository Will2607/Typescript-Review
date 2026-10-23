# Ambient Modules

Learn how TypeScript ambient modules describe the public API of an external module whose implementation exists elsewhere at runtime.

Example files for this lesson:

- `ambient-module.d.ts`
- `ambient-modules-example.ts`

---

## What an ambient declaration is

An ambient declaration tells TypeScript that a value, function, class, module, or other API exists elsewhere at runtime.

Ambient declarations describe types but do not provide runtime implementations.

The `declare` keyword introduces them.

```ts
declare const version: string;
```

This tells TypeScript that `version` exists, but it does not create `version` in JavaScript.

This lesson focuses on ambient **modules**.

---

## What an ambient module is

An ambient module describes the public API of an external module whose implementation exists elsewhere.

```ts
declare module "example-library" {
}
```

The string identifies the module being described. TypeScript uses that specifier when checking imports such as `from "example-library"`.

---

## Why ambient modules are useful

A typical scenario:

- a JavaScript package exists
- it can be imported at runtime
- it does not provide TypeScript declarations
- a `.d.ts` declaration can describe its API so TypeScript can type-check consumers

This lesson stays conceptual. It does not discuss package installation or `@types` in depth.

---

## Basic ambient module declaration

```ts
declare module "math-library" {
  export function add(
    a: number,
    b: number
  ): number;
}
```

- There is no function body.
- The declaration describes an existing function.
- TypeScript uses the signature for type checking.

---

## Function declarations

```ts
declare module "math-library" {
  export function add(
    a: number,
    b: number
  ): number;

  export function subtract(
    a: number,
    b: number
  ): number;
}
```

Ambient function declarations end with semicolons and contain no implementation body.

---

## Declaring constants

```ts
declare module "app-config" {
  export const version: string;
  export const debug: boolean;
}
```

These declarations describe values expected to exist at runtime. They do not assign those values.

---

## Declaring interfaces

```ts
declare module "user-library" {
  export interface User {
    id: number;
    name: string;
  }

  export function getUser(
    id: number
  ): User;
}
```

The interface can describe values exposed by the module. This lesson does not revisit interfaces in depth.

---

## Declaring type aliases

```ts
declare module "status-library" {
  export type Status =
    | "idle"
    | "loading"
    | "success"
    | "error";

  export function getStatus(): Status;
}
```

---

## The role of `.d.ts` files

`.d.ts` files contain declarations used by TypeScript for type checking.

- They describe types.
- They normally do not contain runtime implementation.
- TypeScript does not use them as normal JavaScript-producing source files.

This lesson includes `ambient-module.d.ts` because ambient modules are declarations of existing runtime modules, not implementations.

---

## Declaration vs Implementation

Declaration:

```ts
declare module "math-library" {
  export function add(
    a: number,
    b: number
  ): number;
}
```

Normal implementation, conceptually:

```ts
export function add(
  a: number,
  b: number
): number {
  return a + b;
}
```

The first only describes the API. The second provides executable behavior. This is not an External Modules lesson.

---

## Using an ambient module

```ts
import {
  add
} from "math-library";

const result = add(10, 20);
```

TypeScript can validate the call based on the ambient declaration.

A declaration alone does not make the runtime package exist. If the actual JavaScript module is missing, running this import would fail at runtime.

---

## Type checking examples

```ts
add(10, 20);

// add("10", 20);
```

TypeScript validates calls using the declaration. `"10"` is not a `number`, so the second call is rejected.

---

## Ambient Module vs Namespace

- A namespace groups TypeScript declarations under a named scope.
- An ambient module describes the API of a module identified by a module specifier such as `"math-library"`.

This lesson does not revisit namespaces in depth.

---

## Important runtime distinction

Ambient declarations do not create runtime values.

TypeScript accepting:

```ts
import { add } from "math-library";
```

does not mean that `math-library` actually exists at runtime.

This distinction is essential.

---

## Key Takeaways

- Ambient declarations describe APIs that exist elsewhere.
- `declare module "..."` describes a module by its module specifier.
- `.d.ts` files are commonly used for declarations.
- Ambient functions have signatures but no implementation bodies.
- Constants, interfaces, types, and functions can be declared.
- Ambient declarations enable type checking.
- Declarations do not create runtime implementations.

---

## Validation and execution commands

Type-check the declarations:

```bash
npx tsc --noEmit 10-typescript-modules/02-ambient-modules/ambient-module.d.ts
```

Type-check the example:

```bash
npx tsc --noEmit 10-typescript-modules/02-ambient-modules/ambient-modules-example.ts
```

Execute:

```bash
npx tsx 10-typescript-modules/02-ambient-modules/ambient-modules-example.ts
```
