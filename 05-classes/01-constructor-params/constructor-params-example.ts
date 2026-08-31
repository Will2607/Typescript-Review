/**
 * 01 — Constructor Params
 *
 * Typed constructor parameters initialize instance properties
 * when a class is instantiated with new.
 */

// Example 1: Basic constructor parameters
class Book {
  title: string;
  pages: number;

  constructor(title: string, pages: number) {
    this.title = title;
    this.pages = pages;
  }
}

const book = new Book("TypeScript Basics", 250);

console.log("Book title:", book.title);
console.log("Book pages:", book.pages);

// Example 2: Multiple typed constructor parameters
class Device {
  name: string;
  price: number;
  inStock: boolean;

  constructor(name: string, price: number, inStock: boolean) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }
}

const laptop = new Device("Laptop", 999, true);

console.log("Device:", laptop.name, laptop.price, laptop.inStock);

// Missing required arguments.
// const invalidDeviceOne = new Device("Tablet");

// Wrong argument types.
// const invalidDeviceTwo = new Device("Phone", "free", true);

// Wrong argument order (types make the mismatch visible).
// const invalidDeviceThree = new Device(true, "Monitor", 199);

// Example 3: Optional constructor parameter
class Profile {
  username: string;
  nickname: string | undefined;

  constructor(username: string, nickname?: string) {
    this.username = username;
    this.nickname = nickname;
  }
}

const profileWithoutNickname = new Profile("alice");
const profileWithNickname = new Profile("bob", "Bobby");

console.log("Profile without nickname:", profileWithoutNickname.username, profileWithoutNickname.nickname);
console.log("Profile with nickname:", profileWithNickname.username, profileWithNickname.nickname);

// Example 4: Default constructor parameter
class Course {
  title: string;
  language: string;

  constructor(title: string, language: string = "English") {
    this.title = title;
    this.language = language;
  }
}

const defaultLanguageCourse = new Course("TypeScript");
const customLanguageCourse = new Course("JavaScript", "Spanish");

console.log("Course with default language:", defaultLanguageCourse.title, defaultLanguageCourse.language);
console.log("Course with custom language:", customLanguageCourse.title, customLanguageCourse.language);

// Example 5: Constructor parameters versus instance properties
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    // Constructor parameters are assigned to instance properties through this.
    this.name = name;
    this.price = price;
  }
}

const product = new Product("Keyboard", 79);

console.log("Product name (property):", product.name);
console.log("Product price (property):", product.price);

// Wrong type for a required constructor parameter.
// const invalidBook = new Book("Guide", "many");

// Missing required constructor parameter.
// const invalidProduct = new Product("Mouse");
