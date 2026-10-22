/**
 * 01 — Namespaces
 *
 * A namespace groups related declarations under one name.
 * export makes a member accessible as Namespace.member.
 */

// Example 1: Basic namespace
namespace Greeting {
  export function hello(
    name: string
  ): string {
    return "Hello, " + name;
  }
}

console.log(Greeting.hello("Alice"));

// Example 2: Internal vs exported member
// count is not exported, so it stays inside the namespace.
namespace Counter {
  let count = 0;

  export function increment(): number {
    count += 1;
    return count;
  }

  export function getCount(): number {
    return count;
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.getCount());

// console.log(Counter.count);

// Example 3: Exported constants
namespace AppConfig {
  export const appName =
    "TypeScript Review";

  export const version =
    "1.0";
}

console.log(AppConfig.appName);
console.log(AppConfig.version);

// Example 4: Multiple functions
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

console.log(MathUtils.add(10, 5));
console.log(MathUtils.subtract(10, 5));

// Example 5: Exported interface
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

console.log(user);

// const invalidUser: Models.User = {
//   id: "1",
//   name: "Alice",
// };

// Example 6: Same namespace declared twice
// Declarations with the same namespace name contribute to the same namespace.
namespace Tools {
  export function format(
    value: string
  ): string {
    return value.trim();
  }
}

namespace Tools {
  export function validate(
    value: string
  ): boolean {
    return value.length > 0;
  }
}

console.log(Tools.format("  TypeScript  "));
console.log(Tools.validate("TypeScript"));

// Example 7: Nested namespace
namespace Application {
  export namespace Logging {
    export function log(
      message: string
    ): void {
      console.log("[LOG] " + message);
    }
  }
}

Application.Logging.log(
  "Application started"
);

// Example 8: Invalid namespace access
// Counter.count;

// Greeting.goodbye("Alice");

// const invalidUser: Models.User = {
//   id: "1",
//   name: "Alice"
// };
