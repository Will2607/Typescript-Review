# 01 — boolean

Learn how the `boolean` primitive type works in TypeScript: `true`, `false`, comparisons, logical operators, and common mistakes.

Example file for this lesson:

- `boolean-example.ts`

---

## 1. What does `boolean` represent?

The `boolean` type represents a **yes/no** value: a condition that is either on or off, allowed or denied, completed or not completed.

In programs, booleans often answer questions such as:

- Is this feature enabled?
- Did the user pass a check?
- Should this branch of code run?

---

## 2. Only two values: `true` and `false`

A `boolean` value can be only one of these:

```ts
true
false
```

There is no third boolean value. Anything else (`"true"`, `1`, `0`, and so on) is a **different type**.

---

## 3. Type inference vs explicit annotation

### Type inference

You assign a value, and TypeScript **infers** the type from that value:

```ts
const isTypeScriptEnabled = true;
// inferred as boolean
```

### Explicit annotation

You write the type yourself after the name:

```ts
const isLessonCompleted: boolean = false;
```

Both styles create a boolean. Inference is shorter. An explicit annotation makes the intended type visible in the source.

---

## 4. Simple examples of both

```ts
// Inference
const isLoggedIn = true;

// Explicit annotation
const isEmailVerified: boolean = false;
```

See `boolean-example.ts` for the same idea with `isTypeScriptEnabled` and `isLessonCompleted`.

---

## 5. Comparisons produce boolean values

When you compare values, the result of the comparison is a **boolean**.

You do not have to write `: boolean` for the result — TypeScript already knows a comparison yields `true` or `false`.

---

## 6. Comparison examples

```ts
const minimumAge = 18;
const userAge = 21;

const isAdult = userAge >= minimumAge; // true
const isChild = userAge < minimumAge;  // false
const isTooYoung = userAge < 18;       // false
const isExactEighteen = userAge === 18; // false
const isAtLeastEighteen = userAge >= 18; // true
```

Useful operators for beginners:

| Operator | Meaning |
| --- | --- |
| `===` | equal value and equal type |
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal |

---

## 7. Where booleans are used

Booleans appear in many everyday situations:

| Use | Example idea |
| --- | --- |
| **Conditions** | `if (canAccessPlatform) { ... }` |
| **Functions** | parameters and return values that are yes/no |
| **States** | `isLessonCompleted`, `isLoading` |
| **Validations** | “does this value pass the rule?” |
| **Permissions** | “is this user allowed?” |

In `boolean-example.ts`, `canAccessPlatform` is a permission-style flag, and `buildAccessMessage` turns that flag into a user-facing string.

---

## 8. Logical operators

### `&&` — AND

`true` only when **both** sides are true:

```ts
const hasCompletedSetup = isTypeScriptEnabled && canAccessPlatform;
```

### `||` — OR

`true` when **at least one** side is true:

```ts
const needsAttention = isLessonCompleted || !canAccessPlatform;
```

### `!` — NOT

Flips a boolean to the opposite value:

```ts
const isBlocked = !canAccessPlatform;
```

`toggleStatus` in the example file uses `!` to return the opposite status.

---

## 9. TypeScript does not treat these as the same

These are **not** interchangeable with real booleans:

| Value | Type | Same as boolean? |
| --- | --- | --- |
| `true` | boolean | yes |
| `"true"` | string | no |
| `false` | boolean | yes |
| `0` | number | no |
| `1` | number | no |

So TypeScript rejects assignments like:

```ts
// const wrongFlag: boolean = "true";
// const anotherWrongFlag: boolean = 1;
```

---

## 10. Real booleans vs truthy / falsy (brief)

JavaScript conditions can treat many values as “kind of true” or “kind of false.” Those informal categories are called:

- **truthy** — values that act like true inside `if (...)`
- **falsy** — values that act like false inside `if (...)` (for example `0`, `""`, `null`, `undefined`, `NaN`, `false`)

A **real boolean** is only `true` or `false`.

---

## 11. Truthy / falsy do not become type `boolean` automatically

Truthy and falsy describe **how JavaScript evaluates** a value in a condition.

They do **not** automatically convert that value into the TypeScript type `boolean`.

Example idea:

- `if (userAge)` may run because `21` is truthy
- but `userAge` is still a **number**, not a `boolean`

If you need a true `boolean` type, convert explicitly (next section) or use a comparison that produces `true` / `false`.

---

## 12. Explicit conversion to boolean

When you intentionally want a boolean:

```ts
const flagFromBooleanFunction = Boolean(1); // true
const flagFromDoubleNot = !!"";             // false
```

- `Boolean(value)` calls the boolean converter
- `!!value` is a short pattern that also yields a boolean

Use these when you mean “turn this into true/false,” not when a clear comparison like `userAge >= minimumAge` is already available.

---

## 13. Keep this introductory

This lesson stays at the beginner level:

- recognize `boolean`
- use comparisons and logical operators
- avoid confusing strings/numbers with booleans

Topics such as **narrowing** and **type guards** come later.

---

## 14. Common mistakes

| Mistake | Why it fails or confuses |
| --- | --- |
| Using `"true"` as a string | That is a `string`, not a `boolean` |
| Using `0` or `1` as if they were booleans | Those are `number` values |
| Confusing assignment `=` with comparison `===` | `=` stores a value; `===` asks a true/false question |
| Writing noisy conditions like `isActive === true` | Often unnecessary when `isActive` is already boolean |

---

## 15. Prefer the simple condition

If `isActive` is already a boolean, prefer:

```ts
if (isActive) {
  // ...
}
```

instead of:

```ts
if (isActive === true) {
  // ...
}
```

Both can work, but the first form is clearer when the variable is already `true` or `false`.

---

## 16. When to annotate vs when inference is enough

**Inference is often enough** when the value is obvious:

```ts
const isReady = true;
```

**An explicit annotation can help** when you want the type to be obvious to readers, or when you are declaring a value that must stay boolean even if someone later changes the initializer carelessly:

```ts
const isLessonCompleted: boolean = false;
```

For local constants initialized with `true` / `false`, inference is usually fine. For function parameters and return types, annotations are especially useful because they document the contract of the function.

---

## 17. Validate and run the example

Type-check without emitting JavaScript:

```bash
npx tsc --noEmit 02-typescript-types/01-primitive-types/01-boolean/boolean-example.ts
```

Run the example:

```bash
npx tsx 02-typescript-types/01-primitive-types/01-boolean/boolean-example.ts
```

---

## Review questions

1. What are the only two values of the `boolean` type?
2. What is the difference between type inference and an explicit `: boolean` annotation?
3. Why does a comparison such as `userAge >= minimumAge` produce a boolean?
4. What do `&&`, `||`, and `!` mean?
5. Why are `"true"` and `1` not valid `boolean` values in TypeScript?

---

## Completion checklist

- [ ] I know that `boolean` means only `true` or `false`
- [ ] I can tell inference apart from an explicit annotation
- [ ] I understand that comparisons produce boolean values
- [ ] I can use `===`, `>`, `<`, and `>=` in simple checks
- [ ] I recognize boolean uses in conditions, functions, state, validation, and permissions
- [ ] I can use `&&`, `||`, and `!`
- [ ] I know TypeScript rejects `"true"`, `0`, and `1` as booleans
- [ ] I understand the basic idea of truthy/falsy without confusing it with type `boolean`
- [ ] I know `Boolean(value)` and `!!value` convert explicitly
- [ ] I prefer `if (isActive)` over `if (isActive === true)` when the value is already boolean
