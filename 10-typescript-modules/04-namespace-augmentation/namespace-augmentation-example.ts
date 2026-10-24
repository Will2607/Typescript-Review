/**
 * 04 — Namespace Augmentation
 *
 * Multiple declarations with the same namespace name merge.
 * Exported members are shared. Non-exported members stay local.
 */

// Example 1: Basic namespace augmentation
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

console.log(Utilities.format("  TypeScript  "));
console.log(Utilities.validate("TypeScript"));

// Example 2: Multiple exported values
namespace AppInfo {
  export const name =
    "TypeScript Review";
}

namespace AppInfo {
  export const version =
    "1.0";
}

console.log(AppInfo.name);
console.log(AppInfo.version);

// Example 3: Non-exported member visibility
// Non-exported count is not visible in the second declaration.
namespace Counter {
  let count = 0;

  export function increment(): number {
    count += 1;
    return count;
  }
}

namespace Counter {
  export function getDescription(): string {
    return "Counter namespace";
  }
}

console.log(Counter.increment());
console.log(Counter.getDescription());

// console.log(Counter.count);

// namespace Counter {
//   export function reset(): void {
//     count = 0;
//   }
// }

// Example 4: Incremental API
namespace Logger {
  export function info(
    message: string
  ): string {
    return "[INFO] " + message;
  }
}

namespace Logger {
  export function warn(
    message: string
  ): string {
    return "[WARN] " + message;
  }
}

namespace Logger {
  export function error(
    message: string
  ): string {
    return "[ERROR] " + message;
  }
}

console.log(Logger.info("Ready"));
console.log(Logger.warn("Low memory"));
console.log(Logger.error("Failed"));

// Example 5: Types in augmented namespace
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

const user: Models.User = {
  id: 1,
  name: "Alice"
};

const product: Models.Product = {
  id: 100,
  price: 99.99
};

console.log(user);
console.log(product);

// const invalidUser: Models.User = {
//   id: "1",
//   name: "Alice"
// };

// Example 6: Separate namespace
// Different names create separate namespaces rather than augmentation.
namespace First {
  export const value = "first";
}

namespace Second {
  export const value = "second";
}

console.log(First.value);
console.log(Second.value);

// Utilities.missing();
