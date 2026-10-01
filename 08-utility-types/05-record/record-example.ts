/**
 * 05 — Record
 *
 * Record<K, T> creates an object type with keys from K
 * and values of type T.
 */

// Example 1: Basic Record
type Role = "admin" | "user" | "guest";

type RoleLabel = Record<Role, string>;

const roleLabels: RoleLabel = {
  admin: "Administrator",
  user: "Standard User",
  guest: "Guest User",
};

console.log(roleLabels);

// Example 2: Record with status keys
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

type StatusMessage = Record<Status, string>;

const messages: StatusMessage = {
  idle: "Waiting",
  loading: "Loading",
  success: "Completed",
  error: "Failed",
};

console.log(messages);

// Invalid: every key in the Status union is required.
// const incompleteMessages: StatusMessage = {
//   idle: "Waiting",
//   loading: "Loading",
//   success: "Completed",
// };

// Example 3: Value type checking
type Player = "alice" | "bob";

type Scores = Record<Player, number>;

const scores: Scores = {
  alice: 95,
  bob: 87,
};

console.log(scores);

// Invalid: bob must be a number.
// const invalidScores: Scores = {
//   alice: 95,
//   bob: "87",
// };

// Example 4: Object values
type Environment =
  | "development"
  | "production";

type EnvironmentConfig = Record<
  Environment,
  {
    apiUrl: string;
    debug: boolean;
  }
>;

const environments: EnvironmentConfig = {
  development: {
    apiUrl: "http://localhost:3000",
    debug: true,
  },
  production: {
    apiUrl: "https://api.example.com",
    debug: false,
  },
};

console.log(environments);

// Example 5: Record with interface values
interface ProductInfo {
  name: string;
  price: number;
}

type ProductId = "p1" | "p2";

type ProductCatalog = Record<ProductId, ProductInfo>;

const catalog: ProductCatalog = {
  p1: {
    name: "Keyboard",
    price: 79,
  },
  p2: {
    name: "Mouse",
    price: 39,
  },
};

console.log(catalog);

// Example 6: Record vs manual object type
// Both describe similar shapes. Record is handy when keys already exist as a union.
type Colors = Record<
  "primary" | "secondary",
  string
>;

type ManualColors = {
  primary: string;
  secondary: string;
};

const colors: Colors = {
  primary: "#3366ff",
  secondary: "#ff6633",
};

const manualColors: ManualColors = {
  primary: "#3366ff",
  secondary: "#ff6633",
};

console.log(colors);
console.log(manualColors);

// Example 7: Extra property checking
type Coordinates = Record<"x" | "y", number>;

const point: Coordinates = {
  x: 10,
  y: 20,
};

console.log(point);

// Invalid: z is not an allowed key.
// const invalidPoint: Coordinates = {
//   x: 10,
//   y: 20,
//   z: 30,
// };

// Example 8: Record with arbitrary string keys
// string allows arbitrary string keys; values must remain numbers.
const inventory: Record<string, number> = {
  apples: 10,
  oranges: 5,
  bananas: 8,
};

console.log(inventory);
