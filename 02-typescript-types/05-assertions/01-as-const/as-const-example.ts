/**
 * 01 — as const
 *
 * Practical examples of the as const assertion:
 * literal preservation, read-only object properties,
 * and read-only tuple-like arrays.
 *
 * as const affects TypeScript checking only.
 * It does not freeze values at runtime and is erased in compiled JavaScript.
 */

// 1) Regular string — typically inferred as string
let regularLanguage = "TypeScript";
console.log("regularLanguage:", regularLanguage);

// 2) String with as const — keeps the exact literal type
const exactLanguage = "TypeScript" as const;
console.log("exactLanguage:", exactLanguage);

// Both const language = "TypeScript" and exactLanguage cannot be reassigned.
// Only as const preserves the exact literal more narrowly in the type.

// 3) Regular number — typically inferred as number
let regularVersion = 5;
console.log("regularVersion:", regularVersion);

// 4) Number with as const — keeps the exact numeric literal type
const exactVersion = 5 as const;
console.log("exactVersion:", exactVersion);

// 5) Regular object without as const — properties stay writable
const regularConfiguration = {
  environment: "development",
  debug: true,
};

// 6) Updating a writable property
regularConfiguration.environment = "production";
console.log("regularConfiguration:", regularConfiguration);

// 7) Object with as const — properties become read-only at the type level
const fixedConfiguration = {
  environment: "development",
  debug: true,
} as const;

// 8) Reading properties from the asserted object
console.log("fixedConfiguration.environment:", fixedConfiguration.environment);
console.log("fixedConfiguration.debug:", fixedConfiguration.debug);

// 9) Regular array — mutable
const regularCoordinates = [10, 20];

// 10) Updating and adding values on the regular array
regularCoordinates[0] = 15;
regularCoordinates.push(30);
console.log("regularCoordinates:", regularCoordinates);

// 11) Array with as const — read-only tuple-like structure at the type level
const fixedCoordinates = [10, 20] as const;

// 12) Reading elements from the asserted array
console.log("fixedCoordinates[0]:", fixedCoordinates[0]);
console.log("fixedCoordinates[1]:", fixedCoordinates[1]);

// Incorrect examples — kept commented so this file type-checks:
//
// fixedConfiguration.environment = "production";
// Error: Cannot assign to 'environment' because it is a read-only property.
//
// fixedCoordinates[0] = 15;
// Error: Cannot assign to '0' because it is a read-only property.
//
// fixedCoordinates.push(30);
// Error: Property 'push' does not exist on type 'readonly [10, 20]'.
//
// fixedCoordinates.pop();
// Error: Property 'pop' does not exist on type 'readonly [10, 20]'.
