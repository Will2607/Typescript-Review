/**
 * Topic: access modifiers
 * Level: 1
 *
 * Goal:
 * Hide a balance field with private.
 *
 * Requirements:
 * 1. Create class Account with private balance: number.
 * 2. Add public getBalance(): number.
 * 3. Log getBalance() for a new account.
 *
 * Expected behavior:
 * The balance prints through the public method.
 */

export {};

console.log("=== access modifiers - Level 1 ===");

class AccountShape {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}

void AccountShape;

// TODO: Create Account with private balance and public getBalance, then log getBalance().

// Invalid (keep commented):
// console.log(new Account(10).balance);

