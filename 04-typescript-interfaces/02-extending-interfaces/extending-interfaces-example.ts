/**
 * 02 — Extending Interfaces
 *
 * Child interfaces inherit properties from parent interfaces
 * and may add new properties. Inheritance is compile-time only.
 */

// 1–2) Parent interface and child extending it
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

// 3–5) Object using the child interface; access inherited and new properties
const employee: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 1001,
  department: "Engineering",
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.employeeId);
console.log(employee.department);

// 6) Second extension example
interface Product {
  name: string;
  price: number;
}

interface DigitalProduct extends Product {
  downloadUrl: string;
}

const ebook: DigitalProduct = {
  name: "TypeScript Guide",
  price: 25,
  downloadUrl: "/downloads/typescript-guide.pdf",
};

console.log(ebook);

// 7) Extending two interfaces
interface Identifiable {
  id: number;
}

interface Timestamped {
  createdAt: string;
}

interface RecordItem extends Identifiable, Timestamped {
  title: string;
}

const record: RecordItem = {
  id: 1,
  createdAt: "2026-08-28",
  title: "TypeScript Interfaces",
};

console.log(record);

// 8) Compatible property redeclaration
interface BaseAccount {
  id: number;
  username: string;
}

interface AdminAccount extends BaseAccount {
  username: string;
  permissions: string[];
}

const admin: AdminAccount = {
  id: 10,
  username: "admin-user",
  permissions: ["read", "write"],
};

console.log(admin);

// Invalid examples (remain commented out)

// Missing inherited property.
// const invalidEmployeeOne: Employee = {
//   age: 30,
//   employeeId: 1002,
//   department: "Finance",
// };

// Missing child property.
// const invalidEmployeeTwo: Employee = {
//   name: "Bob",
//   age: 28,
//   employeeId: 1003,
// };

// Wrong inherited property type.
// const invalidEmployeeThree: Employee = {
//   name: "Carol",
//   age: "thirty",
//   employeeId: 1004,
//   department: "HR",
// };

// Wrong child property type.
// const invalidEmployeeFour: Employee = {
//   name: "Daniel",
//   age: 35,
//   employeeId: "1005",
//   department: "Sales",
// };

// Incompatible property redeclaration.
// interface InvalidAccount extends BaseAccount {
//   username: number;
// }

// Missing property from one parent.
// const invalidRecord: RecordItem = {
//   id: 2,
//   title: "Missing timestamp",
// };
