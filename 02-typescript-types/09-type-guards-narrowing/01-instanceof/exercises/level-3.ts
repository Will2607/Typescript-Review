/**
 * Topic: instanceof
 * Level: 3
 *
 * Goal:
 * Handle a report that may be a Date range start or a label.
 *
 * Requirements:
 * 1. Create class ReportWindow with start: Date in the constructor.
 * 2. Create value: ReportWindow | string.
 * 3. If value instanceof ReportWindow, log value.start.
 * 4. Otherwise log the string.
 *
 * Expected behavior:
 * The Date start prints when value is a ReportWindow.
 *
 * Acceptance criteria:
 * - instanceof ReportWindow is used.
 * - start is only read after the guard.
 * - The unused branch is present.
 */

export {};

console.log("=== instanceof - Level 3 ===");

class ReportWindow {
  start: Date;
  constructor(start: Date) {
    this.start = start;
  }
}

const value: ReportWindow | string = new ReportWindow(new Date("2026-02-01"));

// TODO: Narrow value with instanceof ReportWindow and log start or the string.

