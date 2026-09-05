# Access Modifiers

Learn how TypeScript access modifiers control where class members can be used: `public`, `private`, and `protected`, including constructor parameter properties.

Example file for this lesson:

- `access-modifiers-example.ts`

---

## What access modifiers are

Access modifiers control where class members can be accessed.

They apply to:

- class properties
- methods
- constructor parameter properties

TypeScript checks these rules at compile time.

---

## `public`

`public` members can be accessed from inside and outside the class.

`public` is the default accessibility when no modifier is written.

```ts
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Alice");
console.log(user.name);
```

A property written as `name: string` without a modifier is also public.

---

## `private`

Private members can only be accessed from inside the class that declares them.

Valid internal access:

```ts
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

Invalid external access:

```ts
// console.log(account.balance);
```

---

## `protected`

Protected members can be accessed from the declaring class and derived classes.

They cannot normally be accessed directly from outside the class hierarchy.

```ts
class Animal {
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }
}

class Dog extends Animal {
  describe(): string {
    return "This dog is a " + this.species;
  }
}
```

`Dog` may read `species` because it is a derived class. Outside code should not access `species` directly:

```ts
// console.log(dog.species);
```

This lesson uses `extends` only to demonstrate `protected`. Inheritance is not taught as a standalone topic here.

---

## Access modifiers on methods

Methods can also be `public`, `private`, or `protected`.

```ts
class Logger {
  public log(message: string): void {
    this.write(message);
  }

  private write(message: string): void {
    console.log(message);
  }
}
```

- Call `log` from outside the class.
- Call `write` only from inside the class.

A protected method follows the same rule as a protected property: usable in the declaring class and derived classes.

---

## Constructor parameter properties

TypeScript can declare and initialize a class property directly from a constructor parameter by adding an access modifier.

```ts
class Product {
  constructor(public name: string, private price: number) {}
}
```

This is shorthand for explicitly declaring the property and assigning it inside the constructor.

---

## Explicit property declaration vs parameter property

Explicit form:

```ts
class Product {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

Parameter property form:

```ts
class Product {
  constructor(public name: string) {}
}
```

Both create an instance property. The second form is TypeScript parameter property syntax: the access modifier on the constructor parameter creates the property and assigns the argument in one step.

---

## Accessibility comparison

| Modifier    | Inside declaring class | Outside class | Derived class |
| ----------- | ---------------------- | ------------- | ------------- |
| `public`    | Yes                    | Yes           | Yes           |
| `private`   | Yes                    | No            | No            |
| `protected` | Yes                    | No            | Yes           |

---

## Important notes

- `public` is the default when no modifier is written.
- `private` and `protected` are checked by TypeScript at compile time.
- Access modifiers are primarily a TypeScript class feature for controlling accessibility in code.

JavaScript `#private` fields are a separate JavaScript feature and are outside the scope of this lesson.

---

## Key Takeaways

- Access modifiers control where properties, methods, and parameter properties can be used.
- `public` is accessible everywhere and is the default.
- `private` is only accessible inside the declaring class.
- `protected` is accessible inside the declaring class and derived classes.
- Constructor parameter properties declare and initialize members in one step.
- Explicit property declaration and parameter properties can produce the same instance property.
- TypeScript enforces these rules at compile time.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 05-classes/02-access-modifiers/access-modifiers-example.ts
```

Execute:

```bash
npx tsx 05-classes/02-access-modifiers/access-modifiers-example.ts
```

---

## Completion checklist

- [ ] I can explain `public`, `private`, and `protected`
- [ ] I know `public` is the default
- [ ] I can use access modifiers on methods
- [ ] I can write constructor parameter properties
- [ ] I understand the difference between explicit properties and parameter properties
- [ ] I ran the type-check and execute commands above
