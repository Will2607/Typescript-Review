# Formatting

Learn how code formatting controls the visual structure of TypeScript source code, and how automatic formatters keep that presentation consistent.

Example file for this lesson:

- `formatting-example.ts`

---

## What code formatting is

Code formatting controls the visual structure and presentation of source code.

Formatting focuses on how code looks rather than what the code does.

Examples of formatting concerns include:

- indentation
- spaces
- line breaks
- semicolons
- quotation style
- trailing commas
- line width

---

## Why formatting matters

Consistent formatting improves:

- readability
- consistency
- maintainability
- collaboration
- code reviews

Developers can focus on logic instead of debating minor style differences.

---

## Formatting does not change program intent

Formatting should preserve the intended behavior of the program.

Badly formatted and properly formatted code can represent the same program.

Poorly formatted:

```ts
const add=(a:number,b:number)=>{return a+b}
```

Formatted:

```ts
const add = (
  a: number,
  b: number
): number => {
  return a + b;
};
```

The behavior is the same.

---

## Indentation

Indentation visually represents nested structures.

```ts
function describeUser(user: { name: string; active: boolean }): string {
  if (user.active) {
    return user.name;
  }

  return "inactive";
}
```

The function body, the `if` statement, and nested objects are easier to scan when indented consistently.

---

## Spacing

Common formatting around operators, commas, colons, and function parameters improves readability.

```ts
const total = price + tax;
```

instead of visually compressed code such as `const total=price+tax`.

These conventions are formatting choices, not mandatory TypeScript language rules.

---

## Semicolons

Formatters can consistently apply a project’s semicolon style.

JavaScript and TypeScript have automatic semicolon insertion, but formatting tools can enforce a consistent visual convention.

This lesson does not develop automatic semicolon insertion further.

---

## Quotes

Teams may choose:

- single quotes
- double quotes

A formatter can apply the selected convention consistently.

This lesson does not configure an actual formatter.

---

## Line breaks and line width

Long expressions may be split across multiple lines to improve readability.

```ts
function createUser(
  id: number,
  name: string,
  active: boolean
): User {
  // ...
}
```

Formatters make these decisions consistently.

---

## Trailing commas

A trailing comma is a comma after the last item in a list or object.

```ts
const user = {
  id: 1,
  name: "Alice",
  active: true,
};
```

Formatters can consistently add or remove them according to configuration.

---

## Manual formatting vs automatic formatting

Manual formatting:

- developers decide spacing and line breaks themselves

Automatic formatting:

- a formatting tool applies predefined rules automatically

Automatic formatting reduces stylistic inconsistency.

---

## What a formatter is

A formatter is a development tool that rewrites source-code formatting according to a consistent set of rules.

A formatter normally focuses on code presentation.

---

## Prettier

Prettier is a widely used opinionated code formatter that supports TypeScript and many other languages.

“Opinionated” means:

- it intentionally provides relatively few formatting choices
- it aims to produce a consistent style automatically

This lesson is conceptual. It does not install or configure Prettier.

---

## Formatting vs Linting

Formatting:

- focuses mainly on code appearance and layout

Linting:

- analyzes code for potential problems, suspicious patterns, and coding rules

Formatting might change:

```ts
const result=add(1,2)
```

to:

```ts
const result = add(1, 2);
```

Linting might report:

- an unused variable
- an unreachable statement
- a suspicious coding pattern

Linting is the next roadmap topic. This lesson does not teach ESLint.

---

## Formatting and code reviews

Automatic formatting reduces code-review noise because reviewers see fewer purely stylistic changes.

---

## Formatting and teams

Using one consistent formatting policy prevents developers from formatting the same code differently.

---

## Key Takeaways

- Formatting controls the visual structure of code.
- It improves readability and consistency.
- Common concerns include indentation, spacing, quotes, semicolons, line breaks, and trailing commas.
- Automatic formatters apply formatting consistently.
- Prettier is a common TypeScript formatter.
- Formatting focuses on presentation.
- Linting focuses on code analysis and rules.
- Formatting should not intentionally change program behavior.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 11-ecosystem/01-formatting/formatting-example.ts
```

Execute:

```bash
npx tsx 11-ecosystem/01-formatting/formatting-example.ts
```
