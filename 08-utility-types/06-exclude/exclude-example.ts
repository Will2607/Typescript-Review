/**
 * 06 — Exclude
 *
 * Exclude<T, U> removes from union T every member assignable to U.
 * The result is still a union, not an object type.
 */

// Example 1: Basic Exclude
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

type FinalStatus = Exclude<
  Status,
  "idle" | "loading"
>;

const successStatus: FinalStatus = "success";
const errorStatus: FinalStatus = "error";

console.log(successStatus);
console.log(errorStatus);

// const invalidIdle: FinalStatus = "idle";
// const invalidLoading: FinalStatus = "loading";

// Example 2: Excluding one string literal
type Direction =
  | "north"
  | "south"
  | "east"
  | "west";

type WithoutNorth = Exclude<
  Direction,
  "north"
>;

const south: WithoutNorth = "south";
const east: WithoutNorth = "east";
const west: WithoutNorth = "west";

console.log(south, east, west);

// const invalidDirection: WithoutNorth = "north";

// Example 3: Excluding multiple members
type Role =
  | "admin"
  | "editor"
  | "viewer"
  | "guest";

type LimitedRole = Exclude<
  Role,
  "admin" | "guest"
>;

const editorRole: LimitedRole = "editor";
const viewerRole: LimitedRole = "viewer";

console.log(editorRole);
console.log(viewerRole);

// const invalidAdmin: LimitedRole = "admin";
// const invalidGuest: LimitedRole = "guest";

// Example 4: Number literal union
type Rating = 1 | 2 | 3 | 4 | 5;

type HighRating = Exclude<
  Rating,
  1 | 2
>;

const ratingThree: HighRating = 3;
const ratingFour: HighRating = 4;
const ratingFive: HighRating = 5;

console.log(ratingThree, ratingFour, ratingFive);

// const invalidRating: HighRating = 2;

// Example 5: Mixed union
type Identifier =
  | string
  | number
  | null;

type DefinedIdentifier = Exclude<
  Identifier,
  null
>;

const textId: DefinedIdentifier = "abc";
const numericId: DefinedIdentifier = 100;

console.log(textId);
console.log(numericId);

// const nullId: DefinedIdentifier = null;

// Example 6: Excluding a primitive type
type Primitive =
  | string
  | number
  | boolean;

type NonBooleanPrimitive = Exclude<
  Primitive,
  boolean
>;

const textValue: NonBooleanPrimitive = "hello";
const numberValue: NonBooleanPrimitive = 42;

console.log(textValue);
console.log(numberValue);

// const booleanValue: NonBooleanPrimitive = true;

// Example 7: Exclude vs Omit
// Exclude removes union members.
// Omit removes object properties.
type AccountStatus =
  | "active"
  | "inactive"
  | "deleted";

type VisibleAccountStatus = Exclude<
  AccountStatus,
  "deleted"
>;

interface User {
  id: number;
  name: string;
  password: string;
}

type PublicUser = Omit<
  User,
  "password"
>;

const visibleStatus: VisibleAccountStatus = "active";

const publicUser: PublicUser = {
  id: 1,
  name: "Alice",
};

console.log(visibleStatus);
console.log(publicUser);
