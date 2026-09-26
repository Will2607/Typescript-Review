# Partial

Learn how TypeScript’s built-in `Partial<T>` utility type makes every property of an existing type optional.

Example file for this lesson:

- `partial-example.ts`

---

## What a utility type is

TypeScript provides built-in utility types that transform existing types.

This lesson covers only `Partial<T>`. Other utility types are later topics.

---

## What `Partial<T>` does

`Partial<T>` creates a new type where every property of `T` becomes optional.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
```

`PartialUser` is conceptually equivalent to:

```ts
type PartialUser = {
  id?: number;
  name?: string;
  email?: string;
};
```

The original `User` type is not modified. `Partial<User>` is a new type derived from `User`.

---

## Original type vs Partial type

`User` still requires all of its required properties.

```ts
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};
```

`Partial<User>` allows any subset of those properties:

```ts
const userUpdate: Partial<User> = {
  name: "Updated Alice",
};
```

---

## Partial with interfaces

```ts
interface Profile {
  username: string;
  age: number;
  active: boolean;
}
```

Every original property is optional in `Partial<Profile>`. These are all valid:

- an empty object
- only `username`
- only `age`
- multiple properties

```ts
const emptyProfileUpdate: Partial<Profile> = {};
const usernameUpdate: Partial<Profile> = { username: "new-name" };
const ageUpdate: Partial<Profile> = { age: 30 };
const multipleUpdates: Partial<Profile> = {
  username: "alice",
  active: true,
};
```

---

## Partial with type aliases

```ts
type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductUpdate = Partial<Product>;

const productUpdate: ProductUpdate = {
  price: 99.99,
};
```

`Partial` works the same way on a type alias as on an interface.

---

## Partial update functions

A common use is updating only selected properties of an existing object.

```ts
interface Settings {
  theme: string;
  notifications: boolean;
}

function updateSettings(
  current: Settings,
  updates: Partial<Settings>
): Settings {
  return {
    ...current,
    ...updates,
  };
}
```

Callers only need to supply the properties they want to change. The function still returns a complete `Settings` object by combining the current values with the updates.

---

## Type checking still applies

`Partial<T>` makes properties optional but does not change their types.

```ts
interface Account {
  username: string;
  age: number;
}

const validUpdate: Partial<Account> = {
  age: 30,
};

// const invalidUpdate: Partial<Account> = {
//   age: "30",
// };
```

`age` is optional, but if it is provided it must still be a `number`.

---

## Empty object

```ts
const update: Partial<User> = {};
```

This is valid because every property is optional.

---

## Partial is shallow

`Partial<T>` only makes the top-level properties optional.

```ts
interface Config {
  database: {
    host: string;
    port: number;
  };
}

type PartialConfig = Partial<Config>;
```

`database` becomes optional. If `database` is provided, its internal `host` and `port` properties are still required.

This lesson does not implement a deep or recursive version of `Partial`.

---

## Key Takeaways

- `Partial<T>` is a built-in utility type.
- It makes every property of `T` optional.
- It does not modify the original type.
- Property types remain unchanged.
- It is useful for partial updates.
- It is shallow, not recursive.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/01-partial/partial-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/01-partial/partial-example.ts
```
