/**
 * 03 — Literal Types
 *
 * Literal types represent exact values.
 * Unions restrict variables, parameters, and return types to known values.
 */

// Example 1: String literal type
type Direction =
  | "north"
  | "south"
  | "east"
  | "west";

const direction: Direction =
  "north";

console.log(direction);

// const invalidDirection: Direction = "up";

// Example 2: Number literal type
type DiceRoll =
  1 | 2 | 3 | 4 | 5 | 6;

const roll: DiceRoll = 6;

console.log(roll);

// const invalidRoll: DiceRoll = 7;

// Example 3: Boolean literal type
type Enabled = true;

const enabled: Enabled = true;

console.log(enabled);

// const disabled: Enabled = false;

// Example 4: Literal union for status
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";

const currentStatus: Status =
  "loading";

console.log(currentStatus);

// const invalidStatus: Status = "pending";

// Example 5: Function parameter
function setTheme(
  theme: "light" | "dark"
): void {
  console.log("Theme: " + theme);
}

setTheme("light");
setTheme("dark");

// setTheme("blue");

// Example 6: Literal return type
function getResult(
  success: boolean
): "success" | "error" {
  return success
    ? "success"
    : "error";
}

console.log(getResult(true));
console.log(getResult(false));

// Example 7: const literal inference
// The type is inferred as the literal "TypeScript".
const language = "TypeScript";

console.log(language);

// Example 8: let widening
// The type is widened to string because the variable is mutable.
let framework = "Angular";

framework = "React";

console.log(framework);

// Example 9: Explicit literal annotation with let
let environment:
  "development" | "production" =
  "development";

environment = "production";

console.log(environment);

// environment = "testing";

// Example 10: Object property literal
type SuccessResponse = {
  status: "success";
  data: string;
};

const response: SuccessResponse = {
  status: "success",
  data: "Request completed",
};

console.log(response);

// Invalid: status must be exactly "success".
// const invalidResponse: SuccessResponse = {
//   status: "error",
//   data: "Failed",
// };

// Example 11: Brief as const connection
// as const preserves the literal "GET".
const request = {
  method: "GET",
} as const;

console.log(request.method);
