# never

Learn what TypeScript’s `never` type means, why it is called a bottom type, and how it differs from `void`.

Example file for this lesson:

- `never-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what `never` represents
- recognize functions that never return normally
- compare `never` with `void`
- understand basic assignability rules for `never`
- know that `never` does not exist at runtime

---

## What is the `never` type?

`never` represents values that **never occur**.

It is used when TypeScript needs to say:

- this function never finishes normally, or
- this variable can never hold a real value

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## Why `never` is a bottom type

A **bottom type** sits at the bottom of the type system.

That means:

- `never` is the type of values that cannot exist in normal program flow
- because no regular value is a `never` value, `never` can be assigned to other types in TypeScript’s type rules
- no regular value (`string`, `number`, `boolean`, and so on) can be assigned **to** `never`

Think of it as “impossible value,” not “empty useful result.”

---

## Functions that never return

A function with return type `never` **never completes normally**.

It does not come back with a usable result. Control never continues after a normal return.

Two beginner-friendly cases:

1. the function always throws
2. the function loops forever on purpose

---

## Functions that always throw errors

If every path throws, the return type can be `never`:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

There is no successful return value. Execution leaves the function by throwing.

Do not call this freely in demos if you want the program to finish normally.

---

## Infinite loops

An intentional infinite loop also never returns:

```ts
function keepRunning(): never {
  while (true) {
    // Intentional infinite loop
  }
}
```

The function never reaches a normal end.  
Do **not** call this in executable lesson code, or the process will hang.

---

## Variables of type `never`

A variable declared as `never` cannot be given a regular value:

```ts
// const impossibleText: never = "TypeScript"; // error
```

In beginner code, you rarely create `never` variables on purpose. They matter more as a type-system concept and as the return type of functions that never finish normally.

---

## Assignability rules

Basic rules:

| Direction | Allowed? | Meaning |
| --- | --- | --- |
| `string` / `number` / `boolean` → `never` | No | Regular values are not impossible values |
| `never` → other types | Yes (type rule) | An impossible value is treated as assignable anywhere |
| Call `processImpossibleValue("text")` | No | A normal value is not `never` |

```ts
function processImpossibleValue(value: never): never {
  return value;
}

// processImpossibleValue("unexpected"); // error
```

---

## `never` versus `void`

| Return type | Meaning |
| --- | --- |
| `void` | The function **completes normally** without returning a useful value |
| `never` | The function **does not complete normally** |

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

`logMessage` runs, prints, and finishes. Its result is not meant to be used, but the function still completes.

`throwError` and `keepRunning` do not complete normally, so their return type is `never`.

Do not treat `void` and `never` as the same idea.

---

## Practical use cases

At this stage, `never` is mainly useful to:

- mark functions that always throw
- mark functions that intentionally never stop
- document “this path cannot produce a normal value”
- accept a `never` parameter in helpers that should be unreachable with regular values

Later roadmap topics use `never` in more advanced checking patterns. Those are intentionally out of scope here.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Thinking `never` means “returns nothing useful” | That idea is closer to `void` |
| Calling an infinite `never` function in a demo | The process will never finish |
| Assigning `"text"` or `42` to `never` | Regular values are not allowed |
| Using `never` as a general “empty” data type | Prefer `void`, `undefined`, or `null` for those meanings when appropriate |
| Expecting `never` to exist at runtime | It is a TypeScript compile-time type |

---

## Runtime behavior

TypeScript types are removed during compilation.

That means:

- `never` does **not** exist as a special runtime value wrapper
- a throwing function still throws a normal JavaScript error
- an infinite loop is still a normal JavaScript loop
- safety and meaning come from compile-time checking

---

## Summary

- `never` represents values that never occur.
- A `never`-returning function never completes normally.
- Always-throwing functions and intentional infinite loops are common `never` examples.
- Regular values cannot be assigned to `never`.
- `never` is a bottom type and is assignable to other types under TypeScript’s rules.
- `void` completes without a useful return value; `never` does not complete normally.
- `never` is erased at compile time and does not exist at runtime.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/04-bottom-types/01-never/never-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/04-bottom-types/01-never/never-example.ts
```

---

## Completion checklist

- [ ] I know `never` means “values that never occur”
- [ ] I can recognize always-throwing and infinite-loop functions as `never`
- [ ] I understand why those functions should not be called in a normal demo run
- [ ] I can explain the difference between `never` and `void`
- [ ] I know regular values cannot be assigned to `never`
- [ ] I know `never` is a bottom type
- [ ] I know `never` does not exist at runtime
