# Template Literal Types

Learn how TypeScript template literal types describe string patterns at compile time using backtick syntax and type interpolation.

Example file for this lesson:

- `template-literal-types-example.ts`

---

## What a template literal type is

A template literal type creates string literal types using syntax similar to JavaScript template literals.

```ts
type Greeting =
  `Hello ${string}`;
```

Valid values must start with `"Hello "` followed by a string.

```ts
const greeting1: Greeting =
  "Hello Alice";

const greeting2: Greeting =
  "Hello TypeScript";

// const invalidGreeting: Greeting =
//   "Hi Alice";
```

---

## Compile-time type syntax

Template literal types exist in TypeScript’s type system.

JavaScript runtime template literal:

```ts
const name = "Alice";
const message = `Hello ${name}`;
```

TypeScript template literal type:

```ts
type Greeting =
  `Hello ${string}`;
```

The first creates a runtime string. The second describes allowed string values at compile time.

---

## Interpolating literal unions

```ts
type Vertical =
  "top" | "bottom";

type Horizontal =
  "left" | "right";

type Position =
  `${Vertical}-${Horizontal}`;
```

TypeScript produces:

```ts
"top-left"
| "top-right"
| "bottom-left"
| "bottom-right"
```

---

## Cartesian combinations

When multiple interpolated positions contain unions, TypeScript generates every valid combination.

In the `Position` example, each value from `Vertical` is paired with each value from `Horizontal`.

---

## Single placeholder with fixed prefix

```ts
type EventName =
  `on${string}`;
```

Valid examples:

- `"onClick"`
- `"onSubmit"`

Invalid:

```ts
// const event: EventName = "click";
```

The required prefix is part of the type.

---

## Fixed prefix and suffix

```ts
type FileName =
  `file-${number}.txt`;
```

Valid examples:

- `"file-1.txt"`
- `"file-42.txt"`

Invalid:

```ts
// "1.txt"
// "file-one.txt"
// "file-1.json"
```

---

## Multiple placeholders

```ts
type Coordinate =
  `${number},${number}`;

const point: Coordinate =
  "10,20";
```

Both portions must match the interpolated numeric pattern.

---

## Template literal types with string unions

```ts
type Size =
  "small" | "medium" | "large";

type SizeClass =
  `size-${Size}`;
```

Resulting values:

- `"size-small"`
- `"size-medium"`
- `"size-large"`

---

## Template literal types with numbers

```ts
type UserId =
  `user-${number}`;
```

Valid:

- `"user-1"`
- `"user-100"`

Invalid:

```ts
// "user-one"
```

`${number}` represents strings compatible with numeric interpolation. This lesson does not explore edge cases.

---

## Template literal types with booleans

```ts
type FeatureFlag =
  `enabled-${boolean}`;
```

Valid literal possibilities include:

- `"enabled-true"`
- `"enabled-false"`

---

## Building reusable naming conventions

```ts
type Entity =
  | "user"
  | "product"
  | "order";

type Action =
  | "create"
  | "update"
  | "delete";

type Permission =
  `${Entity}:${Action}`;
```

Examples:

- `"user:create"`
- `"product:update"`
- `"order:delete"`

This creates a strongly typed naming convention from known literal unions.

---

## Function parameters

```ts
type LogLevel =
  | "info"
  | "warn"
  | "error";

type LogCode =
  `${LogLevel}:${number}`;

function logCode(
  code: LogCode
): void {
  console.log(code);
}

logCode("info:100");
logCode("error:500");

// logCode("debug:100");
// logCode("error:server");
```

Function parameters can use template literal types just like other types.

---

## Template literal type aliases

Reusable aliases make string patterns easier to express and maintain.

```ts
type ApiVersion =
  `v${number}`;

type ApiPath =
  `/api/${ApiVersion}`;
```

Valid values include `"/api/v1"` and `"/api/v2"`.

---

## Invalid assignments

Keep invalid executable examples commented out:

```ts
// wrong prefix
// wrong suffix
// value outside an interpolated union
// wrong numeric pattern
```

---

## Key Takeaways

- Template literal types describe string patterns at compile time.
- They use backtick syntax.
- `${...}` interpolates types.
- Unions generate combinations automatically.
- Fixed prefixes and suffixes can constrain strings.
- `string`, `number`, and `boolean` can be interpolated.
- Template literal types are useful for strongly typed naming conventions.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 09-advanced-types/04-template-literal-types/template-literal-types-example.ts
```

Execute:

```bash
npx tsx 09-advanced-types/04-template-literal-types/template-literal-types-example.ts
```
