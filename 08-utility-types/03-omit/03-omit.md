# Omit

Learn how TypeScript’s built-in `Omit<T, K>` utility type creates a new type by removing selected properties from an existing type.

Example file for this lesson:

- `omit-example.ts`

---

## What `Omit<T, K>` does

`Omit<T, K>` creates a new type by removing selected properties from an existing type.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
```

`PublicUser` contains:

- `id`
- `name`
- `email`

and excludes:

- `password`

---

## Meaning of `T` and `K`

- `T` is the source type
- `K` represents the keys to remove from `T`

```ts
Omit<User, "password">
```

Here `User` is `T`, and `"password"` is `K`.

---

## Omitting one property

```ts
type UserWithoutPassword = Omit<User, "password">;

const publicUser: UserWithoutPassword = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};
```

The resulting type includes every property from `User` except `password`.

---

## Omitting multiple properties

```ts
type UserPreview = Omit<User, "email" | "password">;
```

A union of keys removes multiple properties. `UserPreview` keeps `id` and `name`, and excludes both `email` and `password`.

---

## Omit with interfaces

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  internalCode: string;
}

type PublicProduct = Omit<Product, "internalCode">;

const publicProduct: PublicProduct = {
  id: 10,
  name: "Keyboard",
  price: 79,
};
```

---

## Omit with type aliases

```ts
type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  draftNotes: string;
};

type PublishedArticle = Omit<Article, "draftNotes">;

const publishedArticle: PublishedArticle = {
  id: 1,
  title: "TypeScript Omit",
  content: "Omit removes selected properties.",
  author: "Alice",
};
```

`Omit` works the same way on a type alias as on an interface.

---

## Original type vs omitted type

`Omit` does not modify the original type.

The original type still includes all of its properties:

```ts
const completeUser: User = {
  id: 3,
  name: "Charlie",
  email: "charlie@example.com",
  password: "secret",
};
```

The omitted type is a separate derived type. `PublicUser` does not include `password`, while `User` still does.

---

## Remaining property types are preserved

Properties not removed by `Omit` keep their original types.

```ts
interface Account {
  id: number;
  username: string;
  password: string;
}

type SafeAccount = Omit<Account, "password">;

const safeAccount: SafeAccount = {
  id: 100,
  username: "alice",
};

// const account: SafeAccount = {
//   id: "1",
//   username: "alice"
// };
```

`id` is still a `number`. Removing `password` does not change the types of the remaining properties.

---

## Typical use cases

`Omit` can be useful for:

- removing internal IDs from creation input types
- hiding sensitive fields
- excluding implementation-only properties
- building API response shapes

These are conceptual uses and stay framework-independent.

---

## Pick vs Omit

- `Pick<T, K>` keeps only selected properties
- `Omit<T, K>` removes selected properties

```ts
Pick<User, "id" | "name">
```

keeps only `id` and `name`.

```ts
Omit<User, "email" | "password">
```

removes `email` and `password`.

This section is only a short contrast. Pick is not taught again here.

---

## Invalid examples

Keep invalid executable examples commented out.

```ts
// const invalidSafeAccount: SafeAccount = {
//   id: "100",
//   username: "alice"
// };
```

Remaining properties must still match their original types.

---

## Key Takeaways

- `Omit<T, K>` removes selected properties from a type.
- `T` is the source type.
- `K` represents properties to remove.
- Multiple keys can be provided with a union.
- Remaining property types are preserved.
- The original type is not modified.
- `Pick` selects properties while `Omit` excludes them.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/03-omit/omit-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/03-omit/omit-example.ts
```
