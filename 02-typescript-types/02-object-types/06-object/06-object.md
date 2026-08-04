# Object

Learn how TypeScript describes the shape of JavaScript objects with inline object types, optional properties, read-only properties, nested structures, and the lowercase `object` type.

Example file for this lesson:

- `object-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- annotate an object with an inline object type
- declare required, optional, and read-only properties
- read and update object properties safely
- type a nested object structure
- explain what the lowercase `object` type means
- understand that object type annotations are erased at runtime

---

## What is an object in TypeScript?

In everyday JavaScript, an **object** stores related values as **key-value pairs**.

```ts
{
  id: 1,
  name: "Alice",
  active: true,
}
```

In TypeScript, you can also describe the **expected shape** of that object: which properties exist and what type each value should have.

---

## JavaScript objects and TypeScript object types

| Layer | Role |
| --- | --- |
| JavaScript object | The real runtime value with properties |
| TypeScript object type | The compile-time description of that value’s shape |

TypeScript checks the shape while you write code. After compilation, the type information is removed and the value remains a normal JavaScript object.

---

## Object type annotations

You can annotate a variable with an object type so TypeScript knows the expected properties:

```ts
const user: {
  id: number;
  name: string;
  active: boolean;
} = {
  id: 1,
  name: "Alice",
  active: true,
};
```

---

## Inline object types

An **inline object type** writes the property names and value types directly in the annotation.

This lesson uses inline object types when the exact structure is known.

They are ideal for small, local examples before introducing other ways to name object shapes.

---

## Required properties

Properties without `?` are **required**.

They must be present when the object is created:

```ts
const user: {
  id: number;
  name: string;
  active: boolean;
} = {
  id: 1,
  name: "Alice",
  active: true,
};
```

If a required property is missing, TypeScript reports an error.

---

## Optional properties

Optional properties use `?`:

```ts
const product: {
  name: string;
  price: number;
  description?: string;
} = {
  name: "Keyboard",
  price: 75,
};
```

`description` may be omitted. If it is absent, reading it may yield `undefined`.

Do not assume an optional property always exists with the value `undefined`; it may also be completely absent.

---

## Read-only properties

Read-only properties use `readonly`:

```ts
const application: {
  readonly name: string;
  version: string;
} = {
  name: "TypeScript Review",
  version: "1.0.0",
};
```

After initialization, TypeScript does not allow reassigning that property:

```ts
// application.name = "Other App"; // error
```

`readonly` is a TypeScript restriction on reassignment. It does not by itself make the whole object immutable at runtime.

---

## Reading object properties

Use dot notation:

```ts
console.log(user.name);
console.log(employee.address.city);
```

---

## Updating object properties

Writable properties can be updated with compatible values:

```ts
user.active = false;
product.price = 80;
application.version = "1.1.0";
```

The new value must match the declared property type.

---

## Nested object types

A property can itself be an object with its own declared structure:

```ts
const employee: {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
} = {
  id: 10,
  name: "Daniel",
  address: {
    city: "Lima",
    country: "Peru",
  },
};
```

Nested properties are read the same way: `employee.address.city`.

---

## The lowercase `object` type

The lowercase `object` type means: a **non-primitive** value.

It accepts values that are not primitives such as `string`, `number`, `boolean`, `null`, or `undefined` in the usual beginner sense of “object-like values.”

Important limitation:

- `object` does **not** describe specific property names
- therefore TypeScript does **not** allow direct access to properties like `.environment` or `.darkMode` on a value typed only as `object`

```ts
const configuration: object = {
  environment: "development",
};

// console.log(configuration.environment); // error: property does not exist on type 'object'
```

---

## Inline object types versus the `object` type

| Approach | When to use |
| --- | --- |
| Inline object type | You know the exact property names and value types |
| Lowercase `object` | You only need “this is a non-primitive value,” without describing its shape |

If you need to read `user.name` or `product.price`, use an inline object type (or another named object shape in later lessons).  
If a value is typed only as `object`, do not expect property access.

This lesson does not discuss the uppercase `Object` type in detail.

---

## Type safety in objects

TypeScript reports errors when:

- a required property is missing
- a property receives an incompatible value
- a read-only property is reassigned
- a nested property has the wrong type

```ts
// user.active = "yes"; // error: string is not assignable to boolean
```

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Forgetting a required property | Provide every required field |
| Using `object` when you need property access | Use an inline object type with the real shape |
| Reassigning a `readonly` property | Keep read-only fields fixed after creation |
| Giving a nested property the wrong type | Match the nested structure exactly |
| Assuming type annotations exist at runtime | Remember: types are erased; objects remain plain JavaScript objects |

---

## Runtime behavior

TypeScript object types exist for checking during development and compilation.

At runtime:

- the value is still a regular JavaScript object
- property reads and writes work like normal JavaScript
- the type annotation itself is not present in the emitted JavaScript

---

## Summary

- JavaScript objects store related values as key-value pairs.
- TypeScript can describe an object’s expected shape with an inline object type.
- Required properties must be present; optional properties use `?`.
- Read-only properties use `readonly` and cannot be reassigned in TypeScript.
- Properties are read with dot notation and updated with compatible values.
- Nested objects can declare their own structure.
- The lowercase `object` type means non-primitive, but does not expose specific properties.
- Prefer inline object types when you know the exact structure.
- Object types are erased at compile time; runtime values remain ordinary objects.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/02-object-types/06-object/object-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/02-object-types/06-object/object-example.ts
```

---

## Completion checklist

- [ ] I can annotate objects with inline object types
- [ ] I understand required, optional, and read-only properties
- [ ] I can read and update object properties
- [ ] I can declare a nested object structure
- [ ] I know that lowercase `object` does not allow specific property access
- [ ] I know when to prefer an inline object type over `object`
- [ ] I understand that object types are removed at runtime
