# 05 — undefined

Learn what `undefined` means in JavaScript and TypeScript, how it appears at runtime, and how it differs from `void` and `null`.

Example file for this lesson:

- `undefined-example.ts`

This lesson assumes **strict mode** with **`strictNullChecks`** enabled.

---

## 1. What does `undefined` represent?

`undefined` usually means a value is **missing** or **not assigned yet**.

It is one of the basic ways JavaScript represents absence. TypeScript can also track that absence in the type system.

---

## 2. A value and a type

`undefined` is both:

- a **JavaScript value** you can observe at runtime
- a **TypeScript type** you can write in annotations

```ts
const missingLesson: undefined = undefined;
```

---

## 3. Common situations where `undefined` appears

| Situation | Idea |
| --- | --- |
| Variable declared without a value | No assigned value yet |
| Optional property that is not present | Reading it may yield `undefined` |
| Function with no `return` | Runtime result is `undefined` |
| Search that finds nothing | Function may intentionally return `undefined` |
| Missing array index | Accessing a non-existent position can yield `undefined` at runtime |

Example of a “not found” return:

```ts
function findLessonTitle(lessonNumber: number): string | undefined {
  // return a title, or undefined when missing
}
```

---

## 4. Modeling possible absence with `string | undefined`

When a value might be text **or** missing, TypeScript can write:

```ts
let selectedTopic: string | undefined;
```

This means the variable may hold:

- a `string`, or
- `undefined`

---

## 5. Needed context only — not a full unions lesson

`string | undefined` uses union syntax, but this lesson introduces it **only** as the practical way to talk about optional/missing values.

A full lesson on union types comes later.

---

## 6–8. How to check for `undefined`

Use strict comparisons:

```ts
value === undefined
value !== undefined
```

A simple, explicit check:

```ts
if (value !== undefined) {
  // value can be used here
}
```

Example from the lesson file:

```ts
if (existingTitle !== undefined) {
  console.log(existingTitle.toUpperCase());
}
```

Avoid optional chaining in this lesson so the check stays visible and deliberate.

---

## 9–10. TypeScript tightens the type inside the condition

Inside `if (value !== undefined) { ... }`, TypeScript treats `value` more specifically (for example as `string` instead of `string | undefined`).

That behavior is a form of control-flow analysis. Mention it briefly here; deeper **narrowing** / type-guard lessons come later.

---

## 11–12. Optional properties: `property?: string`

An optional property is written like this:

```ts
const courseProgress: { title: string; completedAt?: string } = {
  title: "Primitive Types",
};
```

Important precision:

- an optional property **may be absent**
- reading a missing optional property can produce `undefined` at runtime
- that is **not** the same as saying the property always exists and stores `undefined`

So: absence and “present with value `undefined`” are related ideas, but not identical.

---

## 13. `typeof undefined`

```ts
typeof undefined === "undefined"
```

`typeof undefined` produces the string `"undefined"`.

---

## 14. `undefined` vs `void`

| Concept | Role |
| --- | --- |
| `undefined` | A specific value and a specific type |
| `void` | Mainly describes functions whose return value should not be used |

Also:

- a function with no `return` produces `undefined` at runtime
- TypeScript often types such action-style functions as returning `void`
- `void` and `undefined` are **related**, but **not exactly equal**

```ts
function logCurrentLesson(): void {
  console.log("Current lesson: undefined");
}

const logCurrentLessonResult = logCurrentLesson();
// runtime observation: undefined
```

---

## 15. `undefined` vs `null` (brief preview)

| Value | Beginner intuition |
| --- | --- |
| `undefined` | Often “not assigned” / missing |
| `null` | Often an intentional empty value chosen by the programmer |

`null` is only introduced here for contrast. The next lesson covers `null` properly.

Do not mix them casually. With `strictNullChecks`, they are distinct.

---

## 16. Relationship with `strictNullChecks`

With `strictNullChecks` enabled (via strict mode):

- you generally **cannot** assign `undefined` directly to `string`, `number`, or `boolean`
- if absence is allowed, the type must include it explicitly, for example `string | undefined`

```ts
// const wrongString: string = undefined; // error under strictNullChecks
const maybeTitle: string | undefined = undefined; // allowed
```

---

## 17. Common mistakes

| Mistake | Better approach |
| --- | --- |
| Using a possibly `undefined` value without a check | Check with `!== undefined` first |
| Confusing `undefined` with `void` | Value/type vs “do not consume return value” |
| Confusing `undefined` with `null` | Different meanings; `null` comes next |
| Assuming an optional property always exists | It may be absent |
| Using loose comparisons unnecessarily | Prefer `===` / `!==` |
| Assigning `undefined` everywhere by habit | Allow absence only when the design needs it |

---

## 18. Good practices

- Check missing values before using them
- Keep strict mode enabled
- Include `undefined` in a type only when absence is valid
- Do not hide problems with type assertions or `any`
- For search helpers, make “found” vs “not found” returns clear (`string | undefined` is one simple pattern)

---

## 19–20. Comparison table

| Concept | What it is | Typical meaning | Notes |
| --- | --- | --- | --- |
| `undefined` | Value + type | Missing / not assigned | Check before use |
| `void` | Mostly a return-type signal | Do not use the returned value | Related to runtime `undefined`, not identical |
| `null` | Value + type (next lesson) | Often intentional empty | Preview only here |

---

## 21. Validate and run the example

Type-check without emitting JavaScript:

```bash
npx tsc --noEmit 02-typescript-types/01-primitive-types/05-undefined/undefined-example.ts
```

Run the example:

```bash
npx tsx 02-typescript-types/01-primitive-types/05-undefined/undefined-example.ts
```

---

## Review questions

1. In what sense is `undefined` both a value and a type?
2. Why does TypeScript use types like `string | undefined`?
3. How should you check a value before calling a string method on `string | undefined`?
4. What is the difference between an optional property being absent and treating it as always present?
5. How do `undefined` and `void` differ, even if a `void` function can produce `undefined` at runtime?

---

## Completion checklist

- [ ] I know `undefined` is a JavaScript value and a TypeScript type
- [ ] I recognize common sources of `undefined`
- [ ] I understand `string | undefined` as “text or missing” (without a full unions deep-dive)
- [ ] I can check with `=== undefined` / `!== undefined`
- [ ] I check before using methods on possibly missing values
- [ ] I understand optional properties may be absent
- [ ] I know `typeof undefined` is `"undefined"`
- [ ] I can contrast `undefined` with `void` and briefly with `null`
- [ ] I understand why `strictNullChecks` rejects assigning `undefined` to plain `string` / `number` / `boolean`
- [ ] I know common mistakes and safer habits around missing values
