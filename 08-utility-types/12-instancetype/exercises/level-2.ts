/**
 * Topic: InstanceType
 * Level: 2
 *
 * Goal:
 * Type a factory result with InstanceType.
 *
 * Requirements:
 * 1. Create class Service { constructor(public id: string) {} }.
 * 2. Create type ServiceInstance = InstanceType<typeof Service>.
 * 3. Create function makeService(): ServiceInstance that returns new Service("svc-1").
 * 4. Log makeService().id.
 *
 * Expected behavior:
 * svc-1 prints.
 *
 * Acceptance criteria:
 * - ServiceInstance uses InstanceType.
 * - makeService returns that type.
 * - id is logged.
 */

export {};

console.log("=== InstanceType - Level 2 ===");

class Service {
  constructor(public id: string) {}
}

// TODO: Create ServiceInstance = InstanceType<typeof Service>, makeService, and log makeService().id.

