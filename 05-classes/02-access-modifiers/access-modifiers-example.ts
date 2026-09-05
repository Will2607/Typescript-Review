/**
 * 02 — Access Modifiers
 *
 * public, private, and protected control where class members
 * can be accessed. Parameter properties declare and initialize in one step.
 */

// Example 1: Public members
class User {
  public name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public introduce(): void {
    console.log("My name is " + this.name);
  }
}

const user = new User("Alice", 30);

console.log("Public name:", user.name);
console.log("Default-public age:", user.age);
user.introduce();

// Example 2: Private members
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}

const account = new BankAccount(100);

console.log("Balance via public method:", account.getBalance());
account.deposit(50);
console.log("Balance after deposit:", account.getBalance());

// Invalid: private property cannot be accessed outside the class.
// console.log(account.balance);

// Example 3: Protected members (minimal extends only to show protected)
class Animal {
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }
}

class Dog extends Animal {
  describe(): string {
    return "This dog is a " + this.species;
  }
}

const dog = new Dog("Labrador");

console.log(dog.describe());

// Invalid: protected property cannot be accessed outside the class hierarchy.
// console.log(dog.species);

// Example 4: Access modifiers on methods
class Logger {
  public log(message: string): void {
    this.write(message);
  }

  private write(message: string): void {
    console.log("Log:", message);
  }

  protected format(message: string): string {
    return "[app] " + message;
  }
}

class AppLogger extends Logger {
  logFormatted(message: string): void {
    this.log(this.format(message));
  }
}

const logger = new Logger();
logger.log("Hello from Logger");

const appLogger = new AppLogger();
appLogger.logFormatted("Hello from AppLogger");

// Invalid: private method cannot be called from outside.
// logger.write("secret");

// Invalid: protected method cannot be called from outside.
// logger.format("secret");

// Example 5: Constructor parameter properties
class Employee {
  constructor(
    public name: string,
    private salary: number
  ) {}

  getSalary(): number {
    return this.salary;
  }
}

const employee = new Employee("Bob", 50000);

console.log("Employee name:", employee.name);
console.log("Employee salary via method:", employee.getSalary());

// Invalid: private parameter property cannot be accessed outside.
// console.log(employee.salary);

// Example 6: Explicit declaration vs parameter property
class ExplicitProduct {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class ParameterProduct {
  constructor(public name: string) {}
}

const explicitProduct = new ExplicitProduct("Keyboard");
const parameterProduct = new ParameterProduct("Mouse");

console.log("Explicit property:", explicitProduct.name);
console.log("Parameter property:", parameterProduct.name);
