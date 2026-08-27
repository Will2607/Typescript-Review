/**
 * 01 — Types vs Interfaces
 *
 * Compare type aliases and interfaces for object shapes.
 * Type aliases can also name primitives and unions.
 * Both are erased during compilation.
 */

// 1–2) Type alias and interface describing equivalent objects
type UserType = {
  id: number;
  name: string;
};

interface UserInterface {
  id: number;
  name: string;
}

// 3–5) Variables using each form, then access properties
const userFromType: UserType = {
  id: 1,
  name: "Alice",
};

const userFromInterface: UserInterface = {
  id: 2,
  name: "Bob",
};

console.log(userFromType);
console.log(userFromInterface);
console.log(userFromType.id, userFromType.name);
console.log(userFromInterface.id, userFromInterface.name);

// 6–7) Optional properties
type ProductType = {
  name: string;
  description?: string;
};

interface ProductInterface {
  name: string;
  description?: string;
}

const keyboard: ProductType = {
  name: "Keyboard",
};

const monitor: ProductInterface = {
  name: "Monitor",
  description: "27-inch display",
};

console.log(keyboard);
console.log(monitor);

// 8–9) Read-only properties
type AppType = {
  readonly name: string;
  version: string;
};

interface AppInterface {
  readonly name: string;
  version: string;
}

const firstApp: AppType = {
  name: "Type App",
  version: "1.0",
};

const secondApp: AppInterface = {
  name: "Interface App",
  version: "1.0",
};

firstApp.version = "1.1";
secondApp.version = "1.1";

console.log(firstApp);
console.log(secondApp);

// Invalid because name is readonly.
// firstApp.name = "Changed";

// Invalid because name is readonly.
// secondApp.name = "Changed";

// 10–11) Function parameters
type CustomerType = {
  id: number;
  name: string;
};

interface CustomerInterface {
  id: number;
  name: string;
}

function printTypeCustomer(customer: CustomerType): void {
  console.log(customer.id, customer.name);
}

function printInterfaceCustomer(customer: CustomerInterface): void {
  console.log(customer.id, customer.name);
}

const customerOne: CustomerType = {
  id: 10,
  name: "Carol",
};

const customerTwo: CustomerInterface = {
  id: 20,
  name: "Daniel",
};

printTypeCustomer(customerOne);
printInterfaceCustomer(customerTwo);

// 12) Primitive type alias
type UserId = string;

const userId: UserId = "USR-001";

console.log(userId);

// 13) Simple union type alias
type Status = "active" | "inactive";

const currentStatus: Status = "active";

console.log(currentStatus);

// Invalid.
// const invalidStatus: Status = "pending";

// Structural compatibility: both accept a compatible object shape
type BasicUser = {
  id: number;
  name: string;
};

interface BasicUserInterface {
  id: number;
  name: string;
}

const sharedUser = {
  id: 100,
  name: "Eva",
};

const typeUser: BasicUser = sharedUser;
const interfaceUser: BasicUserInterface = sharedUser;

console.log(typeUser);
console.log(interfaceUser);

// Invalid examples (remain commented out)

type AccountType = {
  id: number;
  name: string;
};

// Missing required property.
// const invalidTypeAccount: AccountType = {
//   id: 1,
// };

interface AccountInterface {
  id: number;
  name: string;
}

// Missing required property.
// const invalidInterfaceAccount: AccountInterface = {
//   id: 2,
// };

// Wrong property type.
// const wrongTypeAccount: AccountType = {
//   id: "one",
//   name: "Alice",
// };

// Wrong property type.
// const wrongInterfaceAccount: AccountInterface = {
//   id: "two",
//   name: "Bob",
// };

type Role = "admin" | "user";

// Invalid union value.
// const invalidRole: Role = "owner";
