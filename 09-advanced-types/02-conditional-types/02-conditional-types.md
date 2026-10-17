# Conditional Types

Learn how TypeScript conditional types select one type or another based on whether one type is assignable to another.

Example file for this lesson:

- `conditional-types-example.ts`

---

## What a conditional type is

A conditional type selects one type or another based on whether one type is assignable to another.

The syntax is:

```ts
T extends U ? X : Y
```

- If `T` is assignable to `U`, the result is `X`.
- Otherwise, the result is `Y`.

---

## Basic example

```ts
type IsString<T> =
  T extends string
    ? true
    : false;

type A = IsString<string>;
type B = IsString<number>;
```

- `A` is `true`
- `B` is `false`

---

## Meaning of `extends` in conditional types

In a conditional type, `extends` performs a type compatibility check. It asks whether the input type is assignable to the type on the right.

This is not class inheritance.

```ts
type Result<T> =
  T extends number
    ? "number"
    : "other";
```

Number-compatible types choose the true branch. Other types choose the false branch.

---

## True and false branches

The structure is:

```ts
Condition
  ? TrueType
  : FalseType
```

```ts
type ValueType<T> =
  T extends boolean
    ? "boolean"
    : "not boolean";
```

`ValueType<boolean>` is `"boolean"`. `ValueType<string>` is `"not boolean"`.

---

## Primitive type conditions

```ts
type Describe<T> =
  T extends string
    ? "text"
    : "other";
```

- `Describe<string>` is `"text"`
- `Describe<number>` is `"other"`
- `Describe<boolean>` is `"other"`

---

## Conditional types with object shapes

```ts
type HasId<T> =
  T extends { id: number }
    ? "has id"
    : "no id";

type User = {
  id: number;
  name: string;
};

type Product = {
  name: string;
};
```

- `HasId<User>` is `"has id"`
- `HasId<Product>` is `"no id"`

The check is structural: `User` is assignable to `{ id: number }` because it has a numeric `id`.

---

## Generic conditional types

Conditional types are often written using generic type parameters.

```ts
type ArrayOrValue<T> =
  T extends unknown[]
    ? "array"
    : "value";
```

- `ArrayOrValue<string[]>` is `"array"`
- `ArrayOrValue<number>` is `"value"`

This lesson does not introduce advanced array inference.

---

## Returning actual types instead of labels

Conditional types can return real types, not only literal labels.

```ts
type Normalize<T> =
  T extends string
    ? string
    : number;
```

- `Normalize<string>` is `string`
- `Normalize<boolean>` is `number`

---

## Conditional type with union input

```ts
type ToArray<T> =
  T extends string
    ? T[]
    : T;

type Result =
  ToArray<string | number>;
```

When a generic conditional type receives a union, TypeScript may apply the conditional separately to each union member.

Conceptually:

- `string` matches, so that member becomes `string[]`
- `number` does not match, so that member stays `number`

The result is `string[] | number`.

---

## Conditional Types and Unions

A conditional type of the form:

```ts
T extends U ? X : Y
```

where `T` is a generic type parameter can distribute over a union.

```ts
type IsText<T> =
  T extends string
    ? T
    : never;

type Example =
  IsText<string | number>;
```

The result is `string`.

`number` takes the false branch and becomes `never`. `never` disappears from the union, so only `string` remains.

This lesson does not cover disabling distribution or other advanced distributive patterns.

---

## Invalid assignments

The resulting type restricts later assignments.

```ts
type StringOrNumber<T> =
  T extends string
    ? string
    : number;

type TextResult =
  StringOrNumber<string>;

const text: TextResult = "hello";

// const invalidText: TextResult = 123;
```

---

## Relationship with previously studied utility types

Some built-in utility types use conditional-type behavior internally.

Examples already studied:

- `Exclude`
- `Extract`
- `NonNullable`

This lesson does not reimplement them.

---

## Key Takeaways

- Conditional types use `T extends U ? X : Y`.
- `extends` checks type assignability.
- The true branch is selected when the condition matches.
- The false branch is selected otherwise.
- Conditional types can work with primitives and object shapes.
- Generic conditional types can distribute over unions.
- Some utility types rely on conditional-type behavior internally.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 09-advanced-types/02-conditional-types/conditional-types-example.ts
```

Execute:

```bash
npx tsx 09-advanced-types/02-conditional-types/conditional-types-example.ts
```
