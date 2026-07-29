/**
 * 02 — number
 *
 * Practical examples of the number primitive type in TypeScript.
 */

// Inference: TypeScript sees a numeric literal and infers type number.
const productPrice = 19.99;

// Explicit annotation: you declare the type yourself.
const productQuantity: number = 3;

// All of these values use the type number in TypeScript.
const integerStockCount = 42;
const decimalDiscountRate = 0.15;
const negativeTemperature = -8;

function calculateSubtotal(price: number, quantity: number): number {
  return price * quantity;
}

const lineSubtotal = calculateSubtotal(productPrice, productQuantity);
console.log("Subtotal:", lineSubtotal);

function calculateAverage(firstValue: number, secondValue: number, thirdValue: number): number {
  return (firstValue + secondValue + thirdValue) / 3;
}

const scoreAverage = calculateAverage(80, 90, 100);
console.log("Average:", scoreAverage);

// Arithmetic operators
const additionResult = 10 + 5;
const subtractionResult = 10 - 5;
const multiplicationResult = 10 * 5;
const divisionResult = 10 / 5;
const remainderResult = 10 % 3;
const exponentiationResult = 2 ** 3;

console.log("Addition:", additionResult);
console.log("Subtraction:", subtractionResult);
console.log("Multiplication:", multiplicationResult);
console.log("Division:", divisionResult);
console.log("Remainder:", remainderResult);
console.log("Exponentiation:", exponentiationResult);

// Increment and decrement need a mutable variable (let).
let visitCount: number = 1;
visitCount++;
console.log("After increment:", visitCount);
visitCount--;
console.log("After decrement:", visitCount);

// Numeric comparisons produce boolean values.
const firstAmount: number = 20;
const secondAmount: number = 15;

const isGreater = firstAmount > secondAmount;
const isLess = firstAmount < secondAmount;
const isGreaterOrEqual = firstAmount >= secondAmount;
const isLessOrEqual = firstAmount <= secondAmount;
const isExactEqual = firstAmount === secondAmount;

console.log("isGreater:", isGreater);
console.log("isLess:", isLess);
console.log("isGreaterOrEqual:", isGreaterOrEqual);
console.log("isLessOrEqual:", isLessOrEqual);
console.log("isExactEqual:", isExactEqual);

// Special numeric values — still typed as number.
const notANumberValue = Number("not-a-number");
const positiveInfinity = Infinity;
const negativeInfinity = -Infinity;

console.log("NaN example:", notANumberValue);
console.log("Infinity:", positiveInfinity);
console.log("-Infinity:", negativeInfinity);
console.log("Number.isNaN(notANumberValue):", Number.isNaN(notANumberValue));

// Division by zero follows JavaScript rules.
const divisionByZero = 10 / 0;
console.log("10 / 0:", divisionByZero);

// Alternate numeric notations — all still type number.
const hexColorCode = 0xff;
const binaryFlags = 0b1010;
const octalPermission = 0o755;
const oneMillion = 1_000_000;

console.log("Hex:", hexColorCode);
console.log("Binary:", binaryFlags);
console.log("Octal:", octalPermission);
console.log("Numeric separator:", oneMillion);

// Incorrect examples — kept commented so this file type-checks:
//
// const wrongPrice: number = "19.99";
// Error: Type 'string' is not assignable to type 'number'.
//
// const wrongSubtotal = calculateSubtotal("19.99", 3);
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
//
// const incompatibleMath = productPrice * true;
// Error: The right-hand side of an arithmetic operation must be of type 'any',
// 'number', 'bigint' or an enum type.

export {};
