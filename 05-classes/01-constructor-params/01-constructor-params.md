# Constructor Params

Learn how TypeScript class constructors accept typed parameters to initialize instance state when you create an object with `new`.

Example file for this lesson:

- `constructor-params-example.ts`

---

## What a constructor is

`constructor` is the special method executed when an instance is created with `new`.

Its main purpose is initializing an object's state.

```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Alice", 30);
```

When `new User("Alice", 30)` runs, the constructor receives the arguments and assigns them to the instance.

---

## Constructor parameters

Constructors accept parameters similarly to regular functions.

Parameters should have explicit TypeScript types.

```ts
constructor(name: string, age: number) {
  this.name = name;
  this.age = age;
}
```

TypeScript checks that each argument passed to `new` matches the declared parameter type.

---

## Passing arguments when creating instances

Arguments passed to `new ClassName(...)` correspond to constructor parameters in order.

```ts
const user = new User("Alice", 30);
```

- `"Alice"` is passed to `name`
- `30` is passed to `age`

TypeScript checks their types at compile time.

```ts
// new User("Alice", "thirty"); // rejected: age must be a number
// new User("Alice");            // rejected: age is required
```

---

## Initializing instance properties

The standard approach is to declare properties on the class and assign constructor parameters using `this`.

```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

Each instance gets its own copy of `name` and `age`.

---

## Required constructor parameters

Required parameters must be supplied when creating an instance.

If a parameter has no `?` and no default value, omitting it is a TypeScript error.

```ts
// new User("Alice"); // missing required age
```

---

## Optional constructor parameters

Optional constructor parameters use `?`.

```ts
constructor(name: string, nickname?: string) {
  this.name = name;
  this.nickname = nickname;
}
```

The resulting type of `nickname` includes `undefined` because the caller may omit it.

```ts
new Profile("Alice");
new Profile("Bob", "Bobby");
```

---

## Default parameter values

Constructor parameters may have default values.

Callers may omit arguments that have defaults.

```ts
constructor(title: string, language: string = "English") {
  this.title = title;
  this.language = language;
}
```

```ts
new Course("TypeScript");
new Course("JavaScript", "Spanish");
```

When the second argument is omitted, `language` receives `"English"`.

---

## Parameter order

Constructor arguments are positional.

They must correspond to the declared parameter order.

```ts
constructor(name: string, age: number, active: boolean)
```

```ts
new Member("Alice", 30, true);
```

Swapping arguments where types differ produces a TypeScript error:

```ts
// new Member(true, "Alice", 30); // boolean is not assignable to string
```

---

## Constructor return behavior

Constructors do not declare a normal return type such as `: void`.

Their role is initializing the new instance. TypeScript handles constructor return behavior for you.

Do not write:

```ts
// constructor(name: string): void { ... } // not valid for a class constructor
```

---

## Constructor Parameters vs Class Properties

Constructor parameters are local parameters available during construction.

Class properties belong to each instance and persist after construction.

```ts
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
```

- `name` and `price` in the constructor parameter list are parameters
- `this.name` and `this.price` refer to instance properties

This lesson uses explicit property declaration and assignment with `this`.

Parameter properties such as `constructor(public name: string)` are not covered here because access modifiers are a later roadmap topic.

---

## Key Takeaways

- `constructor` runs when you use `new` and initializes instance state.
- Constructor parameters should have explicit types.
- Arguments to `new` are checked against those parameter types.
- Declare properties on the class and assign them inside the constructor with `this`.
- Required parameters must be provided; optional parameters use `?`; defaults allow omitted arguments.
- Arguments are positional and must match parameter order.
- Constructors do not use a normal return type annotation.
- Constructor parameters are not the same as instance properties until assigned with `this`.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 05-classes/01-constructor-params/constructor-params-example.ts
```

Execute:

```bash
npx tsx 05-classes/01-constructor-params/constructor-params-example.ts
```

---

## Completion checklist

- [ ] I can declare typed constructor parameters
- [ ] I can pass arguments to `new` and initialize instance properties with `this`
- [ ] I can use optional and default constructor parameters
- [ ] I understand parameter order and required arguments
- [ ] I know constructor parameters differ from class properties
- [ ] I ran the type-check and execute commands above
