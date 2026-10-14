# InstanceType

Learn how TypeScript’s built-in `InstanceType<T>` utility type extracts the instance type produced by a constructor type.

Example file for this lesson:

- `instancetype-example.ts`

---

## What `InstanceType<T>` does

`InstanceType<T>` extracts the instance type produced by a constructor type.

```ts
class User {
  constructor(
    public name: string
  ) {}
}

type UserInstance =
  InstanceType<typeof User>;
```

`UserInstance` represents instances created with `new User(...)`.

---

## What `T` represents

`T` must represent a constructable type.

```ts
InstanceType<typeof User>
```

This lesson does not introduce advanced constructor constraints.

---

## Class type vs instance type

- `typeof User` represents the class constructor itself
- `InstanceType<typeof User>` represents objects created by that constructor

```ts
const UserConstructor = User;

const user: InstanceType<typeof User> =
  new UserConstructor("Alice");
```

`UserConstructor` is the constructor. `user` is an instance.

---

## Basic class example

```ts
class Product {
  constructor(
    public id: number,
    public name: string
  ) {}
}

type ProductInstance =
  InstanceType<typeof Product>;

const product: ProductInstance =
  new Product(1, "Keyboard");
```

The assignment is valid because `new Product(...)` creates a value whose type matches the instance type extracted from the `Product` constructor.

---

## Reusing the instance type

`InstanceType` can be used when code receives a constructor and the instance type needs to be referenced separately.

```ts
const ServiceConstructor = Service;

type ServiceInstance =
  InstanceType<typeof ServiceConstructor>;
```

`ServiceInstance` names the objects created by that constructor without rewriting the class shape.

---

## Constructor stored in a variable

```ts
class Service {
  constructor(
    public name: string
  ) {}
}

const ServiceConstructor =
  Service;

type ServiceInstance =
  InstanceType<typeof ServiceConstructor>;
```

The resulting type represents `Service` instances.

---

## InstanceType with methods

```ts
class Calculator {
  add(
    a: number,
    b: number
  ): number {
    return a + b;
  }
}

type CalculatorInstance =
  InstanceType<typeof Calculator>;
```

A variable of `CalculatorInstance` can access `add(...)`, because the extracted instance type includes the class methods.

---

## Invalid usage

`InstanceType` expects a constructor type, not an ordinary primitive or object type.

```ts
// type InvalidString = InstanceType<string>;

// type InvalidObject = InstanceType<{
//   name: string;
// }>;
```

---

## InstanceType and direct class usage

In a simple case, these describe compatible instance types:

```ts
const user: User = new User("Alice");

const user: InstanceType<typeof User> =
  new User("Alice");
```

`InstanceType` becomes more useful when working from constructor types dynamically or indirectly. This lesson does not introduce advanced generic factories.

---

## InstanceType vs ReturnType

- `ReturnType<T>` extracts the return type of a function
- `InstanceType<T>` extracts the instance type of a constructor

```ts
function createName(): string {
  return "Alice";
}

type NameResult =
  ReturnType<typeof createName>;

class User {
  constructor(
    public name: string
  ) {}
}

type UserResult =
  InstanceType<typeof User>;
```

- `NameResult` is `string`
- `UserResult` is the `User` instance type

This comparison stays brief. `ReturnType` is not taught again here.

---

## Key Takeaways

- `InstanceType<T>` extracts the type created by a constructor.
- `T` must be constructable.
- `typeof ClassName` represents the constructor.
- `InstanceType<typeof ClassName>` represents its instances.
- The resulting type includes the instance’s properties and methods.
- `InstanceType` works with constructor types while `ReturnType` works with function return types.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/12-instancetype/instancetype-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/12-instancetype/instancetype-example.ts
```
