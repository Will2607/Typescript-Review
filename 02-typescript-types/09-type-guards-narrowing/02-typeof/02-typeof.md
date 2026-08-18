# typeof

Learn how JavaScript’s `typeof` operator works as a TypeScript type guard to narrow primitive union types.

Example file for this lesson:

- `typeof-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what `typeof` returns at runtime
- use `typeof` to narrow primitive unions
- access type-specific operations after narrowing
- check for `undefined` with `typeof`
- recognize that arrays and plain objects both return `"object"`
- understand that `typeof` remains in compiled JavaScript

---

## What is `typeof`?

`typeof` is a **JavaScript operator** that TypeScript can use as a **type guard**.

It answers this question:

> What general JavaScript type is this value?

```ts
typeof value
```

---

## Basic syntax

```ts
typeof value
typeof value === "string"
```

Example:

```ts
if (typeof value === "string") {
  // TypeScript treats value as string here.
}
```

---

## Runtime behavior of `typeof`

At runtime, `typeof` returns a string describing the general JavaScript type of a value.

```ts
console.log(typeof "TypeScript"); // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
```

`typeof` is a real JavaScript operator, so the expression remains in emitted JavaScript.

TypeScript uses the result during compilation to understand the type more precisely inside each branch. The narrowing itself exists only during type checking.

Unlike purely type-level operators such as `keyof`, `typeof` also runs at runtime.

---

## `typeof` as a type guard

A type guard is a check that helps TypeScript narrow a value to a more specific type.

When TypeScript sees:

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

it treats `value` as `string` inside that branch.

This is called **narrowing** because the set of possible types becomes smaller inside each branch.

---

## Narrowing primitive union types

Before a check, a union such as `string | number` may be either member.

```ts
function formatValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Before the condition, `value` may be either `string` or `number`.

Inside:

```ts
typeof value === "string"
```

TypeScript treats `value` as a string.

Inside the `else` branch, TypeScript treats it as a number.

---

## Accessing type-specific operations after narrowing

After narrowing:

- a `string` can use `.toUpperCase()` and `.length`
- a `number` can use numeric operations such as `* 2` or `.toFixed(2)`
- a `boolean` can be used as a boolean
- `undefined` can be distinguished from a number

Without the check, TypeScript rejects operations that exist on only one member of the union.

---

## `typeof` in function parameters

Function parameters with primitive unions are a common place to use `typeof`:

```ts
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
    console.log("Length:", value.length);
  } else {
    console.log("Number value:", value);
    console.log("Doubled:", value * 2);
  }
}
```

---

## Supported `typeof` results

Common results include:

```text
"string"
"number"
"boolean"
"undefined"
"object"
"function"
"bigint"
"symbol"
```

This lesson focuses primarily on `"string"`, `"number"`, `"boolean"`, `"undefined"`, and `"object"`.

Reference:

```text
typeof "hello"      → "string"
typeof 42           → "number"
typeof true         → "boolean"
typeof undefined    → "undefined"
typeof {}           → "object"
typeof []           → "object"
typeof function(){} → "function"
```

`"bigint"` and `"symbol"` exist, but they are not the focus here.

---

## The `object` result

Both plain objects and arrays report `"object"` at runtime:

```ts
typeof { language: "TypeScript" } // "object"
typeof ["TypeScript", "JavaScript"] // "object"
```

`typeof null` also returns `"object"`. That is a historical JavaScript behavior, not a TypeScript design choice.

So `"object"` is a broad runtime result. It does not tell TypeScript the exact object shape.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Calling `.toUpperCase()` on `string \| number` immediately | Check with `typeof` first |
| Using numeric operations before narrowing | Confirm the value is a `number` |
| Assuming `typeof []` is `"array"` | Arrays report `"object"` |
| Assuming `typeof null` is `"null"` | It reports `"object"` |
| Thinking `typeof` is erased like `keyof` | `typeof` remains in JavaScript |

---

## Limitations

`typeof` is useful for primitive unions, but it has limits:

- it reports only general JavaScript types
- it cannot distinguish one class instance from another (see the previous `instanceof` lesson)
- `"object"` covers many different values, including arrays and `null`
- it does not describe detailed object shapes

Use `typeof` when the union is made of primitives such as `string`, `number`, `boolean`, or `undefined`.

---

## Summary

- `typeof` is a JavaScript operator and a TypeScript type guard.
- It returns a string such as `"string"`, `"number"`, `"boolean"`, `"undefined"`, or `"object"`.
- TypeScript narrows primitive unions based on `typeof` comparisons.
- After narrowing, type-specific operations become safe.
- Arrays and plain objects both return `"object"`; `typeof null` also returns `"object"`.
- The operator remains in compiled JavaScript; only the narrowing is TypeScript-specific.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/09-type-guards-narrowing/02-typeof/typeof-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/09-type-guards-narrowing/02-typeof/typeof-example.ts
```

---

## Completion checklist

- [ ] I know what `typeof` returns at runtime
- [ ] I can narrow `string | number` with `typeof`
- [ ] I can use string methods and numeric operations after narrowing
- [ ] I can distinguish `undefined` from `number` with `typeof`
- [ ] I know arrays and objects both report `"object"`
- [ ] I know `typeof null` is `"object"`
- [ ] I know `typeof` remains in compiled JavaScript
