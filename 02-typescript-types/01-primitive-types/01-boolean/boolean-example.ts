/**
 * 01 — boolean
 *
 * Practical examples of the boolean primitive type in TypeScript.
 */

// Inference: TypeScript sees `true` and infers the type as boolean.
const isTypeScriptEnabled = true;

// Explicit annotation: you declare the type yourself.
const isLessonCompleted: boolean = false;

const minimumAge: number = 18;
const userAge: number = 21;

// A comparison expression produces a boolean value.
const canAccessPlatform = userAge >= minimumAge;
console.log("canAccessPlatform:", canAccessPlatform);

function buildAccessMessage(hasAccess: boolean): string {
  if (hasAccess) {
    return "Access granted";
  }

  return "Access denied";
}

const accessMessage = buildAccessMessage(canAccessPlatform);
console.log(accessMessage);

function toggleStatus(currentStatus: boolean): boolean {
  return !currentStatus;
}

const nextLessonStatus = toggleStatus(isLessonCompleted);
console.log("toggled isLessonCompleted:", nextLessonStatus);

// A short comparison also produces a boolean.
const isExactAgeMatch = userAge === minimumAge;
console.log("isExactAgeMatch:", isExactAgeMatch);

// Logical operators: && (AND), || (OR), ! (NOT)
const hasCompletedSetup = isTypeScriptEnabled && canAccessPlatform;
const needsAttention = isLessonCompleted || !canAccessPlatform;
const isBlocked = !canAccessPlatform;

console.log("hasCompletedSetup:", hasCompletedSetup);
console.log("needsAttention:", needsAttention);
console.log("isBlocked:", isBlocked);

// Incorrect examples — kept commented so this file type-checks:
//
// const wrongFlagFromString: boolean = "true";
// Error: Type 'string' is not assignable to type 'boolean'.
//
// const wrongFlagFromNumber: boolean = 1;
// Error: Type 'number' is not assignable to type 'boolean'.
//
// const wrongMessage = buildAccessMessage("yes");
// Error: Argument of type 'string' is not assignable to parameter of type 'boolean'.

export {};
