# Equality Narrowing

Learn how TypeScript uses strict equality comparisons (`===` and `!==`) to reduce the possible types of a value.

Example file for this lesson:

- `equality-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what equality narrowing is
- use `===` to narrow a union to one literal value
- use `!==` to remove one possible value from a union
- compare two union-typed values and understand the shared type
- narrow `null` and `undefined` with equality checks
- prefer strict equality over loose equality

---

## What is equality narrowing?

**Equality narrowing** happens when TypeScript uses equality comparisons to reduce the possible type of a value.

If a value might be several things, comparing it with `===` or `!==` can tell TypeScript which possibilities remain.

```ts
function printStatus(status: "success" | "error"): void {
  if (status === "success") {
    console.log("Operation succeeded");
  } else {
    console.log("Operation failed");
  }
}
```

---

## Equality operators used for narrowing

The primary operators for this lesson are:

| Operator | Meaning |
| --- | --- |
| `===` | strictly equal |
| `!==` | strictly not equal |

Use these in examples. They keep comparisons predictable.

---

## Narrowing with `===`

When a union is compared against a literal, TypeScript can treat the value as that exact possibility inside the matching branch.

```ts
if (status === "success") {
  // TypeScript knows status is "success" here.
}
```

In the `else` branch, the remaining possibility is `"error"`.

This is not a full Literal Types lesson. The point is only that equality can select one member of a union.

---

## Narrowing with `!==`

`!==` removes one possible value from the union.

```ts
function printMode(mode: "light" | "dark"): void {
  if (mode !== "dark") {
    console.log("Light mode");
  } else {
    console.log("Dark mode");
  }
}
```

Inside `mode !== "dark"`, TypeScript knows `mode` is `"light"`.  
In the `else` branch, `mode` is `"dark"`.

---

## Comparing two union-typed values

TypeScript can also narrow values by comparing two variables.

```ts
function compare(
  left: string | number,
  right: string | boolean
): void {
  if (left === right) {
    console.log(left.toUpperCase());
    console.log(right.toUpperCase());
  }
}
```

Before the equality check:

```text
left  → string | number
right → string | boolean
```

The only type both values can share is:

```text
string
```

If they are equal, both must be that shared type.  
Therefore, inside `if (left === right)`, TypeScript narrows both variables to `string`.

---

## Comparing against literal values

A comparison such as `value === "admin"` can select one string case from a broader union:

```ts
function processValue(value: string | number): void {
  if (value === "admin") {
    console.log("Administrator:", value.toUpperCase());
  } else {
    console.log("Other value:", value);
  }
}
```

Inside the `"admin"` branch, TypeScript treats `value` as that string.  
The `else` branch still allows the remaining possibilities (`string` or `number` other than `"admin"`).

Do not use `typeof` in this lesson. Equality is enough here.

---

## Narrowing with `null`

Equality comparisons can be used with `null`:

```ts
function printUsername(username: string | null): void {
  if (username === null) {
    console.log("Username is missing");
  } else {
    console.log("Username:", username.toUpperCase());
  }
}
```

After `username === null`, the `else` branch contains only `string`.

Prefer this kind of explicit equality check. Do not use truthiness checks such as `if (username)` here.

---

## Narrowing with `undefined`

The same idea applies to `undefined`:

```ts
function printScore(score: number | undefined): void {
  if (score === undefined) {
    console.log("Score is unavailable");
  } else {
    console.log("Score:", score);
    console.log("Next score:", score + 1);
  }
}
```

Use `score === undefined`, not a `typeof` check. This lesson focuses on equality comparison.

---

## Strict equality versus loose equality

JavaScript also has:

```text
==
!=
```

This lesson uses only:

```text
===
!==
```

Strict equality avoids implicit coercion and keeps examples predictable.  
Do not rely on loose equality for narrowing examples.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Using a string method before checking `null` | Compare with `=== null` first |
| Using numeric operations when the value may be `undefined` | Compare with `=== undefined` first |
| Comparing against a literal that is not in the union | Only compare with possible members |
| Using `==` because it “works sometimes” | Prefer `===` / `!==` |
| Calling `.toUpperCase()` on two unions before they are proven equal | Wait until `first === second` |

---

## Runtime behavior

```ts
value === "something"
```

is ordinary JavaScript and remains at runtime.

TypeScript uses the result at compile time to narrow types.  
Equality narrowing itself does not add runtime type metadata.

```ts
console.log(10 === 10);       // true
console.log("10" === "10");   // true
```

---

## Summary

- Equality narrowing uses `===` and `!==` to reduce possible types.
- Comparing against a literal selects or removes one union member.
- Comparing two overlapping unions can narrow both to their shared type.
- `null` and `undefined` can be narrowed with strict equality.
- Prefer `===` / `!==` over `==` / `!=`.
- The comparisons remain in JavaScript; only the type narrowing is TypeScript-specific.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/09-type-guards-narrowing/03-equality/equality-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/09-type-guards-narrowing/03-equality/equality-example.ts
```

---

## Completion checklist

- [ ] I know what equality narrowing is
- [ ] I can use `===` to select one literal from a union
- [ ] I can use `!==` to remove one possible value
- [ ] I understand comparing two union-typed values
- [ ] I can narrow `null` and `undefined` with equality
- [ ] I prefer `===` and `!==` over loose equality
- [ ] I know equality comparisons remain at runtime
