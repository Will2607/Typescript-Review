# Useful Packages

Learn how reusable packages extend TypeScript projects, which categories are common, and how to decide whether a dependency is worth adding.

Example file for this lesson:

- `useful-packages-example.ts`

---

## What packages are

Packages are reusable libraries or tools that can be added to a JavaScript or TypeScript project.

Packages may provide:

- runtime functionality
- development tooling
- type declarations

---

## Runtime packages

Runtime packages contain code used by the application while it runs.

Examples may include:

- Axios
- date-fns
- Lodash
- Zod

This lesson does not teach their APIs in depth.

---

## Development/tooling packages

Some packages are mainly used during development.

Examples may include:

- TypeScript
- ESLint
- Prettier
- Vitest

These tools support development but may not be part of the final runtime application.

---

## Type declaration packages

TypeScript needs type information for external JavaScript libraries.

Some libraries include their own TypeScript declarations.

Other libraries may rely on separate declaration packages such as `@types/package-name`.

This lesson stays conceptual and does not install `@types` packages.

---

## Libraries with built-in TypeScript types

Many modern libraries ship their own `.d.ts` declarations.

Advantage:

- no separate type package is required
- TypeScript understands the API automatically after installation

This lesson does not install anything.

---

## Runtime validation packages

TypeScript types disappear at runtime, so runtime validation libraries can validate unknown external data.

Zod is an example.

Typical use cases:

- API responses
- form inputs
- configuration data

This lesson does not teach Zod syntax in depth.

---

## HTTP packages

Axios is an example of an HTTP client library.

Common use cases:

- GET requests
- POST requests
- interacting with APIs

Modern JavaScript also provides built-in `fetch`. This lesson does not compare them in depth.

---

## Date utility packages

date-fns is an example of a date utility library.

Common purposes:

- formatting dates
- comparing dates
- adding/subtracting time
- parsing dates

This lesson does not teach specific date-fns functions.

---

## General utility packages

Lodash is an example of a general utility library.

Utility libraries provide reusable helpers for operations involving:

- objects
- arrays
- collections
- strings

Modern JavaScript already provides many native methods, so external utilities should be added only when they provide clear value.

---

## Testing packages

Vitest is an example of a testing library.

Testing libraries and frameworks help developers write automated tests.

Conceptually they support:

- unit testing
- assertions
- test execution

This lesson does not create actual tests.

---

## Evaluating a Package

Before adding a dependency, developers should consider:

- maintenance activity
- documentation quality
- TypeScript support
- compatibility with the project's environment
- bundle/runtime impact
- security history
- community adoption
- whether the functionality already exists natively

---

## TypeScript support

Good TypeScript support may come from:

- built-in type declarations
- separate `@types` declarations

Poor or outdated types can reduce developer experience and type safety.

---

## Dependency cost

Every dependency has a maintenance cost.

Potential concerns:

- updates
- security issues
- breaking changes
- additional bundle size
- transitive dependencies

This lesson does not discuss package managers in depth.

---

## Avoiding unnecessary packages

A package should not be installed for functionality that is trivial to implement or already well-supported by the platform.

Do not install a package just to perform a basic array operation already supported by JavaScript.

---

## Packages used together with TypeScript

TypeScript does not replace runtime libraries.

Examples:

- TypeScript provides static types
- Zod can validate runtime data
- Axios can perform HTTP requests
- Vitest can run tests

---

## Example package categories

| Category   | Example  | Purpose                    |
| ---------- | -------- | -------------------------- |
| Validation | Zod      | Runtime data validation    |
| HTTP       | Axios    | HTTP requests              |
| Dates      | date-fns | Date utilities             |
| Utilities  | Lodash   | General helper functions   |
| Testing    | Vitest   | Automated testing          |

This table is a map of categories, not a ranking.

---

## Key Takeaways

- Packages extend the capabilities of TypeScript projects.
- Some packages run in production while others are development tools.
- Many modern libraries include TypeScript types.
- `@types` packages can provide declarations for JavaScript libraries.
- Useful package categories include validation, HTTP, dates, utilities, and testing.
- Dependencies should be evaluated before installation.
- Fewer well-chosen dependencies are often better than unnecessary packages.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 11-ecosystem/03-useful-packages/useful-packages-example.ts
```

Execute:

```bash
npx tsx 11-ecosystem/03-useful-packages/useful-packages-example.ts
```
