# Type Inference

Learn how TypeScript determines types automatically from initial values, so you do not always need to write explicit type annotations.

Example file for this lesson:

- `type-inference-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what type inference is
- contrast explicit annotations with inferred types
- recognize inferred `string`, `number`, and `boolean` values
- understand how inference works with `let`, `const`, objects, and arrays
- know when an explicit annotation is still useful
- understand that inference is compile-time only

---

## What is type inference?

**Type inference** allows TypeScript to determine a type automatically from the code.

When a value is clear from the initial assignment, TypeScript can often figure out the type without an annotation.

```ts
const framework = "TypeScript";
```

Here TypeScript determines the type automatically.

---

## Explicit types versus inferred types

### Explicit annotation

```ts
const framework: string = "TypeScript";
```

You declare the expected type yourself.

### Type inference

```ts
const framework = "TypeScript";
```

TypeScript determines the type from the initial value.

Both styles are valid. Inference reduces unnecessary annotations when the type is already obvious.

---

## Primitive value inference

TypeScript can infer common primitive types such as:

- `string`
- `number`
- `boolean`

```ts
let language = "TypeScript"; // string
let version = 5;             // number
let isTyped = true;          // boolean
```

---

## Type inference with `let`

When a `let` variable is initialized with a primitive value, TypeScript infers the corresponding **general** primitive type.

```ts
let score = 100; // inferred as number
```

Compatible reassignment is allowed:

```ts
score = 200;
```

Incompatible reassignment is rejected:

```ts
// score = "one hundred"; // error
```

TypeScript inferred `score` as a number from its initial value, so assigning a string later is rejected.

---

## Type inference with `const`

A `const` variable cannot be reassigned.

```ts
const courseName = "TypeScript Review";
console.log(courseName);

// courseName = "JavaScript Review"; // error: const cannot be reassigned
```

TypeScript still understands the value’s type from the initializer. The important beginner point is that `const` locks the variable binding itself.

---

## Object property inference

TypeScript can infer the types of properties inside object literals.

```ts
const product = {
  name: "Keyboard",
  price: 75,
  available: true,
};
```

TypeScript understands:

- `name` as a string value
- `price` as a number value
- `available` as a boolean value

Compatible updates are allowed:

```ts
product.name = "Mouse";
product.available = false;
```

Incompatible updates are rejected:

```ts
// product.name = 100;      // error
// product.available = "yes"; // error
```

This lesson does not introduce interfaces or type aliases to describe the object.

---

## Array element inference

TypeScript can infer the element type of an array from its initial values.

```ts
const cities = ["Lima", "Cusco", "Arequipa"];
```

TypeScript infers an array whose elements are strings.

A compatible operation is allowed:

```ts
cities.push("Piura");
```

An incompatible operation is rejected:

```ts
// cities.push(123); // error
```

This lesson avoids mixed-type arrays and empty arrays so the focus stays on basic inference.

---

## Inference from initial values

Basic inference starts from what you assign first.

| Initial value | Typical inferred type |
| --- | --- |
| `"TypeScript"` with `let` | `string` |
| `5` with `let` | `number` |
| `true` with `let` | `boolean` |
| `["TypeScript", "JavaScript"]` | array of strings |
| `{ id: 1, name: "Alice" }` | object with inferred property types |

---

## Reassignment and inferred types

Once a `let` variable has an inferred type, later assignments must stay compatible.

```ts
let language = "TypeScript";
language = "JavaScript"; // ok
// language = 42;        // error
```

The same idea applies to object properties and array elements inferred from their initial values.

---

## When explicit annotations are useful

Inference is convenient, but explicit annotations are still useful when:

- the intended type is not obvious from the initializer
- you want to state the expected type clearly for readers
- you want the variable’s type to be visible at the declaration site

```ts
const explicitLanguage: string = "TypeScript";
const inferredLanguage = "TypeScript";
```

Both can work. Choose clarity when the code benefits from it.

---

## Benefits of type inference

- less repetitive type writing
- cleaner beginner code when values are obvious
- TypeScript still checks later assignments and updates
- you keep type safety without annotating every line

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Thinking inference means “no types” | Types are still there; TypeScript fills them in |
| Expecting a `let` string variable to later accept numbers | The inferred type still restricts later assignments |
| Updating an object property with the wrong type | Each property keeps its inferred type |
| Pushing the wrong type into an inferred array | The array element type comes from the initial values |
| Assuming inferred types exist at runtime | Inference is compile-time only |

---

## Runtime behavior

Type inference is a **compile-time** TypeScript feature.

That means:

- inferred types do not exist at runtime
- the emitted JavaScript behaves like normal JavaScript
- variables, objects, and arrays remain ordinary JavaScript values

TypeScript uses inference while checking your code, then removes the type information during compilation.

---

## Summary

- Type inference lets TypeScript determine types automatically from initial values.
- Explicit annotations are optional when the type is already clear.
- `let` primitives usually get general types such as `string`, `number`, and `boolean`.
- Incompatible reassignment is rejected after inference.
- `const` variables cannot be reassigned.
- Object properties and array elements are inferred from their initial values.
- Explicit annotations remain useful when clarity matters.
- Inference is compile-time only and does not exist at runtime.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/06-type-inference/type-inference-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/06-type-inference/type-inference-example.ts
```

---

## Completion checklist

- [ ] I know what type inference is
- [ ] I can contrast explicit annotations with inferred types
- [ ] I understand string, number, and boolean inference with `let`
- [ ] I know incompatible reassignment is rejected
- [ ] I understand that `const` cannot be reassigned
- [ ] I know object properties are inferred separately
- [ ] I know array element types come from initial values
- [ ] I know when an explicit annotation is still useful
- [ ] I know inference is compile-time only
