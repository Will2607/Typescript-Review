# Interface Declaration

Learn how to declare interfaces for object shapes, including required, optional, and read-only members, method signatures, and declaration merging.

Example file for this lesson:

- `interface-declaration-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- declare an interface with the `interface` keyword
- describe object shapes with required, optional, and read-only properties
- declare method signatures inside an interface
- reuse one interface for multiple objects
- reopen an interface by declaring the same name again
- understand declaration merging
- recognize valid and invalid merging of properties
- compare interface merging with type alias redeclaration at a basic level
- know that interface declarations are erased at compile time

---

## Basic interface declaration syntax

Interfaces are declared with the `interface` keyword.

```ts
interface User {
  id: number;
  name: string;
}
```

`User` is a TypeScript interface declaration describing an object contract.

---

## Declaring object shapes with interfaces

An interface can describe the expected shape of an object.

A value typed with that interface must provide the members the interface requires, with compatible types.

```ts
interface User {
  readonly id: number;
  name: string;
  email?: string;
  greet(): void;
}
```

---

## Required properties

Required properties must be present on every matching object.

In `User`, `id` and `name` are required (along with the `greet` method).

---

## Optional properties

Optional properties use `?`.

```ts
email?: string;
```

`email` may be omitted. All required members must still be present.

---

## Read-only properties

Read-only properties use `readonly`.

```ts
readonly id: number;
```

After the object is created, TypeScript does not allow reassignment of that property.

```ts
// firstUser.id = 99;
```

---

## Method declarations inside interfaces

An interface can declare method signatures.

```ts
greet(): void;
```

The object must provide a matching method. This lesson does not develop `this` typing as a separate topic.

---

## Reusing interface declarations

One interface can type many objects.

```ts
const firstUser: User = { /* ... */ };
const secondUser: User = { /* ... */ };
```

Both must satisfy the same contract.

---

## Reopening an interface

The same interface name can be declared more than once in the same scope.

```ts
interface Settings {
  theme: string;
}

interface Settings {
  notifications: boolean;
}
```

TypeScript treats these as one combined interface.

---

## Declaration merging

Multiple declarations with the same interface name are merged by TypeScript.

This behavior is called declaration merging.

After merging, values using that interface must satisfy the combined structure.

Conceptually, the two `Settings` declarations become:

```ts
interface Settings {
  theme: string;
  notifications: boolean;
}
```

That conceptual merged version is for explanation only. Do not write a third declaration that duplicates the merged form in executable code.

This is invalid because the merged interface also requires `notifications`:

```ts
// const settings: Settings = {
//   theme: "dark",
// };
```

---

## Valid declaration merging

If repeated declarations contain compatible members, they merge successfully.

```ts
interface ApplicationSettings {
  theme: string;
}

interface ApplicationSettings {
  notificationsEnabled: boolean;
}
```

Repeating a property with the same type is also compatible:

```ts
interface Service {
  name: string;
}

interface Service {
  name: string;
  active: boolean;
}
```

Repeating `name` with the same type is compatible.

---

## Invalid declaration merging

If repeated declarations contain the same property with incompatible types, TypeScript reports an error.

```ts
// interface InvalidConfig {
//   port: number;
// }
//
// interface InvalidConfig {
//   port: string;
// }
```

Repeated properties must have compatible declarations.

This lesson does not explore method overload merging or advanced declaration-merging rules.

---

## Interface declaration versus type alias declaration

Both can describe object shapes:

```ts
interface UserInterface {
  id: number;
}

type UserType = {
  id: number;
};
```

- Both can describe object shapes.
- Interfaces can participate in declaration merging.
- Type aliases with the same name cannot simply be redeclared in the same scope.

This is only a short comparison, not a full Types vs Interfaces lesson.

---

## Runtime behavior

These declarations:

```ts
interface User {
  id: number;
}
```

and declaration merging itself are TypeScript-only features.

Interfaces exist only in TypeScript's type system. Interface declarations are removed during JavaScript compilation.

JavaScript receives only the runtime objects and functions you write, such as object literals and method implementations.

---

## Common mistakes

- Missing a required property or required method.
- Using the wrong property type.
- Reassigning a `readonly` property.
- Omitting a property that was added through declaration merging.
- Redeclaring the same property with an incompatible type across merged interfaces.
- Expecting interfaces to exist as objects in the compiled JavaScript.

Invalid examples belong in comments. They must not run.

---

## Summary

- Interfaces are declared with `interface` and describe object contracts.
- Members can be required, optional, read-only, or method signatures.
- The same interface name can be reopened; TypeScript merges the declarations.
- After merging, objects must satisfy the combined structure.
- Compatible repeated members merge; incompatible types cause errors.
- Interfaces and declaration merging are erased at compile time.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 04-typescript-interfaces/03-interface-declaration/interface-declaration-example.ts
```

Execute:

```bash
npx tsx 04-typescript-interfaces/03-interface-declaration/interface-declaration-example.ts
```

---

## Completion checklist

- [ ] I can declare an interface with properties and a method signature
- [ ] I can use optional and read-only members
- [ ] I can reuse one interface for multiple objects
- [ ] I understand declaration merging when the same name is declared twice
- [ ] I know merged interfaces require the combined members
- [ ] I know incompatible duplicate property types are rejected
- [ ] I know interfaces are removed during compilation
- [ ] I ran the type-check and execute commands above
