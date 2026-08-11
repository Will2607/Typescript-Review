/**
 * 07 — Type Compatibility
 *
 * Practical examples of basic TypeScript type compatibility.
 * TypeScript primarily uses structural typing: the shape matters.
 * Compatibility is checked at compile time only.
 */

// 1) Compatible primitive assignments
let language: string = "TypeScript";
const framework: string = "JavaScript";

language = framework;
console.log("language:", language);

let title: string = "TypeScript";
console.log("title:", title);

let count: number = 10;
console.log("count:", count);

// 2) Invalid primitive assignments
// language = 100;
// language = true;
// title = 42;
// count = false;

// 3–4) Two separately declared inline object types with the same structure
const firstPoint: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20,
};

let secondPoint: {
  x: number;
  y: number;
} = {
  x: 0,
  y: 0,
};

secondPoint = firstPoint;
console.log("secondPoint:", secondPoint);

// Structural compatibility: source has at least the required properties
let basicUser: {
  id: number;
  name: string;
};

const detailedUser: {
  id: number;
  name: string;
  active: boolean;
} = {
  id: 1,
  name: "Alice",
  active: true,
};

basicUser = detailedUser;
console.log("basicUser:", basicUser);

// 5) Extra properties on an existing variable can still be compatible
const employee = {
  id: 10,
  name: "Daniel",
  department: "Engineering",
};

let person: {
  id: number;
  name: string;
};

person = employee;
console.log("person:", person);

// Clear structural example from the lesson notes
let first: {
  id: number;
  name: string;
};

const second = {
  id: 1,
  name: "Alice",
  active: true,
};

first = second;
console.log("first:", first);

// 8–9) Function that accepts an inline object type
function printUser(user: {
  id: number;
  name: string;
}): void {
  console.log("printUser:", user.id, user.name);
}

const admin = {
  id: 100,
  name: "Carol",
  role: "admin",
};

printUser(admin);

// 10–11) Function returning an inline object type
function createCoordinate(): {
  x: number;
  y: number;
} {
  return {
    x: 5,
    y: 15,
  };
}

const coordinate: {
  x: number;
  y: number;
} = createCoordinate();

console.log("coordinate:", coordinate);

// 6–7 and additional invalid examples — kept commented:
//
const incompleteUser = {
  id: 2,
};
//
// basicUser = incompleteUser;
// Error: Property 'name' is missing.
//
const wrongUser = {
  id: "three",
  name: "Bob",
};
//
// basicUser = wrongUser;
// Error: Type 'string' is not assignable to type 'number'.
//
const missingName = {
  id: 5,
};
//
// basicUser = missingName;
// Error: Property 'name' is missing.
//
const invalidId = {
  id: "five",
  name: "Eve",
};
//
// basicUser = invalidId;
// Error: Type 'string' is not assignable to type 'number'.
//
const incomplete = {
  id: 1,
};
//
// first = incomplete;
// Error: Property 'name' is missing.
//
// printUser({ id: "wrong", name: "Frank" });
// Error: Type 'string' is not assignable to type 'number'.
