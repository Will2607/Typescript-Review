/**
 * 09 — Parameters
 *
 * Parameters<T> extracts a function's parameter types as a tuple.
 * Order and types are preserved, including optional and rest parameters.
 */

// Example 1: Basic Parameters
type AddFunction = (
  a: number,
  b: number
) => number;

type AddParams =
  Parameters<AddFunction>;

const addArgs: AddParams = [
  10,
  20,
];

console.log(addArgs);

// const invalidAddArgs: AddParams = [
//   "10",
//   20,
// ];

// Example 2: String and boolean parameters
type Formatter = (
  value: string,
  uppercase: boolean
) => string;

type FormatterParams =
  Parameters<Formatter>;

const formatterArgs: FormatterParams = [
  "typescript",
  true,
];

console.log(formatterArgs);

// Example 3: Existing function with typeof
function createUser(
  name: string,
  age: number,
  active: boolean
): string {
  return name + " (" + age + ") - " + active;
}

type CreateUserParams =
  Parameters<typeof createUser>;

const createUserArgs: CreateUserParams = [
  "Alice",
  30,
  true,
];

console.log(createUser(...createUserArgs));

// Example 4: Function with no parameters
type NoArgsFunction =
  () => string;

type NoArgs =
  Parameters<NoArgsFunction>;

const noArgs: NoArgs = [];

console.log(noArgs);

// Example 5: Optional parameter
type SearchFunction = (
  query: string,
  limit?: number
) => void;

type SearchParams =
  Parameters<SearchFunction>;

const searchArgs1: SearchParams = [
  "typescript",
];

const searchArgs2: SearchParams = [
  "typescript",
  10,
];

console.log(searchArgs1);
console.log(searchArgs2);

// Invalid: the second parameter must be a number when it is provided.
// const invalidSearchArgs: SearchParams = [
//   "typescript",
//   "10",
// ];

// Example 6: Rest parameter
type Logger = (
  prefix: string,
  ...messages: string[]
) => void;

type LoggerParams =
  Parameters<Logger>;

const loggerArgs: LoggerParams = [
  "INFO",
  "Application started",
  "Listening on port 3000",
];

console.log(loggerArgs);

// Example 7: Parameter order matters
type UserFunction = (
  name: string,
  age: number
) => void;

type UserParams =
  Parameters<UserFunction>;

const validUserParams: UserParams = [
  "Bob",
  40,
];

console.log(validUserParams);

// const invalidUserParams: UserParams = [
//   40,
//   "Bob",
// ];
