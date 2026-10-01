/**
 * 04 — Readonly
 *
 * Readonly<T> makes all top-level properties of T readonly.
 * Values can still be read. Reassignment is blocked at compile time.
 * Nested objects are not deeply frozen by Readonly.
 */

// Example 1: Basic Readonly
interface User {
  id: number;
  name: string;
  active: boolean;
}

const readonlyUser: Readonly<User> = {
  id: 1,
  name: "Alice",
  active: true,
};

console.log(readonlyUser.id);
console.log(readonlyUser.name);
console.log(readonlyUser.active);

// Readonly properties cannot be reassigned.
// readonlyUser.name = "Bob";

// Example 2: Original type remains mutable
// Readonly<User> does not modify the original User type.
const mutableUser: User = {
  id: 2,
  name: "Charlie",
  active: false,
};

mutableUser.name = "Updated Charlie";

console.log(mutableUser);

// Example 3: Readonly with an interface
interface Product {
  id: number;
  name: string;
  price: number;
}

type ImmutableProduct = Readonly<Product>;

const product: ImmutableProduct = {
  id: 10,
  name: "Keyboard",
  price: 79,
};

console.log(product);

// product.price = 50;

// Example 4: Readonly with a type alias
type Settings = {
  theme: string;
  notifications: boolean;
};

type ReadonlySettings = Readonly<Settings>;

const settings: ReadonlySettings = {
  theme: "dark",
  notifications: true,
};

console.log(settings);

// settings.theme = "light";

// Example 5: readonly property vs Readonly<T>
interface Account {
  readonly id: number;
  username: string;
}

const account: Account = {
  id: 100,
  username: "alice",
};

account.username = "alice-updated";

console.log(account);

// account.id = 200;

const immutableAccount: Readonly<Account> = {
  id: 101,
  username: "bob",
};

console.log(immutableAccount);

// immutableAccount.username = "bob-updated";

// Example 6: Readonly is shallow
// Readonly<T> only affects top-level properties.
interface Config {
  database: {
    host: string;
    port: number;
  };
}

const config: Readonly<Config> = {
  database: {
    host: "localhost",
    port: 5432,
  },
};

// config.database = {
//   host: "example.com",
//   port: 3306,
// };

config.database.port = 3306;

console.log(config.database);

// Example 7: Function parameter using Readonly
function printUser(user: Readonly<User>): void {
  console.log(user.id + ": " + user.name);

  // The function can read the object but cannot reassign top-level properties.
  // user.name = "Changed";
}

printUser({
  id: 3,
  name: "Dana",
  active: true,
});
