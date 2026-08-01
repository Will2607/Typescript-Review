# 06 — null

Learn what `null` means in JavaScript and TypeScript, how it expresses **intentional absence**, and how it differs from `undefined` and `void`.

Example file for this lesson:

- `null-example.ts`

This lesson assumes **strict mode** with **`strictNullChecks`** enabled.

---

## 1. What does `null` represent?

`null` is a deliberate “empty” value.

It usually means: “there is no value here **on purpose**,” not merely “we forgot to assign something.”

`null` is **not** automatically an error. It is a valid state when your design needs an explicit empty value.

---

## 2. A value, a type, and intentional absence

`null` is:

- a real **JavaScript value**
- a **TypeScript type**
- a common way to express **intentional absence**

```ts
const emptySelection: null = null;
```

---

## 3. Situations where `null` is useful

| Situation | Example meaning |
| --- | --- |
| No item selected | User cleared a course selection |
| Search found nothing | `findStudentName` returns `null` |
| Relationship removed on purpose | Link deleted intentionally |
| Session not finished yet | `endedAt: null` while still active |
| Field cleared explicitly | Value wiped by the user or system |

These are design choices. `null` is one clear option for “empty on purpose.”

---

## 4–6. Modeling “value or null”: `string | null`

When text may exist **or** be intentionally empty:

```ts
let selectedCourse: string | null = null;
```

This allows:

- a valid `string`
- intentional absence with `null`

`string | null` uses union syntax, but this lesson introduces it **only** as context for `null`. A full unions lesson comes later.

---

## 7–10. How to check for `null`

Use strict comparisons:

```ts
value === null
value !== null
```

Simple condition:

```ts
if (value !== null) {
  console.log(value.toUpperCase());
}
```

Inside that block, TypeScript treats `value` as a usable `string` (for a `string | null` input).

That tightening is mentioned here only briefly. Deeper **narrowing** / type-guard lessons come later.

Do **not** use optional chaining or nullish coalescing in this lesson — keep checks explicit.

---

## 11–14. `typeof null` is misleading

```ts
typeof null === "object"
```

Important facts:

- `typeof null` produces `"object"`
- this is a **historical JavaScript quirk**
- `typeof` is **not** the correct way to detect `null` specifically

Prefer:

```ts
value === null
```

---

## 15–16. `null` vs `undefined` (common conventions)

| Concept | Frequent meaning |
| --- | --- |
| `null` | Explicit, intentional absence — usually assigned on purpose |
| `undefined` | Not assigned, missing property, unavailable yet, or “not found” in some designs |

These are **common conventions**, not universal laws.

A real application should define a consistent rule, for example:

- `undefined` → selection has not been loaded yet
- `null` → user intentionally cleared the selection
- `string` → a real selection exists

```ts
let favoriteTopic: string | null | undefined = undefined;
favoriteTopic = null;   // cleared on purpose
favoriteTopic = "boolean"; // loaded value
```

`null` is **not** the only correct way to represent absence. Choose the contract that fits your API.

---

## 17. `null` vs `void`

| Concept | Role |
| --- | --- |
| `null` | A specific value and a specific type |
| `void` | Mainly describes functions whose return value should not be consumed |

They are **not** equivalent.

---

## 18. Relationship with `strictNullChecks`

With `strictNullChecks` enabled:

- you generally **cannot** assign `null` directly to plain `string`, `number`, or `boolean`
- if `null` is a valid state, include it in the type: `string | null`

```ts
// const wrongString: string = null; // error under strictNullChecks
const maybeCourse: string | null = null; // allowed
```

---

## 19–20. Present `null` vs absent optional property

A property typed as `string | null` **exists on the object** and can store `null`:

```ts
const userSession: { userName: string; endedAt: string | null } = {
  userName: "ada",
  endedAt: null, // property is present; value is null
};
```

An optional property (`endedAt?: string`) may be **completely absent**.

Introductory contrast:

- `endedAt: null` → key is there, value is intentional empty
- missing optional property → key may not be there at all

Both can relate to “no date,” but they are not the same shape in the object.

---

## 21. Common mistakes

| Mistake | Better approach |
| --- | --- |
| Using a possibly `null` value without a check | Check with `!== null` first |
| Treating `null` and `undefined` as identical | Define and follow a clear convention |
| Detecting `null` with `typeof` | Use `value === null` |
| Assigning `null` everywhere without design reasons | Allow `null` only when absence is a real state |
| Using `value == null` without understanding it | Prefer strict checks in this lesson |
| Hiding issues with `any` or type assertions | Keep types honest and check values |

---

## 22. Good practices

- Use `null` when intentional absence is a valid state
- Keep a consistent `null` / `undefined` convention
- Check before using the value
- Keep strict mode enabled
- Avoid unnecessary missing-value states
- Design function returns clearly (`string | null` is one simple pattern for “found or intentionally empty / not found”)

---

## 23. Comparison table

| Concept | What it is | Typical meaning | Notes |
| --- | --- | --- | --- |
| `null` | Value + type | Intentional empty | Assigned deliberately in many designs |
| `undefined` | Value + type | Missing / not assigned / not ready | Also common for “not found,” depending on API |
| `void` | Mostly a return-type signal | Do not consume the returned value | Not a general empty-data value |

---

## 24–27. Brief note on `== null`

Loose equality:

```ts
value == null
```

can match **both** `null` and `undefined`.

For this lesson, prefer strict comparisons and keep each check clear:

```ts
value === null
value === undefined
```

No deep dive into coercion or advanced operators here.

---

## 28. Validate and run the example

Type-check without emitting JavaScript:

```bash
npx tsc --noEmit 02-typescript-types/01-primitive-types/06-null/null-example.ts
```

Run the example:

```bash
npx tsx 02-typescript-types/01-primitive-types/06-null/null-example.ts
```

---

## Review questions

1. What does `null` usually communicate that is different from a forgotten assignment?
2. Why is `typeof null === "object"` not a reliable null check?
3. How should you safely use a `string` method on a `string | null` value?
4. How can `null` and `undefined` represent different application states for the same field?
5. Why are `null` and `void` not equivalent concepts?

---

## Completion checklist

- [ ] I know `null` is a JavaScript value and a TypeScript type for intentional absence
- [ ] I understand common use cases for `null`
- [ ] I can use `string | null` as “text or intentional empty” without a full unions deep-dive
- [ ] I can check with `=== null` / `!== null`
- [ ] I know `typeof null` is `"object"` and should not be used to detect `null`
- [ ] I can contrast `null` with `undefined` and `void`
- [ ] I understand `strictNullChecks` rejects assigning `null` to plain `string` / `number` / `boolean`
- [ ] I know a `null` property can be present on an object with an empty value
- [ ] I recognize common mistakes and safer habits around `null`
