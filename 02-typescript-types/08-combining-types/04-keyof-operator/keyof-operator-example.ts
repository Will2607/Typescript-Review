/**
 * 04 — keyof Operator
 *
 * Practical examples of keyof.
 * keyof produces a type of the allowed property names of an object type.
 * It is compile-time only and does not create runtime values.
 */

// 1–5) Simple object type alias and keyof based on it
type User = {
  id: number;
  name: string;
  active: boolean;
};

// Conceptually: "id" | "name" | "active"
type UserKey = keyof User;

let userKey: UserKey = "id";
console.log("userKey:", userKey);

userKey = "name";
console.log("userKey:", userKey);

userKey = "active";
console.log("userKey:", userKey);

// Invalid because "email" is not a key of User
// userKey = "email";

// 6) Second object type alias with different properties
type Product = {
  sku: string;
  name: string;
  price: number;
};

type ProductKey = keyof Product;

const firstProductKey: ProductKey = "sku";
const secondProductKey: ProductKey = "price";

console.log("firstProductKey:", firstProductKey);
console.log("secondProductKey:", secondProductKey);

// Invalid
// const invalidProductKey: ProductKey = "category";

// 7–9) Function parameter using keyof SomeType
type Profile = {
  username: string;
  age: number;
  verified: boolean;
};

function printProfileKey(key: keyof Profile): void {
  console.log("Profile key:", key);
}

printProfileKey("username");
printProfileKey("age");
printProfileKey("verified");

// Invalid because this key does not exist in Profile
// printProfileKey("email");

// 10) Numeric property names
type StatusCodes = {
  200: string;
  404: string;
};

type StatusCodeKey = keyof StatusCodes;

const successCode: StatusCodeKey = 200;
const notFoundCode: StatusCodeKey = 404;

console.log("successCode:", successCode);
console.log("notFoundCode:", notFoundCode);

// Invalid
// const invalidStatusCode: StatusCodeKey = 500;

// Additional invalid examples — kept commented:
//
type Settings = {
  theme: string;
  notifications: boolean;
};

type SettingsKey = keyof Settings;
// const invalidSettingsKey: SettingsKey = "language";
//
type Book = {
  title: string;
  pages: number;
};

type BookKey = keyof Book;
// const invalidBookKey: BookKey = "author";
//
function printBookKey(key: keyof Book): void {
  console.log(key);
}
//
// printBookKey("isbn");
//
type Codes = {
  100: string;
  200: string;
};

type CodeKey = keyof Codes;
// const invalidCode: CodeKey = 300;
//
// const wrongType: BookKey = 123;
