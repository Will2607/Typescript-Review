/**
 * 06 — Type Inference
 *
 * Practical examples of basic TypeScript type inference from initial values.
 * TypeScript determines types automatically, so explicit annotations are not
 * always required. Inference is compile-time only.
 */

// 1) String inference
let language = "TypeScript";
console.log("language:", language);

// 4) Reassign with another value of the same inferred type
language = "JavaScript";
console.log("language after update:", language);

// 5) Invalid because TypeScript inferred string
// language = 42;

// 2) Number inference
let version = 5;
console.log("version:", version);

version = 6;
console.log("version after update:", version);

// Invalid because TypeScript inferred number
// version = "six";

// 3) Boolean inference
let isTyped = true;
console.log("isTyped:", isTyped);

isTyped = false;
console.log("isTyped after update:", isTyped);

// Invalid because TypeScript inferred boolean
// isTyped = "yes";

// 6) const primitive example — cannot be reassigned
const courseName = "TypeScript Review";
console.log("courseName:", courseName);

// Invalid because const variables cannot be reassigned
// courseName = "JavaScript Review";

// 7) Object property inference
const user = {
  id: 1,
  name: "Alice",
  active: true,
};

console.log("user.id:", user.id);
console.log("user.name:", user.name);
console.log("user.active:", user.active);

// 8) Valid object property updates using compatible types
user.name = "Bob";
user.active = false;
console.log("user after updates:", user);

// 9) Invalid object property updates using incompatible types
// user.name = 100;
// user.active = "yes";

// Product example: each property is inferred separately
const product = {
  name: "Keyboard",
  price: 75,
  available: true,
};

console.log("product:", product);

// 10) Array element type inference
const technologies = ["TypeScript", "JavaScript"];

// 11) Adding compatible values to an inferred array
technologies.push("Node.js");
console.log("technologies:", technologies);

// 12) Invalid because the array element type was inferred as string
// technologies.push(100);

const cities = ["Lima", "Cusco", "Arequipa"];
cities.push("Piura");
console.log("cities:", cities);

// Invalid incompatible array addition
// cities.push(123);

// 13) Explicit annotation versus inference
const explicitLanguage: string = "TypeScript";
const inferredLanguage = "TypeScript";

console.log("explicitLanguage:", explicitLanguage);
console.log("inferredLanguage:", inferredLanguage);

// Score example: inferred as number from the initial value
let score = 100;
console.log("score:", score);

// Invalid because TypeScript inferred number
// score = "one hundred";
