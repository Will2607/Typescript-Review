# Recursive Types

Learn how TypeScript types can refer to themselves in order to describe trees, nested menus, linked lists, and other hierarchical data.

Example file for this lesson:

- `recursive-types-example.ts`

---

## What a recursive type is

A recursive type is a type that refers to itself, directly or indirectly.

```ts
type TreeNode = {
  value: string;
  children: TreeNode[];
};
```

`TreeNode` contains an array of more `TreeNode` values. Each child has the same shape as the parent.

---

## Why recursive types are useful

Recursive types are useful for naturally recursive data structures such as:

- trees
- nested menus
- file systems
- comments with replies
- categories with subcategories

The type matches the nested shape of the data.

---

## Basic recursive object type

```ts
type Category = {
  name: string;
  children: Category[];
};
```

Each child follows the same `Category` structure:

```ts
const categories: Category = {
  name: "Books",
  children: [
    {
      name: "Programming",
      children: [],
    },
  ],
};
```

---

## Recursive type with optional child collections

```ts
type MenuItem = {
  label: string;
  children?: MenuItem[];
};
```

Optional children provide a natural stopping point. Leaf nodes do not need `children`.

---

## Base case concept

Recursive data structures need a way to stop.

Examples:

- `children?: TreeNode[]` — omit `children` on a leaf
- `children: TreeNode[]` with an empty array `[]`
- `next: ListNode | null` with `null` at the end

This is a data-level termination point. This lesson does not introduce advanced type-level recursion theory.

---

## Recursive union

```ts
type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };
```

`JsonValue` can contain arrays or objects whose nested values are themselves `JsonValue`. This example stays high-level and does not expand into index signatures as a separate lesson.

---

## Recursive type alias with linked structures

```ts
type ListNode = {
  value: number;
  next: ListNode | null;
};
```

Each node may point to another node of the same type or terminate with `null`.

---

## Recursive types with interfaces

```ts
interface Folder {
  name: string;
  children: Folder[];
}
```

Interfaces can also describe recursive structures. This lesson does not compare types and interfaces in depth.

---

## Valid recursive values

Valid examples include:

- a tree with nested children
- a linked list terminating in `null`
- a nested menu with optional children

Each nested value still matches the same recursive type.

---

## Invalid recursive values

Keep invalid examples commented out:

```ts
// wrong child type
// missing required recursive property
// invalid nested value type
```

---

## Practical limitations

Deeply recursive type definitions can become difficult to understand and can increase compiler complexity.

Keep recursive types reasonably simple. This lesson does not discuss compiler recursion limits in depth.

---

## Key Takeaways

- Recursive types refer to themselves.
- They model hierarchical and nested structures naturally.
- Recursion can appear through arrays, object properties, unions, or nullable links.
- Recursive data needs a natural stopping point.
- Both type aliases and interfaces can be recursive.
- Recursive types should remain understandable and reasonably simple.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 09-advanced-types/05-recursive-types/recursive-types-example.ts
```

Execute:

```bash
npx tsx 09-advanced-types/05-recursive-types/recursive-types-example.ts
```
