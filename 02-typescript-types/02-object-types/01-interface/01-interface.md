# 01 — Interface

Learn how TypeScript **interfaces** describe the shape of objects: required fields, optional fields, readonly properties, and methods.

Example file for this lesson:

- `interface-example.ts`

---

## 1. What is an interface?

An **interface** is a TypeScript contract that describes the structure an object should have.

It answers questions like:

- Which properties are required?
- What type is each property?
- Which methods should exist?

---

## 2. Interfaces describe object structure

Interfaces are for **object shapes**.

They do not store data by themselves. Real values still come from object literals, function results, APIs, and so on.

---

## 3. Compile-time only — not a runtime object

An interface:

- exists for TypeScript’s type analysis
- does **not** create an object at runtime
- is removed from the compiled JavaScript

So `interface Course { ... }` helps the checker and your editor. It does not become a JavaScript class or object automatically.

---

## 4. A basic interface

```ts
interface Course {
  id: number;
  title: string;
  isPublished: boolean;
}
```

This says: a `Course` object must provide those three properties with those types.

---

## 5. Interface vs object that satisfies it

| Piece | Role |
| --- | --- |
| `interface Course` | The named contract / expected shape |
| `typescriptCourse` | A real object value that matches the contract |

```ts
const typescriptCourse: Course = {
  id: 1,
  title: "Introduction to TypeScript",
  isPublished: true,
};
```

The interface is the blueprint. The object is the actual data.

---

## 6–7. Required properties

Properties without `?` are **required**.

If a required property is missing, TypeScript reports an error:

```ts
// const missingTitle: Course = {
//   id: 4,
//   isPublished: false,
// };
// Error: Property 'title' is missing ...
```

---

## 8–10. Optional properties: `email?: string`

```ts
interface Student {
  id: number;
  name: string;
  email?: string;
  readonly registrationCode: string;
}
```

An optional property may:

- be **absent** from the object
- be read as `undefined` when it is not present

Keep this brief: `undefined` was covered in the primitive types lessons. Do not assume an optional property “always exists” with value `undefined`.

---

## 11–12. Readonly properties: `readonly registrationCode: string`

```ts
readonly registrationCode: string
```

`readonly` means:

- TypeScript prevents reassigning **that property**
- it does **not** automatically make the whole object immutable at runtime
- JavaScript can still mutate objects unless you use other runtime protections

```ts
// student.registrationCode = "REG-999"; // type error
```

---

## 13–14. Interfaces as function parameter types

Reuse the same contract in function parameters:

```ts
function printCourse(course: Course): void {
  console.log(course.title);
}
```

Callers must pass something compatible with `Course`.

---

## 15–16. Interfaces as function return types

Functions can promise to return a specific object shape:

```ts
function createCourse(): Course {
  return {
    id: 1,
    title: "TypeScript Basics",
    isPublished: true,
  };
}
```

If the returned object is incomplete or mistyped, TypeScript complains.

---

## 17–18. Methods inside an interface

Interfaces can describe methods as well as data fields:

```ts
interface Resource {
  open(): void;
}
```

An object that claims to be a `Resource` must provide a **compatible** `open` implementation:

```ts
const documentationResource: LearningResource = {
  title: "TypeScript Handbook",
  url: "https://www.typescriptlang.org/docs/",
  open() {
    console.log("Opening resource:", this.title);
  },
};
```

---

## 19. Where interfaces are reused

Interfaces are useful for:

- variables
- function parameters
- return values
- configuration objects
- API response shapes
- domain models (courses, students, progress, and so on)

Naming the shape once keeps many parts of the code consistent.

---

## 20. Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Omitting required properties | Provide every required field |
| Using incompatible types | Match each property’s declared type |
| Thinking an interface creates objects | Interfaces are type-only contracts |
| Reassigning `readonly` properties | Treat them as fixed after creation (in types) |
| Making almost everything optional | Optional should mean truly optional |
| Confusing interfaces with classes | Interfaces describe shape; classes create runtime values/behavior |
| Assuming `readonly` means full runtime immutability | It is a TypeScript assignment restriction on that property |

---

## 21–23. Excess property checking (introductory)

TypeScript is especially strict with **fresh object literals** assigned or passed where a specific type is expected.

```ts
// printCourseSummary({
//   id: 2,
//   title: "Advanced TypeScript",
//   isPublished: true,
//   instructor: "Willy",
// });
// Error: 'instructor' does not exist in type 'Course'.
```

Important precision:

- extra properties on a **direct object literal** can cause an error
- that does **not** mean extra properties **always** cause errors
- a variable created earlier may still be accepted if it has at least the required `Course` fields

```ts
const courseWithExtraField = {
  id: 3,
  title: "Running TypeScript",
  isPublished: true,
  instructor: "Willy",
};

printCourseSummary(courseWithExtraField); // often allowed
```

Keep this introductory. Deeper **structural typing** and compatibility rules come later.

---

## 24–25. When an interface is a good fit

Prefer an interface when you want to:

- describe objects clearly
- share one structure across several places
- define a named contract
- leave room to grow that contract later

This lesson does **not** cover extending interfaces yet.

---

## 26. Quick reference table

| Feature | Syntax idea | Meaning |
| --- | --- | --- |
| Required property | `title: string` | Must be present |
| Optional property | `email?: string` | May be absent |
| Readonly property | `readonly registrationCode: string` | No reassignment via TypeScript |
| Method | `open(): void` | Object must provide a compatible function |

---

## 27. Brief comparison with an inline object type

```ts
// Inline shape — fine for tiny local cases
function printTitle(course: { title: string }): void {
  console.log(course.title);
}
```

- an **inline type** can be enough for small, local structures
- an **interface** gives a reusable name for a shared contract

This lesson does **not** compare interfaces with type aliases yet.

---

## 28. Validate and run the example

Type-check without emitting JavaScript:

```bash
npx tsc --noEmit 02-typescript-types/02-object-types/01-interface/interface-example.ts
```

Run the example:

```bash
npx tsx 02-typescript-types/02-object-types/01-interface/interface-example.ts
```

---

## Review questions

1. What does an interface describe, and does it create a runtime object?
2. What is the difference between a required property and an optional property?
3. What does `readonly` guarantee in TypeScript, and what does it not guarantee at runtime?
4. How can an interface be used as both a parameter type and a return type?
5. Why might a direct object literal with an extra property error, while a variable with an extra property is sometimes accepted?

---

## Completion checklist

- [ ] I know an interface is a compile-time object-shape contract
- [ ] I can declare required properties on an interface
- [ ] I can use optional properties with `?`
- [ ] I understand `readonly` property restrictions
- [ ] I can use interfaces for function parameters and return types
- [ ] I can declare and implement a method on an interface
- [ ] I recognize common interface mistakes
- [ ] I understand excess property checking at an introductory level
- [ ] I know when naming an interface is useful compared with a tiny inline shape
