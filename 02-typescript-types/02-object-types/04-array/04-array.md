# Array

Learn how TypeScript **arrays** store ordered collections of values, how to type them, how to update them, and how read-only arrays prevent mutation.

Example file for this lesson:

- `array-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- declare arrays with `type[]` and `Array<type>`
- read and update elements by index
- add and remove elements with `push`, `pop`, `unshift`, and `shift`
- iterate with `for`, `for...of`, and `forEach`
- type an array of simple objects
- declare read-only arrays
- recognize type errors when adding incompatible values

---

## What is an array in TypeScript?

An **array** stores multiple values in an **ordered collection**.

Each value has a position called an **index**. Indexes start at `0`.

In TypeScript, an array also has an element type. That type restricts which values belong in the array.

```ts
const cities: string[] = ["Lima", "Cusco", "Arequipa"];
```

Here every element must be a `string`.

---

## Array type syntax

TypeScript commonly writes array types in two ways:

- `type[]`
- `Array<type>`

Both describe the same general idea: “an array whose elements are of this type.”

---

## Arrays using `type[]`

```ts
const cities: string[] = ["Lima", "Cusco", "Arequipa"];
```

Read `string[]` as “array of strings.”

---

## Arrays using `Array<type>`

```ts
const temperatures: Array<number> = [18, 21, 24, 20];
```

Read `Array<number>` as “array of numbers.”

For this lesson, treat `number[]` and `Array<number>` as equivalent ways to write the same kind of array type.

---

## Creating and initializing arrays

You can create an array with values immediately:

```ts
const prices: number[] = [10, 15, 20];
const languages: Array<string> = ["English", "Spanish"];
```

Empty typed arrays are also possible:

```ts
const tags: string[] = [];
```

Later you can add only values that match the declared element type.

---

## Reading array elements

Use an index in brackets:

```ts
const firstCity = cities[0];
```

Because indexes start at zero:

| Index | Value example |
| --- | --- |
| `0` | first element |
| `1` | second element |
| `2` | third element |

---

## Updating array elements

Assign a new value to an existing index:

```ts
cities[1] = "Trujillo";
```

The new value must still match the array’s element type.

---

## Adding and removing elements

Common mutation methods:

| Method | Effect |
| --- | --- |
| `push(value)` | adds at the end |
| `pop()` | removes the last element |
| `unshift(value)` | adds at the beginning |
| `shift()` | removes the first element |

```ts
cities.push("Piura");
cities.pop();
cities.unshift("Iquitos");
cities.shift();
```

`pop()` and `shift()` return the removed element. If the array is empty, they may return `undefined`.

---

## Iterating over arrays

### Traditional `for` loop

Useful when you need the index:

```ts
for (let index = 0; index < cities.length; index++) {
  console.log(cities[index]);
}
```

### `for...of`

Useful when you only need each value:

```ts
for (const city of cities) {
  console.log(city);
}
```

### `forEach`

Calls a function once per element:

```ts
cities.forEach(function (city) {
  console.log(city);
});
```

---

## Arrays of objects

An array can hold objects that share the same shape.

Use an **inline object type** on the array:

```ts
const users: { id: number; name: string; active: boolean }[] = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
];
```

Each object in the array must provide those properties with compatible types.

---

## Read-only arrays

A read-only array can be read, but TypeScript blocks mutation methods such as `push`, `pop`, `shift`, and `unshift`.

Two common writings:

```ts
const supportedLanguages: readonly string[] = ["English", "Spanish"];
const lockedPrices: ReadonlyArray<number> = [9.99, 14.99];
```

`readonly string[]` and `ReadonlyArray<number>` both describe arrays that should not be mutated through those changing operations.

You can still read values by index.

---

## Type safety in arrays

TypeScript checks the values you put into an array.

```ts
const cities: string[] = ["Lima", "Cusco"];
// cities.push(42); // Error: number is not assignable to string
```

This protection is one of the main reasons to type arrays explicitly in TypeScript.

---

## Common mistakes

| Mistake | Better approach |
| --- | --- |
| Adding a value of the wrong type | Keep every element compatible with the declared type |
| Forgetting indexes start at `0` | Treat `array[0]` as the first element |
| Mutating a read-only array | Use a normal mutable array when you need `push` / `pop` |
| Assuming `pop()` always returns a value | An empty array may yield `undefined` |
| Mixing unrelated object shapes in one typed object array | Keep one clear object shape per array in this lesson |

---

## Summary

- An array is an ordered collection of values.
- TypeScript arrays restrict elements to a declared type.
- `type[]` and `Array<type>` express the same general idea.
- Indexes start at `0`.
- Use indexes to read and update elements.
- Use `push`, `pop`, `unshift`, and `shift` to add or remove elements.
- Iterate with `for`, `for...of`, or `forEach`.
- Object arrays can use an inline object type.
- `readonly type[]` and `ReadonlyArray<type>` prevent mutation methods such as `push` and `pop`.
- Incompatible values cause type errors.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 02-typescript-types/02-object-types/04-array/array-example.ts
```

Execute:

```bash
npx tsx 02-typescript-types/02-object-types/04-array/array-example.ts
```

---

## Completion checklist

- [ ] I can declare arrays with `type[]` and `Array<type>`
- [ ] I can read and update elements by index
- [ ] I can use `push`, `pop`, `unshift`, and `shift`
- [ ] I can iterate with `for`, `for...of`, and `forEach`
- [ ] I can type an array of simple objects with an inline shape
- [ ] I understand `readonly type[]` and `ReadonlyArray<type>`
- [ ] I know TypeScript rejects incompatible element types
