/**
 * 10 — NonNullable
 *
 * NonNullable<T> removes null and undefined from T.
 * Other union members stay. This is a compile-time type change only.
 */

// Example 1: Basic NonNullable
type Value =
  | string
  | null
  | undefined;

type DefinedValue =
  NonNullable<Value>;

const textValue: DefinedValue =
  "TypeScript";

console.log(textValue);

// const nullValue: DefinedValue = null;
// const undefinedValue: DefinedValue = undefined;

// Example 2: Number union
type MaybeNumber =
  number | null | undefined;

type DefinedNumber =
  NonNullable<MaybeNumber>;

const count: DefinedNumber = 42;

console.log(count);

// const invalidNullCount: DefinedNumber = null;
// const invalidUndefinedCount: DefinedNumber = undefined;

// Example 3: Multiple remaining types
type Result =
  | string
  | number
  | boolean
  | null
  | undefined;

type DefinedResult =
  NonNullable<Result>;

const textResult: DefinedResult = "success";
const numberResult: DefinedResult = 200;
const booleanResult: DefinedResult = true;

console.log(textResult);
console.log(numberResult);
console.log(booleanResult);

// const invalidNullResult: DefinedResult = null;
// const invalidUndefinedResult: DefinedResult = undefined;

// Example 4: Object union
interface User {
  id: number;
  name: string;
}

type MaybeUser =
  User | null | undefined;

type ExistingUser =
  NonNullable<MaybeUser>;

const user: ExistingUser = {
  id: 1,
  name: "Alice",
};

console.log(user);

// const invalidUser: ExistingUser = null;

// Example 5: Type without nullish members
// The type remains string.
type PlainString =
  NonNullable<string>;

const message: PlainString =
  "No change";

console.log(message);

// Example 6: Only null and undefined
// Nothing is never because no members remain.
type Nothing =
  NonNullable<
    null | undefined
  >;

// Example 7: NonNullable vs Exclude
// NonNullable removes null and undefined specifically.
// Exclude can remove arbitrary union members.
type Example =
  | string
  | number
  | null
  | undefined;

type WithNonNullable =
  NonNullable<Example>;

type WithExclude =
  Exclude<
    Example,
    null | undefined
  >;

const fromNonNullable: WithNonNullable = "hello";
const fromExclude: WithExclude = 10;

console.log(fromNonNullable);
console.log(fromExclude);

// Example 8: Compile-time only
// NonNullable affects only TypeScript's type system and does not perform runtime validation.
type SafeText =
  NonNullable<
    string | null
  >;

const safeText: SafeText =
  "Hello";

console.log(safeText);
