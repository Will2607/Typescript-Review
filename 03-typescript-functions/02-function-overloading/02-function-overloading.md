# Function Overloading

Learn how TypeScript lets one function name expose multiple valid call signatures, while JavaScript still runs a single implementation.

Example file for this lesson:

- `function-overloading-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what function overloading means in TypeScript
- write overload signatures above an implementation signature
- understand that the implementation must be compatible with every overload
- see how TypeScript picks an overload from the call arguments
- describe different parameter combinations and return types with overloads
- choose between a union parameter and overloads for a simple API
- know that overloads exist only at compile time

---

## What is function overloading?

Function overloading allows one function name to have multiple valid call signatures.

Callers see several allowed ways to call the function. TypeScript checks each call against those signatures.

There is still only one function body. Overloading is a TypeScript type-system feature, not several JavaScript functions stacked under the same name.

```ts
function format(value: string): string;
function format(value: number): string;

function format(value: string | number): string {
  return String(value);
}
```

The first two lines are **overload signatures**.

The last declaration is the **single implementation**.

JavaScript does not receive three separate functions. After compilation, only the implementation remains.

---

## Overload signatures

Overload signatures are written above the implementation.

They describe the public ways the function may be called: parameter types and return types that callers should rely on.

```ts
function formatValue(value: string): string;
function formatValue(value: number): string;
```

These two lines tell TypeScript:

- `formatValue("typescript")` is valid
- `formatValue(42)` is valid

They do not contain a function body.

---

## Implementation signature

The implementation signature is the declaration that has a body.

It must be compatible with all overload signatures. Its parameters are usually a union (or otherwise broader types) so one body can handle every overload.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}
```

The implementation signature is not the public call contract. Callers are checked against the overload signatures, not against the broader implementation types alone.

Do not use `any` to widen the implementation. Use unions that cover every overload.

Example of a compatible implementation:

```ts
function parse(value: string): number;
function parse(value: number): string;
function parse(value: string | number): string | number {
  if (typeof value === "string") {
    return value.length;
  }

  return value.toString();
}
```

The implementation is broad enough to accept both `string` and `number`, and to return either `number` or `string`.

---

## How overload resolution works

TypeScript chooses the matching overload based on the arguments used in the call.

It walks the overload list and picks a signature that fits the call. That chosen signature then determines the return type of that call.

Runtime does not “pick an overload.” The same implementation function always runs. You must write ordinary JavaScript checks (`typeof`, comparisons, and so on) inside the body.

---

## Multiple parameter combinations

Different overloads may describe different parameter combinations.

```ts
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }

  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Unsupported argument combination");
}

console.log(combine("Type", "Script"));
console.log(combine(10, 20));
```

`combine("Type", "Script")` matches the string overload.

`combine(10, 20)` matches the number overload.

There is no overload for mixed types such as a string and a number. Do not call those combinations in active code.

Overloads can also describe different valid argument **counts**:

```ts
function createLabel(name: string): string;
function createLabel(name: string, id: number): string;
function createLabel(name: string, id?: number): string {
  if (id !== undefined) {
    return `${id}: ${name}`;
  }

  return name;
}
```

Both `createLabel("Alice")` and `createLabel("Bob", 10)` are valid calls. This is about multiple call shapes, not a full optional-parameter lesson.

---

## Different return types

Different overloads may describe different return types.

```ts
function getValue(type: "text"): string;
function getValue(type: "count"): number;
function getValue(type: "text" | "count"): string | number {
  if (type === "text") {
    return "TypeScript";
  }

  return 42;
}

const textResult = getValue("text");
const countResult = getValue("count");
```

The overload signatures allow TypeScript to know:

```text
getValue("text")  -> string
getValue("count") -> number
```

That is why `textResult.toUpperCase()` and `countResult + 1` type-check. A single union return type on one signature would not give each call its own result type.

---

## Overload signatures versus union parameters

A **union parameter** is often enough when all calls share the same general behavior and return type.

```ts
function printValue(value: string | number): void {
  console.log(value);
}
```

**Overloads** are useful when different input patterns should expose different call signatures or return types.

```ts
function convert(value: string): number;
function convert(value: number): string;
function convert(value: string | number): string | number {
  if (typeof value === "string") {
    return value.length;
  }

  return String(value);
}
```

Overloading is not always better than unions. Prefer a union when one signature already describes every call clearly.

---

## Common mistakes

- Passing an argument type that matches no overload (for example `describe(true)` when only `string` and `number` are listed).
- Writing an implementation that cannot accept every overload (for example an implementation that only takes `string` while an overload takes `number`).
- Returning a type from the implementation that does not cover the overload return types.
- Mixing argument types when overloads only allow matching pairs (`mergeValues("10", 20)`).
- Passing the wrong number of arguments when overloads only allow specific counts.
- Expecting JavaScript to enforce overloads at runtime. It will not.

Invalid examples belong in comments. They must not run.

---

## Runtime behavior

Overload signatures are erased during compilation.

The implementation function remains. Type annotations such as overload lines disappear.

The JavaScript runtime receives one ordinary function. Runtime argument handling must be implemented manually in JavaScript logic (`typeof`, equality checks, and similar).

TypeScript overload resolution exists only during compile-time checking.

---

## Summary

- Function overloading gives one name several valid call signatures.
- Overload signatures sit above the implementation and have no body.
- The implementation signature must be compatible with every overload and is the only runtime function.
- TypeScript selects an overload from the call arguments; different overloads can differ in parameters and return types.
- Unions are often enough when the return type does not depend on the call pattern.
- Overloads are compile-time only. JavaScript sees a single implementation.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 03-typescript-functions/02-function-overloading/function-overloading-example.ts
```

Execute:

```bash
npx tsx 03-typescript-functions/02-function-overloading/function-overloading-example.ts
```

---

## Completion checklist

- [ ] I can point to overload signatures versus the implementation signature
- [ ] I know the implementation must cover every overload without using `any`
- [ ] I can explain how a call is matched to an overload
- [ ] I have seen different parameter combinations and different return types
- [ ] I know when a union parameter is enough
- [ ] I understand that overloads are erased and only one function runs
- [ ] I ran the type-check and execute commands above
