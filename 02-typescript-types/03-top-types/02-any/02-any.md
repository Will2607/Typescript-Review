# any

Learn what TypeScript’s `any` type does, how it disables compile-time checking, and why it should be used sparingly.

Example file for this lesson:

- `any-example.ts`

> **Warning:** `any` removes compile-time guarantees. This lesson uses `any` because it is the subject being studied. In production code, prefer safer alternatives when possible (for example `unknown`, studied in the previous lesson, or a specific type when you already know the shape).

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what `any` means
- assign many kinds of values to an `any` variable
- recognize that property access and method calls on `any` are not validated
- distinguish explicit `any` from implicit `any`
- compare `any` with `unknown` at a high level
- understand that `any` does not exist at runtime

---

## What is the `any` type?

`any` is a TypeScript type that **disables type checking** for a value.

When a value is typed as `any`, TypeScript largely stops protecting you for that value:

- many assignments are allowed
- property access is allowed without checking whether the property exists
- method calls are allowed without checking whether the method exists

```ts
let flexibleValue: any;
```

---

## Assigning values to `any`

A variable declared as `any` can receive values of different types:

```ts
let flexibleValue: any;

flexibleValue = "TypeScript";
flexibleValue = 42;
flexibleValue = true;
flexibleValue = { language: "TypeScript", version: 5 };
flexibleValue = ["TypeScript", "JavaScript"];
```

A value of a specific type can also be assigned to `any` without complaint.

---

## Operations allowed on `any`

On an `any` value, TypeScript allows operations that would normally require a more specific type:

```ts
let textValue: any = "Hello";

console.log(textValue.toUpperCase());
console.log(flexibleValue.language);
console.log(flexibleValue.length);
```

Compile-time validation of those properties and methods is effectively turned off for that value.

That does **not** mean the operations are safe at runtime. It only means TypeScript will not stop you.

---

## Assigning `any` to other types

An `any` value can be assigned to variables with more specific types:

```ts
let textValue: any = "Hello";
const assignedString: string = textValue;
```

This is one of the most dangerous parts of `any`: TypeScript may accept an assignment that is not actually valid for the runtime value.

---

## Why `any` disables type safety

Type safety means TypeScript helps prevent invalid operations before the code runs.

With `any`:

- invalid property names may not be reported
- wrong method calls may not be reported
- bad assignments to `string`, `number`, and other specific types may not be reported

Those mistakes can stay hidden until runtime.

---

## Implicit `any`

**Implicit `any`** appears when TypeScript cannot determine a type and the compiler is configured to allow that situation.

A common case is an untyped parameter in a setting where implicit `any` is permitted:

```ts
// Depending on compiler settings, this parameter may become implicit any:
// function show(value) {
//   console.log(value);
// }
```

This lesson does **not** change `tsconfig.json`. Just remember that implicit `any` is possible when types are missing and the project allows it.

---

## Explicit `any`

**Explicit `any`** is written directly in a type annotation:

```ts
let flexibleValue: any;
function displayFlexibleValue(value: any): void {
  console.log("Received value:", value);
}
```

You chose `any` on purpose. That makes the loss of checking visible in the source code.

---

## When `any` may appear

`any` may appear when:

- you write `: any` explicitly
- TypeScript falls back to implicit `any` under permissive settings
- older examples or quick experiments intentionally skip typing

`noImplicitAny` helps detect implicit `any` by reporting places where TypeScript would otherwise insert it.

Again: do not modify project configuration for this lesson. Learn the idea only.

---

## Risks of using `any`

| Risk | What can go wrong |
| --- | --- |
| Hidden property errors | Accessing `.name` on an unsuitable value |
| Hidden method errors | Calling `.execute()` when no such method exists |
| Hidden assignment errors | Storing a non-number into a `number` variable through `any` |
| False confidence | The code compiles, then fails when it runs |

Because of these risks, use `any` sparingly.

---

## `any` versus `unknown`

| Type | Main idea |
| --- | --- |
| `any` | Broad and permissive — operations are allowed without checks |
| `unknown` | Broad but restrictive — you must validate before specific use |

`unknown` is safer than `any` because `unknown` requires validation before use.

Keep this comparison at that main safety difference for now.

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Using `any` to silence every type error | Fix the real type, or use `unknown` when the value is uncertain |
| Assuming compile success means runtime safety | Test and validate uncertain values |
| Spreading `any` through many variables and parameters | Keep `any` local and temporary when you must use it |
| Preferring `any` over a known specific type | Use `string`, `number`, object shapes, and so on when you know them |

---

## Runtime behavior

TypeScript types are removed during compilation.

That means:

- `any` does **not** exist as a special runtime wrapper
- the value is still a normal JavaScript value
- runtime failures still happen if you call missing methods or read missing properties

`any` only changes compile-time checking, not JavaScript’s runtime rules.

---

## Summary

- `any` disables TypeScript type checking for a value.
- Many different values can be assigned to `any`.
- Property access and method calls on `any` are not validated at compile time.
- `any` can be assigned to more specific types, which can hide errors.
- Explicit `any` is written in annotations; implicit `any` can appear when types are missing.
- `noImplicitAny` helps catch implicit `any` (configuration is not changed in this lesson).
- `unknown` is safer because it requires validation before use.
- Prefer safer alternatives in real code; this lesson uses `any` only to study it.
- `any` is erased at compile time and does not exist at runtime.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/03-top-types/02-any/any-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/03-top-types/02-any/any-example.ts
```

---

## Completion checklist

- [ ] I know that `any` disables type checking for a value
- [ ] I can assign different kinds of values to `any`
- [ ] I understand that property and method use on `any` is not compile-time validated
- [ ] I know `any` can be assigned to specific types
- [ ] I can tell explicit `any` from implicit `any`
- [ ] I know `unknown` is safer than `any`
- [ ] I understand why `any` should be used sparingly
- [ ] I know `any` does not exist at runtime
