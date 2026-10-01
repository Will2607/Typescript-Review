# Record

Learn how TypeScript’s built-in `Record<K, T>` utility type creates an object type with keys from `K` and values of type `T`.

Example file for this lesson:

- `record-example.ts`

---

## What `Record<K, T>` does

`Record<K, T>` creates an object type whose property keys come from `K` and whose property values use type `T`.

```ts
type Role = "admin" | "user" | "guest";

type RoleLabel = Record<Role, string>;
```

This creates a type equivalent to:

```ts
type RoleLabel = {
  admin: string;
  user: string;
  guest: string;
};
```

---

## Meaning of `K` and `T`

- `K` defines the allowed/required property keys
- `T` defines the type of every corresponding property value

```ts
Record<Role, string>
```

Here `Role` is `K`, and `string` is `T`.

---

## Record with union keys

```ts
type Status = "idle" | "loading" | "success" | "error";

type StatusMessage = Record<Status, string>;

const messages: StatusMessage = {
  idle: "Waiting",
  loading: "Loading",
  success: "Completed",
  error: "Failed",
};
```

Every key in the union must be represented on the object.

---

## Missing keys

When `K` is a union of specific keys, all of those keys are required.

```ts
// const invalidMessages: StatusMessage = {
//   idle: "Waiting",
//   loading: "Loading"
// };
```

This fails because `success` and `error` are missing. TypeScript expects every member of the `Status` union.

---

## Incorrect value types

All values must satisfy `T`.

```ts
type Scores = Record<"alice" | "bob", number>;

const scores: Scores = {
  alice: 90,
  bob: 85,
};

// const invalidScores: Scores = {
//   alice: 90,
//   bob: "85"
// };
```

`bob` must be a `number`, not a `string`.

---

## Record with object values

`T` can be an object type.

```ts
type Environment = "development" | "production";

type EnvironmentConfig = Record<
  Environment,
  {
    apiUrl: string;
    debug: boolean;
  }
>;
```

Each environment key maps to an object with `apiUrl` and `debug`.

---

## Record with a reusable value type

```ts
interface ProductInfo {
  name: string;
  price: number;
}

type ProductId = "p1" | "p2";

type ProductCatalog = Record<ProductId, ProductInfo>;
```

Each key maps to a `ProductInfo`. The value type is reused for every key.

---

## Record vs manually declared object type

```ts
type Colors = Record<"primary" | "secondary", string>;

type ManualColors = {
  primary: string;
  secondary: string;
};
```

Both describe similar object shapes. `Record` is useful when the keys already exist as a reusable union. This lesson does not develop mapped types as a standalone topic.

---

## Extra properties

When assigning an object literal directly to a `Record` with a fixed union of keys, unrelated extra properties are rejected by normal excess property checking.

```ts
type Coordinates = Record<"x" | "y", number>;

const point: Coordinates = {
  x: 10,
  y: 20,
};

// const invalidPoint: Coordinates = {
//   x: 10,
//   y: 20,
//   z: 30
// };
```

`z` is not one of the allowed keys.

---

## Record with broad key types

```ts
const inventory: Record<string, number> = {
  apples: 10,
  oranges: 5,
};
```

Using `string` as `K` allows arbitrary string keys. Every value must still be a `number`. This lesson does not introduce index signatures as a separate topic.

---

## Typical use cases

`Record` is useful for:

- configuration maps
- labels by status
- lookup tables
- mapping known identifiers to data
- grouping values by a known set of keys

---

## Key Takeaways

- `Record<K, T>` creates an object type.
- `K` defines the keys.
- `T` defines the value type.
- Union keys normally require every key.
- Each value must match `T`.
- `T` can be a primitive or object type.
- Record is useful for strongly typed lookup structures.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 08-utility-types/05-record/record-example.ts
```

Execute:

```bash
npx tsx 08-utility-types/05-record/record-example.ts
```
