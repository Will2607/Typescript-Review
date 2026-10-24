# Global Augmentation

Learn how TypeScript global augmentation adds declarations to the global scope from inside a module, and why a type declaration is not the same as a runtime implementation.

Example file for this lesson:

- `global-augmentation-example.ts`

---

## What global augmentation is

Global augmentation allows a module to add declarations to the global scope.

```ts
declare global {
  // global declarations
}
```

This is commonly used to extend existing global interfaces such as `Array<T>` or `String`.

---

## `declare global` must be inside a module

Global augmentation must appear inside a file that is treated as a module.

```ts
export {};

declare global {
  // declarations
}
```

`export {}` makes the file a module without exporting a runtime value.

---

## Extending an existing global interface

```ts
declare global {
  interface Array<T> {
    first(): T | undefined;
  }
}
```

This tells TypeScript that all arrays have a method named `first`.

---

## Declaration does not create runtime behavior

This distinction is essential.

```ts
declare global {
  interface Array<T> {
    first(): T | undefined;
  }
}
```

only changes TypeScript’s understanding of the type.

It does **not** actually create `array.first()` at runtime.

---

## Providing the runtime implementation

```ts
Array.prototype.first = function <T>(
  this: T[]
): T | undefined {
  return this[0];
};
```

- The global augmentation provides the type declaration.
- The prototype assignment provides the runtime implementation.

---

## Using the augmented global type

```ts
const numbers = [10, 20, 30];

console.log(numbers.first());
```

TypeScript accepts this because `Array<T>` was augmented and the runtime method was implemented.

---

## Another simple augmentation example

```ts
declare global {
  interface String {
    shout(): string;
  }
}

String.prototype.shout =
  function (): string {
    return this.toUpperCase();
  };
```

`message.shout()` is then typed as returning `string`. The prototype assignment still has to exist at runtime.

---

## Global Augmentation vs Namespace Augmentation

- Namespace augmentation extends a named namespace.
- Global augmentation extends declarations in the global scope.

This lesson does not revisit namespace augmentation in depth.

---

## Runtime risk

Modifying built-in prototypes can:

- create name collisions
- affect unrelated code
- make behavior harder to track

Use this pattern carefully. This lesson does not develop JavaScript prototype design further.

---

## Invalid usage

Keep invalid executable examples commented out:

- declaring the method but not implementing it, then assuming it exists at runtime
- assigning a runtime implementation with an incompatible return type
- using `declare global` in a script file without module context

---

## Key Takeaways

- Global augmentation extends global TypeScript declarations.
- `declare global` must be inside a module.
- `export {}` can make a file a module.
- Interfaces such as `Array<T>` can be augmented.
- Type augmentation does not create runtime behavior.
- Runtime behavior must be implemented separately.
- Modifying globals should be done carefully.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 10-typescript-modules/05-global-augmentation/global-augmentation-example.ts
```

Execute:

```bash
npx tsx 10-typescript-modules/05-global-augmentation/global-augmentation-example.ts
```
