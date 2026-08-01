# 02 — Class

Learn how TypeScript **classes** work as templates for creating objects, how instances keep their own state, and what still exists at runtime after compilation.

Example file for this lesson:

- `class-example.ts`

---

## 1. What is a class in TypeScript?

A **class** is a blueprint for creating objects that share the same kind of data and behavior.

TypeScript classes follow JavaScript class syntax and add static type checking. TypeScript does **not** invent a completely different runtime class model — it mainly checks your code and erases type annotations.

A class is not “only a type.” It produces a **runtime value** (the class constructor/function) and can also be used as a **type** for instances in TypeScript.

---

## 2. A template for creating objects

Think of a class as a reusable template:

- the class defines the shape and behavior
- each `new ClassName(...)` creates one concrete object from that template

---

## 3. Class vs instance

| Concept | Meaning |
| --- | --- |
| **Class** | The template (`Course`) |
| **Instance** | One object created from the template (`typescriptCourse`) |

```ts
const typescriptCourse = new Course(1, "Introduction to TypeScript", false);
```

`Course` is the class. `typescriptCourse` is an instance.

---

## 4. A basic class

```ts
class Course {
  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
```

Properties are declared explicitly on the class body. The constructor assigns initial values with `this`.

This lesson does **not** use shorthand parameter properties such as `constructor(public id: number)`.

---

## 5–6. Creating an instance with `new`

```ts
const course = new Course(1, "TypeScript Basics");
```

The `new` operator:

- creates a new object
- runs the class constructor
- returns the resulting instance

Forgetting `new` is a common beginner mistake.

---

## 7. What the constructor does

The constructor:

- runs when you create an instance
- receives the initial values
- initializes instance properties

```ts
constructor(id: number, title: string, isPublished: boolean) {
  this.id = id;
  this.title = title;
  this.isPublished = isPublished;
}
```

---

## 8–9. Instance properties and separate state

Properties like `id`, `title`, and `isPublished` belong to each instance.

Two courses can have different values at the same time:

```ts
const advancedCourse = new Course(2, "Advanced TypeScript", true);
const basicsCourse = new Course(3, "TypeScript Basics", false);
```

Each instance keeps its own state.

---

## 10. The meaning of `this`

`this` represents the **current instance**.

Inside methods and the constructor:

- `this.id` is the current instance’s `id`
- `this.title` is the current instance’s `title`
- calling a method uses that same instance’s data

---

## 11–13. Methods

Methods are functions defined on the class and used on instances.

A method that returns a `string`:

```ts
getSummary(): string {
  return `Course #${this.id}: ${this.title} (published: ${this.isPublished})`;
}
```

A `void` method that updates state:

```ts
publish(): void {
  this.isPublished = true;
  console.log("Course published:", this.title);
}
```

`publish()` changes the instance. Its return value should not be consumed as useful data.

---

## 14. Data, state, and behavior together

A class can combine:

- **data** (properties)
- **state** (values that can change over time)
- **behavior** (methods that read or update that state)

That mix is why classes are useful for entities with operations, not only plain records.

---

## 15–17. Optional properties (brief)

```ts
email?: string
```

An optional property may be **absent**.

If you read a missing optional property, you may observe `undefined`. Do not assume the property always exists with value `undefined`.

```ts
const studentWithoutEmail = new Student(11, "Grace Hopper");
```

---

## 18. What exists at runtime

After compilation, classes still produce real JavaScript:

- the class constructor exists at runtime
- methods exist at runtime
- instances created with `new` exist at runtime

You can create objects, call methods, and mutate instance state while the program runs.

---

## 19. What is TypeScript-only

These parts help during type-checking and disappear from the emitted JavaScript as type information:

- type annotations (`: number`, `: string`, `: void`)
- compile-time type checking
- compiler restrictions (wrong argument types, missing properties, and similar)

Type annotations do **not** remain as runtime type enforcement by themselves.

---

## 20–22. Class vs interface

| Interface | Class |
| --- | --- |
| Describes a structure | Can create objects with `new` |
| Does not create objects | Contains implementation |
| No executable method bodies in the interface itself | Can have methods and update state |
| Erased from generated JavaScript | Exists in generated JavaScript |

They are related tools, but **not equivalent** and not interchangeable for every goal.

This lesson does **not** cover `implements`.

---

## 23. When a class is useful

A class can be a good fit when:

- objects share behavior
- instances must keep state
- creation needs initialization logic
- domain entities have their own operations (`publish`, `complete`, `calculateArea`)

---

## 24. When a plain object may be enough

A simple object literal can be enough when you only need:

- data without complex behavior
- small configuration values
- values passed between functions

Not every structure needs a class.

---

## 25. Common mistakes

| Mistake | Better approach |
| --- | --- |
| Confusing class with instance | Class = template; instance = created object |
| Forgetting `new` | Use `new Course(...)` |
| Leaving required properties uninitialized | Initialize in the constructor (or at declaration) |
| Passing incompatible constructor arguments | Match each parameter’s type |
| Confusing constructor parameters with properties | Assign with `this.property = parameter` |
| Forgetting `this` | Use `this.title` for instance data |
| Modeling everything as a class | Prefer plain objects for simple data |
| Assuming type annotations exist at runtime | Types are checked at compile time |

---

## 26–28. `strictPropertyInitialization` (brief)

With `strictPropertyInitialization` enabled (often via strict mode), TypeScript expects required properties to be initialized properly.

Common valid approaches:

```ts
// Initialize in the constructor
constructor(id: number) {
  this.id = id;
}

// Or initialize directly when declaring
count: number = 0;
```

This lesson documents the idea only. It does **not** change `tsconfig.json`.

---

## 29. Quick reference table

| Term | Meaning |
| --- | --- |
| Property | Data stored on an instance |
| Constructor | Initialization code run by `new` |
| Method | Behavior defined on the class |
| Instance | One object created from the class |
| `this` | The current instance |
| `new` | Creates an instance and runs the constructor |

---

## 30. Interface vs class (short table)

| Feature | Interface | Class |
| --- | --- | --- |
| Describes shape | Yes | Also can describe instance shape as a type |
| Creates objects | No | Yes (`new`) |
| Holds implementation | No | Yes |
| Exists in emitted JS | No | Yes |

---

## 31. Validate and run the example

Type-check without emitting JavaScript:

```bash
npx tsc --noEmit 02-typescript-types/02-object-types/02-class/class-example.ts
```

Run the example:

```bash
npx tsx 02-typescript-types/02-object-types/02-class/class-example.ts
```

---

## Review questions

1. What is the difference between a class and an instance?
2. What does `new` do when you write `new Course(...)`?
3. What does `this` refer to inside a class method?
4. Which parts of a class exist at runtime, and which parts are TypeScript-only?
5. How does a class differ from an interface in purpose and runtime behavior?

---

## Completion checklist

- [ ] I know a class is a template for creating objects
- [ ] I can tell class and instance apart
- [ ] I can declare properties and initialize them in a constructor with `this`
- [ ] I understand what `new` does
- [ ] I can write methods that return values or update state (`void`)
- [ ] I know each instance keeps its own state
- [ ] I understand optional properties at a basic level
- [ ] I know classes exist at runtime while type annotations do not enforce types by themselves
- [ ] I can contrast class with interface without treating them as the same tool
- [ ] I recognize common class mistakes
