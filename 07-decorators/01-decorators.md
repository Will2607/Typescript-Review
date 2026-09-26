# Decorators

Learn how modern TypeScript decorators wrap classes and methods using `@` syntax, a decorated value, and a context object.

Example file for this lesson:

- `decorators-example.ts`

---

## What a decorator is

A decorator is a function that can be applied to supported class declarations or class members to observe, modify, or replace behavior.

The syntax is:

```ts
@decorator
```

```ts
function loggedClass(
  value: Function,
  context: ClassDecoratorContext
): void {
  console.log("Decorating " + String(context.name));
}

@loggedClass
class User {}
```

This introductory example only logs the class name. It does not change how `User` is constructed.

---

## Decorator syntax

Decorators are placed immediately before the declaration they decorate.

```ts
@loggedClass
class User {
}
```

The decorator function is invoked as part of class definition and evaluation, not every time the class is instantiated.

Creating `new User()` later does not run the class decorator again.

---

## Decorator function arguments

In the modern decorator model, a decorator generally receives:

- the decorated value
- a context object describing the decorated declaration

The exact value and context types depend on what is being decorated.

This lesson focuses on:

- `ClassDecoratorContext` for class decorators
- `ClassMethodDecoratorContext` for method decorators

---

## Class decorators

A class decorator is applied to a class declaration.

```ts
function registered(
  value: Function,
  context: ClassDecoratorContext
): void {
  console.log("Registered class: " + String(context.name));
}

@registered
class Service {
}
```

- `value` represents the decorated class
- `context` provides information about the class
- `context.name` identifies the class

This lesson does not develop advanced constructor typing.

---

## Method decorators

A method decorator can observe or replace a method.

```ts
function loggedMethod<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  function replacementMethod(
    this: This,
    ...args: Args
  ): Return {
    console.log("Calling " + String(context.name));

    return originalMethod.call(this, ...args);
  }

  return replacementMethod;
}
```

The essential idea:

- the decorator receives the original method
- it may return a replacement function
- the replacement can run extra behavior before or after calling the original method

The generic parameters keep the original method’s `this`, arguments, and return type. This is not an advanced generics lesson.

---

## Applying a method decorator

```ts
class Calculator {
  @loggedMethod
  add(a: number, b: number): number {
    return a + b;
  }
}
```

When `calculator.add(2, 3)` runs:

1. the replacement method logs the method name
2. the original `add` method runs
3. the original result (`5`) is returned

The decorator ran once when the class was defined. Each later call uses the replacement that was installed then.

---

## Decorator factories

A decorator factory is a normal function that returns a decorator.

```ts
function prefix(label: string) {
  return function <This, Args extends unknown[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >
  ) {
    function replacementMethod(
      this: This,
      ...args: Args
    ): Return {
      console.log("[" + label + "] " + String(context.name));

      return originalMethod.call(this, ...args);
    }

    return replacementMethod;
  };
}
```

Syntax:

```ts
@logWithLabel("DEBUG")
```

Distinction:

- `@decorator` uses a decorator directly
- `@factory(value)` first calls a factory that returns a decorator

---

## Multiple decorators

Multiple decorators may be attached to the same declaration.

```ts
@first
@second
method() {}
```

Decorator expressions are evaluated in declaration order. Application behaves like function composition: the decorator closest to the method is applied first, then the one above it wraps that result.

---

## Modern vs Legacy Decorators

- Modern decorators are supported by current TypeScript without enabling `experimentalDecorators`.
- `experimentalDecorators` enables the older legacy decorator implementation.
- The APIs and function signatures differ.
- This lesson uses only modern decorators.

Do not use legacy signatures such as `(target, propertyKey, descriptor)`.

This project does not set `experimentalDecorators: true`.

---

## Parameter decorators

Modern standard decorators do not support parameter decorators.

Parameter decorators seen in some older TypeScript tutorials typically use the legacy decorator system. This lesson does not implement them.

---

## What decorators are commonly used for

Common uses, without tying this lesson to a framework:

- logging
- registration
- validation wrappers
- instrumentation
- metadata-like annotations
- altering or wrapping behavior

This lesson does not introduce dependency injection.

---

## Key Takeaways

- Decorators use `@` syntax.
- Decorators are functions.
- Modern decorators receive the decorated value and a context object.
- Class decorators operate on classes.
- Method decorators can wrap or replace methods.
- Decorator factories return decorators.
- Modern decorators differ from legacy `experimentalDecorators`.
- Modern decorators do not support parameter decorators.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 07-decorators/decorators-example.ts
```

Execute:

```bash
npx tsx 07-decorators/decorators-example.ts
```
