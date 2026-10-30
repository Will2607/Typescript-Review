/**
 * Topic: Parameters
 * Level: 3
 *
 * Goal:
 * Store a retry helper's arguments for later.
 *
 * Requirements:
 * 1. Create function retry(jobId: string, attempts: number): void that logs both arguments.
 * 2. Create type RetryParams = Parameters<typeof retry>.
 * 3. Create queued: RetryParams and call retry(...queued).
 *
 * Expected behavior:
 * jobId and attempts print.
 *
 * Acceptance criteria:
 * - RetryParams uses Parameters.
 * - queued is a tuple of string and number.
 * - retry is called with spread arguments.
 */

export {};

console.log("=== Parameters - Level 3 ===");

function retry(jobId: string, attempts: number): void {
  console.log(jobId, attempts);
}

// TODO: Create RetryParams and queued: RetryParams, then call retry(...queued).

