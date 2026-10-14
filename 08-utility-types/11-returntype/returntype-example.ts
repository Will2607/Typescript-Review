/**
 * 11 — ReturnType
 *
 * ReturnType<T> extracts the return type of a function type.
 * Primitive, object, union, and void results are preserved.
 */

// Example 1: Basic ReturnType
type TextFunction =
  () => string;

type TextResult =
  ReturnType<TextFunction>;

const textResult: TextResult =
  "TypeScript";

console.log(textResult);

// const invalidTextResult: TextResult = 123;

// Example 2: Number return type
type AddFunction =
  (a: number, b: number) => number;

type AddResult =
  ReturnType<AddFunction>;

const addResult: AddResult = 30;

console.log(addResult);

// Example 3: Existing function with typeof
function getUsername(): string {
  return "Alice";
}

type UsernameResult =
  ReturnType<typeof getUsername>;

const username: UsernameResult =
  getUsername();

console.log(username);

// Example 4: Function returning an object
function createUser() {
  return {
    id: 1,
    name: "Alice",
    active: true,
  };
}

type UserResult =
  ReturnType<typeof createUser>;

const anotherUser: UserResult = {
  id: 2,
  name: "Bob",
  active: false,
};

console.log(createUser());
console.log(anotherUser);

// Invalid: name must still be a string.
// const invalidUser: UserResult = {
//   id: 3,
//   name: 100,
//   active: true,
// };

// Example 5: Union return type
function getStatus(
  success: boolean
): "success" | "error" {
  return success ? "success" : "error";
}

type StatusResult =
  ReturnType<typeof getStatus>;

const successStatus: StatusResult = "success";
const errorStatus: StatusResult = "error";

console.log(successStatus);
console.log(errorStatus);

// const invalidStatus: StatusResult = "loading";

// Example 6: Void return type
function logMessage(
  message: string
): void {
  console.log(message);
}

type LogResult =
  ReturnType<typeof logMessage>;

// LogResult is void: the function does not return a useful value.
const logResult: LogResult = logMessage("Hello");

console.log(logResult);

// Example 7: Parameters vs ReturnType
// Parameters extracts the input tuple.
// ReturnType extracts the output type.
type UserFunction =
  (name: string, age: number) => boolean;

type UserFunctionParams =
  Parameters<UserFunction>;

type UserFunctionResult =
  ReturnType<UserFunction>;

const userParams: UserFunctionParams = [
  "Alice",
  30,
];

const userResult: UserFunctionResult =
  true;

console.log(userParams);
console.log(userResult);
