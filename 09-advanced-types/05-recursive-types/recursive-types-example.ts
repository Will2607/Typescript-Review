/**
 * 05 — Recursive Types
 *
 * A recursive type refers to itself.
 * Nested children, optional lists, and nullable links provide stopping points.
 */

// Example 1: Recursive tree
type TreeNode = {
  value: string;
  children: TreeNode[];
};

const tree: TreeNode = {
  value: "root",
  children: [
    {
      value: "child-1",
      children: [],
    },
    {
      value: "child-2",
      children: [
        {
          value: "grandchild",
          children: [],
        },
      ],
    },
  ],
};

console.log(tree);

// Example 2: Recursive menu with optional children
type MenuItem = {
  label: string;
  children?: MenuItem[];
};

const menu: MenuItem = {
  label: "File",
  children: [
    {
      label: "New",
      children: [
        {
          label: "Document",
        },
        {
          label: "Folder",
        },
      ],
    },
    {
      label: "Exit",
    },
  ],
};

console.log(menu);

// Example 3: Linked list
type ListNode = {
  value: number;
  next: ListNode | null;
};

const list: ListNode = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

console.log(list);

// Example 4: Recursive interface
interface Folder {
  name: string;
  children: Folder[];
}

const folder: Folder = {
  name: "src",
  children: [
    {
      name: "components",
      children: [
        {
          name: "Button",
          children: [],
        },
      ],
    },
    {
      name: "utils",
      children: [],
    },
  ],
};

console.log(folder);

// Example 5: Recursive union
type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

const jsonData: JsonValue = {
  name: "Alice",
  age: 30,
  active: true,
  tags: ["typescript", "learning"],
  address: {
    city: "Cusco",
    zip: 8000,
  },
};

console.log(jsonData);

// Example 6: Invalid recursive child
// const invalidTree: TreeNode = {
//   value: "root",
//   children: [
//     {
//       value: 123,
//       children: [],
//     },
//   ],
// };

// Example 7: Invalid linked node
// const invalidList: ListNode = {
//   value: 1,
//   next: {
//     value: "2",
//     next: null,
//   },
// };
