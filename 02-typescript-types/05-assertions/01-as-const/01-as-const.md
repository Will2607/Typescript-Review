# as const

Learn how TypeScript’s `as const` assertion preserves exact literal values and marks object properties and array elements as read-only at the type level.

Example file for this lesson:

- `as-const-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what `as const` does
- use `as const` with primitives, objects, and arrays
- contrast regular inference with `as const`
- understand type-level read-only restrictions
- know that `as const` does not freeze values at runtime

---

## What is `as const`?

`as const` is a **const assertion** in TypeScript.

It tells TypeScript to infer the **narrowest possible literal types** for a value, instead of widening them to more general types such as `string` or `number`.

```ts
const exactLanguage = "TypeScript" as const;
```

`as const` affects **type checking only**. It is removed when TypeScript compiles to JavaScript.

---

## Basic syntax

Place `as const` after a value:

```ts
"TypeScript" as const
5 as const
{ environment: "development" } as const
[10, 20] as const
```

---

## Literal value preservation

Without `as const`, TypeScript often widens a string or number to a general type:

```ts
let regularLanguage = "TypeScript"; // inferred as string
let regularVersion = 5;             // inferred as number
```

With `as const`, TypeScript keeps the exact value in the type:

```ts
const exactLanguage = "TypeScript" as const; // exact "TypeScript"
const exactVersion = 5 as const;             // exact 5
```

This lesson only needs that minimum idea: `as const` preserves the exact value in the type. A full literal-types lesson comes later.

---

## Read-only object properties

When you assert an object with `as const`, its properties become **read-only at the type level**:

```ts
const fixedConfiguration = {
  environment: "development",
  debug: true,
} as const;

// fixedConfiguration.environment = "production"; // type error
```

You can still read the properties.

---

## Read-only tuple-like arrays

When you assert an array with `as const`, TypeScript treats it as a **read-only tuple-like** structure:

```ts
const fixedCoordinates = [10, 20] as const;
```

That means:

- element positions keep exact literal types
- mutation methods such as `push` and `pop` are blocked by TypeScript
- index assignments are blocked by TypeScript

---

## `as const` with primitive values

```ts
const exactLanguage = "TypeScript" as const;
const exactVersion = 5 as const;
```

Useful when you want TypeScript to remember the exact string or number, not just “some string” or “some number.”

Compare:

```ts
const language = "TypeScript";
const exactLanguage = "TypeScript" as const;
```

Both use `const`, so neither variable can be reassigned.  
Only `as const` preserves the exact literal type more narrowly.

---

## `as const` with objects

```ts
const regularConfiguration = {
  environment: "development",
};

const fixedConfiguration = {
  environment: "development",
} as const;
```

Difference:

- `regularConfiguration.environment` remains writable in the type
- `fixedConfiguration.environment` becomes read-only in the type

```ts
regularConfiguration.environment = "production"; // allowed
// fixedConfiguration.environment = "production"; // type error
```

---

## `as const` with arrays

```ts
const regularCoordinates = [10, 20];
const fixedCoordinates = [10, 20] as const;
```

The regular array can be updated:

```ts
regularCoordinates[0] = 15;
regularCoordinates.push(30);
```

The asserted array cannot be mutated through TypeScript’s checking:

```ts
// fixedCoordinates[0] = 15; // error
// fixedCoordinates.push(30); // error
// fixedCoordinates.pop();    // error
```

Reading is still allowed:

```ts
console.log(fixedCoordinates[0]);
```

---

## Difference between regular inference and `as const`

| Case | Typical inference | Effect |
| --- | --- | --- |
| `"TypeScript"` without `as const` | often `string` | general text type |
| `"TypeScript" as const` | exact `"TypeScript"` | literal preserved |
| `{ environment: "development" }` | writable properties | can reassign properties |
| `{ environment: "development" } as const` | read-only properties | property reassignment blocked |
| `[10, 20]` | mutable number array | `push` / index updates allowed |
| `[10, 20] as const` | read-only tuple-like | mutation blocked |

Also remember:

- `const` prevents reassigning the **variable**
- `as const` additionally preserves literals and marks nested object properties / array elements as read-only in the **inferred type**

---

## Mutation restrictions

`as const` creates **type-level** mutation restrictions.

TypeScript will report errors if you try to:

- reassign a read-only object property from an `as const` object
- replace an element in an `as const` array
- call `push` or `pop` on an `as const` array

These are compile-time protections.

---

## Runtime behavior

Important precision:

- `as const` does **not** freeze objects or arrays at runtime
- it does **not** create a special JavaScript “const object”
- the assertion is removed during compilation to JavaScript
- runtime values are still ordinary strings, numbers, objects, and arrays

So:

- TypeScript blocks unsafe mutations during checking
- `as const` itself is not a runtime immutability feature like `Object.freeze`

This lesson does not demonstrate runtime mutation workarounds.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Thinking `as const` equals `const` | `const` stops variable reassignment; `as const` also narrows types / read-only fields |
| Expecting runtime freezing | `as const` is type-only |
| Using `as const` when you need a mutable object | Omit `as const` if updates are required |
| Confusing this lesson with general `as SomeType` assertions | This lesson covers only `as const` |

---

## Summary

- `as const` is a const assertion that asks TypeScript for the narrowest literal types.
- Exact string and number values can be preserved in the type.
- Object properties become read-only at the type level.
- Arrays become read-only tuple-like structures at the type level.
- `const` and `as const` are related but not the same.
- Mutation restrictions come from TypeScript checking.
- `as const` does not freeze values at runtime and is erased in compiled JavaScript.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/05-assertions/01-as-const/as-const-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/05-assertions/01-as-const/as-const-example.ts
```

---

## Completion checklist

- [ ] I know what `as const` is
- [ ] I can use `as const` with primitives, objects, and arrays
- [ ] I understand literal preservation at a basic level
- [ ] I know object properties become read-only with `as const`
- [ ] I know arrays become read-only tuple-like structures with `as const`
- [ ] I can contrast regular inference with `as const`
- [ ] I know `as const` does not freeze values at runtime
