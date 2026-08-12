# Union Types

Learn how TypeScript union types allow a value to be one of several specified types using the `|` operator.

Example file for this lesson:

- `union-types-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what a union type is
- declare unions with `|`
- assign valid values and recognize invalid ones
- use unions in function parameters
- perform a minimal check before member-specific operations
- use simple literal unions and simple object-shape unions

---

## What is a union type?

A **union type** allows a value to be **one of several specified types**.

```ts
let value: string | number;
```

This variable may contain either a `string` or a `number`, but not values outside that union.

---

## Union type syntax

Union members are separated by `|`:

```ts
string | number
string | boolean
"left" | "right" | "center"
```

Example:

```ts
let identifier: string | number;
```

---

## Combining primitive types

Union types can combine primitive types such as:

- `string | number`
- `string | boolean`
- `boolean | string`

```ts
let userId: string | number;
let statusMessage: string | boolean;
```

---

## Assigning values to a union

A union variable can receive a value that matches **one** of the declared members.

```ts
userId = 100;
userId = "USR-100";
```

Both assignments are valid because each value matches one member of `string | number`.

---

## Invalid values in a union

Values outside the union are rejected by TypeScript.

```ts
let userId: string | number;

// userId = true; // invalid: boolean is not part of the union
```

```ts
let statusMessage: string | boolean;

// statusMessage = 404; // invalid: number is not part of the union
```

---

## Union types in function parameters

Function parameters can use unions:

```ts
function printIdentifier(value: string | number): void {
  // ...
}
```

Callers may pass either a `string` or a `number`.

---

## Working safely with union values

Some operations exist on only one member of the union.

This is unsafe without checking:

```ts
function printValue(value: string | number): void {
  // value.toUpperCase(); // unsafe: toUpperCase exists on string, not on number
}
```

Use a minimal `typeof` check before string-only operations:

```ts
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value);
  }
}
```

This lesson uses only that basic check where needed. It is not a full Type Guards / Narrowing lesson.

---

## Union types with literal values

A union can list specific literal values:

```ts
let direction: "left" | "right" | "center";

direction = "left";
direction = "right";
// direction = "up"; // invalid
```

```ts
function setTheme(theme: "light" | "dark"): void {
  console.log("Theme:", theme);
}
```

The allowed values are restricted to the listed literals.  
This lesson does not develop Literal Types as an independent topic.

---

## Union types with object shapes

Union types can combine simple object shapes:

```ts
let message:
  | {
      kind: string;
      text: string;
    }
  | {
      kind: string;
      url: string;
    };
```

Before accessing a shape-specific property, use a minimal property existence check if needed:

```ts
if ("text" in message) {
  console.log(message.text);
}
```

Do not treat this as a discriminated-union lesson. Keep the example simple.

---

## Reassignment with union types

A union variable can be reassigned to different valid members over time:

```ts
userId = 100;
userId = "USR-100";
```

Each assignment must still match at least one member of the union.

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Assigning a value outside the union | Stay within the declared members |
| Calling `toUpperCase()` on `string \| number` immediately | Check with `typeof` first |
| Treating a literal union as an open `string` | Only the listed literals are allowed |
| Accessing shape-specific properties without a check | Confirm the property exists first |
| Expecting unions to exist at runtime | Unions are compile-time only |

---

## Runtime behavior

TypeScript checks union types at **compile time**.

That means:

- union types do not exist at runtime
- JavaScript receives ordinary values after compilation
- a variable typed as `string | number` is still just a normal string or number when the program runs

---

## Summary

- A union type allows one of several specified types.
- Use `|` to combine members.
- Valid assignments must match one declared member.
- Values outside the union are rejected.
- Check before using member-specific operations.
- Literal unions restrict values to listed options.
- Object-shape unions combine simple object structures.
- Unions are compile-time only and disappear from runtime JavaScript.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/08-combining-types/01-union-types/union-types-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/08-combining-types/01-union-types/union-types-example.ts
```

---

## Completion checklist

- [ ] I know what a union type is
- [ ] I can declare unions with `|`
- [ ] I can assign valid values and spot invalid ones
- [ ] I can use unions in function parameters
- [ ] I know to check before string-only operations
- [ ] I can use a simple literal union
- [ ] I can use a simple object-shape union
- [ ] I know unions are compile-time only
