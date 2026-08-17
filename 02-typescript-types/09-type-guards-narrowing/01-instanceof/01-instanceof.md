# instanceof

Learn how JavaScript’s `instanceof` operator works as a TypeScript type guard to narrow class instance types.

Example file for this lesson:

- `instanceof-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what `instanceof` checks at runtime
- use `instanceof` to narrow a union of class types
- access class-specific properties and methods after narrowing
- use `instanceof` with built-in classes such as `Date`
- recognize that `instanceof` cannot check interfaces or type aliases
- understand that `instanceof` remains in compiled JavaScript

---

## What is `instanceof`?

`instanceof` is a **JavaScript operator** that also works as a **TypeScript type guard**.

It answers this question:

> Was this value created from this constructor (or from something in its prototype chain)?

Because classes and constructors exist at runtime, `instanceof` can check them. Pure TypeScript types such as interfaces and type aliases cannot be checked this way.

---

## Basic syntax

```ts
value instanceof Constructor
```

Examples:

```ts
animal instanceof Dog
vehicle instanceof Car
value instanceof Date
```

---

## Runtime behavior of `instanceof`

At runtime, `instanceof` checks whether an object was created from a constructor or inherits from its prototype chain.

```ts
const dog = new Dog("Rex");
console.log(dog instanceof Dog); // true
```

Important:

- `instanceof` is a real JavaScript operation
- it is **not** removed during compilation
- TypeScript only adds compile-time narrowing based on its result

This is different from type-only operators such as `keyof`, which disappear from the emitted JavaScript.

---

## `instanceof` as a type guard

A type guard is a check that helps TypeScript narrow a value to a more specific type.

When TypeScript sees:

```ts
if (animal instanceof Dog) {
  // ...
}
```

it treats `animal` as `Dog` inside that branch.

---

## Narrowing between class instances

When a value may be one of several classes, `instanceof` helps TypeScript choose the correct one:

```ts
function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

Before the check, `animal` could be either `Dog` or `Cat`.

Inside:

```ts
if (animal instanceof Dog)
```

TypeScript narrows `animal` to `Dog`, so `bark()` is safe.

In the `else` branch, TypeScript knows it must be `Cat`, so `meow()` is safe.

---

## Accessing class-specific properties after narrowing

After an `instanceof` check, class-specific properties become available:

```ts
if (vehicle instanceof Car) {
  console.log(vehicle.brand);
} else {
  console.log(vehicle.model);
}
```

Without the check, TypeScript would reject property access that exists on only one class.

---

## Accessing class-specific methods after narrowing

The same idea applies to methods:

```ts
if (vehicle instanceof Car) {
  vehicle.drive();
} else {
  vehicle.pedal();
}
```

Narrowing makes those method calls safe for the type checker.

---

## `instanceof` with built-in classes

`instanceof` also works with built-in runtime classes such as `Date`:

```ts
function printDate(value: Date | string): void {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value);
  }
}
```

Inside the `Date` branch, TypeScript allows `Date` methods.  
In the other branch, the value is treated as `string`.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Calling a class-specific method before checking | Use `instanceof` first |
| Trying `value instanceof SomeTypeAlias` | Type aliases do not exist at runtime |
| Trying `value instanceof SomeInterface` | Interfaces do not exist at runtime |
| Thinking `instanceof` is erased like `keyof` | `instanceof` remains in JavaScript |
| Using `instanceof` for plain object shapes with no constructor | Prefer other checks later for those cases |

---

## Limitations

`instanceof` is useful, but it has clear limits:

- it works with classes and constructor functions that exist at runtime
- it cannot directly check interfaces or type aliases
- it is not the right tool for every kind of union

Example of what does **not** work:

```ts
type User = {
  id: number;
};

// value instanceof User
```

`User` is only a TypeScript type. There is no JavaScript constructor named `User` created by that alias.

---

## Summary

- `instanceof` is a JavaScript operator and a TypeScript type guard.
- It checks whether a value is an instance of a constructor at runtime.
- TypeScript uses the check to narrow class types in each branch.
- After narrowing, class-specific properties and methods are safe to use.
- It works with custom classes and built-in classes such as `Date`.
- It cannot check interfaces or type aliases because they do not exist at runtime.
- The operator remains in compiled JavaScript; only the type narrowing is TypeScript-specific.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/09-type-guards-narrowing/01-instanceof/instanceof-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/09-type-guards-narrowing/01-instanceof/instanceof-example.ts
```

---

## Completion checklist

- [ ] I know what `instanceof` checks at runtime
- [ ] I can use `instanceof` to narrow a union of class types
- [ ] I can access class-specific properties after narrowing
- [ ] I can call class-specific methods after narrowing
- [ ] I can use `instanceof` with built-in classes such as `Date`
- [ ] I know interfaces and type aliases cannot be used with `instanceof`
- [ ] I know `instanceof` remains in compiled JavaScript
