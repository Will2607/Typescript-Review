# Parameters

Learn how TypeScript’s built-in `Parameters<T>` utility type extracts the parameter types of a function type as a tuple.

Example file for this lesson:

- `parameters-example.ts`

---

## What `Parameters<T>` does

`Parameters<T>` extracts the parameter types from a function type and returns them as a tuple type.

```ts
type Params = Parameters<
  (name: string, age: number) => void
>;
```

The result is conceptually:

```ts
[name: string, age: number]
```

---

## What `T` represents

`T` must be a function type.

```ts
Parameters<(a: number, b: number) => number>
```

This lesson does not introduce advanced function constraints.

---

## Result is a tuple

`Parameters<T>` returns a tuple whose elements correspond to the function parameters in the same order.

```ts
type AddParams = Parameters<
  (a: number, b: number) => number
>;
```

Result:

```ts
[a: number, b: number]
```

- Position matters.
- Types are preserved.
- Parameter labels may also appear in the resulting tuple.

---

## Parameters with a declared function type

```ts
type Formatter = (
  value: string,
  uppercase: boolean
) => string;

type FormatterParams =
  Parameters<Formatter>;
```

`FormatterParams` is:

```ts
[value: string, uppercase: boolean]
```

---

## Parameters from an existing function using `typeof`

```ts
function createUser(
  name: string,
  age: number,
  active: boolean
): string {
  return `${name}-${age}-${active}`;
}

type CreateUserParams =
  Parameters<typeof createUser>;
```

`typeof createUser` produces the function type, and `Parameters` extracts its parameters. This lesson does not develop `typeof` as a separate topic.

---

## Reusing the resulting tuple

The resulting tuple can be used as a variable type.

```ts
const args: CreateUserParams = [
  "Alice",
  30,
  true,
];
```

The tuple must match:

- the number of parameters
- their order
- their types

---

## Functions without parameters

```ts
type NoArgs = Parameters<
  () => void
>;
```

The result is:

```ts
[]
```

---

## Optional parameters

```ts
type SearchFunction = (
  query: string,
  limit?: number
) => void;

type SearchParams =
  Parameters<SearchFunction>;
```

The optional parameter remains optional in the resulting tuple. Both of these are valid:

```ts
const searchArgs1: SearchParams = ["typescript"];
const searchArgs2: SearchParams = ["typescript", 10];
```

This lesson does not introduce advanced tuple syntax.

---

## Rest parameters

```ts
type Logger = (
  prefix: string,
  ...messages: string[]
) => void;

type LoggerParams =
  Parameters<Logger>;
```

The resulting tuple preserves the rest parameter. Extra string arguments can follow `prefix`. This section stays basic.

---

## Type checking

The tuple returned by `Parameters<T>` preserves the original parameter types.

```ts
type UserParams = Parameters<
  (name: string, age: number) => void
>;

const validArgs: UserParams = [
  "Alice",
  30,
];

// const invalidArgs: UserParams = [
//   30,
//   "Alice"
// ];
```

---

## Typical use cases

`Parameters<T>` can be useful for:

- reusing a function’s parameter list
- typing wrapper functions
- storing valid argument tuples
- avoiding duplication of parameter types

This lesson does not build advanced wrappers.

---

## Key Takeaways

- `Parameters<T>` extracts function parameter types.
- The result is a tuple.
- Parameter order is preserved.
- Parameter types are preserved.
- `typeof` can be used to get the type of an existing function.
- Optional and rest parameters are preserved.
- Functions with no parameters result in an empty tuple.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/09-parameters/parameters-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/09-parameters/parameters-example.ts
```
