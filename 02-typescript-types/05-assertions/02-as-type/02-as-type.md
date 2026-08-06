# Type Assertions with `as Type`

Learn how TypeScript type assertions with `as Type` tell the type checker to treat a value as a specific type, without converting that value at runtime.

Example file for this lesson:

- `as-type-example.ts`

> **Important:** A type assertion is not validation. Use it only when you already know enough about the value. Prefer letting TypeScript infer or annotate the correct type when it already can.

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what a type assertion is
- write `value as Type`
- use assertions with `unknown` and object shapes
- distinguish assertions from type annotations
- recognize that assertions do not convert runtime values
- understand the risks of incorrect assertions

---

## What is a type assertion?

A **type assertion** tells TypeScript to treat a value as a specific type.

It is a message to the type checker, not a runtime conversion.

```ts
const unknownText: unknown = "TypeScript";
const assertedText = unknownText as string;
```

---

## Basic `as Type` syntax

```ts
value as Type
```

Examples:

```ts
unknownText as string
unknownAmount as number
unknownUser as { id: number; name: string }
```

This lesson uses only the `as Type` form.

---

## When type assertions are useful

Assertions can help when:

- you know more about a value than TypeScript currently does
- a value starts as `unknown`
- you already trust the shape of an object and need property access

They should be avoided when TypeScript can already determine the correct type on its own.

---

## Type assertions do not convert values

This is the most important beginner warning.

```ts
const value: unknown = "123";
const numberValue = value as number;
```

What happens:

- TypeScript treats `numberValue` as a `number`
- at runtime, the value is still the string `"123"`
- the assertion did **not** convert `"123"` into `123`

```ts
console.log(numberValue);        // "123"
console.log(typeof numberValue); // "string"
```

Assertions change type checking, not JavaScript conversion.

---

## Assertions with `unknown`

An `unknown` value cannot be used as a specific type directly.

With an assertion, you can tell TypeScript to treat it as a known type:

```ts
const unknownText: unknown = "TypeScript";
const assertedText = unknownText as string;

console.log(assertedText.length);
console.log(assertedText.toUpperCase());
```

This compiles because of the assertion. It is still your responsibility to be correct about the runtime value.

---

## Assertions with object values

You can assert an object to an inline object type when you know its expected structure:

```ts
const unknownUser: unknown = {
  id: 1,
  name: "Alice",
};

const assertedUser = unknownUser as {
  id: number;
  name: string;
};
```

---

## Accessing known properties after an assertion

After asserting an object shape, TypeScript allows access to the declared properties:

```ts
console.log(assertedUser.id);
console.log(assertedUser.name);
```

If the assertion is wrong, those accesses may still fail at runtime.

---

## Assertions and runtime behavior

Type assertions:

- affect TypeScript type checking only
- are removed during compilation
- do not validate values
- do not convert values

At runtime, you still have ordinary JavaScript values.

---

## Risks of incorrect assertions

Incorrect assertions can compile and then fail when the program runs.

Examples of risk:

- asserting a string as a `number`, then doing arithmetic
- asserting an incomplete object as a fuller shape, then reading a missing property

```ts
const incompleteObject: unknown = { id: 1 };

// const incorrectUser = incompleteObject as {
//   id: number;
//   name: string;
// };
// console.log(incorrectUser.name.toUpperCase()); // runtime risk
```

Use assertions only when there is sufficient knowledge about the value.  
Do not treat them as a replacement for proper validation.

---

## Type assertions versus type annotations

### Type annotation

Declares the expected type of a variable:

```ts
const language: string = "TypeScript";
```

### Type assertion

Tells TypeScript how to treat an existing expression:

```ts
const receivedValue: unknown = "TypeScript";
const language = receivedValue as string;
```

| Feature | Annotation (`: Type`) | Assertion (`as Type`) |
| --- | --- | --- |
| Main idea | Declare the variable’s expected type | Tell TypeScript how to treat a value |
| Typical use | New typed bindings | Existing uncertain expressions |
| Runtime conversion | No | No |
| Runtime validation | No | No |

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Thinking `as number` converts `"123"` to `123` | Use real conversion when needed; assertions only change checking |
| Asserting to silence every type error | Fix the real type or validate uncertain values |
| Accessing properties on `unknown` without help | Check the value, or assert only when you truly know the type |
| Asserting an incomplete object into a fuller shape | Make sure the runtime object actually has those properties |
| Using assertions when inference already works | Prefer the type TypeScript already knows |

---

## Summary

- `value as Type` tells TypeScript to treat a value as a specific type.
- Assertions do not convert or validate runtime values.
- They are useful when you know more than TypeScript can infer.
- `unknown` values can be asserted to specific types.
- Object values can be asserted to inline shapes for property access.
- Incorrect assertions can compile and still fail at runtime.
- Annotations declare expected types; assertions reinterpret existing expressions.
- Prefer assertions only when necessary and justified.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/05-assertions/02-as-type/as-type-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/05-assertions/02-as-type/as-type-example.ts
```

---

## Completion checklist

- [ ] I know what a type assertion is
- [ ] I can write `value as Type`
- [ ] I understand assertions do not convert runtime values
- [ ] I can assert `unknown` to `string`, `number`, or an object shape
- [ ] I can access properties after asserting an object type
- [ ] I can contrast annotations with assertions
- [ ] I understand the risks of incorrect assertions
- [ ] I know assertions are erased at compile time
