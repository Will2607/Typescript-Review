# Literal Types

Learn how TypeScript literal types represent exact values, and how unions of those values restrict variables, parameters, and return types.

Example file for this lesson:

- `literal-types-example.ts`

---

## What a literal type is

A literal type represents one exact value rather than a broad category of values.

```ts
let status: "success";
```

The only valid value is `"success"`.

Contrast with:

```ts
let message: string;
```

which can hold any string.

---

## String literal types

```ts
type Direction =
  | "north"
  | "south"
  | "east"
  | "west";

const direction: Direction = "north";

// const invalidDirection: Direction = "up";
```

Variables of type `Direction` can only contain one of those exact strings.

---

## Number literal types

```ts
type DiceRoll =
  1 | 2 | 3 | 4 | 5 | 6;

const roll: DiceRoll = 6;

// const invalidRoll: DiceRoll = 7;
```

Only the listed numeric values are allowed.

---

## Boolean literal types

TypeScript can also represent `true` or `false` as literal types.

```ts
type Enabled = true;

const enabled: Enabled = true;

// const disabled: Enabled = false;
```

---

## Union of literal types

Literal types become especially useful when combined in unions.

```ts
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

`Status` is more restrictive than plain `string`. Only the listed values are allowed.

---

## Literal types in function parameters

```ts
function setTheme(
  theme: "light" | "dark"
): void {
  console.log(theme);
}

setTheme("light");
setTheme("dark");

// setTheme("blue");
```

Literal types can restrict a function API to known valid values.

---

## Literal types and return types

```ts
function getStatus():
  "success" | "error" {
  return "success";
}
```

The function can only return one of the declared literal values.

---

## Literal inference with const

```ts
const mode = "dark";
```

TypeScript infers the literal type `"dark"` because the variable cannot be reassigned.

Compare with:

```ts
let mutableMode = "dark";
```

TypeScript normally widens this to `string` because the variable can later receive another string.

---

## const vs let

```ts
const language = "TypeScript";
```

Conceptually inferred as `"TypeScript"`.

```ts
let framework = "Angular";
```

Generally inferred as `string`.

Mutability affects inference: a `const` binding cannot change, so TypeScript can keep the exact literal. A `let` binding can change, so TypeScript widens to the broader type.

---

## Explicit literal annotations

A `let` variable can still be restricted explicitly:

```ts
let environment:
  "development" | "production" =
  "development";

environment = "production";

// environment = "testing";
```

---

## Object property widening

Object properties are generally mutable, so:

```ts
const request = {
  method: "GET",
};
```

does not necessarily mean the property type is the literal `"GET"` in every context.

`as const`, studied earlier in the roadmap, can preserve literal values more strictly:

```ts
const request = {
  method: "GET",
} as const;
```

This lesson does not revisit assertions in depth.

---

## Literal type aliases

```ts
type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE";
```

Aliases make reusable sets of literal values easier to maintain and share across the codebase.

---

## Literal values as part of object types

```ts
type SuccessResponse = {
  status: "success";
  data: string;
};

const response: SuccessResponse = {
  status: "success",
  data: "Request completed",
};
```

The `status` property must contain exactly `"success"`. This lesson does not expand into discriminated unions as a separate concept.

---

## Invalid assignments

Keep every invalid executable example commented out:

```ts
// const invalidDirection: Direction = "up";
// const invalidRoll: DiceRoll = 7;
// setTheme("blue");
// environment = "testing";
```

---

## Key Takeaways

- Literal types represent exact values.
- String, number, and boolean literals can be used as types.
- Unions combine multiple allowed literal values.
- Literal types can restrict function parameters and return values.
- `const` often preserves literal inference.
- `let` generally widens primitive literals.
- Explicit annotations can restrict mutable variables.
- Literal types help represent a finite set of valid values.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 09-advanced-types/03-literal-types/literal-types-example.ts
```

Execute:

```bash
npx tsx 09-advanced-types/03-literal-types/literal-types-example.ts
```
