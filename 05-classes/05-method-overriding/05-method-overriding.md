# Method Overriding

Learn how a derived class can replace an inherited method with its own implementation, using TypeScript’s `override` modifier and optionally calling the base version with `super`.

Example file for this lesson:

- `method-overriding-example.ts`

---

## What method overriding is

Method overriding occurs when a derived class provides its own implementation of a method inherited from a base class.

Inheritance is required for overriding. You need `extends` so there is a base method to replace.

```ts
class Animal {
  speak(): string {
    return "Animal sound";
  }
}

class Dog extends Animal {
  override speak(): string {
    return "Woof";
  }
}
```

`Dog` replaces the inherited `speak` behavior for `Dog` instances.

---

## Inherited method vs overridden method

If the derived class does not redefine a method, it uses the inherited implementation.

If it overrides the method, its own implementation is used for instances of that derived class.

```ts
class Animal {
  speak(): string {
    return "The animal makes a sound";
  }
}

class Cat extends Animal {
  // no speak() here — Cat uses Animal.speak
}

class Dog extends Animal {
  override speak(): string {
    return "The dog barks";
  }
}
```

---

## The `override` keyword

TypeScript supports the `override` modifier.

It explicitly indicates that a method is intended to replace an inherited member.

TypeScript can report an error if there is no compatible member in the base class.

```ts
class Base {
  greet(): string {
    return "Hello";
  }
}

class Derived extends Base {
  override greet(): string {
    return "Hello from Derived";
  }
}
```

Using `override` on a method that does not exist on the base class is invalid:

```ts
// class Invalid extends Base {
//   override missing(): string {
//     return "No";
//   }
// }
```

---

## Compatible method signatures

An overriding method must be compatible with the method declared in the base class.

Focus on practical rules:

- parameters should match the base method’s types
- the return type should be compatible with the base return type

Valid:

```ts
class Formatter {
  format(value: string): string {
    return value;
  }
}

class UppercaseFormatter extends Formatter {
  override format(value: string): string {
    return value.toUpperCase();
  }
}
```

Invalid (commented in examples):

```ts
// class BadFormatter extends Formatter {
//   override format(value: number): string {
//     return String(value);
//   }
// }

// class BadReturn extends Formatter {
//   override format(value: string): number {
//     return value.length;
//   }
// }
```

This lesson does not go deeper into advanced type-system rules.

---

## Calling the base implementation with `super`

An overriding method can call the base version using `super.methodName()`.

```ts
class Employee {
  describe(): string {
    return "Employee";
  }
}

class Developer extends Employee {
  override describe(): string {
    return super.describe() + " - Developer";
  }
}
```

`super.describe()` runs the base implementation, then the derived method can add more text or behavior.

---

## Overriding public and protected methods

Accessible inherited methods may be overridden.

Public and protected methods from the base class are typical candidates. This lesson does not revisit access modifiers in depth.

---

## Runtime behavior

When a method is called on a derived instance, the overridden implementation is used.

```ts
const animal: Animal = new Dog();
console.log(animal.speak());
```

Even if the variable type is the base class, the actual derived implementation runs for that instance. Keep this focused on overriding, not on polymorphism as a separate topic.

---

## Invalid overriding cases

Keep these commented out in executable files:

- using `override` for a method that does not exist in the base class
- incompatible parameters
- incompatible return type

```ts
// class InvalidAlert extends AlertMessage {
//   override cancel(): string {
//     return "Cancelled";
//   }
// }
```

---

## Key Takeaways

- Overriding replaces inherited behavior in a derived class.
- `override` documents intent and allows TypeScript to validate the relationship.
- Overriding methods must be compatible with their base methods.
- `super.method()` can call the base implementation.
- The derived implementation is used when the method is called on a derived instance.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 05-classes/05-method-overriding/method-overriding-example.ts
```

Execute:

```bash
npx tsx 05-classes/05-method-overriding/method-overriding-example.ts
```

---

## Completion checklist

- [ ] I can override an inherited method in a derived class
- [ ] I know when the base implementation is still used
- [ ] I can use the `override` keyword correctly
- [ ] I can call the base method with `super.method()`
- [ ] I understand that overriding methods need compatible signatures
- [ ] I ran the type-check and execute commands above
