/**
 * 07 — Extract
 *
 * Extract<T, U> keeps from union T every member assignable to U.
 * The result is still a union, not an object type.
 */

// Example 1: Basic Extract
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

type ActiveStatus = Extract<
  Status,
  "loading" | "success"
>;

const loadingStatus: ActiveStatus = "loading";
const successStatus: ActiveStatus = "success";

console.log(loadingStatus);
console.log(successStatus);

// const invalidIdle: ActiveStatus = "idle";
// const invalidError: ActiveStatus = "error";

// Example 2: Extract one string literal
type Direction =
  | "north"
  | "south"
  | "east"
  | "west";

type NorthOnly = Extract<
  Direction,
  "north"
>;

const northDirection: NorthOnly = "north";

console.log(northDirection);

// const invalidDirection: NorthOnly = "south";

// Example 3: Extract multiple members
type Role =
  | "admin"
  | "editor"
  | "viewer"
  | "guest";

type PrivilegedRole = Extract<
  Role,
  "admin" | "editor"
>;

const adminRole: PrivilegedRole = "admin";
const editorRole: PrivilegedRole = "editor";

console.log(adminRole);
console.log(editorRole);

// const invalidViewer: PrivilegedRole = "viewer";
// const invalidGuest: PrivilegedRole = "guest";

// Example 4: Number literal union
type Rating = 1 | 2 | 3 | 4 | 5;

type HighRating = Extract<
  Rating,
  4 | 5
>;

const ratingFour: HighRating = 4;
const ratingFive: HighRating = 5;

console.log(ratingFour, ratingFive);

// const invalidRating: HighRating = 3;

// Example 5: Mixed union
type Identifier =
  | string
  | number
  | null;

type NumericIdentifier = Extract<
  Identifier,
  number
>;

const numericId: NumericIdentifier = 100;

console.log(numericId);

// const textId: NumericIdentifier = "abc";
// const nullId: NumericIdentifier = null;

// Example 6: Extracting multiple primitive types
type Primitive =
  | string
  | number
  | boolean;

type TextOrBoolean = Extract<
  Primitive,
  string | boolean
>;

const textValue: TextOrBoolean = "hello";
const booleanValue: TextOrBoolean = true;

console.log(textValue);
console.log(booleanValue);

// const numericValue: TextOrBoolean = 42;

// Example 7: Extract vs Exclude
// Extract keeps matching union members.
// Exclude removes matching union members.
type AccountStatus =
  | "active"
  | "inactive"
  | "deleted";

type VisibleStatus = Extract<
  AccountStatus,
  "active" | "inactive"
>;

type HiddenStatus = Exclude<
  AccountStatus,
  "active" | "inactive"
>;

const visibleStatus: VisibleStatus = "active";
const hiddenStatus: HiddenStatus = "deleted";

console.log(visibleStatus);
console.log(hiddenStatus);
