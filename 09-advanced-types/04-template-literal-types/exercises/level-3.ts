/**
 * Topic: template literal types
 * Level: 3
 *
 * Goal:
 * Describe HTTP route literals for an orders API.
 *
 * Requirements:
 * 1. Create type Resource = "orders" | "invoices".
 * 2. Create type Route = `/api/${Resource}`.
 * 3. Create two routes, one for each resource, and log them.
 *
 * Expected behavior:
 * /api/orders and /api/invoices print.
 *
 * Acceptance criteria:
 * - Route is a template literal type.
 * - No recursive template parsing is used.
 * - Both routes are logged.
 */

export {};

console.log("=== template literal types - Level 3 ===");

type Resource = "orders" | "invoices";

// TODO: Create Route = `/api/${Resource}` and two route values, then log them.

