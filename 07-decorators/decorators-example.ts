/**
 * Decorators
 *
 * Modern TypeScript decorators receive a decorated value and a context object.
 * Class and method decorators run when the class is defined.
 */

// Example 1: Basic class decorator
function logClass(
  value: Function,
  context: ClassDecoratorContext
): void {
  console.log("Class decorated: " + String(context.name));
}

@logClass
class User {
  constructor(public name: string) {}
}

const user = new User("Alice");

console.log(user.name);

// Example 2: Basic method decorator
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

class Calculator {
  @loggedMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
const sum = calculator.add(2, 3);

console.log(sum);

// Example 3: Behavior before and after a method call
function tracedMethod<This, Args extends unknown[], Return>(
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
    console.log("Before " + String(context.name));

    const result = originalMethod.call(this, ...args);

    console.log("After " + String(context.name));

    return result;
  }

  return replacementMethod;
}

class Greeter {
  @tracedMethod
  greet(name: string): string {
    return "Hello, " + name;
  }
}

const greeter = new Greeter();

console.log(greeter.greet("Bob"));

// Example 4: Decorator factory
function logWithLabel(label: string) {
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

class MessageService {
  @logWithLabel("INFO")
  send(message: string): string {
    return "Sent: " + message;
  }
}

const messageService = new MessageService();

console.log(messageService.send("Welcome"));

// Example 5: Multiple decorators
function firstDecorator<This, Args extends unknown[], Return>(
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
    console.log("firstDecorator: " + String(context.name));

    return originalMethod.call(this, ...args);
  }

  return replacementMethod;
}

function secondDecorator<This, Args extends unknown[], Return>(
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
    console.log("secondDecorator: " + String(context.name));

    return originalMethod.call(this, ...args);
  }

  return replacementMethod;
}

class Runner {
  @firstDecorator
  @secondDecorator
  run(): void {
    console.log("Running");
  }
}

const runner = new Runner();

runner.run();

// Example 6: Context information
function logMethodName<This, Args extends unknown[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  console.log("Decorated method name: " + String(context.name));

  return originalMethod;
}

class Reporter {
  @logMethodName
  report(): string {
    return "Report ready";
  }
}

const reporter = new Reporter();

console.log(reporter.report());

// Incorrect examples (remain commented out)

// A method decorator cannot be applied directly to a class.
// @loggedMethod
// class InvalidClass {}

// A method decorator must return a compatible replacement function.
// function incompatibleReplacement(
//   originalMethod: (this: unknown, ...args: unknown[]) => unknown,
//   context: ClassMethodDecoratorContext
// ) {
//   return "not a method";
// }

// Modern standard decorators do not support parameter decorators.
// class ParameterDemo {
//   greet(@logParam name: string): string {
//     return name;
//   }
// }
