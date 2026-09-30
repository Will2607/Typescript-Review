/**
 * 03 — Omit
 *
 * Omit<T, K> creates a new type without the selected keys from T.
 * Remaining property types stay the same. The source type is unchanged.
 */

// Example 1: Basic Omit
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;

const publicUser: PublicUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log(publicUser);

// Example 2: Omit multiple properties
type UserPreview = Omit<User, "email" | "password">;

const userPreview: UserPreview = {
  id: 2,
  name: "Bob",
};

console.log(userPreview);

// Example 3: Omit with an interface
interface Product {
  id: number;
  name: string;
  price: number;
  internalCode: string;
}

type PublicProduct = Omit<Product, "internalCode">;

const publicProduct: PublicProduct = {
  id: 10,
  name: "Keyboard",
  price: 79,
};

console.log(publicProduct);

// Example 4: Omit with a type alias
type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  draftNotes: string;
};

type PublishedArticle = Omit<Article, "draftNotes">;

const publishedArticle: PublishedArticle = {
  id: 1,
  title: "TypeScript Omit",
  content: "Omit removes selected properties.",
  author: "Alice",
};

console.log(publishedArticle);

// Example 5: Remaining property types are preserved
interface Account {
  id: number;
  username: string;
  password: string;
}

type SafeAccount = Omit<Account, "password">;

const safeAccount: SafeAccount = {
  id: 100,
  username: "alice",
};

console.log(safeAccount);

// Invalid: id must still be a number.
// const invalidSafeAccount: SafeAccount = {
//   id: "100",
//   username: "alice",
// };

// Example 6: Original type remains unchanged
// Omit creates a new type and does not alter User.
const completeUser: User = {
  id: 3,
  name: "Charlie",
  email: "charlie@example.com",
  password: "secret",
};

console.log(completeUser);
console.log(publicUser);

// Example 7: Pick vs Omit (short contrast only)
type UserIdentity = Pick<User, "id" | "name">;
type UserWithoutCredentials = Omit<User, "email" | "password">;

const userIdentity: UserIdentity = {
  id: 4,
  name: "Dana",
};

const userWithoutCredentials: UserWithoutCredentials = {
  id: 4,
  name: "Dana",
};

console.log(userIdentity);
console.log(userWithoutCredentials);
