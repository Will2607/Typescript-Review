/**
 * 06 — Object
 *
 * Practical examples of TypeScript object types: inline shapes,
 * optional and read-only properties, nested objects, and lowercase object.
 *
 * Object type annotations are checked by TypeScript and erased at runtime.
 * The values remain regular JavaScript objects.
 */

// 1) Basic object with an explicit inline object type
const user: {
  id: number;
  name: string;
  active: boolean;
} = {
  id: 1,
  name: "Alice",
  active: true,
};

console.log("user:", user);

// 2) Reading properties with dot notation
console.log("user.id:", user.id);
console.log("user.name:", user.name);
console.log("user.active:", user.active);

// 3) Updating writable properties with compatible values
user.active = false;
user.name = "Alicia";
console.log("user after updates:", user);

// 4) Object with an optional property
const product: {
  name: string;
  price: number;
  description?: string;
} = {
  name: "Keyboard",
  price: 75,
};

const productWithDescription: {
  name: string;
  price: number;
  description?: string;
} = {
  name: "Mouse",
  price: 25,
  description: "Wireless mouse",
};

product.price = 80;
console.log("product:", product);
console.log("productWithDescription:", productWithDescription);

// 5) Object with a read-only property
const application: {
  readonly name: string;
  version: string;
} = {
  name: "TypeScript Review",
  version: "1.0.0",
};

application.version = "1.1.0";
console.log("application:", application);

// 6) Nested object with an explicitly typed nested structure
const employee: {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
} = {
  id: 10,
  name: "Daniel",
  address: {
    city: "Lima",
    country: "Peru",
  },
};

console.log("employee:", employee);
console.log("employee.address.city:", employee.address.city);

// 7) Lowercase object type — non-primitive, but no known property shape
const settings: object = {
  darkMode: true,
};

console.log("settings:", settings);

// Property access is not allowed on a value typed only as object:
// console.log(settings.darkMode);
// Error: Property 'darkMode' does not exist on type 'object'.

// Incorrect examples — kept commented so this file type-checks:
//
// const missingRequired: {
//   id: number;
//   name: string;
//   active: boolean;
// } = {
//   id: 2,
//   name: "Bob",
// };
// Error: Property 'active' is missing ...
//
// const wrongPropertyType: {
//   id: number;
//   name: string;
//   active: boolean;
// } = {
//   id: "3",
//   name: "Carol",
//   active: true,
// };
// Error: Type 'string' is not assignable to type 'number'.
//
// user.active = "yes";
// Error: Type 'string' is not assignable to type 'boolean'.
//
// application.name = "Other App";
// Error: Cannot assign to 'name' because it is a read-only property.
//
// employee.address.city = 100;
// Error: Type 'number' is not assignable to type 'string'.
