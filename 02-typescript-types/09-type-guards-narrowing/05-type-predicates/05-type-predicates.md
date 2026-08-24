# Type Predicates

Learn how TypeScript type predicates (`parameter is Type`) tell the type checker how to narrow a value after a custom boolean check.

Example file for this lesson:

- `type-predicates-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what a type predicate is
- write `parameterName is Type` as a function return type
- implement a user-defined type guard that returns a boolean
- use a predicate in an `if` statement to narrow a union
- reuse the same predicate in more than one place
- understand that the predicate annotation is compile-time only

---

## What is a type predicate?

A **type predicate** is a special TypeScript function return type.

It tells TypeScript:

> If this function returns `true`, treat the checked parameter as this type.

The function still returns a normal boolean at runtime. The predicate syntax adds extra type information for the compiler.

---

## Basic `parameter is Type` syntax

```ts
function isString(value: string | number): value is string {
  return typeof value === "string";
}
```

Break it down:

| Part | Meaning |
| --- | --- |
| `value` | the function parameter being checked |
| `is` | part of TypeScript’s type predicate syntax |
| `string` | the type TypeScript should use when the function returns `true` |

The parameter name in the predicate must match a parameter of the function.

```ts
// function invalidPredicate(value: string | number): other is string {
//   return typeof value === "string";
// }
```

`other` is not a parameter of that function, so the predicate form is invalid.

---

## User-defined type guards

Type predicates are commonly used to create reusable **custom type guards**.

Instead of repeating the same check in many places, you write one function whose return type is a predicate:

```ts
function isString(value: string | number): value is string {
  return typeof value === "string";
}
```

`typeof` here is only the runtime test inside the predicate. The lesson topic is the predicate itself.

---

## Returning a boolean from a predicate function

At runtime, the function returns `true` or `false`.

```ts
isString("TypeScript"); // true
isString(21);           // false
```

There is no extra runtime object created for `value is string`. That annotation is TypeScript-only.

---

## Narrowing with a custom predicate

```ts
function printValue(value: string | number): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}
```

Inside the `if` block, TypeScript narrows `value` to `string`.  
In the `else` branch, the remaining possibility is `number`.

`isString(value)` returns a boolean at runtime, but TypeScript uses the predicate return type to narrow `value`.

---

## Accessing type-specific properties after narrowing

After a successful predicate, you can use members that belong only to the narrowed type:

```ts
if (isString(value)) {
  console.log(value.length);
  console.log(value.toUpperCase());
}
```

Without the predicate (or another check), those operations are unsafe on `string | number`.

---

## Reusing predicate functions

A predicate can centralize reusable narrowing logic:

```ts
if (isTextMessage(message)) {
  console.log(message.text.toUpperCase());
}
```

The same `isTextMessage` function can be used in several `if` statements instead of copying the check each time.

---

## Type predicates with object unions

Object unions can use a predicate as well.

The runtime test might look at a property. The predicate return type tells TypeScript how to narrow:

```ts
type TextMessage = {
  text: string;
};

type ImageMessage = {
  url: string;
};

type Message = TextMessage | ImageMessage;

function isTextMessage(message: Message): message is TextMessage {
  return "text" in message;
}
```

The `"text" in message` check is the runtime test.  
`message is TextMessage` is the TypeScript narrowing instruction.

This is not an independent lesson on the `in` operator.

---

## Type predicates versus ordinary boolean functions

Ordinary boolean function:

```ts
function checkString(value: string | number): boolean {
  return typeof value === "string";
}
```

Type predicate:

```ts
function isString(value: string | number): value is string {
  return typeof value === "string";
}
```

Both return booleans at runtime.

The difference is that `value is string` explicitly communicates narrowing information to TypeScript.

This lesson focuses on explicit user-defined predicates and their purpose.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Using type-specific methods before a predicate | Call the predicate first |
| Writing `other is string` when the parameter is `value` | The predicate name must match a real parameter |
| Assuming the predicate magically validates data | You must write correct check logic |
| Returning the wrong condition | TypeScript trusts the declared predicate |
| Thinking `value is string` exists at runtime | It is erased during compilation |

Incorrect predicate logic can mislead TypeScript:

```ts
function isString(value: string | number): value is string {
  return typeof value === "number";
}
```

TypeScript still trusts `value is string` when this function returns `true`, even though the runtime check is wrong. Do not write predicates this way.

---

## Runtime behavior

A function such as:

```ts
function isString(value: string | number): value is string {
  return typeof value === "string";
}
```

becomes ordinary JavaScript logic at runtime.

Conceptually, the runtime behavior is simply a boolean function performing:

```js
typeof value === "string"
```

The TypeScript-only predicate annotation:

```text
value is string
```

is removed during compilation.

---

## Summary

- A type predicate is a return type of the form `parameter is Type`.
- The function still returns a boolean at runtime.
- When it returns `true`, TypeScript narrows the parameter to that type.
- Predicates are reusable custom type guards.
- The parameter name in the predicate must match a function parameter.
- The implementation must check the value correctly.
- Incorrect logic can make the type system believe something false at runtime.
- The predicate syntax is compile-time only; JavaScript keeps the boolean function.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/09-type-guards-narrowing/05-type-predicates/type-predicates-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/09-type-guards-narrowing/05-type-predicates/type-predicates-example.ts
```

---

## Completion checklist

- [ ] I know what `parameter is Type` means
- [ ] I can write a predicate that returns a boolean
- [ ] I can use a predicate in an `if` statement to narrow a union
- [ ] I can access type-specific members after a successful predicate
- [ ] I can reuse a predicate in more than one place
- [ ] I know the predicate annotation is erased at compile time
- [ ] I know incorrect predicate logic can mislead TypeScript
