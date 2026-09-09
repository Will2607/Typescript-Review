/**
 * 05 — Method Overriding
 *
 * A derived class can replace an inherited method.
 * Use override to mark intent; use super.method() to call the base version.
 */

// Example 1: Basic method overriding
class Animal {
  speak(): string {
    return "The animal makes a sound";
  }
}

class Dog extends Animal {
  override speak(): string {
    return "The dog barks";
  }
}

const animal = new Animal();
const dog = new Dog();

console.log(animal.speak());
console.log(dog.speak());

// Example 2: Inherited method without overriding
class Cat extends Animal {
  // Cat does not redefine speak(), so the original base implementation is used.
}

const cat = new Cat();

console.log(cat.speak());

// Example 3: Using override
class AlertMessage {
  send(): string {
    return "Sending notification";
  }
}

class EmailAlert extends AlertMessage {
  override send(): string {
    return "Sending email notification";
  }
}

const emailAlert = new EmailAlert();

console.log(emailAlert.send());

// Invalid: override on a method that does not exist in the base class.
// class InvalidAlert extends AlertMessage {
//   override cancel(): string {
//     return "Cancelled";
//   }
// }

// Example 4: Calling the base method with super
class User {
  describe(): string {
    return "User";
  }
}

class Admin extends User {
  override describe(): string {
    return super.describe() + " with admin privileges";
  }
}

const admin = new Admin();

console.log(admin.describe());

// Example 5: Compatible signatures
class Formatter {
  format(value: string): string {
    return value;
  }
}

class UppercaseFormatter extends Formatter {
  override format(value: string): string {
    return value.toUpperCase();
  }
}

const uppercaseFormatter = new UppercaseFormatter();

console.log(uppercaseFormatter.format("typescript"));

// Example 6: Invalid method signatures (remain commented out)

// Wrong parameter type.
// class BadParameterFormatter extends Formatter {
//   override format(value: number): string {
//     return String(value);
//   }
// }

// Incompatible return type.
// class BadReturnFormatter extends Formatter {
//   override format(value: string): number {
//     return value.length;
//   }
// }

// override on a missing base member.
// class MissingMemberFormatter extends Formatter {
//   override transform(value: string): string {
//     return value;
//   }
// }

// Example 7: Overridden implementation through a base type
// The variable type is Formatter; the actual implementation belongs to the derived instance.
const formatter: Formatter = new UppercaseFormatter();

console.log(formatter.format("typescript"));
