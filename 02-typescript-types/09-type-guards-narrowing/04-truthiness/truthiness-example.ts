/**
 * 04 — Truthiness Narrowing
 *
 * Practical examples of if (value) and if (!value).
 * These checks are ordinary JavaScript runtime behavior.
 * TypeScript uses them to narrow possible types at compile time.
 *
 * Caution: empty strings and 0 are falsy even when they are valid values.
 */

// Runtime truthy / falsy illustrations (not used as type guards)
console.log('Boolean("TypeScript"):', Boolean("TypeScript"));
console.log('Boolean(""):', Boolean(""));
console.log("Boolean(42):", Boolean(42));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(true):", Boolean(true));
console.log("Boolean(false):", Boolean(false));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));

// 1) string | undefined narrowed with a truthiness check
function printName(name: string | undefined): void {
  if (name) {
    console.log("Name:", name.toUpperCase());
  } else {
    console.log("Name is missing");
  }
}

printName("Alice");
printName(undefined);

// 2) string | null narrowed with a truthiness check
function printMessage(message: string | null): void {
  if (message) {
    console.log("Message:", message.toUpperCase());
  } else {
    console.log("No message");
  }
}

printMessage("Hello");
printMessage(null);

// 3) Negated truthiness check using !value
function printUsername(username: string | undefined): void {
  if (!username) {
    console.log("Username is unavailable");
    return;
  }

  console.log("Username:", username.toUpperCase());
}

printUsername("Bob");
printUsername(undefined);

// 4–5) number | undefined — 0 is falsy, so it does not mean "is a number"
function printScore(score: number | undefined): void {
  if (score) {
    console.log("Score:", score);
  } else {
    console.log("No truthy score");
  }
}

printScore(100);
printScore(undefined);
printScore(0);

// 6) Empty string is falsy
function printText(text: string | undefined): void {
  if (text) {
    console.log("Text:", text);
  } else {
    console.log("No truthy text");
  }
}

printText("TypeScript");
printText("");
printText(undefined);

// 7) Explicit undefined check keeps 0 as a valid score
function printExactScore(score: number | undefined): void {
  if (score !== undefined) {
    console.log("Exact score:", score);
  } else {
    console.log("Score is unavailable");
  }
}

printExactScore(100);
printExactScore(0);
printExactScore(undefined);

// Invalid or misleading examples — kept commented so this file type-checks:
//
function unsafeName(name: string | undefined): void {
  // Invalid because name may be undefined.
  // console.log(name.toUpperCase());
  console.log("unsafeName needs a check first");
}

function unsafeMessage(message: string | null): void {
  // Invalid because message may be null.
  // console.log(message.length);
  console.log("unsafeMessage needs a check first");
}

function unsafeScore(score: number | undefined): void {
  // Invalid because score may be undefined.
  // console.log(score + 1);
  console.log("unsafeScore needs a check first");
}

let statusText: string | undefined = undefined;
console.log("statusText:", statusText);

// Invalid because it may be undefined.
// console.log(statusText.toUpperCase());

function misleadingScore(score: number | undefined): void {
  // A truthiness check would also reject 0.
  // if (score) {
  //   console.log(score);
  // }
  console.log("misleadingScore: if (score) also rejects 0");
}
