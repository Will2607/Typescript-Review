/**
 * 05 — Type Predicates
 *
 * Practical examples of user-defined type guards with "parameter is Type".
 * The function returns a boolean at runtime.
 * The predicate annotation tells TypeScript how to narrow the value.
 * The "value is Type" syntax is removed during compilation.
 */

// 1–4) string | number with a string predicate
function isString(value: string | number): value is string {
  return typeof value === "string";
}

function printValue(value: string | number): void {
  if (isString(value)) {
    console.log("String:", value.toUpperCase());
    console.log("Length:", value.length);
  } else {
    console.log("Number:", value);
    console.log("Doubled:", value * 2);
  }
}

printValue("TypeScript");
printValue(21);

// 5) Number predicate
function isNumber(value: string | number): value is number {
  return typeof value === "number";
}

const firstValue: string | number = 42;

if (isNumber(firstValue)) {
  console.log("Numeric value:", firstValue);
  console.log("Next value:", firstValue + 1);
}

const secondValue: string | number = "reusable";

if (isString(secondValue)) {
  console.log("Reused isString:", secondValue.toUpperCase());
}

// Ordinary boolean function for comparison (runtime boolean only)
function checkString(value: string | number): boolean {
  return typeof value === "string";
}

console.log("checkString boolean:", checkString("TypeScript"));
console.log("isString boolean:", isString("TypeScript"));

// 6–8) Object union with a custom predicate
type TextMessage = {
  text: string;
};

type ImageMessage = {
  url: string;
};

type Message = TextMessage | ImageMessage;

function isTextMessage(message: Message): message is TextMessage {
  return "text" in message;
}

function printMessage(message: Message): void {
  if (isTextMessage(message)) {
    console.log("Text message:", message.text);
  } else {
    console.log("Image message:", message.url);
  }
}

printMessage({
  text: "Hello",
});

printMessage({
  url: "/image.png",
});

// 9) Reuse the same predicate in another location
const message: Message = {
  text: "Reusable predicate",
};

if (isTextMessage(message)) {
  console.log(message.text.toUpperCase());
}

// Invalid or unsafe examples — kept commented so this file type-checks:
//
function unsafeValue(value: string | number): void {
  // Invalid before narrowing because value may be a number.
  // console.log(value.toUpperCase());
  console.log("unsafeValue needs a predicate first");
}

type User = {
  name: string;
};

type Product = {
  price: number;
};

type Item = User | Product;

function isUser(item: Item): item is User {
  return "name" in item;
}

function unsafeItem(item: Item): void {
  // Invalid before narrowing.
  // console.log(item.name);

  if (isUser(item)) {
    console.log("User name:", item.name);
  }
}

unsafeItem({ name: "Alice" });

function unsafeMessageAccess(message: Message): void {
  // Invalid before narrowing because message may be an image.
  // console.log(message.text);
  console.log("unsafeMessageAccess needs isTextMessage first");
}

// Invalid predicate parameter name: "other" is not a parameter.
// function invalidPredicate(value: string | number): other is string {
//   return typeof value === "string";
// }

// Unsafe predicate implementation: the condition does not match the claim.
// TypeScript would trust "value is string" even though this checks for number.
// function incorrectIsString(value: string | number): value is string {
//   return typeof value === "number";
// }
