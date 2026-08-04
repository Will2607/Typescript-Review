# unknown

Learn how TypeScript’s `unknown` type represents a value whose type is not known yet, and why TypeScript blocks unsafe operations until the value is checked.

Example file for this lesson:

- `unknown-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what `unknown` means
- assign many kinds of values to an `unknown` variable
- recognize what you cannot do directly with an `unknown` value
- pass `unknown` into a function parameter
- perform a minimal check before using an `unknown` value as a string
- understand that `unknown` exists only at compile time

---

## What is the `unknown` type?

`unknown` is a TypeScript type used when the value’s type is **not known yet**.

It is useful for values that may come from external or uncertain sources, such as:

- data arriving from outside your typed code
- values you have not validated yet
- temporary holders before you decide how to treat the value

```ts
let receivedValue: unknown;
```

---

## Why `unknown` is a top type

A **top type** is a type that can represent values of many kinds.

`unknown` can hold strings, numbers, booleans, objects, arrays, and other values.

That breadth is the “top” part. The important safety rule is the other half:

> once a value is `unknown`, TypeScript will not let you treat it as a specific type until you check it.

So `unknown` is broad for **incoming** values, but strict for **usage**.

---

## Assigning values to `unknown`

You can assign many different values to an `unknown` variable:

```ts
let receivedValue: unknown;

receivedValue = "TypeScript";
receivedValue = 42;
receivedValue = true;
receivedValue = { source: "API" };
receivedValue = ["TypeScript", "JavaScript"];
```

Reassigning is allowed because each assignment still fits the idea “some value, type not known yet.”

You can also assign one `unknown` value to another `unknown` variable:

```ts
let copiedValue: unknown = receivedValue;
```

---

## Restrictions when using `unknown`

An `unknown` value cannot be used freely.

TypeScript blocks operations that assume a more specific type. For example, you generally cannot:

- access properties directly (`value.length`)
- call methods directly (`value.toUpperCase()`)
- treat the value as a ready-to-use `string` or `number`

```ts
let uncertainValue: unknown = "Hello";

// console.log(uncertainValue.length); // error
// uncertainValue.toUpperCase();       // error
```

These restrictions are the main reason `unknown` is useful: they force a check before specialized use.

---

## Assigning `unknown` to other types

An `unknown` value cannot be assigned directly to a more specific type:

```ts
let uncertainValue: unknown = "Hello";

// const text: string = uncertainValue;  // error
// const amount: number = uncertainValue; // error
```

Allowed without extra checking:

- assign `unknown` → `unknown`

Not allowed directly:

- assign `unknown` → `string`
- assign `unknown` → `number`
- assign `unknown` → other specific types

---

## Safe handling of unknown values

Before treating an `unknown` value as a specific type, check it.

A minimal example uses `typeof`:

```ts
function printTextLength(value: unknown): void {
  if (typeof value === "string") {
    console.log("Text length:", value.length);
  }
}
```

Inside that `if`, TypeScript allows string operations such as `.length`.

This lesson only shows the restriction and one small check. Full type-guard and narrowing theory belongs to later roadmap topics.

---

## `unknown` in function parameters

A function can accept `unknown` when it may receive different kinds of values and should not assume a specific type too early:

```ts
function displayValue(value: unknown): void {
  console.log("Received value:", value);
}

displayValue("Hello");
displayValue(100);
displayValue(false);
```

`console.log` can print the value. Specialized operations still need a check first.

---

## `unknown` versus specific types

| Type style | Meaning | Freedom of use |
| --- | --- | --- |
| Specific type (`string`, `number`, ...) | Value shape is known | Use matching operations directly |
| `unknown` | Value type is not known yet | Must check before specific operations |

Prefer a specific type when you already know what the value is.  
Prefer `unknown` when the value is uncertain and must be validated before use.

`unknown` is safer than accepting an unrestricted value because TypeScript requires validation before specific operations are performed.

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Accessing properties on `unknown` immediately | Check the value first |
| Calling methods on `unknown` immediately | Check the value first |
| Assigning `unknown` directly to `string` or `number` | Validate, then use the value safely |
| Using `unknown` everywhere “just in case” | Prefer specific types when the type is already known |
| Thinking `unknown` exists at runtime | Remember: it is a TypeScript compile-time type |

---

## Runtime behavior

TypeScript types are removed during compilation.

That means:

- `unknown` does **not** exist as a special runtime wrapper
- the stored value is still a normal JavaScript value (string, number, object, and so on)
- safety comes from compile-time checking, not from a runtime `unknown` object

---

## Summary

- `unknown` is for values whose type is not known yet.
- Many kinds of values can be assigned to `unknown`.
- `unknown` values cannot be used as specific types without checking.
- Direct property access and method calls on `unknown` are blocked.
- `unknown` can be assigned to another `unknown`, but not directly to `string` or `number`.
- A minimal `typeof` check can unlock safe string usage.
- `unknown` is useful for uncertain or external values.
- `unknown` is erased at compile time and does not exist at runtime.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/03-top-types/01-unknown/unknown-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/03-top-types/01-unknown/unknown-example.ts
```

---

## Completion checklist

- [ ] I know what `unknown` represents
- [ ] I can assign different values to an `unknown` variable
- [ ] I understand why property access and method calls are blocked
- [ ] I know `unknown` cannot be assigned directly to specific types
- [ ] I can pass `unknown` into a function parameter
- [ ] I can use a minimal `typeof` check before string operations
- [ ] I know `unknown` is removed during compilation
