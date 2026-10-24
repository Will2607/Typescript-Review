# Namespace Augmentation

Learn how TypeScript merges multiple namespace declarations with the same name so later blocks can add exported members to an existing namespace.

Example file for this lesson:

- `namespace-augmentation-example.ts`

---

## What namespace augmentation means

TypeScript allows multiple namespace declarations with the same name to contribute exported members to the same namespace.

```ts
namespace Utilities {
  export function format(
    value: string
  ): string {
    return value.trim();
  }
}

namespace Utilities {
  export function validate(
    value: string
  ): boolean {
    return value.length > 0;
  }
}
```

Both members are available as:

```ts
Utilities.format(...)
Utilities.validate(...)
```

---

## Relationship with namespace merging

TypeScript merges declarations with the same namespace name.

Namespace augmentation is the practical act of adding more declarations to an existing namespace.

This lesson does not expand into general declaration merging theory.

---

## Exported members are combined

Exported members from all declarations become accessible through the final namespace.

```ts
namespace App {
  export const name = "Demo";
}

namespace App {
  export const version = "1.0";
}

App.name
App.version
```

---

## Non-exported members remain local

This is important.

```ts
namespace Counter {
  let value = 0;

  export function increment(): number {
    value += 1;
    return value;
  }
}

namespace Counter {
  export function description(): string {
    return "Counter namespace";
  }
}
```

The second namespace declaration cannot access the first declaration’s non-exported `value`.

```ts
// namespace Counter {
//   export function reset(): void {
//     value = 0;
//   }
// }
```

`value` is not visible in the second declaration. Only exported members are shared through the merged namespace.

---

## Extending behavior incrementally

Namespace augmentation can separate related namespace members across multiple declarations.

```ts
namespace Logger {
  export function info(
    message: string
  ): string {
    return `[INFO] ${message}`;
  }
}

namespace Logger {
  export function error(
    message: string
  ): string {
    return `[ERROR] ${message}`;
  }
}
```

Consumers use both through the same namespace: `Logger.info(...)` and `Logger.error(...)`.

---

## Augmenting types inside a namespace

```ts
namespace Models {
  export interface User {
    id: number;
    name: string;
  }
}

namespace Models {
  export interface Product {
    id: number;
    price: number;
  }
}
```

Both exported interfaces are accessible as `Models.User` and `Models.Product`. This lesson does not introduce interface declaration merging.

---

## Order and availability

All merged namespace declarations contribute to the same namespace type.

Keep the mental model simple: one name, one combined namespace. This lesson does not cover complex emitted JavaScript details.

---

## Namespace augmentation vs creating a new namespace

```ts
namespace A { ... }
namespace A { ... }
```

extends the same namespace.

```ts
namespace A { ... }
namespace B { ... }
```

creates two separate namespaces.

---

## Invalid examples

Keep invalid examples commented out:

```ts
// accessing a non-exported member
// using a member that does not exist
// trying to access a private member from another namespace declaration
```

---

## Typical use cases

Namespace augmentation can be useful when:

- related declarations are split into logical sections
- an API is built incrementally
- legacy TypeScript code organizes functionality through namespaces

This lesson does not discuss third-party augmentation.

---

## Key Takeaways

- Multiple namespace declarations with the same name are merged.
- Later declarations can add exported members.
- Exported members are available through the combined namespace.
- Non-exported members remain private to their original declaration block.
- Namespace augmentation extends an existing namespace.
- This behavior is related to declaration merging.

---

## Validation and execution commands

Type-check:

```bash
npx tsc --noEmit 10-typescript-modules/04-namespace-augmentation/namespace-augmentation-example.ts
```

Execute:

```bash
npx tsx 10-typescript-modules/04-namespace-augmentation/namespace-augmentation-example.ts
```
