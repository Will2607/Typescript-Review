# Tuple

Learn how TypeScript **tuples** describe fixed-length, ordered collections where each position has its own declared type.

Example file for this lesson:

- `tuple-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- declare a tuple with a fixed sequence of types
- read and update tuple elements by index
- explain how tuples differ from regular arrays
- use named tuple elements for readability
- declare optional tuple elements with `?`
- use read-only tuples
- return multiple related values from a function as a tuple

---

## What is a tuple?

A **tuple** is an array-like structure with a **fixed sequence of element types**.

Each position has a specific expected type, and values must follow the declared order.

```ts
const coordinate: [number, number] = [10, 20];
```

Important runtime fact:

- tuples are a **TypeScript type-checking construct**
- at runtime they are regular **JavaScript arrays**
- the fixed length and per-position types are enforced by TypeScript, not by a special JavaScript tuple object

---

## Tuple syntax

A tuple type lists types inside square brackets:

```ts
[number, number]
[number, string, boolean]
[statusCode: number, message: string]
```

Example:

```ts
const coordinate: [number, number] = [10, 20];
```

---

## Tuples versus arrays

| Feature | Array | Tuple |
| --- | --- | --- |
| Typical element typing | One shared element type (`string[]`) | Each position can have its own type |
| Length | Flexible for many everyday lists | Declared as a fixed sequence |
| Example | `string[]` → many strings | `[number, string]` → one number, then one string |
| Runtime | JavaScript array | Also a JavaScript array |

Use an array when you have a list of the same kind of value.  
Use a tuple when positions mean different things (for example: id, name, active).

---

## Creating and initializing tuples

Provide values in the exact declared order:

```ts
const coordinate: [number, number] = [10, 20];

const user: [number, string, boolean] = [
  1,
  "Alice",
  true,
];
```

TypeScript checks:

- the number of required elements
- the order of elements
- the type of each position

---

## Reading tuple elements

Tuple indexes start at `0`:

```ts
const x = coordinate[0];
const y = coordinate[1];
```

| Index | Meaning in `coordinate` |
| --- | --- |
| `0` | first number |
| `1` | second number |

---

## Updating tuple elements

You can update an existing position with a compatible value:

```ts
coordinate[0] = 15;
coordinate[1] = 25;
```

The value must match the type declared for that position.

---

## Fixed element positions

In a tuple, position matters.

For `[number, string, boolean]`:

1. first value must be a `number`
2. second value must be a `string`
3. third value must be a `boolean`

Swapping order is a type error, even if the values would fit elsewhere.

---

## Fixed element types

Each slot keeps its own type:

```ts
const user: [number, string, boolean] = [1, "Alice", true];
```

- `user[0]` is typed as `number`
- `user[1]` is typed as `string`
- `user[2]` is typed as `boolean`

That is the main difference from a regular array of one element type.

---

## Named tuple elements

You can label positions for readability:

```ts
const response: [statusCode: number, message: string] = [
  200,
  "OK",
];
```

Named elements:

- make the meaning clearer in the type
- do **not** change runtime behavior
- are still accessed by index in normal value usage (`response[0]`, `response[1]`)

---

## Optional tuple elements

Mark a trailing element as optional with `?`:

```ts
const product: [string, number, boolean?] = [
  "Keyboard",
  75,
];
```

Rules for this lesson:

- optional elements use `?`
- optional elements must appear **after** required elements
- you may omit the optional value when creating the tuple

---

## Read-only tuples

A read-only tuple blocks mutation:

```ts
const fixedCoordinate: readonly [number, number] = [
  15,
  30,
];
```

You can read values, but TypeScript reports errors for changes such as reassigning an index or using mutating array methods.

---

## Tuples as function return values

A function can return several related values as one tuple:

```ts
function getOperationResult(): [boolean, string] {
  return [true, "Operation completed"];
}

const [success, message] = getOperationResult();
```

This is useful when a function needs to give back more than one related piece of information without creating a full object type in this lesson.

---

## Type safety in tuples

TypeScript validates:

- **count** of required elements
- **order** of elements
- **type** of each position
- mutation attempts on read-only tuples

```ts
// const badUser: [number, string, boolean] = ["Alice", 1, true]; // wrong order/types
```

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Putting values in the wrong order | Follow the declared sequence exactly |
| Using a regular array type when positions mean different things | Prefer a tuple for fixed position meanings |
| Forgetting that runtime is still an array | Remember: tuple checks are TypeScript; runtime value is an array |
| Placing an optional element before required ones | Keep `?` elements at the end |
| Mutating a read-only tuple | Use a mutable tuple when updates are required |
| Providing too few or too many required elements | Match the declared length |

---

## Summary

- A tuple is an array-like TypeScript structure with a fixed sequence of types.
- Each position has its own expected type and order matters.
- Elements are read and updated by zero-based indexes.
- Named elements improve readability without changing runtime behavior.
- Optional elements use `?` and must come after required elements.
- Read-only tuples prevent mutation.
- Functions can return multiple related values as a tuple.
- At runtime, tuples are regular JavaScript arrays; TypeScript enforces the tuple rules during checking.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/02-object-types/05-tuple/tuple-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/02-object-types/05-tuple/tuple-example.ts
```

---

## Completion checklist

- [ ] I know what a tuple is and how it differs from a regular array
- [ ] I can declare tuples such as `[number, string, boolean]`
- [ ] I can read and update tuple elements by index
- [ ] I understand fixed positions and fixed per-position types
- [ ] I can use named tuple elements
- [ ] I can declare an optional trailing tuple element
- [ ] I understand read-only tuples
- [ ] I can return and destructure a tuple from a function
- [ ] I know tuples are type-level checks over runtime arrays
