# Awaited

Learn how TypeScript’s built-in `Awaited<T>` utility type represents the value produced after awaiting a Promise-like type.

Example file for this lesson:

- `awaited-example.ts`

---

## What `Awaited<T>` does

`Awaited<T>` represents the type of value produced after awaiting a Promise-like type.

```ts
type Result = Awaited<Promise<string>>;
```

`Result` is:

```ts
string
```

---

## Promise<T> vs resolved value

`Promise<string>` represents an asynchronous value that will eventually produce a string.

`Awaited<Promise<string>>` represents the resolved string type.

```ts
type Pending = Promise<string>;
type Resolved = Awaited<Promise<string>>;
```

- `Pending` is still a promise
- `Resolved` is `string`

---

## Basic examples

```ts
type TextResult = Awaited<Promise<string>>;
type NumberResult = Awaited<Promise<number>>;
type BooleanResult = Awaited<Promise<boolean>>;
```

The resulting types are:

- `TextResult` is `string`
- `NumberResult` is `number`
- `BooleanResult` is `boolean`

---

## Non-Promise values

`Awaited<T>` also works with non-Promise types.

```ts
type Value = Awaited<string>;
```

The result remains `string`. If `T` is not Promise-like, `Awaited<T>` keeps that type.

---

## Nested Promises

`Awaited<T>` unwraps nested Promise-like types recursively.

```ts
type NestedResult = Awaited<
  Promise<Promise<number>>
>;
```

The final type is `number`.

---

## Awaited with async functions

An `async` function always returns a Promise.

```ts
async function getUserName(): Promise<string> {
  return "Alice";
}
```

The function’s return type is `Promise<string>`. The resolved value type is `string`.

```ts
type UserNameResult = Awaited<
  Promise<string>
>;
```

`UserNameResult` is `string`. This lesson does not introduce `ReturnType`.

---

## Awaited with reusable Promise types

```ts
type ApiResponse = Promise<{
  id: number;
  name: string;
}>;

type ResolvedApiResponse = Awaited<ApiResponse>;
```

The result is:

```ts
{
  id: number;
  name: string;
}
```

---

## Awaited with unions

```ts
type MaybeAsync =
  | string
  | Promise<number>;

type ResolvedMaybeAsync =
  Awaited<MaybeAsync>;
```

The result becomes `string | number`.

This lesson does not expand into conditional type mechanics.

---

## Invalid assignments

After using `Awaited`, variables must match the resolved type.

```ts
type ResolvedCount =
  Awaited<Promise<number>>;

const count: ResolvedCount = 10;

// const invalidCount: ResolvedCount = "10";
```

---

## Key Takeaways

- `Awaited<T>` extracts the resolved type of Promise-like values.
- `Awaited<Promise<string>>` becomes `string`.
- Nested promises are recursively unwrapped.
- Non-Promise values remain their original type.
- `Awaited<T>` is useful when working with asynchronous result types.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/08-awaited/awaited-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/08-awaited/awaited-example.ts
```
