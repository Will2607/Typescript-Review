/**
 * 03 — Type Aliases
 *
 * Practical examples of the type keyword.
 * A type alias creates a reusable name for a TypeScript type.
 * Aliases exist only at compile time and are removed from JavaScript.
 */

// 1–3) Aliases for primitive types
type UserId = string;
type ProductPrice = number;

const firstUserId: UserId = "USR-001";
const secondUserId: UserId = "USR-002";

console.log("firstUserId:", firstUserId);
console.log("secondUserId:", secondUserId);

const keyboardPrice: ProductPrice = 75;
const monitorPrice: ProductPrice = 300;

console.log("keyboardPrice:", keyboardPrice);
console.log("monitorPrice:", monitorPrice);

// 4–5) Object shape alias reused by two variables
type User = {
  id: number;
  name: string;
  active: boolean;
};

const firstUser: User = {
  id: 1,
  name: "Alice",
  active: true,
};

const secondUser: User = {
  id: 2,
  name: "Bob",
  active: false,
};

console.log("firstUser:", firstUser);
console.log("secondUser:", secondUser);

// 6) Function parameter using a type alias
type Product = {
  name: string;
  price: number;
};

function printProduct(product: Product): void {
  console.log("product.name:", product.name);
  console.log("product.price:", product.price);
}

const keyboard: Product = {
  name: "Keyboard",
  price: 75,
};

printProduct(keyboard);

// 7) Function returning a type alias
type Coordinate = {
  x: number;
  y: number;
};

function createCoordinate(): Coordinate {
  return {
    x: 10,
    y: 20,
  };
}

const coordinate = createCoordinate();
console.log("coordinate:", coordinate);

// 8) Union type alias (supporting concept only)
type Identifier = string | number;

let identifier: Identifier = "ABC-123";
console.log("identifier:", identifier);

identifier = 123;
console.log("identifier:", identifier);

// Invalid because boolean is not part of the union
// identifier = true;

// 9) Intersection type alias (supporting concept only)
type BasicProfile = {
  name: string;
};

type AccountStatus = {
  active: boolean;
};

type UserProfile = BasicProfile & AccountStatus;

const profile: UserProfile = {
  name: "Alice",
  active: true,
};

console.log("profile:", profile);

// Invalid examples — kept commented so this file type-checks:
//
type Username = string;
// const invalidUsername: Username = 100;
//
type Age = number;
// const invalidAge: Age = "thirty";
//
type Customer = {
  id: number;
  name: string;
};
//
// Missing required property.
// const incompleteCustomer: Customer = {
//   id: 1,
// };
//
// Wrong property type.
// const invalidCustomer: Customer = {
//   id: "one",
//   name: "Alice",
// };
//
type Status = "active" | "inactive";
// const invalidStatus: Status = "pending";
