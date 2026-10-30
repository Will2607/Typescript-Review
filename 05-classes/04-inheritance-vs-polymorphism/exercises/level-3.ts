/**
 * Topic: inheritance vs polymorphism
 * Level: 3
 *
 * Goal:
 * Store mixed notification senders as the base type.
 *
 * Requirements:
 * 1. Create class Notifier { send(): string { return "base"; } }.
 * 2. Create class EmailNotifier extends Notifier { send(): string { return "email"; } }.
 * 3. Create class SmsNotifier extends Notifier { send(): string { return "sms"; } }.
 * 4. Create senders: Notifier[] with one of each subclass.
 * 5. Log send() for each.
 *
 * Expected behavior:
 * email and sms print from the base-typed array.
 *
 * Acceptance criteria:
 * - The array is typed as Notifier[].
 * - Subclass send methods run at runtime.
 * - Each result is logged.
 */

export {};

console.log("=== inheritance vs polymorphism - Level 3 ===");

// TODO: Create Notifier, EmailNotifier, SmsNotifier, and a Notifier[] array, then log send().

