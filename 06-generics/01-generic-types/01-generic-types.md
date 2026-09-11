# Generic Types

Learn how TypeScript generics use type parameters so the same code can work with many types while preserving type information.

Example file for this lesson:

- `generic-types-example.ts`

---

## What generics are

Generics allow code to work with multiple types while preserving type information.

A generic type parameter acts as a placeholder for a type. You write the logic once, and TypeScript fills in the real type when the code is used.

---

## Why generics are useful

Generics support:

- **code reuse** — one definition works for many types
- **type safety** — TypeScript still checks the specific type in each use

You do not need a separate implementation for every type. Generics preserve type information across the call.

---

## Basic generic syntax

The common syntax is:

```ts
<T>
```

`T` is a type parameter.

```ts
function identity<T>(value: T): T {
  return value;
}
```

`value` has type `T`, and the function returns `T`. Whatever type goes in comes out.

---

## Generic functions

A function can receive and return the same generic type.

```ts
function identity<T>(value: T): T {
  return value;
}

const text = identity("hello");
const number = identity(42);
```

TypeScript can infer the type parameter from the argument.

---

## Explicit generic type arguments

The caller can explicitly provide the type:

```ts
identity<string>("hello");
identity<number>(42);
```

Use the explicit form when you want the type argument to be clear, or when TypeScript cannot infer it the way you intend.

```ts
// identity<number>("hello"); // invalid: string is not number
```

---

## Type inference with generics

TypeScript usually infers `T` automatically from the supplied argument.

```ts
const result = identity("TypeScript");
```

`result` is inferred as `string`. You do not need to write `identity<string>(...)` in most cases.

---

## Multiple generic type parameters

You can declare more than one type parameter:

```ts
<T, U>
```

```ts
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

createPair("age", 30);
createPair(true, "enabled");
```

Each parameter can stand for a different type. This lesson does not introduce generic constraints.

---

## Generic type aliases

A type alias can take a type parameter:

```ts
type Box<T> = {
  value: T;
};

const stringBox: Box<string> = {
  value: "hello",
};

const numberBox: Box<number> = {
  value: 100,
};
```

`Box<string>` and `Box<number>` are two concrete uses of the same alias.

---

## Generic interfaces

An interface can also take a type parameter:

```ts
interface Container<T> {
  value: T;
}
```

You can create `Container<string>`, `Container<number>`, and so on. This lesson uses interfaces only to show the generic syntax.

---

## Generic classes

A class can declare a type parameter and use it for properties and methods:

```ts
class StorageBox<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const textStorage = new StorageBox<string>("TypeScript");
const numberStorage = new StorageBox<number>(100);
```

The focus is the generic type parameter, not advanced class features.

---

## Generic type reuse

The same generic definition can produce multiple strongly typed versions depending on the type argument.

One `Box<T>`, `Container<T>`, or `StorageBox<T>` definition becomes many concrete types: `Box<string>`, `Box<number>`, and so on.

---

## Generic naming conventions

Common conventions:

- `T` often means Type
- `U` is often used for a second type
- more descriptive names may also be used

```ts
function wrap<ValueType>(value: ValueType): ValueType {
  return value;
}
```

This lesson does not introduce advanced style rules.

---

## Key Takeaways

- Generics use type parameters.
- `<T>` is a common generic syntax.
- TypeScript can infer generic type arguments.
- Generic type arguments can also be explicit.
- Multiple generic parameters are possible.
- Functions, type aliases, interfaces, and classes can be generic.
- Generics provide reusable code while preserving type safety.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 06-generics/01-generic-types/generic-types-example.ts
```

Execute:

```bash
npx tsx 06-generics/01-generic-types/generic-types-example.ts
```

---

## Completion checklist

- [ ] I can write a generic function with `<T>`
- [ ] I understand inference and explicit type arguments
- [ ] I can use multiple type parameters such as `<T, U>`
- [ ] I can write a generic type alias, interface, and class
- [ ] I know generics reuse one definition with strong typing
- [ ] I ran the type-check and execute commands above
