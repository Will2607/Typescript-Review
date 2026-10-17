/**
 * 02 — Conditional Types
 *
 * T extends U ? X : Y selects X when T is assignable to U.
 * Generic conditional types can apply that check to each union member.
 */

// Example 1: Basic conditional type
type IsString<T> =
  T extends string
    ? true
    : false;

type StringCheck =
  IsString<string>;

type NumberCheck =
  IsString<number>;

const stringCheck: StringCheck = true;
const numberCheck: NumberCheck = false;

console.log(stringCheck);
console.log(numberCheck);

// const invalidStringCheck: StringCheck = false;

// Example 2: Primitive condition
type Describe<T> =
  T extends number
    ? "number"
    : "other";

type NumberDescription =
  Describe<number>;

type StringDescription =
  Describe<string>;

const numberDescription: NumberDescription = "number";
const stringDescription: StringDescription = "other";

console.log(numberDescription);
console.log(stringDescription);

// Example 3: Object shape condition
type HasId<T> =
  T extends { id: number }
    ? "has id"
    : "no id";

type User = {
  id: number;
  name: string;
};

type Product = {
  name: string;
};

type UserResult =
  HasId<User>;

type ProductResult =
  HasId<Product>;

const userResult: UserResult = "has id";
const productResult: ProductResult = "no id";

console.log(userResult);
console.log(productResult);

// Example 4: Array check
type ArrayOrValue<T> =
  T extends unknown[]
    ? "array"
    : "value";

type ArrayResult =
  ArrayOrValue<string[]>;

type ValueResult =
  ArrayOrValue<string>;

const arrayResult: ArrayResult = "array";
const valueResult: ValueResult = "value";

console.log(arrayResult);
console.log(valueResult);

// Example 5: Conditional type returning types
type ResultType<T> =
  T extends string
    ? string
    : number;

type TextResult =
  ResultType<string>;

type NumericResult =
  ResultType<boolean>;

const textResult: TextResult = "hello";
const numericResult: NumericResult = 10;

console.log(textResult);
console.log(numericResult);

// const invalidTextResult: TextResult = 123;

// Example 6: Conditional type with union
// The generic conditional type is applied to each union member.
type KeepStrings<T> =
  T extends string
    ? T
    : never;

type StringMembers =
  KeepStrings<
    string | number | boolean
  >;

const textValue: StringMembers =
  "TypeScript";

console.log(textValue);

// const invalidNumber: StringMembers = 10;
// const invalidBoolean: StringMembers = true;

// Example 7: Another union distribution example
type WrapString<T> =
  T extends string
    ? { text: T }
    : { value: T };

type Wrapped =
  WrapString<string | number>;

const wrappedText: Wrapped = {
  text: "hello",
};

const wrappedNumber: Wrapped = {
  value: 42,
};

console.log(wrappedText);
console.log(wrappedNumber);

// Example 8: Connection to utility types
// Exclude, Extract, and NonNullable are examples of utilities
// that rely on conditional-type behavior internally.
