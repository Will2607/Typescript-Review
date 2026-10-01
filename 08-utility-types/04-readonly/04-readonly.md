# Readonly

Learn how TypeScript’s built-in `Readonly<T>` utility type creates a new type where all top-level properties of `T` become readonly.

Example file for this lesson:

- `readonly-example.ts`

---

## What `Readonly<T>` does

`Readonly<T>` creates a new type where all properties of `T` become readonly.

```ts
interface User {
  id: number;
  name: string;
  active: boolean;
}

type ReadonlyUser = Readonly<User>;
```

This is conceptually similar to:

```ts
type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
  readonly active: boolean;
};
```

The original `User` type is not modified. `Readonly<User>` is a new derived type.

---

## Reading vs modifying properties

Readonly properties may still be read.

```ts
const user: Readonly<User> = {
  id: 1,
  name: "Alice",
  active: true,
};

console.log(user.name);
```

They cannot be reassigned:

```ts
// user.name = "Bob";
```

---

## Original type vs Readonly type

`User` is still mutable unless its properties were originally readonly.

`Readonly<User>` prevents reassignment of all top-level properties.

```ts
const mutableUser: User = {
  id: 2,
  name: "Charlie",
  active: false,
};

mutableUser.name = "Updated Charlie";

const readonlyUser: Readonly<User> = {
  id: 1,
  name: "Alice",
  active: true,
};

// readonlyUser.name = "Bob";
```

---

## Readonly with interfaces

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

type ImmutableProduct = Readonly<Product>;

const product: ImmutableProduct = {
  id: 10,
  name: "Keyboard",
  price: 79,
};

console.log(product.name);

// product.price = 50;
```

---

## Readonly with type aliases

```ts
type Settings = {
  theme: string;
  notifications: boolean;
};

type ReadonlySettings = Readonly<Settings>;

const settings: ReadonlySettings = {
  theme: "dark",
  notifications: true,
};

// settings.theme = "light";
```

`Readonly` works the same way on a type alias as on an interface.

---

## `readonly` property vs `Readonly<T>`

```ts
interface Account {
  readonly id: number;
  username: string;
}
```

Here only `id` is readonly. `username` can still be reassigned on a normal `Account`.

```ts
type ImmutableAccount = Readonly<Account>;
```

`Readonly<Account>` makes both `id` and `username` readonly in the resulting type.

- `readonly` on a property targets that property alone
- `Readonly<T>` applies readonly to all top-level properties of `T`

---

## Readonly does not mean runtime immutability

`Readonly<T>` is primarily a compile-time TypeScript restriction.

It prevents assignments that TypeScript can detect. Runtime immutability in JavaScript is a separate concern and is outside the scope of this lesson.

---

## Readonly is shallow

`Readonly<T>` only makes top-level properties readonly.

```ts
interface Config {
  database: {
    host: string;
    port: number;
  };
}

type ReadonlyConfig = Readonly<Config>;

const config: ReadonlyConfig = {
  database: {
    host: "localhost",
    port: 5432,
  },
};

// config.database = { host: "example.com", port: 3306 }; // invalid

config.database.port = 3306; // valid
```

- `config.database` cannot be replaced
- properties inside the existing `database` object are not automatically readonly

That is why changing `config.database.port` is still allowed. This lesson does not create a DeepReadonly type.

---

## Typical use cases

`Readonly<T>` can be useful for:

- configuration objects
- state snapshots
- function inputs that should not be reassigned
- shared data that should not be modified accidentally

These examples stay framework-independent.

---

## Invalid examples

Keep invalid examples commented out:

```ts
// user.name = "Bob";
// config.database = { host: "example.com", port: 3306 };
```

---

## Key Takeaways

- `Readonly<T>` makes all top-level properties readonly.
- Properties can still be read.
- Properties cannot be reassigned.
- The original type is unchanged.
- `readonly` can target a single property.
- `Readonly<T>` applies readonly to all properties.
- `Readonly<T>` is shallow.
- It is a compile-time type-system feature.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/04-readonly/readonly-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/04-readonly/readonly-example.ts
```
