/**
 * 03 — Interface Declaration
 *
 * Declare object contracts with interfaces, including optional and
 * read-only members, method signatures, and declaration merging.
 * Interfaces exist only in the type system.
 */

// 1–6) Basic interface: required, optional, readonly, and a method
interface User {
  readonly id: number;
  name: string;
  email?: string;
  greet(): void;
}

// 2–3) Object typed with the interface
const firstUser: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  greet(): void {
    console.log("Hello, I am " + this.name);
  },
};

console.log(firstUser.id);
console.log(firstUser.name);
console.log(firstUser.email);
firstUser.greet();

// 7) Reusing the same interface for another object (email omitted)
const secondUser: User = {
  id: 2,
  name: "Bob",
  greet(): void {
    console.log("Hello, I am " + this.name);
  },
};

console.log(secondUser);
secondUser.greet();

// 8–9) Declaration merging: same interface name declared twice
interface ApplicationSettings {
  theme: string;
}

interface ApplicationSettings {
  notificationsEnabled: boolean;
}

const settings: ApplicationSettings = {
  theme: "dark",
  notificationsEnabled: true,
};

console.log(settings.theme);
console.log(settings.notificationsEnabled);

// Another merging example
interface Employee {
  id: number;
}

interface Employee {
  department: string;
}

const employee: Employee = {
  id: 100,
  department: "Engineering",
};

console.log(employee);

// Compatible repeated property (same type) plus a new member
interface Service {
  name: string;
}

interface Service {
  name: string;
  active: boolean;
}

const service: Service = {
  name: "API",
  active: true,
};

console.log(service);

// Invalid examples (remain commented out)

// Missing required property.
// const invalidUserOne: User = {
//   id: 3,
//   greet(): void {
//     console.log("Hello");
//   },
// };

// Wrong property type.
// const invalidUserTwo: User = {
//   id: 4,
//   name: 100,
//   greet(): void {
//     console.log("Hello");
//   },
// };

// Read-only property cannot be reassigned.
// firstUser.id = 99;

// Missing property added through declaration merging.
// const invalidSettings: ApplicationSettings = {
//   theme: "light",
// };

// Incompatible declaration merging.
// interface BrokenSettings {
//   mode: string;
// }
//
// interface BrokenSettings {
//   mode: number;
// }

// Missing required method.
// const invalidUserThree: User = {
//   id: 5,
//   name: "Carol",
// };

// Incompatible duplicate interface property declaration.
// interface InvalidConfig {
//   port: number;
// }
//
// interface InvalidConfig {
//   port: string;
// }
