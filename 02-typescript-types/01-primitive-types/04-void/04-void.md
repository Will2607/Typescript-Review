# 04 — void

Learn how `void` works in TypeScript as a **function return type** for code that does useful work but does not provide a return value meant to be consumed.

Example file for this lesson:

- `void-example.ts`

---

## 1. What does `void` represent?

In TypeScript, `void` is used mainly to describe a function whose **return value should not be used**.

That does **not** mean the function “does nothing.”  
It means: callers should treat the function as an action, not as a source of a useful result.

---

## 2. Main use: function return types

`void` appears most often here:

```ts
function logCourseStart(courseName: string): void {
  console.log("Starting course:", courseName);
}
```

The function runs. It may print text or trigger other behavior. Its return value is not intended for further computation.

---

## 3. A simple explicit `void` function

```ts
function logCourseStart(courseName: string): void {
  console.log("Starting course:", courseName);
}

logCourseStart("Introduction to TypeScript");
```

The `: void` annotation documents the intent clearly.

---

## 4. What a `void` function can still do

A `void` function can:

- print information with `console.log`
- update state
- modify external data
- perform side effects
- call other functions

So `void` is about the **return contract**, not about “no behavior.”

---

## 5. Side effects (introductory)

A **side effect** is an observable action other than returning a value to the caller.

Examples:

- printing a message
- writing to a variable outside the function
- calling another function that changes something in the program

Many `void` functions exist specifically to perform side effects.

---

## 6. `void` vs `string` vs `number` returns

| Return type | Meaning for the caller |
| --- | --- |
| `void` | Do not rely on a returned value |
| `string` | Expect text back and use it |
| `number` | Expect a numeric result and use it |

```ts
function printLessonProgress(completedLessons: number, totalLessons: number): void {
  console.log("Progress:", completedLessons + "/" + totalLessons);
}

function calculateCompletedPercentage(
  completedLessons: number,
  totalLessons: number,
): number {
  return (completedLessons / totalLessons) * 100;
}
```

- `printLessonProgress` reports progress (side effect)
- `calculateCompletedPercentage` returns a usable number

---

## 7. TypeScript can infer `void`

If a function has no `return` of a useful value, TypeScript can infer a `void` return type:

```ts
function logReminder() {
  console.log("Remember to practice TypeScript every day.");
}
```

Inference is convenient for small local helpers. Explicit `: void` is still useful when you want the contract to be obvious.

---

## 8. Early `return;` is allowed

A `void` function may use `return;` to stop early.

That ends the function **without** returning a useful value:

```ts
function validateAccess(hasAccess: boolean): void {
  if (!hasAccess) {
    return;
  }

  console.log("Access granted");
}
```

`return;` here means “exit now,” not “give the caller a meaningful result.”

---

## 9. Early-exit example in practice

```ts
function updateLessonStatus(lessonName: string, isCompleted: boolean): void {
  if (isCompleted) {
    console.log("Lesson completed:", lessonName);
    return;
  }

  console.log("Lesson still in progress:", lessonName);
}
```

Both branches perform side effects. Neither returns a value meant to be consumed.

---

## 10. `void` in callbacks: `() => void`

Callback types often use `void`:

```ts
() => void
```

This means: “pass me a function that I will call, and I will not use its return value.”

---

## 11. A function that accepts a `void` callback

```ts
function executeCallback(callback: () => void): void {
  callback();
}

executeCallback(() => {
  console.log("Callback executed successfully.");
});
```

`executeCallback` cares that the callback can be invoked. It does not expect a returned string or number.

---

## 12. Runtime observation: `undefined`

In JavaScript, a function without a returned value yields `undefined` at runtime:

```ts
const logResult = logCourseStart("TypeScript");
console.log(logResult); // undefined
```

So you may **observe** `undefined` when inspecting the result.

---

## 13. `void` is not the same as `undefined`

Keep this distinction carefully:

| Concept | Role |
| --- | --- |
| `void` | TypeScript signal: “do not use the return value” |
| `undefined` | A real JavaScript value (and also a TypeScript type studied later) |

Important points:

- `void` describes that the return value should not be consumed
- `undefined` is a specific value/type
- they are related in practice, but **not completely equivalent**
- `undefined` gets its own lesson later

For now: use `void` on functions whose results should be ignored.

---

## 14. Ordinary variables typed as `void` are uncommon

Declaring everyday variables as `void` is unusual and rarely useful:

```ts
// unusual / not recommended for normal data
// const weird: void = true;
```

If you need a value, use a real value type (`string`, `number`, `boolean`, and later `undefined` when appropriate).

---

## 15. Where `void` is most useful

`void` shines in:

- function return signatures
- callback parameter types
- APIs that document “this function performs an action”

That is its main teaching purpose at this stage.

---

## 16. Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Thinking `void` means the function does nothing | It can do plenty; the return value is what should not be used |
| Treating `void` and `undefined` as identical | Related at runtime, not the same concept |
| Using a `void` result in math or assignments to `number` | Do not consume `void` results |
| Forgetting `return` in a `number` / `string` function | Those return types require a real value |
| Using `void` as a general variable type | Prefer `void` on function/callback signatures |

---

## 17. When to write `: void` explicitly

Explicit `: void` is especially helpful for:

- public APIs
- exported functions
- callbacks in shared helpers
- any function where intention should be obvious to readers

```ts
function logCourseStart(courseName: string): void {
  console.log("Starting course:", courseName);
}
```

---

## 18. When inference can be enough

Inference is often fine for:

- small local functions
- simple arrow functions
- callbacks already constrained by a `() => void` parameter type

```ts
executeCallback(() => {
  console.log("Callback executed successfully.");
});
```

---

## 19. Quick comparison table

| Type | Typical role | Caller expectation |
| --- | --- | --- |
| `void` | Action / side effect | Do not use the return value |
| `string` | Text result | Use the returned text |
| `number` | Numeric result | Use the returned number |

---

## 20. Validate and run the example

Type-check without emitting JavaScript:

```bash
npx tsc --noEmit 02-typescript-types/01-primitive-types/04-void/void-example.ts
```

Run the example:

```bash
npx tsx 02-typescript-types/01-primitive-types/04-void/void-example.ts
```

---

## Review questions

1. What does a `void` return type communicate to the caller of a function?
2. Can a `void` function still perform useful work? Give two examples.
3. What does `() => void` mean as a callback type?
4. If you store the result of a `void` function and log it, what value do you often observe at runtime?
5. Why should `void` and `undefined` not be treated as exactly the same concept?

---

## Completion checklist

- [ ] I know `void` is mainly a function return type meaning “do not consume the result”
- [ ] I understand that `void` functions can still log, update state, and run side effects
- [ ] I can write an explicit `: void` function
- [ ] I know TypeScript can infer `void` when no useful value is returned
- [ ] I understand early `return;` in a `void` function
- [ ] I can use a callback typed as `() => void`
- [ ] I can contrast `void` with `string` and `number` return types
- [ ] I know a runtime observation may be `undefined`, without equating `void` to `undefined`
- [ ] I avoid declaring ordinary variables as `void`
- [ ] I recognize common `void` mistakes
