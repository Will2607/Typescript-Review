# Pick

Learn how TypeScript’s built-in `Pick<T, K>` utility type creates a new type by selecting specific properties from an existing type.

Example file for this lesson:

- `pick-example.ts`

---

## What `Pick<T, K>` does

`Pick<T, K>` creates a new type by selecting specific properties from an existing type.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

type UserPreview = Pick<User, "id" | "name">;
```

`UserPreview` contains only:

- `id`
- `name`

It does not contain:

- `email`
- `active`

---

## Meaning of `T` and `K`

- `T` is the source type
- `K` represents the keys to select from `T`

```ts
Pick<User, "id" | "name">
```

Here `User` is `T`, and `"id" | "name"` is `K`.

---

## Selecting one property

```ts
type UserName = Pick<User, "name">;
```

The resulting type contains only the `name` property:

```ts
{
  name: string;
}
```

---

## Selecting multiple properties

```ts
type UserContact = Pick<User, "name" | "email">;
```

A union of property keys selects multiple properties. `UserContact` includes both `name` and `email`.

---

## Keys must exist on the source type

`Pick` only accepts valid keys from `T`.

```ts
// type InvalidUser = Pick<User, "phone">;
```

`phone` is not a property of `User`, so TypeScript rejects it.

---

## Pick with interfaces

```ts
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

type ProductSummary = Pick<Product, "id" | "name" | "price">;

const summary: ProductSummary = {
  id: 10,
  name: "Keyboard",
  price: 79,
};
```

---

## Pick with type aliases

```ts
type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type ArticlePreview = Pick<Article, "id" | "title">;

const articlePreview: ArticlePreview = {
  id: 1,
  title: "TypeScript Pick",
};
```

`Pick` works the same way on a type alias as on an interface.

---

## Original type vs picked type

`Pick` does not modify the original type.

`User` still requires all of its original required properties:

```ts
const completeUser: User = {
  id: 2,
  name: "Charlie",
  email: "charlie@example.com",
  active: true,
};
```

`Pick<User, "id" | "name">` requires only the selected properties:

```ts
const userPreview: Pick<User, "id" | "name"> = {
  id: 1,
  name: "Alice",
};
```

---

## Property types are preserved

Selected properties keep their original types.

```ts
interface Account {
  id: number;
  username: string;
}

type AccountId = Pick<Account, "id">;

const accountId: AccountId = {
  id: 100,
};

// const account: AccountId = {
//   id: "1"
// };
```

`id` is still a `number`. Choosing a property with `Pick` does not change its type.

---

## Typical use cases

`Pick` can be useful for:

- API response shapes
- DTOs
- list previews
- form models
- exposing only selected properties

These are conceptual uses. This lesson does not introduce framework-specific patterns.

---

## Key Takeaways

- `Pick<T, K>` selects properties from an existing type.
- `T` is the source type.
- `K` contains valid keys from `T`.
- Multiple keys are written as a union.
- Selected properties preserve their original types.
- The source type is not modified.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/02-pick/pick-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/02-pick/pick-example.ts
```
