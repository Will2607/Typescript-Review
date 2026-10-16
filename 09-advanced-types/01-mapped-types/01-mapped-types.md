# Mapped Types

Learn how TypeScript mapped types create a new type by iterating over the property keys of an existing object type.

Example file for this lesson:

- `mapped-types-example.ts`

---

## What a mapped type is

A mapped type creates a new type by iterating over the property keys of another type.

```ts
type Copy<T> = {
  [K in keyof T]: T[K];
};
```

This creates a new type with the same property keys and property types as `T`.

---

## Understanding `keyof T`

`keyof T` produces a union of the property keys of `T`.

```ts
interface User {
  id: number;
  name: string;
  active: boolean;
}
```

Conceptually, `keyof User` represents:

```ts
"id" | "name" | "active"
```

This lesson does not develop `keyof` as a separate topic.

---

## Understanding `[K in keyof T]`

```ts
[K in keyof T]
```

means that `K` iterates over each property key of `T`.

For `User`:

- `K = "id"`
- `K = "name"`
- `K = "active"`

Each iteration produces one property in the new type.

---

## Understanding `T[K]`

```ts
T[K]
```

gets the type of the property represented by `K`.

For `User`:

- `T["id"]` is `number`
- `T["name"]` is `string`
- `T["active"]` is `boolean`

The mapped type uses that property type for the corresponding key.

---

## Basic identity mapped type

```ts
type Clone<T> = {
  [K in keyof T]: T[K];
};

interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductClone = Clone<Product>;
```

`ProductClone` has the same structure as `Product`.

---

## Making all properties readonly

```ts
type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

Each property becomes readonly.

```ts
// product.price = 120;
```

---

## Making all properties optional

```ts
type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};
```

Each property becomes optional. An empty object can satisfy the resulting type.

---

## Removing readonly

The mapped type modifier `-readonly` removes the readonly modifier.

```ts
type MakeMutable<T> = {
  -readonly [K in keyof T]: T[K];
};
```

If the input type contains readonly properties, the resulting properties are mutable.

---

## Removing optionality

The mapped type modifier `-?` removes optionality.

```ts
type MakeRequired<T> = {
  [K in keyof T]-?: T[K];
};
```

If the input type has optional properties, the resulting properties become required.

---

## Combining simple modifiers

```ts
type MutableRequired<T> = {
  -readonly [K in keyof T]-?: T[K];
};
```

This removes both the readonly and optional modifiers. The resulting properties are required and mutable.

---

## Mapped types with interfaces and type aliases

Mapped types can transform object shapes originating from either interfaces or type aliases.

```ts
type UserClone = Clone<User>;

type OptionalArticle = MakeOptional<Article>;
```

The source can be an interface or a type alias. The mapped type still iterates over its keys.

---

## Relationship with Utility Types

Some built-in utility types are conceptually based on mapped-type behavior.

Examples already studied:

- `Partial<T>`
- `Readonly<T>`

This lesson does not reproduce TypeScript’s full library implementation and does not expand into utility types again.

---

## Invalid examples

Keep invalid executable examples commented out:

```ts
// const invalidUser: UserClone = {
//   id: "1",
//   name: "Alice",
//   active: true,
// };

// product.price = 120;

// const missingName: RequiredUser = {
//   id: 1,
// };
```

---

## Key Takeaways

- Mapped types iterate over property keys.
- `keyof T` provides the keys.
- `[K in keyof T]` iterates over those keys.
- `T[K]` preserves or accesses each property type.
- Modifiers can add or remove readonly and optional behavior.
- Mapped types can transform existing object types systematically.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 09-advanced-types/01-mapped-types/mapped-types-example.ts
```

Execute:

```bash
npx tsx 09-advanced-types/01-mapped-types/mapped-types-example.ts
```
