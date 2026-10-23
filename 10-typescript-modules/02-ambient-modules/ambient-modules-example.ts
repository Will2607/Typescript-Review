/**
 * 02 — Ambient Modules
 *
 * Ambient declarations describe APIs that exist elsewhere.
 * They do not create the runtime module.
 */

// Example 1: math-library
// TypeScript can understand these imports because of the ambient declaration,
// but the real JavaScript module would still need to exist at runtime.
//
// import {
//   add,
//   subtract
// } from "math-library";
//
// const sum = add(10, 20);
// const difference = subtract(20, 5);
//
// console.log(sum);
// console.log(difference);
//
// Invalid:
// add("10", 20);

// Example 2: app-config
// Expected types: appName is string, version is string, debug is boolean.
//
// import {
//   appName,
//   version,
//   debug
// } from "app-config";
//
// console.log(appName);
// console.log(version);
// console.log(debug);

// Example 3: user-library
//
// import {
//   getUser,
//   type User
// } from "user-library";
//
// const user: User = getUser(1);
//
// Invalid:
// getUser("1");

// Example 4: status-library
//
// import {
//   getStatus,
//   type Status
// } from "status-library";
//
// const currentStatus: Status = getStatus();
//
// Invalid:
// const invalidStatus: Status = "pending";

// Example 5: Declaration vs runtime implementation
// The type describes the callable shape.
// The function provides the runtime implementation.
type LocalAdd =
  (a: number, b: number) => number;

const localAdd: LocalAdd = (
  a,
  b
) => a + b;

console.log(localAdd(10, 20));

type LocalUser = {
  id: number;
  name: string;
};

function localGetUser(id: number): LocalUser {
  return {
    id,
    name: "Alice",
  };
}

console.log(localGetUser(1));

// Invalid argument type.
// localAdd("10", 20);

// Example 6: Runtime warning
// An ambient module declaration only provides type information.
// It does not install or implement the declared module.
// Importing a nonexistent runtime module would still fail when executed.
