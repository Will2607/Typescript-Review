# Type Compatibility

Learn how TypeScript decides whether one value can be used where another type is expected, using basic structural typing.

Example file for this lesson:

- `type-compatibility-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what type compatibility means
- recognize compatible and incompatible primitive assignments
- understand basic structural compatibility for objects
- see why extra properties on an existing variable can still be compatible
- pass compatible objects into functions and assign compatible return values
- know that compatibility is checked only at compile time

---

## What is type compatibility?

**Type compatibility** determines whether one value can be assigned to another typed location.

In simple terms, TypeScript asks:

> Can this value safely be used where that type is expected?

```ts
let language: string = "TypeScript";
const framework: string = "JavaScript";

language = framework; // compatible
```

---

## Assignment compatibility

Assignment compatibility is the everyday form of this idea:

```ts
target = source;
```

The assignment is allowed when `source` is compatible with the type expected by `target`.

This applies to:

- variables
- object properties in simple examples
- function arguments
- function return values assigned to variables

---

## Compatibility with primitive types

Primitive types such as `string`, `number`, and `boolean` are only compatible with their corresponding expected types in normal assignments.

```ts
let language: string = "TypeScript";
language = "JavaScript"; // ok

// language = 100;  // incompatible
// language = true; // incompatible
```

```ts
let count: number = 10;
// count = false; // incompatible
```

---

## Compatibility with object shapes

For objects, TypeScript looks at the **shape**:

- required property names
- property value types

```ts
let basicUser: {
  id: number;
  name: string;
};

const detailedUser: {
  id: number;
  name: string;
  active: boolean;
} = {
  id: 1,
  name: "Alice",
  active: true,
};

basicUser = detailedUser; // compatible
```

`detailedUser` works because it has at least `id` and `name` with compatible types.

---

## Structural compatibility

TypeScript primarily uses **structural typing**.

That means the names of custom type annotations matter less than whether the structures match.

Two separately declared inline object types with the same structure are compatible:

```ts
const firstPoint: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20,
};

let secondPoint: {
  x: number;
  y: number;
} = {
  x: 0,
  y: 0,
};

secondPoint = firstPoint; // compatible
```

A clear structural example:

```ts
let first: {
  id: number;
  name: string;
};

const second = {
  id: 1,
  name: "Alice",
  active: true,
};

first = second;
```

This works because `second` contains all properties required by `first`, with compatible types.

This would not work:

```ts
const incomplete = {
  id: 1,
};

// first = incomplete; // missing required name
```

---

## Extra object properties in variable assignments

Extra properties can be allowed when assigning an **existing variable** whose structure contains all required properties.

```ts
const employee = {
  id: 10,
  name: "Daniel",
  department: "Engineering",
};

let person: {
  id: number;
  name: string;
};

person = employee; // compatible
```

`employee` has more than `person` needs, but it still has the required `id` and `name` with the right types.

This lesson focuses on compatibility between already-created variables, not on deeper object-literal checking rules.

---

## Missing required properties

Missing required properties make object types incompatible.

```ts
const incompleteUser = {
  id: 2,
};

// basicUser = incompleteUser; // incompatible: name is missing
```

```ts
const missingName = {
  id: 5,
};

// basicUser = missingName; // incompatible
```

---

## Compatible function arguments

Function parameters must receive values compatible with the expected parameter shape.

```ts
function printUser(user: {
  id: number;
  name: string;
}): void {
  console.log(user.id, user.name);
}

const admin = {
  id: 100,
  name: "Carol",
  role: "admin",
};

printUser(admin);
```

`admin` is compatible because it has at least the required properties with compatible types.

An incompatible argument is rejected:

```ts
// printUser({ id: "wrong", name: "Frank" }); // incompatible
```

---

## Compatible function return values

A returned object must be compatible with the declared return type, and that result can be assigned to a compatible variable.

```ts
function createCoordinate(): {
  x: number;
  y: number;
} {
  return {
    x: 5,
    y: 15,
  };
}

const coordinate: {
  x: number;
  y: number;
} = createCoordinate();
```

---

## Why property names and types matter

For object compatibility, both pieces matter:

| Requirement | Why it matters |
| --- | --- |
| Matching required property names | The target expects those fields to exist |
| Compatible property types | A `string` cannot fill a `number` slot |

```ts
const wrongUser = {
  id: "three",
  name: "Bob",
};

// basicUser = wrongUser; // incompatible: id has the wrong type
```

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Thinking only type names matter | Structure matters more than the label |
| Forgetting a required property | Missing fields make the assignment incompatible |
| Using the wrong property type | Names alone are not enough |
| Expecting runtime compatibility checks | Compatibility is compile-time only |
| Mixing up primitive types | `string`, `number`, and `boolean` are not interchangeable |

---

## Runtime behavior

Type compatibility is checked at **compile time**.

That means:

- compatibility does not exist as a special runtime feature
- the emitted JavaScript contains normal assignments and function calls
- once compiled, JavaScript no longer enforces TypeScript’s compatibility rules

---

## Summary

- Type compatibility decides whether a value can be used where a type is expected.
- TypeScript primarily uses structural typing.
- Objects are compatible when the source has at least the required properties with compatible types.
- Extra properties on an existing variable can still be compatible.
- Missing properties or wrong property types make objects incompatible.
- Primitive assignments must match the expected primitive type.
- Function arguments and return values follow the same compatibility idea.
- Compatibility is compile-time only and disappears from runtime JavaScript.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/07-type-compatibility/type-compatibility-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/07-type-compatibility/type-compatibility-example.ts
```

---

## Completion checklist

- [ ] I know what type compatibility means
- [ ] I understand compatible and incompatible primitive assignments
- [ ] I understand basic structural compatibility for objects
- [ ] I know extra properties on an existing variable can still be compatible
- [ ] I know missing or mistyped properties make objects incompatible
- [ ] I can pass a compatible object into a function
- [ ] I can assign a compatible function return value
- [ ] I know compatibility is checked only at compile time
