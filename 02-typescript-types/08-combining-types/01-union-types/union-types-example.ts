/**
 * 01 — Union Types
 *
 * Practical examples of TypeScript union types with |.
 * A union allows a value to be one of several specified types.
 * Unions are checked at compile time and do not exist at runtime.
 */

// 1–3) string | number
let userId: string | number;

userId = 100;
console.log("userId (number):", userId);

userId = "USR-100";
console.log("userId (string):", userId);

// 4) Invalid because boolean is not part of the union
// userId = true;

// 5) string | boolean
let statusMessage: string | boolean;

statusMessage = "Ready";
console.log("statusMessage:", statusMessage);

statusMessage = false;
console.log("statusMessage:", statusMessage);

// Invalid because number is not part of the union
// statusMessage = 404;

// 6–7) Function parameter using string | number
// Minimal typeof check before string-only operations
function printIdentifier(value: string | number): void {
  if (typeof value === "string") {
    console.log("String identifier:", value.toUpperCase());
  } else {
    console.log("Numeric identifier:", value);
  }
}

printIdentifier("abc-123");
printIdentifier(123);

// Why a direct string method is unsafe without checking:
function printValue(value: string | number): void {
  // value.toUpperCase();
  // Unsafe: toUpperCase exists on string, but not on number.

  if (typeof value === "string") {
    console.log("printValue string:", value.toUpperCase());
  } else {
    console.log("printValue number:", value);
  }
}

printValue("hello");
printValue(42);

// 8–9) Literal union
let direction: "left" | "right" | "center";

direction = "left";
console.log("direction:", direction);

direction = "right";
console.log("direction:", direction);

// Invalid because this value is not part of the union
// direction = "up";

function setTheme(theme: "light" | "dark"): void {
  console.log("Theme:", theme);
}

setTheme("light");
setTheme("dark");

// Invalid
// setTheme("blue");

// 10–11) Union between two simple inline object shapes
const textMessage: {
  kind: string;
  text: string;
} = {
  kind: "text",
  text: "Hello",
};

const imageMessage: {
  kind: string;
  url: string;
} = {
  kind: "image",
  url: "/image.png",
};

let message:
  | {
      kind: string;
      text: string;
    }
  | {
      kind: string;
      url: string;
    };

message = textMessage;
console.log("message (text):", message);

if ("text" in message) {
  console.log("message.text:", message.text);
}

message = imageMessage;
console.log("message (image):", message);

if ("url" in message) {
  console.log("message.url:", message.url);
}

// Additional invalid examples — kept commented:
//
let identifier: string | number = "A1";
// identifier = true;
//
let mode: "development" | "production" = "development";
// mode = "testing";
//
function showValue(value: string | number): void {
  console.log(value);
}
//
// showValue(false);
//
let enabledOrText: boolean | string = true;
// enabledOrText = 10;
//
// Invalid object union example: matches neither allowed shape
// message = {
//   kind: "file",
//   path: "/docs/readme.md",
// };
// Error: Object literal may only specify known properties, and 'path'
// does not exist in type '{ kind: string; text: string; } | { kind: string; url: string; }'.
