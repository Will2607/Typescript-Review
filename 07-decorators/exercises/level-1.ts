/**
 * Topic: decorators
 * Level: 1
 *
 * Goal:
 * Apply a modern class decorator that logs the class name.
 *
 * Requirements:
 * 1. Create function announce(value: Function, context: ClassDecoratorContext): void that logs context.name.
 * 2. Apply @announce to class PaymentService.
 * 3. Instantiate PaymentService.
 *
 * Expected behavior:
 * The class name is logged when the class is defined.
 */

export {};

console.log("=== decorators - Level 1 ===");

function announceShape(
  value: Function,
  context: ClassDecoratorContext
): void {
  console.log("Decorated class:", String(context.name));
}

void announceShape;

// TODO: Create announce and @announce class PaymentService {}, then instantiate it.

