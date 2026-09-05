/**
 * 04 — Inheritance vs Polymorphism
 *
 * Inheritance reuses members through extends.
 * Polymorphism uses derived objects through a common base type.
 */

// Example 1: Basic inheritance
class Person {
  constructor(public name: string) {}

  introduce(): string {
    return "My name is " + this.name;
  }
}

class Developer extends Person {
}

const developer = new Developer("Alice");

console.log("Inherited name:", developer.name);
console.log(developer.introduce());

// Example 2: Derived constructor and super()
class Employee extends Person {
  constructor(
    name: string,
    public role: string
  ) {
    super(name);
  }
}

const employee = new Employee("Bob", "Engineer");

console.log("Employee name:", employee.name);
console.log("Employee role:", employee.role);
console.log(employee.introduce());

// Example 3: Basic polymorphism with two derived classes
class Animal {
  constructor(public name: string) {}

  speak(): string {
    return this.name + " makes a sound";
  }
}

class Dog extends Animal {
  speak(): string {
    return this.name + " says woof";
  }
}

class Cat extends Animal {
  speak(): string {
    return this.name + " says meow";
  }
}

// Example 4: Base type references
// Variables use the base type; the actual instances are derived types.
const dog: Animal = new Dog("Rex");
const cat: Animal = new Cat("Milo");

console.log(dog.speak());
console.log(cat.speak());

// Example 5: Polymorphic array
const animals: Animal[] = [
  new Dog("Rex"),
  new Cat("Milo"),
];

for (const animal of animals) {
  console.log(animal.speak());
}

// Example 6: Inheritance vs polymorphism (concise distinction)
// Inheritance: Dog extends Animal (relationship between classes).
// Polymorphism: Animal variables can reference Dog and Cat objects.

console.log("Inheritance: Dog extends Animal");
console.log("Polymorphism: base type Animal holds Dog and Cat instances");

// Invalid: Person is not an Animal.
// const wrong: Animal = new Person("Carol");
