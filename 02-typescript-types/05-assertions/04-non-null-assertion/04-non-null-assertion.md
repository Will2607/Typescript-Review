# Non-null Assertion

Learn how TypeScript’s non-null assertion operator `!` tells the type checker that a value is not `null` and not `undefined`, and why that trust can be dangerous at runtime.

Example file for this lesson:

- `non-null-assertion-example.ts`

> **Important:** `!` does not validate or create a value. Use it only when you already know the value exists. Prefer a normal runtime check when the value might be missing.

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what the non-null assertion operator does
- write `value!`
- use `!` to access properties and methods when a value is known to exist
- contrast `value!` with a normal runtime check
- distinguish `value!` from boolean negation `!value`
- understand the runtime risks of incorrect non-null assertions

---

## What is the non-null assertion operator?

The **non-null assertion operator** is written as `!` **after** an expression.

It tells TypeScript:

> treat this value as not `null` and not `undefined`.

```ts
let username: string | undefined = "Alice";
console.log(username!.length);
```

This is a compile-time assertion, not a runtime safety feature.

---

## Basic `!` syntax

```ts
expression!
```

Examples:

```ts
username!
language!
message!.length
findLanguage("ts")!.toUpperCase()
```

### Quick confusion check: `value!` vs `!value`

| Syntax | Meaning |
| --- | --- |
| `value!` | TypeScript non-null assertion (“this is not null/undefined”) |
| `!value` | Boolean negation (“treat this as not true”) |

This lesson is only about `value!`. Do not expand into boolean logic here.

---

## `null` and `undefined`

A value typed as `string | undefined` may be:

- a real `string`, or
- `undefined`

Similarly, a type may include `null`.

TypeScript blocks many operations until those missing cases are handled, because calling methods on `null` or `undefined` fails at runtime.

---

## Removing `null` and `undefined` from TypeScript's view

When you write `value!`, TypeScript removes `null` and `undefined` from its view of that expression.

```ts
let username: string | undefined = "Alice";
username!.toUpperCase();
```

After `!`, TypeScript treats the expression as a definite `string` for checking purposes.

That does **not** prove the runtime value is present.

---

## Accessing properties after a non-null assertion

```ts
const message: string | undefined = "TypeScript is ready";
console.log(message!.length);
```

TypeScript allows `.length` because of `!`.

Use this only when the value is known to exist.

---

## Calling methods after a non-null assertion

```ts
console.log(username!.toUpperCase());
```

Same idea: the method call is allowed by the type checker because you asserted the value is present.

---

## Non-null assertions with function results

A function may return `string | undefined`:

```ts
function findLanguage(code: string): string | undefined {
  if (code === "ts") {
    return "TypeScript";
  }

  return undefined;
}

const language = findLanguage("ts");
console.log(language!.toUpperCase());
```

Here `"ts"` is a known matching case, so the demo can safely use `!`.

If the function returns `undefined`, `!` would still compile and then fail at runtime.

---

## Runtime behavior

The non-null assertion operator:

- affects compile-time type checking only
- does not perform runtime validation
- does not change the runtime value
- is removed during JavaScript compilation

So this may compile and still crash:

```ts
const value: string | undefined = undefined;
// console.log(value!.length); // would fail at runtime
```

`!` does not validate or create a value.

---

## Risks of incorrect non-null assertions

If the developer is wrong and the value is actually `null` or `undefined`, the program can fail at runtime.

Typical failures:

- reading `.length` on `undefined`
- calling `.toUpperCase()` on `undefined`
- asserting a “not found” function result that is actually missing

---

## When to use non-null assertions

Use `!` only when you have **reliable knowledge** that the value exists, for example:

- you just assigned a real string
- a lookup key is known to match in a controlled demo
- surrounding code already guarantees presence, and you are documenting that certainty for TypeScript

Even then, keep the use deliberate and local.

---

## When to avoid non-null assertions

Avoid `!` when:

- the value might actually be missing
- you have not checked the result of a search/lookup
- a normal `if` check would be clearer and safer
- you are tempted to use `!` only to silence the compiler

---

## Non-null assertion versus validation

### Non-null assertion

```ts
console.log(optionalValue!.toUpperCase());
```

Tells TypeScript to trust the developer. No runtime verification.

### Normal runtime check

```ts
if (optionalValue !== undefined) {
  console.log(optionalValue.toUpperCase());
}
```

Verifies the value before use. Safer when absence is possible.

Prefer validation when the value might be missing.

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Using `!` to silence every `undefined` error | Check the value when it might be missing |
| Confusing `value!` with `!value` | `value!` asserts presence; `!value` negates a boolean-like value |
| Asserting function results that can miss | Confirm the result exists first |
| Thinking `!` creates a fallback value | It does not create or replace anything |
| Leaving unsafe `!` in production paths | Prefer runtime checks for uncertain data |

---

## Summary

- `value!` tells TypeScript the value is not `null` and not `undefined`.
- It is compile-time only and does not validate or convert runtime values.
- After `!`, property and method access may be allowed by the type checker.
- Incorrect use can compile and still crash at runtime.
- Prefer a normal runtime check when the value might be missing.
- Do not confuse `value!` with boolean negation `!value`.
- This lesson is about expression non-null assertions, not class definite assignment assertions.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/05-assertions/04-non-null-assertion/non-null-assertion-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/05-assertions/04-non-null-assertion/non-null-assertion-example.ts
```

---

## Completion checklist

- [ ] I know what `value!` means
- [ ] I can distinguish `value!` from `!value`
- [ ] I understand `!` removes `null`/`undefined` only from TypeScript’s view
- [ ] I can use `!` for property and method access when the value is known to exist
- [ ] I can contrast `!` with a normal runtime check
- [ ] I know incorrect `!` usage can fail at runtime
- [ ] I know `!` is erased during compilation
