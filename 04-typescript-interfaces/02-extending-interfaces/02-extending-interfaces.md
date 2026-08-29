# Extending Interfaces

Learn how one interface can inherit properties from another using `extends`, add new properties, and extend multiple parent interfaces.

Example file for this lesson:

- `extending-interfaces-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what extending an interface means
- use the `extends` keyword to inherit properties from a parent interface
- add new properties in a child interface
- extend more than one interface
- understand that a value must satisfy inherited and new properties
- recognize compatible and incompatible property redeclaration
- compare extension with repeating the same properties
- know that interface inheritance is compile-time only

---

## What does extending an interface mean?

An interface can extend another interface using the `extends` keyword.

The extending interface inherits the properties of the parent interface.

The extending interface can also add new properties.

A value using the child interface must satisfy both the inherited properties and the new properties.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "Alice",
  employeeId: 1,
};
```

`Employee` inherits `name` from `Person` and adds `employeeId`.

This is invalid because the inherited `name` property is still required:

```ts
// const employee: Employee = {
//   employeeId: 1,
// };
```

---

## Basic `extends` syntax

Place `extends` after the child interface name, followed by the parent interface name.

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}
```

`Employee` contains:

- `name` and `age` from `Person`
- `employeeId` and `department` declared directly in `Employee`

---

## Inheriting properties from another interface

When an interface extends another, the child interface includes all properties from the parent.

```ts
const employee: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 1001,
  department: "Engineering",
};

console.log(employee.name);
console.log(employee.age);
```

You can access inherited properties on a value typed with the child interface.

---

## Adding new properties

The child interface can declare properties that the parent does not have.

```ts
interface DigitalProduct extends Product {
  downloadUrl: string;
}
```

`DigitalProduct` inherits `name` and `price` from `Product` and adds `downloadUrl`.

---

## Extending multiple interfaces

An interface can extend more than one interface.

```ts
interface Identifiable {
  id: number;
}

interface Timestamped {
  createdAt: string;
}

interface RecordItem extends Identifiable, Timestamped {
  title: string;
}
```

`RecordItem` must satisfy properties from both `Identifiable` and `Timestamped`, plus its own `title` property.

Separate parent names with a comma.

---

## Required properties after extension

All inherited required properties remain required on the child interface.

A value typed as `Employee` must include every property from `Person` and every property declared on `Employee`.

Missing an inherited property or a child-specific property is a TypeScript error.

---

## Compatible property redeclaration

If a child interface redeclares an inherited property, the redeclared type must be compatible with the parent property.

```ts
interface BaseAccount {
  id: number;
  username: string;
}

interface AdminAccount extends BaseAccount {
  username: string;
  permissions: string[];
}
```

Redeclaring `username` as `string` remains compatible with the parent interface.

This lesson does not go deeper into subtype rules.

---

## Incompatible property redeclaration

Incompatible property redeclaration produces a TypeScript error.

```ts
// interface InvalidAccount extends BaseAccount {
//   username: number;
// }
```

The child cannot change `username` from `string` to `number`.

---

## Extending interfaces versus repeating properties

You could repeat every property in one interface:

```ts
interface Employee {
  name: string;
  age: number;
  employeeId: number;
}
```

Or split shared properties into a parent and extend it:

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}
```

Extension reduces duplication and expresses the relationship between the interfaces.

This lesson does not compare interface extension with class inheritance.

---

## Runtime behavior

These declarations:

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

do not create JavaScript constructors or runtime inheritance.

Both interfaces are removed during compilation. The `extends` relationship between interfaces is removed during JavaScript compilation.

Interface inheritance is checked at compile time. Interfaces do not exist at runtime.

The JavaScript output contains only normal object values, such as object literals you create in code.

---

## Common mistakes

- Omitting an inherited required property on a child-typed value.
- Omitting a property declared only on the child interface.
- Using the wrong type for an inherited or child-specific property.
- Redeclaring an inherited property with an incompatible type.
- Forgetting a property from one parent when extending multiple interfaces.
- Expecting `extends` to create runtime inheritance in JavaScript.

Invalid examples belong in comments. They must not run.

---

## Summary

- An interface can extend another with `extends`.
- The child inherits parent properties and may add new ones.
- A value must satisfy inherited and new required properties.
- An interface can extend multiple interfaces.
- Extension helps reuse object contracts and avoid repetition.
- Compatible redeclaration is allowed; incompatible redeclaration is rejected.
- Interface inheritance is compile-time only and is erased during compilation.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 04-typescript-interfaces/02-extending-interfaces/extending-interfaces-example.ts
```

Execute:

```bash
npx tsx 04-typescript-interfaces/02-extending-interfaces/extending-interfaces-example.ts
```

---

## Completion checklist

- [ ] I can extend one interface from another with `extends`
- [ ] I know inherited and new properties are both required
- [ ] I can extend multiple interfaces in one declaration
- [ ] I understand compatible versus incompatible redeclaration
- [ ] I can explain why extension reduces duplication
- [ ] I know interfaces and `extends` do not exist at runtime
- [ ] I ran the type-check and execute commands above
