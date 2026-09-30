/**
 * 02 — Pick
 *
 * Pick<T, K> creates a new type with only the selected keys from T.
 * Property types stay the same. The source type is unchanged.
 */

// Example 1: Basic Pick
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

type UserPreview = Pick<User, "id" | "name">;

const userPreview: UserPreview = {
  id: 1,
  name: "Alice",
};

console.log(userPreview);

// Example 2: Pick one property
type UserName = Pick<User, "name">;

const userName: UserName = {
  name: "Bob",
};

console.log(userName);

// Example 3: Multiple selected properties
type UserContact = Pick<User, "name" | "email">;

const userContact: UserContact = {
  name: "Dana",
  email: "dana@example.com",
};

console.log(userContact);

// Example 4: Invalid key
// phone is not a valid key of User.
// type InvalidUser = Pick<User, "phone">;

// Example 5: Pick with an interface
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

type ProductSummary = Pick<
  Product,
  "id" | "name" | "price"
>;

const productSummary: ProductSummary = {
  id: 10,
  name: "Keyboard",
  price: 79,
};

console.log(productSummary);

// Example 6: Pick with a type alias
type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type ArticlePreview = Pick<
  Article,
  "id" | "title"
>;

const articlePreview: ArticlePreview = {
  id: 1,
  title: "TypeScript Pick",
};

console.log(articlePreview);

// Example 7: Property types are preserved
interface Account {
  id: number;
  username: string;
}

type AccountId = Pick<Account, "id">;

const accountId: AccountId = {
  id: 100,
};

console.log(accountId);

// Invalid: id must still be a number.
// const invalidAccountId: AccountId = {
//   id: "100",
// };

// Example 8: Original type remains unchanged
// Pick creates a new type and does not alter User.
const completeUser: User = {
  id: 2,
  name: "Charlie",
  email: "charlie@example.com",
  active: true,
};

console.log(completeUser);
console.log(userPreview);
