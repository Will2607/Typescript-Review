/**
 * 03 — Enum
 *
 * Practical examples of TypeScript enums: numeric enums, string enums,
 * using enums as types, and why mixed (heterogeneous) enums are usually avoided.
 *
 * Enums represent named constants and produce JavaScript at runtime.
 */

// 1) Basic numeric enum — values start at 0 and increase by 1.
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

console.log("Direction.Up:", Direction.Up);
console.log("Direction.Down:", Direction.Down);
console.log("Direction.Left:", Direction.Left);
console.log("Direction.Right:", Direction.Right);

// 2) Numeric enum with manually initialized values.
enum HttpStatus {
  Ok = 200,
  NotFound = 404,
  InternalServerError = 500,
}

console.log("HttpStatus.Ok:", HttpStatus.Ok);
console.log("HttpStatus.NotFound:", HttpStatus.NotFound);
console.log("HttpStatus.InternalServerError:", HttpStatus.InternalServerError);

// 3) String enum — every member needs an explicit string value.
enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}

console.log("UserRole.Admin:", UserRole.Admin);
console.log("UserRole.Editor:", UserRole.Editor);
console.log("UserRole.Viewer:", UserRole.Viewer);

// 4) Using an enum as a parameter type.
function canEditContent(role: UserRole): boolean {
  return role === UserRole.Admin || role === UserRole.Editor;
}

console.log("canEditContent(Admin):", canEditContent(UserRole.Admin));
console.log("canEditContent(Viewer):", canEditContent(UserRole.Viewer));

// 5) A variable explicitly typed with an enum.
const currentDirection: Direction = Direction.Left;
console.log("currentDirection:", currentDirection);

// 6) Practical object example using UserRole.
const currentUser = {
  name: "Ada Lovelace",
  role: UserRole.Admin,
};

console.log("currentUser:", currentUser);
console.log("currentUser can edit:", canEditContent(currentUser.role));

// 7) Heterogeneous enum — mixes number and string members.
// Normally avoid this style: it reduces consistency and readability.
enum MixedValue {
  No = 0,
  Yes = "yes",
}

console.log("MixedValue.No:", MixedValue.No);
console.log("MixedValue.Yes:", MixedValue.Yes);

// Incorrect examples — kept commented so this file type-checks:
//
// const wrongRole: UserRole = "admin";
// Error: Type '"admin"' is not assignable to type 'UserRole'.
// Use UserRole.Admin instead of a plain string literal.
//
// canEditContent("viewer");
// Error: Argument of type '"viewer"' is not assignable to parameter of type 'UserRole'.
//
// console.log(UserRole.Owner);
// Error: Property 'Owner' does not exist on type 'typeof UserRole'.
