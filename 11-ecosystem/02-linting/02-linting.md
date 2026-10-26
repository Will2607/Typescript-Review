# Linting

Learn how linting analyzes TypeScript source code for potential problems, suspicious patterns, and configured coding rules without executing the program.

Example file for this lesson:

- `linting-example.ts`

---

## What linting is

Linting is static analysis of source code used to detect potential problems, suspicious patterns, and violations of configured coding rules.

A linter analyzes code without executing it.

---

## What a linter does

A linter can report issues such as:

- unused variables
- unreachable code
- suspicious conditions
- inconsistent coding patterns
- potentially unsafe constructs
- project-specific rule violations

These examples stay conceptual. This lesson does not run a linter.

---

## Why linting matters

Linting helps improve:

- code quality
- consistency
- maintainability
- early problem detection
- team collaboration

Linting can catch some problems before code is executed.

---

## Linting vs Formatting

Formatting:

- focuses mainly on code appearance
- spacing
- indentation
- line breaks
- quotes
- semicolons

Linting:

- analyzes code behavior and coding patterns
- reports potentially problematic code
- applies configurable rules

Formatting issue:

```ts
const total=price+tax
```

Formatted:

```ts
const total = price + tax;
```

Linting issue:

```ts
const unusedValue = 10;
```

A formatter may leave this logically unchanged, while a linter may report that the variable is unused.

This lesson does not revisit Formatting in depth.

---

## ESLint

ESLint is a widely used static analysis tool in the JavaScript and TypeScript ecosystem.

ESLint runs a collection of rules against source code.

This lesson is conceptual. It does not install ESLint, create configuration, or introduce plugins.

---

## Lint rules

A lint rule defines a pattern or coding requirement that the linter checks.

Conceptual examples:

- report unused variables
- discourage certain syntax
- require specific coding practices
- detect suspicious expressions

Different projects may configure different rules.

---

## Errors and warnings

Lint findings can commonly be categorized as:

- error
- warning

Error:

usually treated as a serious rule violation.

Warning:

reports a concern without necessarily blocking development.

This lesson does not describe ESLint configuration syntax.

---

## Autofix

Some lint rules can automatically fix certain problems.

Examples can include:

- removing unnecessary syntax
- applying a safe code transformation
- correcting a rule violation

Not every lint issue can or should be autofixed.

---

## TypeScript vs ESLint

TypeScript compiler:

- checks types
- validates TypeScript syntax and type relationships

ESLint:

- analyzes source-code patterns using configurable rules

```ts
const age: number = "30";
```

TypeScript catches this type mismatch.

```ts
const temporary = 10;

console.log("Hello");
```

TypeScript may accept the code, while a lint rule could report `temporary` as unused.

---

## Type checking and linting together

TypeScript and linting are complementary rather than replacements for each other.

A project may run:

- TypeScript type checking
- linting
- formatting

for different purposes.

This lesson does not introduce build pipelines or CI.

---

## Unused variables

Linters commonly detect variables that are declared but never used.

```ts
const unusedValue = 42;
```

Keep unused variables out of active executable examples if they could conflict with compiler settings.

---

## Suspicious conditions

```ts
if (value === value) {
  // ...
}
```

A linter can identify patterns that are technically valid but suspicious.

This lesson does not introduce specific ESLint rule names.

---

## Unreachable code

Unreachable code is code that can never execute because control flow always leaves earlier.

```ts
function example(): number {
  return 10;

  // This statement can never execute.
}
```

Do not add active unreachable code if it could produce compilation issues.

---

## Project-specific rules

Teams can define coding expectations through lint configurations.

Examples:

- naming conventions
- disallowed patterns
- complexity restrictions

This lesson does not introduce custom rule implementation.

---

## Key Takeaways

- Linting performs static code analysis.
- Lint rules identify potentially problematic patterns.
- Linting is different from formatting.
- ESLint is a common linter in the TypeScript ecosystem.
- Lint findings may be warnings or errors.
- Some lint issues can be autofixed.
- TypeScript checks types while linting checks configurable code rules.
- Both tools can be used together.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 11-ecosystem/02-linting/linting-example.ts
```

Execute:

```bash
npx tsx 11-ecosystem/02-linting/linting-example.ts
```
