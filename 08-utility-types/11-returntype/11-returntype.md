# ReturnType

Learn how TypeScript’s built-in `ReturnType<T>` utility type extracts the return type of a function type.

Example file for this lesson:

- `returntype-example.ts`

---

## What `ReturnType<T>` does

`ReturnType<T>` extracts the return type from a function type.

```ts
type Result = ReturnType<
  () => string
>;
```

`Result` is `string`.

---

## What `T` represents

`T` must represent a function type.

```ts
ReturnType<(a: number, b: number) => number>
```

This lesson keeps that rule simple.

---

## Basic function type example

```ts
type AddFunction =
  (a: number, b: number) => number;

type AddResult =
  ReturnType<AddFunction>;
```

The result is `number`.

---

## ReturnType with an existing function

```ts
function getUsername(): string {
  return "Alice";
}

type Username =
  ReturnType<typeof getUsername>;
```

- `typeof getUsername` obtains the function type
- `ReturnType` extracts its return type

This lesson does not develop `typeof` as a separate topic.

---

## Function returning an object

```ts
function createUser() {
  return {
    id: 1,
    name: "Alice",
    active: true,
  };
}

type UserResult =
  ReturnType<typeof createUser>;
```

TypeScript derives the corresponding object type from the returned value.

---

## Reusing the extracted type

```ts
const user: UserResult = {
  id: 2,
  name: "Bob",
  active: false,
};
```

This avoids manually repeating the return type.

---

## Function returning a union

```ts
function getStatus(
  success: boolean
): "success" | "error" {
  return success ? "success" : "error";
}

type StatusResult =
  ReturnType<typeof getStatus>;
```

The result is `"success" | "error"`.

---

## Function returning void

```ts
function logMessage(
  message: string
): void {
  console.log(message);
}

type LogResult =
  ReturnType<typeof logMessage>;
```

The result is `void`.

---

## Function type aliases

```ts
type Formatter =
  (value: string) => string;

type FormatterResult =
  ReturnType<Formatter>;
```

The result is `string`.

---

## Type checking

Values assigned to a type created with `ReturnType<T>` must match the extracted return type.

```ts
type NumberResult =
  ReturnType<() => number>;

const result: NumberResult = 42;

// const invalidResult: NumberResult = "42";
```

---

## Parameters vs ReturnType

- `Parameters<T>` extracts function parameter types as a tuple
- `ReturnType<T>` extracts the function’s return type

```ts
type ExampleFunction =
  (name: string, age: number) => boolean;

type ExampleParams =
  Parameters<ExampleFunction>;

type ExampleResult =
  ReturnType<ExampleFunction>;
```

- `ExampleParams` is `[name: string, age: number]`
- `ExampleResult` is `boolean`

This comparison stays brief. Parameters is not taught again here.

---

## Typical use cases

`ReturnType<T>` can be useful for:

- reusing a function’s output type
- avoiding duplicated object type declarations
- keeping derived types synchronized with functions
- typing variables that should match function results

This lesson does not introduce advanced architectural patterns.

---

## Key Takeaways

- `ReturnType<T>` extracts a function’s return type.
- `T` must be a function type.
- `typeof` can be used with existing functions.
- Primitive, object, union, and void return types are preserved.
- `ReturnType` helps avoid repeating function result types.
- `Parameters` extracts inputs while `ReturnType` extracts output.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/11-returntype/returntype-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/11-returntype/returntype-example.ts
```
