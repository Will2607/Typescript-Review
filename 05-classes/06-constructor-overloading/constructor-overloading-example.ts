/**
 * 06 — Constructor Overloading
 *
 * Multiple overload signatures describe valid ways to call new.
 * One constructor implementation handles every overload.
 */

// Example 1: Basic constructor overload
class User {
  public name: string;
  public age?: number;

  constructor(name: string);
  constructor(name: string, age: number);

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Alice");
const user2 = new User("Bob", 30);

console.log("user1:", user1.name, user1.age);
console.log("user2:", user2.name, user2.age);

// const invalidUser1 = new User();
// const invalidUser2 = new User("Alice", "30");
// const invalidUser3 = new User("Alice", 30, true);

// Example 2: Different parameter types
class Product {
  public id: number | string;

  constructor(id: number);
  constructor(id: string);

  constructor(id: number | string) {
    this.id = id;
  }
}

const productByNumber = new Product(101);
const productByString = new Product("SKU-101");

console.log("Product by number:", productByNumber.id);
console.log("Product by string:", productByString.id);

// Invalid argument type.
// const invalidProduct = new Product(true);

// Example 3: Different argument counts
class Employee {
  public name: string;
  public department?: string;

  constructor(name: string);
  constructor(name: string, department: string);

  constructor(name: string, department?: string) {
    this.name = name;
    this.department = department;
  }
}

const employeeOne = new Employee("Carol");
const employeeTwo = new Employee("Daniel", "Engineering");

console.log("Employee one:", employeeOne.name, employeeOne.department);
console.log("Employee two:", employeeTwo.name, employeeTwo.department);

// Example 4: Broader implementation signature
class Code {
  public value: string | number | boolean;

  constructor(value: string);
  constructor(value: number);

  constructor(value: string | number | boolean) {
    this.value = value;
  }
}

const codeFromString = new Code("ABC");
const codeFromNumber = new Code(42);

console.log("Code from string:", codeFromString.value);
console.log("Code from number:", codeFromNumber.value);

// boolean is accepted by the implementation internally,
// but it is not part of the public overload signatures.
// const invalidCode = new Code(true);

// Example 5: Incompatible overload example
// The implementation cannot support the string overload.
//
// class Broken {
//   constructor(value: number);
//   constructor(value: string);
//
//   constructor(value: number) {
//     console.log(value);
//   }
// }

// Example 6: Overloading vs optional parameters
// Optional parameter alone: one public signature with an optional second argument.
class OptionalTitle {
  public title: string;
  public subtitle?: string;

  constructor(title: string, subtitle?: string) {
    this.title = title;
    this.subtitle = subtitle;
  }
}

// Explicit overload signatures: public API lists the allowed call shapes.
class OverloadedTitle {
  public title: string;
  public subtitle?: string;

  constructor(title: string);
  constructor(title: string, subtitle: string);

  constructor(title: string, subtitle?: string) {
    this.title = title;
    this.subtitle = subtitle;
  }
}

const optionalTitle = new OptionalTitle("Guide");
const overloadedTitle = new OverloadedTitle("Guide", "Basics");

console.log("Optional API:", optionalTitle.title, optionalTitle.subtitle);
console.log("Overloaded API:", overloadedTitle.title, overloadedTitle.subtitle);
