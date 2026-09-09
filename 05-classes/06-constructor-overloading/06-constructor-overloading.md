# Constructor Overloading

Learn how TypeScript lets a class constructor expose multiple valid call signatures while still using a single implementation body.

Example file for this lesson:

- `constructor-overloading-example.ts`

---

## What constructor overloading is

TypeScript allows a class constructor to expose multiple valid call signatures.

These are called **overload signatures**.

There is still only one actual constructor implementation. Overloading is a type-system feature that describes how callers may use `new`, not several constructor bodies.

---

## Basic syntax

```ts
class User {
  constructor(name: string);
  constructor(name: string, age: number);

  constructor(name: string, age?: number) {
    // implementation
  }
}
```

- The first lines are **overload signatures**.
- The final constructor is the **implementation signature**.
- Only one constructor body exists.

---

## Overload signatures

Overload signatures describe the valid ways callers may instantiate the class.

They do not contain an implementation body. They only declare allowed parameter lists.

```ts
constructor(name: string);
constructor(name: string, age: number);
```

Callers are checked against these signatures when they write `new User(...)`.

---

## Implementation signature

The implementation signature must be broad enough to support all overload signatures.

Optional parameters or union types are commonly used in the implementation.

```ts
constructor(name: string, age?: number) {
  // one body handles every overload
}
```

---

## Compatibility

Every overload signature must be compatible with the implementation signature.

In practice:

- each overload’s arguments must be acceptable to the implementation
- the implementation must be able to handle every declared overload

If an overload cannot be covered by the implementation, TypeScript reports an error.

---

## Multiple valid constructor calls

Valid:

```ts
new User("Alice");
new User("Alice", 30);
```

Invalid:

```ts
// new User();
// new User("Alice", "30");
// new User("Alice", 30, true);
```

---

## Implementation signature visibility

Callers use the declared overload signatures.

The implementation signature itself does not automatically create an additional externally valid constructor call.

If the implementation accepts a broader type than the overloads list, callers are still restricted by the overload signatures.

```ts
class Code {
  constructor(value: string);
  constructor(value: number);

  constructor(value: string | number | boolean) {
    // implementation may accept boolean internally
  }
}

// const invalidCode = new Code(true); // not allowed by overloads
```

---

## Using union types in the implementation

```ts
class Product {
  constructor(id: number);
  constructor(id: string);

  constructor(id: number | string) {
    // implementation
  }
}
```

The union belongs to the implementation so both overloads can be handled in one body.

---

## Using optional parameters in the implementation

Optional parameters can allow one implementation to support overloads with different argument counts.

```ts
class Employee {
  constructor(name: string);
  constructor(name: string, department: string);

  constructor(name: string, department?: string) {
    // implementation
  }
}
```

`department?` lets the same body support both `new Employee("Alice")` and `new Employee("Alice", "Engineering")`.

---

## Constructor overloading vs optional parameters

- Optional parameters alone allow multiple argument counts with one public signature that includes an optional parameter.
- Constructor overloading explicitly defines the public set of valid constructor signatures.

Both can support different argument counts. Overloading is useful when you want a clear list of allowed call shapes.

---

## Invalid overload definitions

Keep invalid cases commented out in executable files:

- an overload incompatible with the implementation
- invalid argument types at the call site
- invalid number of arguments at the call site

```ts
// class Broken {
//   constructor(value: number);
//   constructor(value: string);
//
//   constructor(value: number) {
//     // string overload is not supported
//   }
// }
```

---

## Key Takeaways

- Constructor overloading uses multiple overload signatures.
- There is only one implementation.
- The implementation must support every overload.
- Optional parameters and unions are common implementation techniques.
- Callers are checked against overload signatures, not the broader implementation alone.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 05-classes/06-constructor-overloading/constructor-overloading-example.ts
```

Execute:

```bash
npx tsx 05-classes/06-constructor-overloading/constructor-overloading-example.ts
```

---

## Completion checklist

- [ ] I can write overload signatures above one constructor implementation
- [ ] I know the implementation must cover every overload
- [ ] I can use unions and optional parameters in the implementation
- [ ] I understand callers follow the overload signatures
- [ ] I can distinguish overloading from a single optional parameter
- [ ] I ran the type-check and execute commands above
