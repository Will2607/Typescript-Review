# satisfies keyword

Learn how TypeScript’s `satisfies` keyword checks that an expression matches a required type while preserving the expression’s own inferred type.

Example file for this lesson:

- `satisfies-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what `satisfies` does
- write `expression satisfies Type`
- validate object shapes with `satisfies`
- contrast `satisfies` with type annotations and `as Type`
- recognize missing, incompatible, and unexpected properties
- understand that `satisfies` is compile-time only

---

## What is the `satisfies` keyword?

`satisfies` checks whether an expression is **compatible** with a specified type.

It validates the value against that type **without replacing** the expression’s inferred type with the target type.

That combination is the main reason to use it:

- validation of the required shape
- preservation of the expression’s precise inferred type

```ts
const application = {
  name: "TypeScript Review",
  version: 1,
} satisfies {
  name: string;
  version: number;
};
```

---

## Basic syntax

```ts
expression satisfies Type
```

Example:

```ts
{
  name: "TypeScript Review",
  version: 1,
} satisfies {
  name: string;
  version: number;
}
```

---

## Validating an object's shape

`satisfies` asks TypeScript:

> Does this object fit the required properties and property types?

If it does, the expression is accepted.  
If it does not, TypeScript reports an error.

After a successful check, you can still access the object’s properties normally:

```ts
console.log(application.name);
console.log(application.version);
```

---

## Preserving the expression's inferred type

With `satisfies`, TypeScript keeps the expression’s own inferred type while still checking compatibility.

That means you get:

- a compatibility check against the target type
- the more precise inferred type of the actual expression, where TypeScript naturally preserves it

This lesson does not go into advanced inference rules. The beginner takeaway is enough:

> `satisfies` checks the shape and keeps the expression’s inferred type, instead of forcing the variable to become exactly the target type annotation.

---

## `satisfies` versus a type annotation

### Type annotation

Declares the variable with the specified type:

```ts
const configuration: {
  environment: string;
  port: number;
} = {
  environment: "development",
  port: 3000,
};
```

### `satisfies`

Verifies compatibility while keeping the expression’s inferred type:

```ts
const configuration = {
  environment: "development",
  port: 3000,
} satisfies {
  environment: string;
  port: number;
};
```

| Form | Essential idea |
| --- | --- |
| Annotation | The variable is given the annotated type |
| `satisfies` | Compatibility is checked; the expression keeps its inferred type |

---

## `satisfies` versus a type assertion

### Type assertion (`as Type`)

Tells TypeScript to **treat** the expression as the specified type:

```ts
const configuration = {
  environment: "development",
  port: 3000,
} as {
  environment: string;
  port: number;
};
```

### `satisfies`

**Verifies** that the expression actually conforms to the required type:

```ts
const configuration = {
  environment: "development",
  port: 3000,
} satisfies {
  environment: string;
  port: number;
};
```

| Form | Essential idea |
| --- | --- |
| `as Type` | “Treat this as Type” |
| `satisfies` | “Check that this is compatible with Type” |

`as Type` does not prove the value matches.  
`satisfies` asks TypeScript to verify compatibility.

---

## Detecting missing properties

If a required property is missing, `satisfies` reports an error:

```ts
// const missingProperty = {
//   name: "TypeScript Review",
// } satisfies {
//   name: string;
//   version: number;
// };
```

---

## Detecting incompatible property types

If a property has the wrong value type, `satisfies` reports an error:

```ts
// const wrongPropertyType = {
//   name: "TypeScript Review",
//   version: "one",
// } satisfies {
//   name: string;
//   version: number;
// };
```

---

## Detecting unexpected properties

For object literals, `satisfies` can also report properties that are not part of the expected shape:

```ts
// const unexpectedProperty = {
//   name: "TypeScript Review",
//   version: 1,
//   debug: true,
// } satisfies {
//   name: string;
//   version: number;
// };
```

---

## Runtime behavior

`satisfies`:

- does **not** convert a value
- does **not** perform runtime validation
- is removed during JavaScript compilation

At runtime, you still have a normal JavaScript object. The checking happens only in TypeScript.

---

## When `satisfies` is useful

`satisfies` is especially useful when you want both:

- validation against a known object shape
- preservation of the expression’s inferred type

Typical beginner cases:

- configuration objects
- user records
- application metadata objects

Use an annotation when you specifically want the variable to have exactly the annotated type.  
Use `as Type` only when you intentionally assert a type.  
Use `satisfies` when you want a compatibility check without replacing the inferred type.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Thinking `satisfies` converts values | It only checks types |
| Treating `satisfies` as the same as `: Type` | Annotation assigns the variable type; `satisfies` keeps inferred type |
| Treating `satisfies` as the same as `as Type` | Assertion asserts; `satisfies` verifies |
| Expecting runtime validation | Checking is compile-time only |
| Using `satisfies` to silence errors with incomplete objects | Fix the object so it truly matches |

---

## Summary

- `expression satisfies Type` checks compatibility with `Type`.
- It validates without replacing the expression’s inferred type with the target type.
- It can detect missing properties, wrong property types, and unexpected object-literal properties.
- It does not convert values or validate at runtime.
- Annotation gives a variable a declared type.
- Assertion tells TypeScript to treat a value as a type.
- `satisfies` verifies compatibility while preserving inference.
- Prefer `satisfies` when you want both checking and precise inferred types.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/05-assertions/05-satisfies/satisfies-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/05-assertions/05-satisfies/satisfies-example.ts
```

---

## Completion checklist

- [ ] I know what `satisfies` checks
- [ ] I can write `expression satisfies Type`
- [ ] I understand that inferred types are preserved
- [ ] I can contrast annotation, assertion, and `satisfies`
- [ ] I know `satisfies` can catch missing, wrong, and unexpected properties
- [ ] I know `satisfies` is removed at compile time and does no runtime validation
