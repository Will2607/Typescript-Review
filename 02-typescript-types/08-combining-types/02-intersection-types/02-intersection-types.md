# Intersection Types

Learn how TypeScript intersection types combine multiple types into one using the `&` operator, so a value must satisfy all combined types.

Example file for this lesson:

- `intersection-types-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what an intersection type is
- declare intersections with `&`
- combine simple object structures
- use intersections in variables and function parameters
- recognize missing, mistyped, and incompatible overlapping properties
- contrast intersections briefly with unions

---

## What is an intersection type?

An **intersection type** combines multiple types into one.

A value of an intersection type must satisfy **all** combined types.

```ts
const profile: {
  name: string;
} & {
  age: number;
} = {
  name: "Alice",
  age: 30,
};
```

The value must satisfy both object shapes: it needs `name` and `age`.

---

## Intersection type syntax

Intersection members are separated by `&`:

```ts
TypeA & TypeB
```

Example with inline object shapes:

```ts
{
  id: number;
  name: string;
} & {
  department: string;
  active: boolean;
}
```

---

## Combining object structures

Intersection types are especially useful with object shapes.

When two object structures are intersected, the resulting value must contain all required properties from both sides.

```ts
const employee: {
  id: number;
  name: string;
} & {
  department: string;
  active: boolean;
} = {
  id: 1,
  name: "Alice",
  department: "Engineering",
  active: true,
};
```

---

## Required properties from all members

Every required property from every intersected type must be present.

This is invalid because `age` is also required:

```ts
// const profile: {
//   name: string;
// } & {
//   age: number;
// } = {
//   name: "Alice",
// };
```

The first side requires `name`.  
The second side requires `age`.  
Both must be provided.

---

## Intersection types in function parameters

A function parameter can use an intersection type:

```ts
function printAccount(
  account: {
    username: string;
  } & {
    active: boolean;
  }
): void {
  console.log(account.username);
  console.log(account.active);
}
```

The argument must contain all properties from both intersected types.

```ts
const userAccount = {
  username: "alice",
  active: true,
  lastLogin: "today",
};

printAccount(userAccount);
```

---

## Intersection types in variable declarations

Intersection types can annotate variables directly:

```ts
const product: {
  name: string;
  price: number;
} & {
  available: boolean;
  category: string;
} = {
  name: "Keyboard",
  price: 75,
  available: true,
  category: "Accessories",
};
```

After assignment, properties from both sides are available.

---

## Intersections with incompatible properties

If two intersected types define the same property with incompatible types, the intersection may become impossible to satisfy.

```ts
// const impossibleValue: {
//   id: number;
// } & {
//   id: string;
// } = {
//   id: 1,
// };
```

The same property cannot simultaneously satisfy incompatible requirements such as `number` and `string`.

When the overlapping property types are compatible, the shared property is fine:

```ts
const sharedIdentity: {
  id: number;
  name: string;
} & {
  id: number;
  active: boolean;
} = {
  id: 10,
  name: "Bob",
  active: true,
};
```

Here `id` is compatible because both sides require `number`.

---

## Intersections versus union types

Brief comparison only:

| Form | Meaning |
| --- | --- |
| Union: `string \| number` | The value may satisfy **one** of the listed types |
| Intersection: `TypeA & TypeB` | The value must satisfy **all** combined types |

Do not treat this section as another Union Types lesson.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Providing only some of the required properties | Supply every required property from every side |
| Giving a shared property conflicting types | Overlapping properties must be compatible |
| Confusing `&` with `\|` | `&` means all; `\|` means one |
| Expecting intersections to exist at runtime | They are compile-time only |
| Thinking an intersection creates two objects | It describes one value that satisfies both shapes |

---

## Runtime behavior

Intersection types are checked at **compile time**.

That means:

- intersection types do not exist at runtime
- JavaScript receives ordinary objects after compilation
- property access is normal JavaScript property access

---

## Summary

- An intersection type combines multiple types into one with `&`.
- A value must satisfy all combined types.
- Object intersections require all properties from every side.
- Compatible overlapping properties are allowed; incompatible ones are not.
- Intersections can annotate variables and function parameters.
- Unions mean “one of”; intersections mean “all of.”
- Intersections are compile-time only and disappear from runtime JavaScript.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/08-combining-types/02-intersection-types/intersection-types-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/08-combining-types/02-intersection-types/intersection-types-example.ts
```

---

## Completion checklist

- [ ] I know what an intersection type is
- [ ] I can declare intersections with `&`
- [ ] I understand that all required properties from all sides are needed
- [ ] I can use intersections in variables and function parameters
- [ ] I recognize incompatible overlapping properties
- [ ] I can contrast intersections briefly with unions
- [ ] I know intersections are compile-time only
