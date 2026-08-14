# Type Aliases

Learn how TypeScript type aliases create reusable names for types using the `type` keyword.

Example file for this lesson:

- `type-aliases-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what a type alias is
- declare aliases with `type`
- alias primitive types and object shapes
- reuse aliases in variables, parameters, and return types
- give names to union and intersection types
- understand that aliases exist only at compile time

---

## What is a type alias?

A **type alias** creates a name for a TypeScript type.

```ts
type UserId = string;
```

`UserId` is a type name. It does **not** create a new runtime value.

Type aliases are one way to give a name to a TypeScript type. Interfaces are another construct that will be covered later.

---

## Basic `type` syntax

```ts
type AliasName = SomeType;
```

Examples:

```ts
type UserId = string;
type ProductPrice = number;
type User = {
  id: number;
  name: string;
};
```

---

## Aliases for primitive types

A type alias can name a primitive type:

```ts
type UserId = string;
type ProductPrice = number;

const firstUserId: UserId = "USR-001";
const keyboardPrice: ProductPrice = 75;
```

The alias still refers to the same underlying type. It mainly improves naming and readability.

---

## Aliases for object shapes

A type alias can describe an object shape:

```ts
type User = {
  id: number;
  name: string;
  active: boolean;
};

const user: User = {
  id: 1,
  name: "Alice",
  active: true,
};
```

Compare this with an inline object type:

```ts
const userInline: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Alice",
};
```

Both describe the same kind of object structure.  
The type alias avoids repeating the inline type and gives it a reusable name.

---

## Reusing type aliases

Once defined, a type alias can be reused in multiple declarations:

```ts
const firstUser: User = {
  id: 1,
  name: "Alice",
  active: true,
};

const secondUser: User = {
  id: 2,
  name: "Bob",
  active: false,
};
```

This prevents copying the same object shape again and again.

---

## Type aliases in function parameters

```ts
type Product = {
  name: string;
  price: number;
};

function printProduct(product: Product): void {
  console.log(product.name);
  console.log(product.price);
}
```

The parameter type is clear and reusable.

---

## Type aliases in function return types

```ts
type Coordinate = {
  x: number;
  y: number;
};

function createCoordinate(): Coordinate {
  return {
    x: 10,
    y: 20,
  };
}
```

Callers know the returned object shape through the alias name.

---

## Type aliases with union types

A type alias can name a union type using already-learned union syntax:

```ts
type Identifier = string | number;

let identifier: Identifier = "ABC-123";
identifier = 123;
```

This is only a reusable name for a union. It is not a new Union Types lesson.

---

## Type aliases with intersection types

A type alias can also name an intersection type:

```ts
type BasicProfile = {
  name: string;
};

type AccountStatus = {
  active: boolean;
};

type UserProfile = BasicProfile & AccountStatus;

const profile: UserProfile = {
  name: "Alice",
  active: true,
};
```

Again, the alias is only a reusable name for an intersection already covered earlier.

---

## Why type aliases improve readability

Type aliases help by:

- giving meaningful names such as `User`, `Product`, or `Coordinate`
- reducing repeated inline object types
- making function signatures easier to read
- keeping shared structures consistent across variables

---

## Type aliases do not create runtime values

Important precision:

- a type alias exists only during TypeScript type checking
- it is removed during JavaScript compilation
- `User` does not become a JavaScript object, class, or variable by itself

```ts
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Alice",
};
```

At runtime, JavaScript keeps the object value. The alias `User` is gone.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Thinking `type User = ...` creates a runtime object | It only names a type |
| Expecting aliases to appear in compiled JavaScript | They are erased |
| Repeating large inline object types everywhere | Reuse a named alias |
| Treating an alias as a completely new unrelated type | It names an existing type structure |
| Using the wrong value for an aliased type | The alias still enforces the underlying type |

---

## Summary

- A type alias creates a name for a TypeScript type with `type`.
- Aliases can name primitives, object shapes, unions, and intersections.
- They can be reused in variables, parameters, and return types.
- They improve readability and reduce repetition.
- They do not create runtime values and are removed during compilation.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/08-combining-types/03-type-aliases/type-aliases-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/08-combining-types/03-type-aliases/type-aliases-example.ts
```

---

## Completion checklist

- [ ] I know what a type alias is
- [ ] I can declare aliases with `type`
- [ ] I can alias primitives and object shapes
- [ ] I can reuse aliases in multiple places
- [ ] I can use aliases in parameters and return types
- [ ] I can name union and intersection types with aliases
- [ ] I know aliases are compile-time only
