/**
 * 04 — Template Literal Types
 *
 * Template literal types describe string patterns at compile time.
 * Unions in placeholders generate every valid combination.
 */

// Example 1: Basic template literal type
type Greeting =
  `Hello ${string}`;

const greeting1: Greeting =
  "Hello Alice";

const greeting2: Greeting =
  "Hello TypeScript";

console.log(greeting1);
console.log(greeting2);

// const invalidGreeting: Greeting =
//   "Hi Alice";

// Example 2: Union combinations
type Vertical =
  "top" | "bottom";

type Horizontal =
  "left" | "right";

type Position =
  `${Vertical}-${Horizontal}`;

const topLeft: Position =
  "top-left";

const bottomRight: Position =
  "bottom-right";

console.log(topLeft);
console.log(bottomRight);

// const invalidPosition: Position =
//   "center-left";

// Example 3: Prefix pattern
type EventName =
  `on${string}`;

const clickEvent: EventName =
  "onClick";

const submitEvent: EventName =
  "onSubmit";

console.log(clickEvent);
console.log(submitEvent);

// const invalidEvent: EventName =
//   "click";

// Example 4: Number interpolation
type UserId =
  `user-${number}`;

const user1: UserId =
  "user-1";

const user2: UserId =
  "user-100";

console.log(user1);
console.log(user2);

// const invalidUser: UserId =
//   "user-one";

// Example 5: Prefix and suffix
type TextFile =
  `file-${number}.txt`;

const file1: TextFile =
  "file-1.txt";

const file2: TextFile =
  "file-25.txt";

console.log(file1);
console.log(file2);

// const invalidExtension: TextFile =
//   "file-1.json";

// const invalidNumber: TextFile =
//   "file-one.txt";

// Example 6: Multiple placeholders
type Coordinate =
  `${number},${number}`;

const coordinate1: Coordinate =
  "10,20";

const coordinate2: Coordinate =
  "-5,15";

console.log(coordinate1);
console.log(coordinate2);

// const invalidCoordinate: Coordinate =
//   "10-20";

// Example 7: Union with prefix
type Size =
  | "small"
  | "medium"
  | "large";

type SizeClass =
  `size-${Size}`;

const smallSize: SizeClass =
  "size-small";

const largeSize: SizeClass =
  "size-large";

console.log(smallSize);
console.log(largeSize);

// const invalidSize: SizeClass =
//   "size-extra-large";

// Example 8: Boolean interpolation
type FeatureFlag =
  `enabled-${boolean}`;

const enabledFlag: FeatureFlag =
  "enabled-true";

const disabledFlag: FeatureFlag =
  "enabled-false";

console.log(enabledFlag);
console.log(disabledFlag);

// const invalidFlag: FeatureFlag =
//   "enabled-yes";

// Example 9: Naming convention
type Entity =
  | "user"
  | "product"
  | "order";

type Action =
  | "create"
  | "update"
  | "delete";

type Permission =
  `${Entity}:${Action}`;

const permission1: Permission =
  "user:create";

const permission2: Permission =
  "product:update";

const permission3: Permission =
  "order:delete";

console.log(permission1);
console.log(permission2);
console.log(permission3);

// const invalidPermission: Permission =
//   "customer:create";

// Example 10: Function parameter
type LogLevel =
  | "info"
  | "warn"
  | "error";

type LogCode =
  `${LogLevel}:${number}`;

function printLogCode(
  code: LogCode
): void {
  console.log("Log code: " + code);
}

printLogCode("info:100");
printLogCode("error:500");

// printLogCode("debug:100");
// printLogCode("error:server");

// Example 11: API naming pattern
type ApiVersion =
  `v${number}`;

type ApiPath =
  `/api/${ApiVersion}`;

const apiV1: ApiPath =
  "/api/v1";

const apiV2: ApiPath =
  "/api/v2";

console.log(apiV1);
console.log(apiV2);
