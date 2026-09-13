# Generic Constraints

Learn how to limit generic type parameters with `extends` so TypeScript knows which properties and keys are safe to use.

Example file for this lesson:

- `generic-constraints-example.ts`

---

## What a generic constraint is

A generic constraint limits which types may be used as a generic type argument.

The syntax is:

```ts
<T extends SomeType>
```

In a generic constraint, `extends` means that `T` must be compatible with the required type or structure. This is not a general inheritance lesson; it is a rule about allowed type arguments.

---

## Why generic constraints are useful

An unconstrained generic provides very little information about the type.

```ts
function logValue<T>(value: T): void {
  console.log(value);
}
```

TypeScript cannot assume that `T` has arbitrary properties. A constraint guarantees that a required property or structure exists before you use it.

---

## Constraint based on an object shape

```ts
function logLength<T extends { length: number }>(value: T): number {
  return value.length;
}
```

Any accepted type must have a numeric `length` property.

Valid:

```ts
logLength("TypeScript");
logLength([1, 2, 3]);
```

Invalid:

```ts
// logLength(123);
```

A `number` has no `length` property, so it does not satisfy the constraint.

---

## Constraints using interfaces

```ts
interface Identifiable {
  id: number;
}

function getId<T extends Identifiable>(item: T): number {
  return item.id;
}
```

`T` can contain additional properties, but it must satisfy the `Identifiable` structure.

---

## Preserving the original generic type

The function still returns or works with the full type `T`.

```ts
function preserveItem<T extends Identifiable>(item: T): T {
  return item;
}
```

The constraint limits `T` without replacing it with the constraint type. Extra properties on the argument remain part of `T`.

---

## Multiple generic parameters with constraints

```ts
function combine<T extends object, U extends object>(
  first: T,
  second: U
): T & U {
  return { ...first, ...second };
}
```

Both `T` and `U` must be object types. The return type is the combination of both objects. This lesson keeps intersection types at a basic level.

---

## Basic `keyof` constraint

A common pattern is:

```ts
<K extends keyof T>
```

```ts
function getProperty<T, K extends keyof T>(
  object: T,
  key: K
): T[K] {
  return object[key];
}
```

- `keyof T` produces the valid property keys of `T`
- `K` must be one of those keys
- this prevents invalid property access
- `T[K]` is the type of the property selected by `key`

```ts
const user = {
  name: "Alice",
  age: 30,
};

getProperty(user, "name");
getProperty(user, "age");

// getProperty(user, "email");
```

---

## Generic without constraint vs generic with constraint

Unconstrained:

```ts
function identity<T>(value: T): T {
  return value;
}
```

Constrained:

```ts
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}
```

- Unconstrained generics accept a broader set of types.
- Constrained generics require specific capabilities or structure.

---

## Invalid constraints and calls

Keep these commented out in executable files:

- passing a value that does not satisfy the constraint
- using a key that is not part of `keyof T`

```ts
// getLength(123);
// getProperty(user, "email");
```

---

## Key Takeaways

- Constraints restrict generic type parameters.
- `extends` is used to define a generic constraint.
- Constraints allow safe access to known properties.
- Interfaces and object shapes can be used as constraints.
- `K extends keyof T` restricts a generic parameter to valid object keys.
- A constrained generic still preserves the complete type represented by `T`.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 06-generics/02-generic-constraints/generic-constraints-example.ts
```

Execute:

```bash
npx tsx 06-generics/02-generic-constraints/generic-constraints-example.ts
```

---

## Completion checklist

- [ ] I can write `<T extends SomeType>`
- [ ] I can constrain `T` to an object shape or interface
- [ ] I understand that `T` keeps its full type under a constraint
- [ ] I can use `K extends keyof T` for safe property access
- [ ] I know unconstrained vs constrained generics
- [ ] I ran the type-check and execute commands above
