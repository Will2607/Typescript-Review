# NonNullable

Learn how TypeScript’s built-in `NonNullable<T>` utility type removes `null` and `undefined` from a type.

Example file for this lesson:

- `nonnullable-example.ts`

---

## What `NonNullable<T>` does

`NonNullable<T>` creates a type by removing `null` and `undefined` from `T`.

```ts
type Value =
  | string
  | null
  | undefined;

type DefinedValue =
  NonNullable<Value>;
```

The result is `string`.

---

## Null and undefined removal

Both `null` and `undefined` are removed.

```ts
type Input =
  | number
  | null
  | undefined;

type ValidInput =
  NonNullable<Input>;
```

The result is `number`.

---

## NonNullable with multiple union members

```ts
type Result =
  | string
  | number
  | boolean
  | null
  | undefined;

type DefinedResult =
  NonNullable<Result>;
```

The result is `string | number | boolean`.

Only nullish members are removed. The other union members stay.

---

## NonNullable with object types

```ts
interface User {
  id: number;
  name: string;
}

type MaybeUser =
  User | null | undefined;

type ExistingUser =
  NonNullable<MaybeUser>;
```

The result is simply `User`.

---

## Type without null or undefined

When the input type already contains no nullish members, it stays the same.

```ts
type Name = NonNullable<string>;
```

The result is `string`.

---

## Only null and undefined

```ts
type Nothing =
  NonNullable<null | undefined>;
```

The resulting type is `never`.

`never` means there are no remaining possible values. This lesson does not develop `never` further.

---

## Valid and invalid assignments

```ts
type Username =
  NonNullable<
    string | null | undefined
  >;

const username: Username = "Alice";

// const invalidNull: Username = null;
// const invalidUndefined: Username = undefined;
```

---

## NonNullable vs Exclude

`NonNullable<T>` is specifically intended to remove `null | undefined`.

`Exclude<T, U>` can remove arbitrary union members.

```ts
type Example =
  string | number | null | undefined;

type UsingNonNullable =
  NonNullable<Example>;

type UsingExclude =
  Exclude<
    Example,
    null | undefined
  >;
```

In this example, both produce `string | number`. Exclude is not taught again here.

---

## Typical use cases

`NonNullable` can be useful when:

- a value is known to exist at a certain point
- a derived type should exclude nullish states
- defining types for already validated data
- removing `null` and `undefined` from reusable union types

This lesson does not introduce runtime validation libraries.

---

## Compile-time behavior

`NonNullable<T>` changes the TypeScript type only.

It does not perform runtime checks and does not remove null values from JavaScript data.

---

## Key Takeaways

- `NonNullable<T>` removes `null` and `undefined`.
- Other union members remain unchanged.
- A type without nullish members remains unchanged.
- Removing all members produces `never`.
- `NonNullable` is similar to `Exclude<T, null | undefined>`.
- It affects types at compile time, not runtime values.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/10-nonnullable/nonnullable-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/10-nonnullable/nonnullable-example.ts
```
