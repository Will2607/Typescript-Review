# Abstract Classes

Learn how TypeScript abstract classes define base contracts that cannot be instantiated directly and may require derived classes to implement abstract methods.

Example file for this lesson:

- `abstract-classes-example.ts`

---

## What an abstract class is

An abstract class is declared with the `abstract` keyword.

It is intended to act as a base class. It cannot be instantiated directly.

```ts
abstract class Animal {
}

// const animal = new Animal(); // invalid
```

You create instances of concrete classes that extend the abstract class, not of the abstract class itself.

---

## Abstract class members

An abstract class can contain:

- normal properties
- normal methods with implementations
- abstract methods

Normal members are shared by derived classes. Abstract methods define a required signature without providing a body in the abstract class.

---

## Abstract methods

Abstract methods are declared with the `abstract` keyword.

They do not provide an implementation in the abstract class. They only declare the expected method signature.

```ts
abstract class Shape {
  abstract getArea(): number;
}
```

Any concrete class that extends `Shape` must provide a `getArea` method that returns a `number`.

---

## Concrete methods

Abstract classes may also contain fully implemented methods.

```ts
abstract class Vehicle {
  constructor(public brand: string) {}

  describe(): string {
    return "Vehicle brand: " + this.brand;
  }
}
```

`describe` is a concrete method. Derived classes inherit it and can call it without reimplementing it.

---

## Implementing abstract methods

A non-abstract derived class must implement all inherited abstract methods.

```ts
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}
```

`Rectangle` fulfills the abstract contract by implementing `getArea`. This lesson focuses on that requirement, not on inheritance or method overriding as separate topics.

---

## Abstract class constructors

Abstract classes can have constructors.

The constructor can initialize common state. A derived class may call the base constructor with `super(...)`.

```ts
abstract class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
}
```

`super(name)` runs the abstract class constructor so the shared `name` property is set. That is the only `super()` detail needed here.

---

## Abstract vs concrete classes

| Kind            | Instantiated with `new`? | Abstract members?                                      |
| --------------- | ------------------------ | ------------------------------------------------------ |
| Abstract class  | No                       | May contain abstract members                           |
| Concrete class  | Yes                      | Must implement inherited abstract members              |

---

## Invalid cases

Attempting to instantiate an abstract class:

```ts
// const vehicle = new Vehicle("Toyota");
```

Creating a concrete subclass without implementing an abstract method:

```ts
// class InvalidShape extends Shape {
// }
```

Both are TypeScript errors. Keep them commented out in executable examples.

---

## Key Takeaways

- Abstract classes cannot be instantiated directly.
- Abstract methods have no implementation in the abstract class.
- Concrete derived classes must implement all inherited abstract methods.
- Abstract classes can also contain normal properties, methods, and constructors.
- Use `extends` and `super(...)` only as needed to build on an abstract base class.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 05-classes/03-abstract-classes/abstract-classes-example.ts
```

Execute:

```bash
npx tsx 05-classes/03-abstract-classes/abstract-classes-example.ts
```

---

## Completion checklist

- [ ] I know an abstract class cannot be instantiated with `new`
- [ ] I can declare an abstract method without a body
- [ ] I can implement abstract methods in a concrete derived class
- [ ] I understand abstract classes may also have concrete methods and constructors
- [ ] I ran the type-check and execute commands above
