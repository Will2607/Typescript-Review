/**
 * 01 — Partial
 *
 * Partial<T> makes every property of T optional.
 * The original type is unchanged. Nested objects stay as they were.
 */

// Example 1: Basic Partial
interface User {
  id: number;
  name: string;
  email: string;
}

const completeUser: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const partialUser: Partial<User> = {
  name: "Updated Alice",
};

console.log(completeUser);
console.log(partialUser);

// Example 2: Different valid Partial objects
interface Profile {
  username: string;
  age: number;
  active: boolean;
}

const emptyProfileUpdate: Partial<Profile> = {};

const usernameUpdate: Partial<Profile> = {
  username: "new-name",
};

const ageUpdate: Partial<Profile> = {
  age: 30,
};

const multipleUpdates: Partial<Profile> = {
  username: "alice",
  active: true,
};

console.log(emptyProfileUpdate);
console.log(usernameUpdate);
console.log(ageUpdate);
console.log(multipleUpdates);

// Example 3: Type alias with Partial
type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductUpdate = Partial<Product>;

const productUpdate: ProductUpdate = {
  price: 99.99,
};

console.log(productUpdate);

// Example 4: Partial update function
interface Settings {
  theme: string;
  notifications: boolean;
}

function updateSettings(
  current: Settings,
  updates: Partial<Settings>
): Settings {
  return {
    ...current,
    ...updates,
  };
}

const currentSettings: Settings = {
  theme: "light",
  notifications: true,
};

const updatedSettings = updateSettings(currentSettings, {
  theme: "dark",
});

console.log(updatedSettings);

// Example 5: Partial preserves property types
interface Account {
  username: string;
  age: number;
}

const accountUpdate: Partial<Account> = {
  age: 35,
};

console.log(accountUpdate);

// Invalid: age is optional, but it must still be a number.
// const invalidAccountUpdate: Partial<Account> = {
//   age: "35",
// };

// Example 6: Partial is shallow
interface Config {
  database: {
    host: string;
    port: number;
  };
}

const validConfigUpdate: Partial<Config> = {};

const databaseUpdate: Partial<Config> = {
  database: {
    host: "localhost",
    port: 5432,
  },
};

console.log(validConfigUpdate);
console.log(databaseUpdate);

// Invalid: database is optional, but host and port remain required if database is provided.
// const invalidDatabaseUpdate: Partial<Config> = {
//   database: {
//     host: "localhost",
//   },
// };
