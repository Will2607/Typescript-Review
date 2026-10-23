/**
 * 03 — External Modules
 *
 * Top-level import/export makes a file a module.
 * Named exports use braces; default exports do not.
 */

// Example 1: Named imports
// Example 3: Import alias
// sum is a local alias for the exported add.
import multiply, {
  add as sum,
  subtract,
  divide,
  PI
} from "./math-utils";

// Example 4: Type-only import
import type {
  User,
  UserRole
} from "./user-model";

import {
  defaultRole
} from "./user-model";

console.log(sum(10, 20));
console.log(subtract(20, 5));
console.log(divide(20, 4));
console.log(PI);

// Example 2: Default import
console.log(multiply(5, 4));

const user: User = {
  id: 1,
  name: "Alice",
  active: true
};

const role: UserRole =
  defaultRole;

console.log(user);
console.log(role);

// Example 5: Invalid non-exported member
// internalLabel is not exported.
// import {
//   internalLabel
// } from "./math-utils";

// Example 6: Invalid named import
// multiply is the default export, not a named export.
// import {
//   multiply
// } from "./math-utils";

// Example 7: Invalid function arguments
// sum("10", 20);

// Example 8: Invalid imported type usage
// const invalidUser: User = {
//   id: "1",
//   name: "Alice",
//   active: true
// };
