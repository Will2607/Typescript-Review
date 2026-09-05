/**
 * 03 — Abstract Classes
 *
 * Abstract classes act as base classes. They cannot be instantiated
 * directly and may require concrete subclasses to implement abstract methods.
 */

// Example 1: Basic abstract class
abstract class Vehicle {
  constructor(public brand: string) {}

  describe(): string {
    return "Vehicle brand: " + this.brand;
  }
}

// Invalid: abstract classes cannot be instantiated directly.
// const vehicle = new Vehicle("Toyota");

// Example 2: Abstract method with a concrete implementation
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 5);

console.log("Rectangle area:", rectangle.getArea());

// Example 3: Abstract class with concrete behavior and an abstract method
abstract class Animal {
  constructor(public name: string) {}

  introduce(): string {
    return "I am " + this.name;
  }

  abstract speak(): string;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): string {
    return "Woof";
  }
}

const dog = new Dog("Rex");

console.log(dog.introduce());
console.log(dog.speak());

// Example 4: Abstract class constructor initializing common state
abstract class Employee {
  constructor(
    public id: number,
    public department: string
  ) {}

  summary(): string {
    return "Employee #" + this.id + " in " + this.department;
  }

  abstract roleTitle(): string;
}

class Developer extends Employee {
  constructor(id: number, department: string) {
    super(id, department);
  }

  roleTitle(): string {
    return "Software Developer";
  }
}

const developer = new Developer(101, "Engineering");

console.log(developer.summary());
console.log(developer.roleTitle());

// Example 5: Invalid missing implementation
// A concrete class must implement all inherited abstract methods.
//
// class InvalidShape extends Shape {
// }
