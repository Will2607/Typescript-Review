/**
 * Topic: decorators
 * Level: 2
 *
 * Goal:
 * Wrap a method with a modern method decorator that logs the method name.
 *
 * Requirements:
 * 1. Create a method decorator that logs context.name then calls the original method.
 * 2. Apply it to complete() on class Job.
 * 3. Call complete() and log its return value.
 *
 * Expected behavior:
 * The method name logs, then the return value logs.
 *
 * Acceptance criteria:
 * - A ClassMethodDecoratorContext is used.
 * - No experimentalDecorators syntax is used.
 * - No parameter decorators or reflect-metadata are used.
 */

export {};

console.log("=== decorators - Level 2 ===");

function logMethodShape<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
  function replacementMethod(this: This, ...args: Args): Return {
    console.log("Calling", String(context.name));
    return originalMethod.call(this, ...args);
  }

  return replacementMethod;
}

void logMethodShape;

// TODO: Create your method decorator and a Job class with @decorator complete(): string.

