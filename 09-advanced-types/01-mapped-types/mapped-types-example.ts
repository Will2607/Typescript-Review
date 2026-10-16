/**
 * 01 — Mapped Types
 *
 * A mapped type iterates over keyof T and rebuilds each property as T[K].
 * Modifiers can add or remove readonly and optional behavior.
 */

// Example 1: Basic mapped type
interface User {
  id: number;
  name: string;
  active: boolean;
}

type Clone<T> = {
  [K in keyof T]: T[K];
};

type UserClone = Clone<User>;

const userClone: UserClone = {
  id: 1,
  name: "Alice",
  active: true,
};

console.log(userClone);

// Invalid property type.
// const invalidUser: UserClone = {
//   id: "1",
//   name: "Alice",
//   active: true,
// };

// Example 2: MakeReadonly
type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Product {
  id: number;
  name: string;
  price: number;
}

type ReadonlyProduct =
  MakeReadonly<Product>;

const product: ReadonlyProduct = {
  id: 1,
  name: "Keyboard",
  price: 99,
};

console.log(product);

// product.price = 120;

// Example 3: MakeOptional
type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};

interface Profile {
  username: string;
  age: number;
  active: boolean;
}

type OptionalProfile =
  MakeOptional<Profile>;

const emptyProfile: OptionalProfile = {};

const partialProfile: OptionalProfile = {
  username: "alice",
};

console.log(emptyProfile);
console.log(partialProfile);

// Example 4: Remove readonly
type MakeMutable<T> = {
  -readonly [K in keyof T]: T[K];
};

interface ReadonlySettings {
  readonly theme: string;
  readonly notifications: boolean;
}

type MutableSettings =
  MakeMutable<ReadonlySettings>;

const settings: MutableSettings = {
  theme: "dark",
  notifications: true,
};

settings.theme = "light";

console.log(settings);

// Example 5: Remove optionality
type MakeRequired<T> = {
  [K in keyof T]-?: T[K];
};

interface OptionalUser {
  id?: number;
  name?: string;
}

type RequiredUser =
  MakeRequired<OptionalUser>;

const requiredUser: RequiredUser = {
  id: 1,
  name: "Alice",
};

console.log(requiredUser);

// Invalid: name is required after -?.
// const missingName: RequiredUser = {
//   id: 1,
// };

// Example 6: Remove readonly and optional together
type MutableRequired<T> = {
  -readonly [K in keyof T]-?: T[K];
};

interface DraftConfig {
  readonly host?: string;
  readonly port?: number;
}

type FinalConfig =
  MutableRequired<DraftConfig>;

const config: FinalConfig = {
  host: "localhost",
  port: 3000,
};

config.port = 8080;

console.log(config);

// Example 7: Type alias source
// Mapped types can transform both interfaces and type aliases.
type Article = {
  id: number;
  title: string;
  published: boolean;
};

type OptionalArticle =
  MakeOptional<Article>;

const article: OptionalArticle = {
  title: "Mapped Types",
};

console.log(article);
