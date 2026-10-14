/**
 * 12 — InstanceType
 *
 * InstanceType<T> extracts the instance type of a constructor.
 * typeof ClassName is the constructor; InstanceType is its instances.
 */

// Example 1: Basic InstanceType
class User {
  constructor(
    public name: string,
    public age: number
  ) {}
}

type UserInstance =
  InstanceType<typeof User>;

const user: UserInstance =
  new User("Alice", 30);

console.log(user.name);
console.log(user.age);

// Example 2: Class constructor vs instance
// typeof User represents the constructor.
// InstanceType<typeof User> represents User instances.
const UserConstructor =
  User;

const anotherUser =
  new UserConstructor("Bob", 40);

console.log(anotherUser);

// Example 3: Product instance
class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}
}

type ProductInstance =
  InstanceType<typeof Product>;

const product: ProductInstance =
  new Product(1, "Keyboard", 79);

console.log(product);

// Invalid: name must still be a string.
// const invalidProduct: ProductInstance = {
//   id: 2,
//   name: 100,
//   price: 10,
// };

// Example 4: Instance methods
class Calculator {
  add(
    a: number,
    b: number
  ): number {
    return a + b;
  }
}

type CalculatorInstance =
  InstanceType<typeof Calculator>;

const calculator: CalculatorInstance =
  new Calculator();

console.log(calculator.add(10, 20));

// Example 5: Constructor stored in a variable
class Service {
  constructor(
    public name: string
  ) {}

  describe(): string {
    return "Service: " + this.name;
  }
}

const ServiceConstructor =
  Service;

type ServiceInstance =
  InstanceType<typeof ServiceConstructor>;

const service: ServiceInstance =
  new ServiceConstructor("API");

console.log(service.describe());

// Example 6: Direct class type vs InstanceType
// Both variables represent User instances.
const directUser: User =
  new User("Charlie", 25);

const extractedUser:
  InstanceType<typeof User> =
  new User("Diana", 28);

console.log(directUser);
console.log(extractedUser);

// Example 7: Invalid InstanceType inputs
// These are not constructor types.
// type InvalidString =
//   InstanceType<string>;

// type InvalidNumber =
//   InstanceType<number>;

// type InvalidObject =
//   InstanceType<{
//     name: string;
//   }>;

// Example 8: InstanceType vs ReturnType
// ReturnType extracts a function's returned type.
// InstanceType extracts a constructor's instance type.
function getMessage(): string {
  return "Hello";
}

type MessageResult =
  ReturnType<typeof getMessage>;

type UserResult =
  InstanceType<typeof User>;

const message: MessageResult =
  getMessage();

const userResult: UserResult =
  new User("Eve", 22);

console.log(message);
console.log(userResult);
