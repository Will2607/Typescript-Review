# Types vs Interfaces

Learn how type aliases and interfaces compare when describing object shapes, and when a type alias is the better tool for non-object types.

Example file for this lesson:

- `types-vs-interfaces-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- recall what a type alias is
- declare a basic interface for an object shape
- compare `type` and `interface` for describing objects
- use both for variables and function parameters
- use required, optional, and read-only properties with either form
- name primitives and unions with a type alias
- choose between `type` and `interface` for simple cases
- know that both are erased at compile time

---

## Recap: what is a type alias?

A type alias is declared with the `type` keyword.

It gives a name to a type. That name can stand for an object shape, a primitive, a union, or other type expressions you have already learned.

```ts
type UserType = {
  id: number;
  name: string;
};
```

---

## What is an interface?

An interface is declared with the `interface` keyword.

In this lesson, an interface describes the shape of an object: which properties it has and what types those properties use.

```ts
interface UserInterface {
  id: number;
  name: string;
}
```

Both `UserType` and `UserInterface` represent a similar object structure.

---

## Basic syntax comparison

| Feature                | Type Alias       | Interface     |
| ---------------------- | ---------------- | ------------- |
| Describe object shapes | Yes              | Yes           |
| Optional properties    | Yes              | Yes           |
| Read-only properties   | Yes              | Yes           |
| Function parameters    | Yes              | Yes           |
| Primitive alias        | Yes              | No            |
| Union alias            | Yes              | No            |
| Interface extension    | Not covered here | Covered next  |
| Declaration merging    | No               | Covered later |

```ts
type UserType = {
  id: number;
  name: string;
};

interface UserInterface {
  id: number;
  name: string;
}
```

For this object shape, both definitions enforce the same structure.

---

## Describing object shapes

Both can describe the shape of an object.

```ts
const userFromType: UserType = {
  id: 1,
  name: "Alice",
};

const userFromInterface: UserInterface = {
  id: 2,
  name: "Bob",
};
```

TypeScript checks that each object provides the required properties with the correct types.

---

## Reusing object structures

Both can be used to type variables and function parameters.

That reuse keeps one shared description of the object instead of repeating the same property list in every place.

```ts
function printTypeCustomer(customer: CustomerType): void {
  console.log(customer.id, customer.name);
}

function printInterfaceCustomer(customer: CustomerInterface): void {
  console.log(customer.id, customer.name);
}
```

---

## Similarities between `type` and `interface`

At a beginner level, both support:

- required properties
- optional properties (`?`)
- read-only properties (`readonly`)
- typing object variables
- typing function parameters
- structural compatibility: a value is accepted when its shape matches

```ts
type ProductType = {
  name: string;
  description?: string;
};

interface ProductInterface {
  name: string;
  description?: string;
}
```

```ts
type AppType = {
  readonly name: string;
  version: string;
};

interface AppInterface {
  readonly name: string;
  version: string;
}
```

If an object has a compatible structure, it can be assigned to either kind of type in simple cases:

```ts
const sharedUser = {
  id: 100,
  name: "Eva",
};

const typeUser: BasicUser = sharedUser;
const interfaceUser: BasicUserInterface = sharedUser;
```

Both accept compatible object structures. This lesson does not go deeper into type compatibility.

---

## Key differences at a beginner level

### Type aliases can name more than object shapes

A type alias can name a primitive type:

```ts
type UserId = string;
```

A type alias can name a union:

```ts
type Status = "active" | "inactive";
```

An interface is primarily used to describe object-like structures in this lesson.

### Interfaces are commonly used for object contracts

Interfaces are often used when the main purpose is describing the structure of objects.

That is a common style choice, not an absolute rule.

### Later interface topics (mentioned only)

Interfaces can extend other interfaces, which will be covered in the next lesson.

Interfaces support declaration merging, which will be covered in a later lesson.

Do not use `extends` or declaration merging in this lesson.

---

## Type aliases beyond object shapes

Type aliases can represent non-object types such as primitives and unions.

```ts
type UserId = string;

const userId: UserId = "USR-001";
```

```ts
type Status = "active" | "inactive";

const currentStatus: Status = "active";
```

This lesson uses interfaces only for object structures. Do not try to imitate primitive or union aliases with interface tricks.

---

## Interfaces and object-oriented style

Interfaces are a familiar way to write object contracts, especially when you think in terms of “what properties an object must have.”

For basic object shapes, `type` and `interface` often look and behave the same.

---

## Choosing between `type` and `interface`

Keep the guidance simple and neutral:

- Use `interface` when the main goal is describing an object contract.
- Use `type` when you need to name unions, primitives, intersections, or other type expressions.
- For basic object shapes, both are valid.

Neither is universally superior.

---

## Runtime behavior

These declarations:

```ts
type User = {
  id: number;
};

interface Product {
  name: string;
}
```

do not produce runtime JavaScript objects.

They are TypeScript-only constructs. Both are removed during TypeScript compilation. Neither creates a JavaScript runtime object by itself.

At runtime you only have ordinary JavaScript values, such as object literals you created in code.

---

## Common mistakes

- Missing a required property on either a type alias or an interface.
- Using the wrong property type (for example a string where a number is required).
- Assigning a value that is not allowed by a union type alias.
- Trying to reassign a `readonly` property.
- Expecting `type` or `interface` to exist as objects in the compiled JavaScript.

Invalid examples belong in comments. They must not run.

---

## Summary

- A type alias uses `type`. An interface uses `interface`.
- Both can describe object shapes, including optional and read-only properties.
- Both can type variables and function parameters.
- Type aliases can also name primitives and unions; this lesson uses interfaces for object structures.
- For basic objects, both are valid. Prefer `interface` for object contracts and `type` when you need non-object type expressions.
- Both are erased at compile time and do not exist as runtime objects.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 04-typescript-interfaces/01-types-vs-interfaces/types-vs-interfaces-example.ts
```

Execute:

```bash
npx tsx 04-typescript-interfaces/01-types-vs-interfaces/types-vs-interfaces-example.ts
```

---

## Completion checklist

- [ ] I can declare an object shape with `type` and with `interface`
- [ ] I can use both for variables and function parameters
- [ ] I can use optional and read-only properties with either form
- [ ] I know type aliases can name primitives and unions
- [ ] I can choose between `type` and `interface` for simple cases
- [ ] I know both are removed during compilation
- [ ] I ran the type-check and execute commands above
