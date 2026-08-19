# Truthiness Narrowing

Learn how TypeScript uses JavaScript truthy and falsy checks to reduce possible types, and when those checks are too broad.

Example file for this lesson:

- `truthiness-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what truthy and falsy mean in JavaScript
- use `if (value)` to narrow `string | undefined` and `string | null`
- use a negated check such as `if (!value)`
- recognize that `0` and `""` are falsy even when they are valid values
- choose an explicit `undefined` check when zero should remain valid
- understand that truthiness checks remain in compiled JavaScript

---

## What is truthiness?

JavaScript conditions evaluate values as **truthy** or **falsy**.

A basic truthiness check looks like:

```ts
if (value) {
  // value is truthy here
}
```

TypeScript uses those runtime checks to narrow possible types.

```ts
function printValue(value: string | undefined): void {
  if (value) {
    console.log(value.toUpperCase());
  }
}
```

Before the condition:

```text
value → string | undefined
```

Inside the truthy branch, TypeScript removes `undefined` and also knows the string is truthy.

An empty string would not enter that branch.

---

## Truthy and falsy values

Common falsy JavaScript values include:

```text
false
0
""
null
undefined
NaN
```

`NaN` belongs in this theoretical list. This lesson does not build examples around it.

Examples of truthy values:

```text
true
1
-1
"TypeScript"
{}
[]
```

---

## Truthiness narrowing in TypeScript

When TypeScript sees `if (value)`, it treats `value` as truthy inside that branch.

That often removes `null` and `undefined` from a union.  
It can also remove other falsy members, which is the main caution of this lesson.

The condition is ordinary JavaScript. TypeScript only observes it during type analysis.

---

## Narrowing `string | undefined`

```ts
function printName(name: string | undefined): void {
  if (name) {
    console.log("Name:", name.toUpperCase());
  } else {
    console.log("Name is missing");
  }
}
```

Inside the truthy branch, TypeScript knows `name` is not `undefined`.  
A non-empty string such as `"Alice"` enters that branch.  
`undefined` does not.

---

## Narrowing `string | null`

```ts
function printMessage(message: string | null): void {
  if (message) {
    console.log("Message:", message.toUpperCase());
  } else {
    console.log("No message");
  }
}
```

Inside the `if` branch, `message` is treated as a non-null truthy string.  
`null` goes to the `else` branch.  
An empty string would also go to the `else` branch.

---

## Narrowing `number | undefined`

```ts
function printScore(score: number | undefined): void {
  if (score) {
    console.log("Score:", score);
  } else {
    console.log("No truthy score");
  }
}
```

This does **not** simply mean “score is a number.”

`0` is a valid number but is falsy, so it goes to the `else` branch.

Do not use this pattern when zero is a valid score. Truthiness narrowing must be used carefully when valid values can themselves be falsy.

---

## Negated truthiness checks

```ts
function printUsername(username: string | undefined): void {
  if (!username) {
    console.log("Username is unavailable");
    return;
  }

  console.log("Username:", username.toUpperCase());
}
```

`if (!value)` handles falsy values.

After the early return, TypeScript knows `username` is a truthy string.

---

## Important limitation with empty strings and zero

Truthiness narrowing is convenient, but it can also exclude valid falsy values such as:

- an empty string (`""`)
- zero (`0`)
- `false`

Because of that, truthiness checks are **not always equivalent** to explicit `null` or `undefined` checks.

```ts
function printExactScore(score: number | undefined): void {
  if (score !== undefined) {
    console.log("Exact score:", score);
  } else {
    console.log("Score is unavailable");
  }
}
```

Brief comparison only:

- `if (score)` rejects both `undefined` and `0`
- `if (score !== undefined)` rejects only `undefined`

The same idea applies to strings: `if (text)` rejects both `undefined` and `""`.

---

## Runtime behavior

```ts
if (value)
```

is ordinary JavaScript runtime behavior.

TypeScript observes this condition during type analysis and narrows the possible type inside the branch.

The truthiness check itself remains in the generated JavaScript.

```ts
Boolean("TypeScript") // true
Boolean("")           // false
Boolean(0)            // false
Boolean(undefined)    // false
```

`Boolean(...)` here only illustrates JavaScript truthy/falsy behavior. It is not used as a TypeScript type guard.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Using a string method before a check | Use `if (name)` or a more precise check first |
| Treating `if (score)` as “score is a number” | `0` is a number and still falsy |
| Treating `if (text)` as “text is a string” | `""` is a string and still falsy |
| Using truthiness when `0` or `""` are valid | Prefer an explicit `null` / `undefined` check |
| Thinking TypeScript adds extra runtime metadata | The check is plain JavaScript |

---

## Summary

- JavaScript conditions treat values as truthy or falsy.
- TypeScript uses those checks to narrow unions such as `string | undefined` and `string | null`.
- `if (!value)` handles the falsy side and can enable an early return.
- Empty strings and zero are falsy, so truthiness can hide valid values.
- `if (score)` is not the same as `if (score !== undefined)`.
- The condition remains in JavaScript; only the type narrowing is TypeScript-specific.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/09-type-guards-narrowing/04-truthiness/truthiness-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/09-type-guards-narrowing/04-truthiness/truthiness-example.ts
```

---

## Completion checklist

- [ ] I know common truthy and falsy values
- [ ] I can narrow `string | undefined` and `string | null` with `if (value)`
- [ ] I can use `if (!value)` and continue after an early return
- [ ] I know `0` and `""` are falsy
- [ ] I know when an explicit `undefined` check is safer
- [ ] I know truthiness checks remain at runtime
