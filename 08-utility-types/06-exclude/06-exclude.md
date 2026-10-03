# Exclude

Learn how TypeScript’s built-in `Exclude<T, U>` utility type creates a new union by removing members of `T` that are assignable to `U`.

Example file for this lesson:

- `exclude-example.ts`

---

## What `Exclude<T, U>` does

`Exclude<T, U>` creates a new union type by removing from `T` all members that are assignable to `U`.

```ts
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

type FinalStatus = Exclude<
  Status,
  "idle" | "loading"
>;
```

`FinalStatus` becomes:

```ts
"success" | "error"
```

---

## Meaning of `T` and `U`

- `T` is the source union
- `U` describes the members to remove

```ts
Exclude<Status, "idle" | "loading">
```

Here `Status` is `T`, and `"idle" | "loading"` is `U`.

---

## Excluding one union member

```ts
type Direction =
  | "north"
  | "south"
  | "east"
  | "west";

type HorizontalDirection = Exclude<
  Direction,
  "north"
>;
```

The resulting union is `"south" | "east" | "west"`.

---

## Excluding multiple union members

```ts
type Role =
  | "admin"
  | "editor"
  | "viewer"
  | "guest";

type AuthenticatedRole = Exclude<
  Role,
  "guest"
>;
```

`AuthenticatedRole` is `"admin" | "editor" | "viewer"`.

Excluding more than one member:

```ts
type LimitedRole = Exclude<
  Role,
  "admin" | "guest"
>;
```

`LimitedRole` is `"editor" | "viewer"`.

---

## Exclude with string literal unions

`Exclude` is commonly used with literal unions.

```ts
type Theme =
  | "light"
  | "dark"
  | "system";

type ManualTheme = Exclude<Theme, "system">;
```

`ManualTheme` is `"light" | "dark"`.

---

## Exclude with number literal unions

```ts
type Rating = 1 | 2 | 3 | 4 | 5;

type PositiveRating = Exclude<Rating, 1 | 2>;
```

The resulting type is `3 | 4 | 5`.

---

## Exclude with mixed unions

```ts
type Identifier =
  | string
  | number
  | null;

type DefinedIdentifier = Exclude<
  Identifier,
  null
>;
```

The result is `string | number`.

This lesson does not introduce `NonNullable`.

---

## Resulting type remains a union

`Exclude` does not create an object type.

It filters members from a union.

```ts
type Letters = "a" | "b" | "c";

type RemainingLetters = Exclude<
  Letters,
  "a"
>;
```

Result:

```ts
"b" | "c"
```

---

## Assignability

Exclusion is based on type assignability.

```ts
type Primitive =
  | string
  | number
  | boolean;

type NonBoolean = Exclude<
  Primitive,
  boolean
>;
```

`boolean` is removed because it matches the excluded type. The result is `string | number`.

This lesson does not expand into conditional type mechanics.

---

## Exclude vs Omit

- `Exclude<T, U>` removes members from a union
- `Omit<T, K>` removes properties from an object type

```ts
type Status = "active" | "inactive" | "deleted";

type VisibleStatus = Exclude<
  Status,
  "deleted"
>;
```

versus:

```ts
interface User {
  id: number;
  name: string;
  password: string;
}

type PublicUser = Omit<
  User,
  "password"
>;
```

These solve different problems. Omit is not taught again here.

---

## Invalid assignments

Values removed by `Exclude` cannot be assigned to the resulting type.

```ts
type ActiveStatus = Exclude<
  "active" | "inactive",
  "inactive"
>;

const status: ActiveStatus = "active";

// const invalidStatus: ActiveStatus = "inactive";
```

---

## Key Takeaways

- `Exclude<T, U>` filters members from a union.
- `T` is the source union.
- `U` describes what should be removed.
- Removed members cannot be assigned to the resulting type.
- `Exclude` works with unions, not object properties.
- `Exclude` and `Omit` solve different problems.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/06-exclude/exclude-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/06-exclude/exclude-example.ts
```
