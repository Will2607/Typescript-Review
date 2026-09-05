# Inheritance vs Polymorphism

Learn how TypeScript class inheritance reuses members through `extends`, and how polymorphism lets you work with different derived objects through a common base type.

Example file for this lesson:

- `inheritance-vs-polymorphism-example.ts`

---

## What inheritance is

Inheritance allows one class to reuse members from another class.

Terms:

- **base class** — the class that provides members
- **derived class** — the class that inherits those members

The `extends` keyword creates the relationship.

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): string {
    return this.name + " is moving";
  }
}

class Dog extends Animal {
}
```

`Dog` inherits accessible members from `Animal`.

---

## Inheriting properties

A derived class receives accessible properties from the base class.

```ts
class Person {
  constructor(public name: string) {}
}

class Developer extends Person {
}

const developer = new Developer("Alice");
console.log(developer.name);
```

`name` comes from `Person` and is available on `Developer` instances.

---

## Inheriting methods

A derived class can use accessible methods defined by the base class without redeclaring them.

```ts
class Person {
  constructor(public name: string) {}

  introduce(): string {
    return "My name is " + this.name;
  }
}

class Developer extends Person {
}

const developer = new Developer("Alice");
console.log(developer.introduce());
```

---

## Derived class constructors and `super()`

When a derived class defines a constructor, it must call `super(...)` before accessing `this`.

`super(...)` invokes the base class constructor.

```ts
class Employee extends Person {
  constructor(
    name: string,
    public role: string
  ) {
    super(name);
  }
}
```

`super(name)` runs the `Person` constructor so the shared `name` property is initialized. This section covers only that constructor chaining.

---

## The "is-a" relationship

Inheritance usually represents an "is-a" relationship.

Examples:

- Dog is an Animal
- Manager is an Employee

This lesson does not expand into broader software design principles.

---

## What polymorphism is

Polymorphism allows code to work with objects through a common base type.

Different derived instances can be assigned to a variable whose type is the base class.

```ts
const animal: Animal = new Dog("Rex");
```

The variable type is `Animal`. The actual instance is a `Dog`.

---

## Polymorphism with multiple derived classes

A base class can have more than one derived class. Both derived objects can be stored using the base class type.

```ts
const animals: Animal[] = [
  new Dog("Rex"),
  new Cat("Milo"),
];
```

The array type is `Animal[]`. The elements are different derived instances.

---

## Different runtime behavior through a common type

Derived classes may provide behavior appropriate to their own class while still being used through the base class type.

```ts
const dog: Animal = new Dog("Rex");
const cat: Animal = new Cat("Milo");

console.log(dog.speak());
console.log(cat.speak());
```

Both calls use the `Animal` type. Each instance still runs the behavior of its own class. Methods with the same signature appear here only to show that polymorphic use. This is not a detailed method-overriding lesson.

---

## Inheritance vs Polymorphism

| Concept         | Purpose                                                      |
| --------------- | ------------------------------------------------------------ |
| Inheritance     | Reuse and extend behavior from a base class                  |
| Polymorphism    | Treat different derived objects through a common base type   |

- Inheritance describes the relationship between classes (`Dog extends Animal`).
- Polymorphism describes how different related objects can be used through the same type (`const animal: Animal = new Dog("Rex")`).

---

## Key Takeaways

- `extends` creates an inheritance relationship.
- Derived classes inherit accessible members.
- `super()` calls the base class constructor.
- Derived objects are compatible with their base class type.
- Polymorphism allows common code to work with different derived objects.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 05-classes/04-inheritance-vs-polymorphism/inheritance-vs-polymorphism-example.ts
```

Execute:

```bash
npx tsx 05-classes/04-inheritance-vs-polymorphism/inheritance-vs-polymorphism-example.ts
```

---

## Completion checklist

- [ ] I can use `extends` to create a derived class
- [ ] I can call `super(...)` from a derived constructor
- [ ] I understand the "is-a" idea at a basic level
- [ ] I can assign a derived instance to a base class type
- [ ] I can use a base-typed array with different derived objects
- [ ] I can distinguish inheritance from polymorphism
- [ ] I ran the type-check and execute commands above
