/**
 * Topic: constructor overloading
 * Level: 1
 *
 * Goal:
 * Allow constructing a user with or without an age.
 *
 * Requirements:
 * 1. Create class User with name: string and age?: number.
 * 2. Add constructor(name: string) and constructor(name: string, age: number).
 * 3. Implement one constructor.
 * 4. Log two instances.
 *
 * Expected behavior:
 * One user has only a name; the other also has an age.
 */

export {};

console.log("=== constructor overloading - Level 1 ===");

class UserShape {
  public name: string;
  public age?: number;

  constructor(name: string);
  constructor(name: string, age: number);
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

void UserShape;

// TODO: Create User with constructor overloads and log new User("Ada") and new User("Ada", 36).

