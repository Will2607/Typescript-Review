/**
 * 04 — Hybrid Types
 *
 * Callable values can also have properties and methods.
 * Interfaces describe this hybrid pattern at compile time.
 */

// 1–2) Simple callable interface and function value
interface TextFormatter {
  (value: string): string;
}

const formatText: TextFormatter = (value: string): string => {
  return value.toUpperCase();
};

console.log(formatText("typescript"));

// 3–6) Hybrid interface: call signature plus a property
interface PrefixFormatter {
  (value: string): string;
  prefix: string;
}

const prefixFormatter = ((value: string): string => {
  return prefixFormatter.prefix + value;
}) as PrefixFormatter;

prefixFormatter.prefix = "[INFO] ";

// 4–5) Call the hybrid value and read its property
console.log(prefixFormatter("Application started"));
console.log(prefixFormatter.prefix);

// Update the writable property
prefixFormatter.prefix = "[WARN] ";
console.log(prefixFormatter("Low memory"));

// 7–8) Hybrid interface: call signature, property, and method
interface Counter {
  (): number;
  current: number;
  reset(): void;
}

const counter = (() => {
  counter.current += 1;
  return counter.current;
}) as Counter;

counter.current = 0;

counter.reset = (): void => {
  counter.current = 0;
};

console.log(counter());
console.log(counter());
console.log(counter.current);

counter.reset();

console.log(counter.current);

// Another hybrid example: validator with description
interface Validator {
  (value: string): boolean;
  description: string;
}

const isNonEmpty = ((value: string): boolean => {
  return value.length > 0;
}) as Validator;

isNonEmpty.description = "Checks whether a string is not empty";

console.log(isNonEmpty("TypeScript"));
console.log(isNonEmpty(""));
console.log(isNonEmpty.description);

// Invalid examples (remain commented out)

interface StringChecker {
  (value: string): boolean;
  label: string;
}

// Wrong function parameter type.
// const invalidCheckerOne: StringChecker = (value: number): boolean => {
//   return value > 0;
// };

// Wrong return type.
// const invalidCheckerTwo: StringChecker = (value: string): string => {
//   return value;
// };

// Missing required property.
// const invalidCheckerThree = ((value: string): boolean => {
//   return value.length > 0;
// }) as StringChecker;
//
// The required `label` property has not been assigned before practical use.

// Wrong property type.
// const invalidCheckerFour = ((value: string): boolean => {
//   return value.length > 0;
// }) as StringChecker;
//
// invalidCheckerFour.label = 100;

// Wrong call argument.
// isNonEmpty(123);

interface Action {
  (): void;
  execute(): void;
}

// Incomplete hybrid implementation.
// const invalidAction = (() => {
//   console.log("Running");
// }) as Action;
//
// `execute` is required but has not been assigned.
