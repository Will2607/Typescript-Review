/**
 * 05 — satisfies keyword
 *
 * Practical examples of satisfies:
 * check compatibility with a type while keeping the expression's inferred type.
 *
 * satisfies does not convert values and does not validate at runtime.
 * It is removed during JavaScript compilation.
 */

// 1) Basic object checked with satisfies
const application = {
  name: "TypeScript Review",
  version: 1,
} satisfies {
  name: string;
  version: number;
};

// 2) Accessing properties after the check
console.log("application.name:", application.name);
console.log("application.version:", application.version);

// 3) Comparison with an explicitly annotated object
const annotatedConfiguration: {
  environment: string;
  port: number;
} = {
  environment: "development",
  port: 3000,
};

console.log("annotatedConfiguration.environment:", annotatedConfiguration.environment);
console.log("annotatedConfiguration.port:", annotatedConfiguration.port);

// Annotation: the variable is given the annotated type.
// satisfies: compatibility is checked; the expression keeps its inferred type.

// 4) Comparison with as Type
const assertedUser = {
  id: 1,
  name: "Alice",
} as {
  id: number;
  name: string;
};

console.log("assertedUser.id:", assertedUser.id);
console.log("assertedUser.name:", assertedUser.name);

const checkedUser = {
  id: 2,
  name: "Bob",
} satisfies {
  id: number;
  name: string;
};

console.log("checkedUser.id:", checkedUser.id);
console.log("checkedUser.name:", checkedUser.name);

// as Type asks TypeScript to treat the value as the target type.
// satisfies verifies that the value is compatible with the target type.

// 5) Configuration object checked against an inline object type
const checkedConfiguration = {
  environment: "development",
  port: 3000,
} satisfies {
  environment: string;
  port: number;
};

console.log("checkedConfiguration.environment:", checkedConfiguration.environment);
console.log("checkedConfiguration.port:", checkedConfiguration.port);

// 6) User object checked against an inline object type
const user = {
  id: 10,
  name: "Daniel",
  active: true,
} satisfies {
  id: number;
  name: string;
  active: boolean;
};

console.log("user:", user);

// 7) Precise inferred values are preserved where TypeScript naturally keeps them.
// satisfies still validates against the broader required shape.
const release = {
  channel: "stable",
  build: 42,
} satisfies {
  channel: string;
  build: number;
};

console.log("release.channel:", release.channel);
console.log("release.build:", release.build);

// Incorrect examples — kept commented so this file type-checks:
//
// const missingProperty = {
//   name: "TypeScript Review",
// } satisfies {
//   name: string;
//   version: number;
// };
// Error: Property 'version' is missing ...
//
// const wrongPropertyType = {
//   name: "TypeScript Review",
//   version: "one",
// } satisfies {
//   name: string;
//   version: number;
// };
// Error: Type 'string' is not assignable to type 'number'.
//
// const unexpectedProperty = {
//   name: "TypeScript Review",
//   version: 1,
//   debug: true,
// } satisfies {
//   name: string;
//   version: number;
// };
// Error: 'debug' does not exist in type ...
//
// const invalidUser = {
//   id: "one",
//   name: "Alice",
// } satisfies {
//   id: number;
//   name: string;
// };
// Error: Type 'string' is not assignable to type 'number'.
