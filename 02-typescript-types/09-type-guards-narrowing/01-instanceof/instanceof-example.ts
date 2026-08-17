/**
 * 01 — instanceof
 *
 * Practical examples of instanceof as a TypeScript type guard.
 * instanceof is a real JavaScript operator that remains at runtime.
 * TypeScript uses its result to narrow class instance types.
 */

// 1) Two simple classes
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark(): void {
    console.log(this.name + " says woof");
  }
}

class Cat {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  meow(): void {
    console.log(this.name + " says meow");
  }
}

// 2–4) Union of class types with instanceof checks
// 5–6) Access class-specific properties and methods after narrowing
// 7–8) Function parameter using a union of class types
function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    // Narrowed to Dog
    console.log("Dog:", animal.name);
    animal.bark();
  } else {
    // Narrowed to Cat
    console.log("Cat:", animal.name);
    animal.meow();
  }
}

makeSound(new Dog("Rex"));
makeSound(new Cat("Luna"));

// Second pair of simple classes with different properties
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(this.brand + " is driving");
  }
}

class Bicycle {
  model: string;

  constructor(model: string) {
    this.model = model;
  }

  pedal(): void {
    console.log(this.model + " is being pedaled");
  }
}

function moveVehicle(vehicle: Car | Bicycle): void {
  if (vehicle instanceof Car) {
    console.log(vehicle.brand);
    vehicle.drive();
  } else {
    console.log(vehicle.model);
    vehicle.pedal();
  }
}

moveVehicle(new Car("Toyota"));
moveVehicle(new Bicycle("City Bike"));

// 9) Built-in Date class
function printDate(value: Date | string): void {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value);
  }
}

printDate(new Date(2026, 0, 1));
printDate("Not a Date object");

// Direct instances for additional safe demos
const dog = new Dog("Max");
const cat = new Cat("Milo");

console.log("dog instanceof Dog:", dog instanceof Dog);
console.log("cat instanceof Cat:", cat instanceof Cat);

// Invalid or unsafe examples — kept commented so this file type-checks:
//
// Invalid because Dog does not have meow().
// dog.meow();
//
// Invalid because Cat does not have bark().
// cat.bark();
//
function unsafeSound(animal: Dog | Cat): void {
  // Invalid because TypeScript does not know which class it is yet.
  // animal.bark();
  console.log("unsafeSound received:", animal.name);
}

function unsafeMove(vehicle: Car | Bicycle): void {
  // Invalid: brand exists only on Car, before narrowing.
  // console.log(vehicle.brand);
  console.log("unsafeMove needs an instanceof check first");
}

// Invalid concept: type aliases do not exist at runtime.
// type User = {
//   id: number;
// };
//
// if (someValue instanceof User) {
// }
