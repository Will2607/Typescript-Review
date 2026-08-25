# Typing Functions

Learn how to give TypeScript types to function parameters, return values, function expressions, arrow functions, and callable values.

Example file for this lesson:

- `typing-functions-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- type function parameters and return values
- write functions that return `void`
- use optional parameters and default parameters
- type function expressions and arrow functions
- annotate a variable with a function type
- recognize a simple call signature
- understand that TypeScript can infer a return type
- know that type annotations are erased at compile time

---

## Why functions need types

Functions receive arguments and often return a result.

Types help TypeScript:

- check that callers pass the right kind of arguments
- check that the function returns the intended kind of value
- make the function’s contract clearer to readers

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## Typing function parameters

Function parameters can have explicit TypeScript types.

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

greet("Alice");
```

TypeScript checks arguments against the parameter types.

```ts
// greet(123); // rejected: 123 is not a string
```

In `add`:

```text
a: number
b: number
```

are typed parameters.

---

## Typing function return values

Function return values can have explicit types.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

The `: number` after the parameter list is the function return type.

TypeScript checks returned values against that declared return type.

```ts
// add("10", 20); // rejected: "10" is not compatible with number
```

---

## Functions returning `void`

`void` represents functions that do not return a useful value.

```ts
function logValue(value: string): void {
  console.log(value);
}
```

`void` means the function completes without returning a useful result.  
This lesson does not expand into `never`.

---

## Optional parameters

Optional parameters use `?`.

They should come after required parameters.

```ts
function introduce(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`${name} is ${age} years old`);
  } else {
    console.log(`My name is ${name}`);
  }
}

introduce("Alice");
introduce("Bob", 30);
```

The `age !== undefined` check is only enough to print the optional value. This is not another narrowing lesson.

---

## Default parameters

Default parameters can provide fallback values.

Callers may omit a parameter that has a default value.

```ts
function createGreeting(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

createGreeting("Alice");          // uses "Hello"
createGreeting("Bob", "Welcome"); // uses "Welcome"
```

---

## Multiple parameters

A function can have several typed parameters:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Each parameter is checked independently. Both must match their declared types.

---

## Typing function expressions

Function expressions can have typed parameters and return values:

```ts
const subtract = function (a: number, b: number): number {
  return a - b;
};
```

---

## Typing arrow functions

Arrow functions can have typed parameters and return values:

```ts
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

---

## Function type annotations

A variable can be given a function type.

Function type syntax describes parameter types and a return type:

```ts
let calculate: (a: number, b: number) => number;

calculate = (a: number, b: number): number => {
  return a + b;
};
```

```ts
(a: number, b: number) => number
```

describes the shape of a function: two `number` parameters and a `number` result.

This lesson does not introduce type aliases for function types.

---

## Call signatures

A call signature can describe how a callable value is invoked:

```ts
let formatter: {
  (value: number): string;
};

formatter = (value: number): string => {
  return `Value: ${value}`;
};
```

That is enough for this lesson. It does not develop interfaces, hybrid types, or callable object patterns.

---

## Type inference in functions

TypeScript can infer a function’s return type from its implementation:

```ts
function divide(a: number, b: number) {
  return a / b;
}
```

TypeScript infers the return type as `number`.

Explicit return types are still useful for clarity and to enforce an intended contract.

This is not another Type Inference lesson.

---

## Common mistakes

| Mistake | Better understanding |
| --- | --- |
| Passing the wrong argument type | Match each parameter’s declared type |
| Returning the wrong kind of value | Match the declared return type |
| Putting an optional parameter before a required one | Required parameters come first |
| Assigning a function with a different shape | Parameter and return types must match the function type |
| Thinking types exist at runtime | Annotations are erased during compilation |

---

## Runtime behavior

TypeScript annotations such as:

```ts
(name: string): void
```

are removed during compilation.

The JavaScript runtime receives an ordinary function without TypeScript type annotations.

---

## Summary

- Parameters and return values can be typed explicitly.
- TypeScript checks arguments and returned values.
- `void` means no useful return value.
- Optional parameters use `?` and should follow required parameters.
- Default parameters supply fallback values.
- Function expressions, arrow functions, and variables can all be typed.
- A function type such as `(a: number, b: number) => number` describes a callable shape.
- A call signature can describe how a value is invoked.
- Return types can be inferred; explicit return types still help.
- Type annotations disappear from compiled JavaScript.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 03-typescript-functions/01-typing-functions/typing-functions-example.ts
```

Execute:

```bash
npx tsx 03-typescript-functions/01-typing-functions/typing-functions-example.ts
```

---

## Completion checklist

- [ ] I can type parameters and return values
- [ ] I know what `void` means on a function
- [ ] I can use optional and default parameters
- [ ] I can type function expressions and arrow functions
- [ ] I can annotate a variable with a function type
- [ ] I recognize a simple call signature
- [ ] I know TypeScript can infer a return type
- [ ] I know function type annotations are erased at runtime
