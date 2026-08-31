# Hybrid Types

Learn how interfaces can describe callable values that also have properties and methods — a pattern JavaScript already supports at runtime.

Example file for this lesson:

- `hybrid-types-example.ts`

---

## Learning objectives

By the end of this lesson, you should be able to:

- explain what a hybrid type is
- write an interface with a call signature
- combine a call signature with properties and methods
- create a value that satisfies a hybrid interface
- call a hybrid value as a function and access its members
- understand why JavaScript functions can carry properties
- know that the interface is compile-time only

---

## What is a hybrid type?

A hybrid type describes a value that combines multiple behaviors.

A common hybrid type is a **callable object**:

- it can be called like a function
- it can also have properties
- it can also have methods

TypeScript interfaces can describe this pattern. The interface itself exists only at compile time. TypeScript uses it to verify that the function, properties, and methods have compatible types.

At runtime, the callable behavior exists because JavaScript functions are objects and can have properties attached to them.

---

## Callable objects

In JavaScript, a function is an object. You can attach properties and methods to it:

```ts
const example = (): void => {
  console.log("Called");
};

example.description = "Example function";
```

This lesson does not develop advanced JavaScript function topics. The point is that this runtime pattern is real, and TypeScript interfaces can describe it.

---

## Interfaces with call signatures

Interfaces can describe callable values using a call signature.

```ts
interface TextFormatter {
  (value: string): string;
}
```

A call signature inside an interface looks like a function parameter list and return type, without a name.

```ts
const formatText: TextFormatter = (value: string): string => {
  return value.toUpperCase();
};

console.log(formatText("typescript"));
```

`formatText` is a function and satisfies the call signature defined by `TextFormatter`.

---

## Combining a call signature with properties

The same interface can also include properties:

```ts
interface PrefixFormatter {
  (value: string): string;
  prefix: string;
}
```

A value satisfying this interface must be callable **and** have a `prefix` property.

```ts
const prefixFormatter = ((value: string): string => {
  return `${prefixFormatter.prefix}${value}`;
}) as PrefixFormatter;

prefixFormatter.prefix = "[INFO] ";
```

A direct type assertion such as `as PrefixFormatter` may be needed here because the function is created first and then receives the extra property required by the hybrid interface. This lesson does not develop type assertions as a separate topic.

---

## Combining a call signature with methods

An interface can combine a call signature, properties, and methods:

```ts
interface Counter {
  (): number;
  current: number;
  reset(): void;
}
```

Breakdown:

- `(): number` — the value can be called like a function and returns a number
- `current: number` — the same callable value has a numeric property
- `reset(): void` — the same callable value also exposes a method

This is why it is called a **hybrid type**: one value combines function behavior with object-like members.

---

## Creating a value that satisfies a hybrid interface

A value satisfying a hybrid interface must implement every required part of the interface: the call signature, required properties, and required methods.

```ts
const counter = (() => {
  counter.current += 1;
  return counter.current;
}) as Counter;

counter.current = 0;

counter.reset = (): void => {
  counter.current = 0;
};
```

Keep implementations simple. This lesson does not develop closures as an independent topic.

---

## Reading and updating properties on hybrid values

You can read and update writable properties on the same function object:

```ts
console.log(prefixFormatter.prefix);
prefixFormatter.prefix = "[INFO] ";
```

Read-only members would follow the same interface rules you already know. This lesson focuses on writable properties for clarity.

---

## Calling the same value as a function

The same value is invoked as a function and accessed as an object:

```ts
console.log(counter());
console.log(counter());
console.log(counter.current);

counter.reset();
console.log(counter.current);
```

- `counter()` invokes the callable behavior
- `counter.current` accesses a property on the same function object
- `counter.reset()` invokes a method attached to the same function object

---

## Practical use cases

Hybrid types are useful when one exported value should behave like a function but also carry metadata or helper methods:

- a formatter function with a `prefix` or `description` property
- a validator function with a human-readable `description`
- a counter function with `current` state and a `reset()` method

The interface documents every part of that single value.

---

## Runtime behavior

This interface:

```ts
interface Counter {
  (): number;
  current: number;
  reset(): void;
}
```

is removed during compilation.

The actual JavaScript runtime value is still a function object with additional properties and methods attached to it.

TypeScript simply describes and validates this runtime JavaScript pattern at compile time.

---

## Common mistakes

- Assigning a function with the wrong parameter or return type.
- Forgetting a required property on the hybrid value.
- Assigning a property with the wrong type.
- Forgetting to attach a required method.
- Calling the hybrid value with an incompatible argument.
- Expecting the interface itself to exist at runtime.

Invalid examples belong in comments. They must not run.

---

## Summary

- A hybrid type combines callable behavior with properties and/or methods.
- Call signatures inside interfaces describe how a value is invoked.
- The same interface can list a call signature, properties, and methods.
- A satisfying value must implement every required part.
- JavaScript functions are objects, so this pattern works at runtime.
- Interfaces are compile-time only and are erased during compilation.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 04-typescript-interfaces/04-hybrid-types/hybrid-types-example.ts
```

Execute:

```bash
npx tsx 04-typescript-interfaces/04-hybrid-types/hybrid-types-example.ts
```

---

## Completion checklist

- [ ] I can write an interface with a call signature
- [ ] I can combine a call signature with properties and methods
- [ ] I can create a hybrid function object that satisfies the interface
- [ ] I can call the value and access its members
- [ ] I understand why `as InterfaceName` may be needed when building hybrid values
- [ ] I know interfaces are erased and the runtime value is a function object
- [ ] I ran the type-check and execute commands above
