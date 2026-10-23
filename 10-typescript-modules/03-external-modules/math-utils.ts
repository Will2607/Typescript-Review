export const PI = 3.14159;

export function add(
  a: number,
  b: number
): number {
  return a + b;
}

export function subtract(
  a: number,
  b: number
): number {
  return a - b;
}

function divide(
  a: number,
  b: number
): number {
  return a / b;
}

export {
  divide
};

const internalLabel =
  "Math utilities";

export default function multiply(
  a: number,
  b: number
): number {
  return a * b;
}
