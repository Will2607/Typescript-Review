# keyof Operator

Learn how TypeScript’s `keyof` operator creates a type of the allowed property names from an object type.

Example file for this lesson:

- `keyof-operator-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what `keyof` does
- write `keyof TypeName`
- declare variables restricted to valid object keys
- use `keyof` in function parameters
- recognize invalid property names
- understand that `keyof` is compile-time only

---

## What is `keyof`?

`keyof` is a TypeScript **type operator**.

It produces a type representing the property keys of another type.

```ts
type User = {
  id: number;
  name: string;
};

type UserKey = keyof User;
```

`UserKey` represents the valid property names from `User`.

Conceptually:

```text
"id" | "name"
```

So:

```ts
const key: UserKey = "id"; // valid
// const key: UserKey = "email"; // invalid
```

Keep that union form only as a way to understand the result of `keyof`. This is not another Union Types lesson.

---

## Basic `keyof` syntax

```ts
keyof TypeName
```

Example:

```ts
keyof User
keyof Product
keyof Profile
```

---

## Using `keyof` with object types

`keyof` is used with object shapes, usually through type aliases already covered earlier:

```ts
type User = {
  id: number;
  name: string;
  active: boolean;
};

type UserKey = keyof User;
```

---

## Result of `keyof`

For:

```ts
type User = {
  id: number;
  name: string;
  active: boolean;
};
```

`keyof User` represents:

```text
"id" | "name" | "active"
```

Those are the allowed property names.

---

## Declaring variables with `keyof`

A variable typed with `keyof User` may contain only valid keys from `User`:

```ts
let userKey: UserKey = "id";
userKey = "name";
userKey = "active";

// userKey = "email"; // rejected
```

An invalid property name is rejected by TypeScript.

---

## Using `keyof` with type aliases

Because type aliases can name object shapes, `keyof` pairs naturally with them:

```ts
type Product = {
  sku: string;
  name: string;
  price: number;
};

type ProductKey = keyof Product;
```

`ProductKey` is restricted to `"sku" | "name" | "price"`.

---

## Using `keyof` in function parameters

```ts
type Profile = {
  username: string;
  age: number;
  verified: boolean;
};

function printProfileKey(key: keyof Profile): void {
  console.log("Profile key:", key);
}
```

The function accepts only property names that exist in `Profile`.

This lesson prints the key itself. It does not read object values dynamically, because that would require later topics.

---

## Safe property name restriction

`keyof` is useful when a value must refer to a valid property name of an object type.

That helps prevent typos such as `"emial"` or completely unknown keys such as `"category"` when those keys are not part of the type.

---

## `keyof` with numeric properties

When declared property keys are numeric literals, `keyof` produces those numeric key types:

```ts
type StatusCodes = {
  200: string;
  404: string;
};

type StatusCodeKey = keyof StatusCodes;

const successCode: StatusCodeKey = 200;
const notFoundCode: StatusCodeKey = 404;

// const invalidCode: StatusCodeKey = 500; // invalid
```

This lesson stays with that simple idea only.

---

## Runtime behavior

```ts
type UserKey = keyof User;
```

does **not** create a JavaScript variable or array of keys.

`keyof`:

- is evaluated by TypeScript at compile time
- does not create runtime values
- is removed during JavaScript compilation

Do not try to print `UserKey` at runtime. It is a type, not a value.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Assigning a key that is not in the object type | Use only keys produced by `keyof` |
| Expecting `keyof` to create a runtime list of keys | It is type-only |
| Trying to log the alias `UserKey` itself | Types disappear after compilation |
| Confusing property values with property names | `keyof` is about names such as `"id"`, not values such as `1` |
| Using unknown keys in function parameters typed with `keyof` | The parameter accepts only valid keys |

---

## Summary

- `keyof` produces a type of the property keys of another type.
- `keyof User` conceptually means `"id" | "name" | ...` for that object shape.
- Variables and parameters can be restricted to those valid keys.
- Invalid property names are rejected by TypeScript.
- Numeric literal keys produce numeric key types.
- `keyof` is compile-time only and disappears from JavaScript.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/08-combining-types/04-keyof-operator/keyof-operator-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/08-combining-types/04-keyof-operator/keyof-operator-example.ts
```

---

## Completion checklist

- [ ] I know what `keyof` produces
- [ ] I can write `type Keys = keyof SomeType`
- [ ] I can declare variables restricted to valid keys
- [ ] I can use `keyof` in function parameters
- [ ] I understand invalid keys are rejected
- [ ] I know numeric literal keys work with `keyof`
- [ ] I know `keyof` does not exist at runtime
