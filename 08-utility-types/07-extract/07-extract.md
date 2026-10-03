# Extract

Learn how TypeScript’s built-in `Extract<T, U>` utility type creates a new union containing only the members of `T` that are assignable to `U`.

Example file for this lesson:

- `extract-example.ts`

---

## What `Extract<T, U>` does

`Extract<T, U>` creates a new union containing only the members of `T` that are assignable to `U`.

```ts
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

type ActiveStatus = Extract<
  Status,
  "loading" | "success"
>;
```

`ActiveStatus` becomes:

```ts
"loading" | "success"
```

---

## Meaning of `T` and `U`

- `T` is the source union
- `U` describes the members to keep

```ts
Extract<Status, "loading" | "success">
```

Here `Status` is `T`, and `"loading" | "success"` is `U`.

---

## Extracting one union member

```ts
type Direction =
  | "north"
  | "south"
  | "east"
  | "west";

type NorthOnly = Extract<
  Direction,
  "north"
>;
```

The result is `"north"`.

---

## Extracting multiple members

```ts
type Role =
  | "admin"
  | "editor"
  | "viewer"
  | "guest";

type PrivilegedRole = Extract<
  Role,
  "admin" | "editor"
>;
```

The resulting union is `"admin" | "editor"`.

---

## Extract with string literal unions

```ts
type Theme =
  | "light"
  | "dark"
  | "system";

type ManualTheme = Extract<
  Theme,
  "light" | "dark"
>;
```

The result is `"light" | "dark"`.

---

## Extract with number literal unions

```ts
type Rating = 1 | 2 | 3 | 4 | 5;

type HighRating = Extract<
  Rating,
  4 | 5
>;
```

The result is `4 | 5`.

---

## Extract with mixed unions

```ts
type Identifier =
  | string
  | number
  | null;

type NumericIdentifier = Extract<
  Identifier,
  number
>;
```

The result is `number`.

Another example:

```ts
type DefinedIdentifier = Extract<
  Identifier,
  string | number
>;
```

The result is `string | number`.

This lesson does not introduce `NonNullable`.

---

## Result remains a union

`Extract` filters union members.

It does not create an object type.

```ts
type Letters = "a" | "b" | "c";

type SelectedLetters = Extract<
  Letters,
  "a" | "c"
>;
```

Result:

```ts
"a" | "c"
```

---

## Assignability

`Extract` keeps members of `T` that are assignable to `U`.

```ts
type Primitive =
  | string
  | number
  | boolean;

type TextOrBoolean = Extract<
  Primitive,
  string | boolean
>;
```

Result:

```ts
string | boolean
```

This lesson does not explain conditional type mechanics in depth.

---

## Extract vs Exclude

- `Extract<T, U>` keeps matching members
- `Exclude<T, U>` removes matching members

```ts
type Status =
  | "active"
  | "inactive"
  | "deleted";

type VisibleStatus = Extract<
  Status,
  "active" | "inactive"
>;

type HiddenStatus = Exclude<
  Status,
  "active" | "inactive"
>;
```

`VisibleStatus` is `"active" | "inactive"`. `HiddenStatus` is `"deleted"`. Exclude is not taught again here.

---

## Invalid assignments

Values not included in the resulting type cannot be assigned.

```ts
type PrimaryColor = Extract<
  "red" | "green" | "blue",
  "red" | "blue"
>;

const color: PrimaryColor = "red";

// const invalidColor: PrimaryColor = "green";
```

---

## Key Takeaways

- `Extract<T, U>` keeps matching members from a union.
- `T` is the source union.
- `U` describes what should be retained.
- The result is still a union.
- Values not included in the result cannot be assigned.
- `Extract` keeps matches while `Exclude` removes matches.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/07-extract/extract-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/07-extract/extract-example.ts
```
