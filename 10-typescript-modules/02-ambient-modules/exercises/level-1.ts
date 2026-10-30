/**
 * Topic: ambient modules
 * Level: 1
 *
 * Goal:
 * Declare an ambient module for a billing package without importing it at runtime.
 *
 * Requirements:
 * 1. Create declare module "billing-sdk" with export function charge(amount: number): string.
 * 2. Keep any import commented.
 * 3. Create a local chargeLite(amount: number): string and log chargeLite(10).
 *
 * Expected behavior:
 * The local function prints. the ambient module is type-only.
 */

// Keep this file a script (no import/export) so declare module creates a new ambient module.

console.log("=== ambient modules - Level 1 ===");

// TODO: Create:
// declare module "billing-sdk" {
//   export function charge(amount: number): string;
// }

// Runtime import of the fictional module must stay commented:
// import { charge } from "billing-sdk";

function chargeLiteShape(amount: number): string {
  return "charged " + String(amount);
}

void chargeLiteShape;

// TODO: Create chargeLite(amount: number): string and log chargeLite(10).
