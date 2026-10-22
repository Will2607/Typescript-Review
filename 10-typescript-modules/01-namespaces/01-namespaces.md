# Namespaces

Learn how TypeScript namespaces group related declarations under a single named scope.

Example file for this lesson:

- `namespaces-example.ts`

---

## What a namespace is

A namespace groups related declarations under a single named scope.

```ts
namespace Utils {
  export function greet(): string {
    return "Hello";
  }
}
```

Members are accessed through the namespace name:

```ts
Utils.greet();
```

---

## Why namespaces exist

Namespaces can organize related code and avoid polluting the surrounding scope with many separate names.

This is a historical and conceptual TypeScript feature. This lesson does not discuss module systems in depth.

---

## Internal members

Declarations inside a namespace are not automatically accessible from outside the namespace.

```ts
namespace Counter {
  let count = 0;
}
```

`count` is internal to the namespace. Outside code cannot read it through `Counter.count`.

---

## Exported members

The `export` keyword makes a namespace member accessible from outside the namespace.

```ts
namespace Counter {
  let count = 0;

  export function increment(): number {
    count += 1;
    return count;
  }
}

Counter.increment();
```

`count` remains private to the namespace while `increment` is exposed.

---

## Exported constants

```ts
namespace AppConfig {
  export const appName = "TypeScript Review";
}

console.log(AppConfig.appName);
```

---

## Exported functions

A namespace can contain multiple related functions.

```ts
namespace MathUtils {
  export function add(
    a: number,
    b: number
  ): number {
    return a + b;
  }

  export function subtract(
    a: number,
    b: number
  ): number {
    return a - b;
  }
}

MathUtils.add(10, 5);
MathUtils.subtract(10, 5);
```

---

## Exported types or interfaces

```ts
namespace Models {
  export interface User {
    id: number;
    name: string;
  }
}

const user: Models.User = {
  id: 1,
  name: "Alice",
};
```

Exported type declarations can be referenced through the namespace. This lesson does not develop interfaces further.

---

## Multiple namespace declarations with the same name

TypeScript can merge namespace declarations with the same name.

```ts
namespace Tools {
  export function format(): string {
    return "formatted";
  }
}

namespace Tools {
  export function validate(): boolean {
    return true;
  }
}

Tools.format();
Tools.validate();
```

Both members become accessible through the same namespace name. This lesson stays on that basic behavior.

---

## Nested namespaces

Namespaces may be nested.

```ts
namespace Application {
  export namespace Logging {
    export function log(
      message: string
    ): void {
      console.log(message);
    }
  }
}

Application.Logging.log("Hello");
```

---

## Namespace access syntax

The pattern is:

```ts
Namespace.member
```

Examples:

- `Utils.greet()`
- `Models.User`
- `AppConfig.appName`

---

## Namespaces vs ES Modules

- Namespaces organize declarations inside a named TypeScript scope.
- ES modules use `import` and `export` between files.
- Modern application code generally relies heavily on ES modules.
- Namespaces still exist and are useful to understand because they are part of TypeScript.

This lesson does not teach ES modules in detail. External Modules are a later roadmap topic.

---

## Invalid examples

Keep invalid executable examples commented out:

```ts
// accessing a non-exported namespace member
// assigning the wrong type to an exported namespace interface
// accessing a member that does not exist
```

---

## Key Takeaways

- Namespaces group related declarations.
- Non-exported members stay internal.
- `export` exposes namespace members.
- Namespace members are accessed with `Namespace.member`.
- Namespaces can contain values and types.
- Multiple declarations with the same namespace name can contribute members.
- Namespaces differ from ES modules.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 10-typescript-modules/01-namespaces/namespaces-example.ts
```

Execute:

```bash
npx tsx 10-typescript-modules/01-namespaces/namespaces-example.ts
```
