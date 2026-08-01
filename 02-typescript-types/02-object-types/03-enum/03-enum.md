# Enum

Learn how TypeScript **enums** define a named set of related constants, how numeric and string enums differ, and what remains in JavaScript at runtime.

Example file for this lesson:

- `enum-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what an enum is
- declare numeric and string enums
- use an enum as a TypeScript type
- access enum members by name
- compare numeric enums with string enums
- recognize why heterogeneous enums are usually avoided
- understand that enums produce JavaScript code at runtime

---

## What is an enum?

An **enum** (enumeration) represents a collection of **named constants**.

Instead of scattering magic numbers or repeated string literals through your code, you group related values under one enum name:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

You then refer to members through the enum name, for example `Direction.Up`.

---

## Why enums are useful

Enums help when a value should come from a **fixed set of options**:

- directions
- HTTP status labels in a small demo
- user roles
- modes or categories with clear names

Benefits for beginners:

- clearer intent than raw `0` / `1` / `"admin"` everywhere
- autocomplete for known members
- a named type you can reuse on variables and parameters

---

## Basic enum syntax

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

- `Direction` is the enum name
- `Up`, `Down`, `Left`, and `Right` are enum members
- members are accessed as `Direction.Up`, `Direction.Down`, and so on

---

## Numeric enums

By default, TypeScript enums are **numeric**.

If you do not assign values yourself, members receive numbers automatically.

```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}
```

---

## Automatically assigned numeric values

Numeric enum members are numbered starting at `0`, then incremented by `1` for each following member.

So:

| Member | Default value |
| --- | --- |
| `Direction.Up` | `0` |
| `Direction.Down` | `1` |
| `Direction.Left` | `2` |
| `Direction.Right` | `3` |

---

## Numeric enums with custom starting values

You can assign a number yourself. Later members continue from that point unless you set them again.

```ts
enum HttpStatus {
  Ok = 200,
  NotFound = 404,
  InternalServerError = 500,
}
```

Here each member has an explicit numeric value that matches a familiar HTTP status code.

You can also start a sequence from one custom value:

```ts
enum Level {
  Low = 1,
  Medium, // 2
  High,   // 3
}
```

---

## String enums

In a **string enum**, every member needs an explicit string value:

```ts
enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}
```

String enums do not auto-increment. Each member’s string must be written out.

---

## Using an enum as a type

The enum name can be used as a TypeScript type:

```ts
let currentRole: UserRole = UserRole.Viewer;

function canEditContent(role: UserRole): boolean {
  return role === UserRole.Admin || role === UserRole.Editor;
}
```

That means a variable or parameter is expected to hold one of the enum’s members (according to TypeScript’s checking rules for that enum).

---

## Accessing enum members

Access members through the enum name:

```ts
Direction.Up
HttpStatus.NotFound
UserRole.Admin
```

You can print them, pass them to functions, or store them in objects:

```ts
const currentUser = {
  name: "Ada",
  role: UserRole.Admin,
};
```

---

## Numeric enums versus string enums

| Feature | Numeric enum | String enum |
| --- | --- | --- |
| Default values | Auto-assigned numbers (`0`, `1`, `2`, ...) | No auto values — each string is explicit |
| Readability in logs | Often shows numbers | Often shows clear strings |
| Typical use | Ordered sets, status codes as numbers | Labels and roles as text |
| Runtime shape | Produced as JavaScript with numeric members | Produced as JavaScript with string members |

Choose the style that matches the domain. For roles and labels, string enums are often easier to read when debugging.

---

## Heterogeneous enums

A **heterogeneous enum** mixes string and number members:

```ts
enum MixedValue {
  No = 0,
  Yes = "yes",
}
```

This is valid TypeScript, but it is usually **avoided** because:

- the set becomes harder to reason about
- consistency drops (some members are numbers, others are strings)
- readability suffers for teammates and future you

Prefer all-numeric or all-string enums in normal application code.

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Using raw magic values instead of members | Prefer `UserRole.Admin` over `"admin"` scattered everywhere when you chose an enum |
| Forgetting explicit values in string enums | Every string enum member needs `= "value"` |
| Mixing strings and numbers without a strong reason | Keep one consistent enum style |
| Treating enums as compile-only like interfaces | Enums generate JavaScript and exist at runtime |
| Assuming every collection of constants must be an enum | Simple unions or plain objects may fit other cases later — stay with enums for this lesson |

---

## Compilation behavior

Unlike interfaces, TypeScript **enums produce JavaScript code** at runtime.

That means:

- the enum exists when the program runs
- you can read members such as `UserRole.Admin` in executed code
- `console.log` can print enum values

Type annotations around the enum are still erased, but the enum itself is emitted as real JavaScript (for standard enums covered in this lesson).

---

## Summary

- An enum is a collection of named constants.
- Members are accessed through the enum name (`Direction.Up`).
- Numeric members get auto-incremented values unless you assign numbers yourself.
- String members require explicit string values.
- The enum name can be used as a TypeScript type.
- Numeric and string enums differ in values and runtime representation.
- Heterogeneous enums are possible but usually avoided.
- Enums generate JavaScript and exist at runtime.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/02-object-types/03-enum/enum-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/02-object-types/03-enum/enum-example.ts
```

---

## Completion checklist

- [ ] I know an enum represents named constants
- [ ] I can declare a basic numeric enum
- [ ] I understand automatic numeric values (`0`, `1`, `2`, ...)
- [ ] I can assign custom numeric values
- [ ] I can declare a string enum with explicit values
- [ ] I can use an enum as a variable or parameter type
- [ ] I can access members such as `UserRole.Admin`
- [ ] I can compare numeric enums with string enums
- [ ] I know heterogeneous enums should usually be avoided
- [ ] I understand that enums exist in generated JavaScript at runtime
