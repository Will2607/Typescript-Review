/**
 * 02 — Intersection Types
 *
 * Practical examples of TypeScript intersection types with &.
 * A value of an intersection type must satisfy all combined types.
 * Intersections are checked at compile time and do not exist at runtime.
 */

// 1–3) Basic intersection of two inline object types
const employee: {
  id: number;
  name: string;
} & {
  department: string;
  active: boolean;
} = {
  id: 1,
  name: "Alice",
  department: "Engineering",
  active: true,
};

console.log("employee.id:", employee.id);
console.log("employee.name:", employee.name);
console.log("employee.department:", employee.department);
console.log("employee.active:", employee.active);

// Profile must satisfy both shapes: name and age are required
const profile: {
  name: string;
} & {
  age: number;
} = {
  name: "Alice",
  age: 30,
};

console.log("profile:", profile);

// 4) Second intersection using two different inline object shapes
const product: {
  name: string;
  price: number;
} & {
  available: boolean;
  category: string;
} = {
  name: "Keyboard",
  price: 75,
  available: true,
  category: "Accessories",
};

console.log("product:", product);

// 5–6) Function parameter using an intersection type
function printAccount(
  account: {
    username: string;
  } & {
    active: boolean;
  }
): void {
  console.log("account.username:", account.username);
  console.log("account.active:", account.active);
}

const userAccount = {
  username: "alice",
  active: true,
  lastLogin: "today",
};

printAccount(userAccount);

// 7) Overlapping compatible properties (id: number on both sides)
const sharedIdentity: {
  id: number;
  name: string;
} & {
  id: number;
  active: boolean;
} = {
  id: 10,
  name: "Bob",
  active: true,
};

console.log("sharedIdentity:", sharedIdentity);

// Invalid examples — kept commented so this file type-checks:
//
// Missing properties from the second side.
// const incompleteEmployee: {
//   id: number;
//   name: string;
// } & {
//   department: string;
//   active: boolean;
// } = {
//   id: 1,
//   name: "Alice",
// };
//
// Wrong type.
// const invalidEmployee: {
//   id: number;
// } & {
//   active: boolean;
// } = {
//   id: "one",
//   active: true,
// };
//
// Missing property required by the first side.
// const invalidProduct: {
//   name: string;
// } & {
//   price: number;
// } = {
//   price: 50,
// };
//
// Incompatible overlapping property.
// const impossible: {
//   value: string;
// } & {
//   value: number;
// } = {
//   value: "test",
// };
//
// const impossibleValue: {
//   id: number;
// } & {
//   id: string;
// } = {
//   id: 1,
// };
//
// Invalid function argument.
// printAccount({
//   username: "charlie",
// });
//
// Invalid profile: age is also required.
// const incompleteProfile: {
//   name: string;
// } & {
//   age: number;
// } = {
//   name: "Alice",
// };
