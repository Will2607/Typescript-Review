# 02 — number

Learn how the `number` primitive type works in TypeScript: integers, decimals, arithmetic, special values, and common mistakes.

Example file for this lesson:

- `number-example.ts`

---

## 1. What does `number` represent?

The `number` type represents numeric values in TypeScript.

You use it for quantities, prices, scores, counters, measurements, and any other value that should be treated mathematically as a number.

---

## 2. One type covers many numeric forms

In TypeScript, `number` is used for:

- integers (`42`)
- floating-point numbers (`19.99`)
- negative numbers (`-8`)
- hexadecimal values (`0xff`)
- binary values (`0b1010`)
- octal values (`0o755`)
- `NaN`
- `Infinity` and `-Infinity`

There is not a separate everyday type for “integer only” versus “decimal only.” Both are `number`.

---

## 3. TypeScript follows JavaScript number behavior

TypeScript’s `number` type is based on JavaScript’s number model.

That means:

- arithmetic works like JavaScript
- division by zero behaves like JavaScript
- floating-point precision quirks also appear (see later)

TypeScript mainly adds **static checking** so you do not mix incompatible types by accident.

---

## 4. Type inference vs explicit annotation

### Type inference

TypeScript looks at the value and decides the type:

```ts
const productPrice = 19.99;
// inferred as number
```

### Explicit annotation

You write the type yourself:

```ts
const productQuantity: number = 3;
```

---

## 5. Simple examples of both

```ts
// Inference
const taxRate = 0.08;

// Explicit annotation
const itemCount: number = 4;
```

Both create values of type `number`. Inference is concise. An annotation makes the intended type obvious.

---

## 6. Arithmetic operators

| Operator | Meaning | Example |
| --- | --- | --- |
| `+` | addition | `10 + 5` → `15` |
| `-` | subtraction | `10 - 5` → `5` |
| `*` | multiplication | `10 * 5` → `50` |
| `/` | division | `10 / 5` → `2` |
| `%` | remainder | `10 % 3` → `1` |
| `**` | exponentiation | `2 ** 3` → `8` |

```ts
const lineSubtotal = price * quantity;
const scoreAverage = (a + b + c) / 3;
```

---

## 7. Increment and decrement

| Operator | Meaning |
| --- | --- |
| `++` | add `1` |
| `--` | subtract `1` |

These operators change a variable, so they need `let` (not `const`):

```ts
let visitCount: number = 1;
visitCount++; // 2
visitCount--; // 1
```

---

## 8. Numeric comparisons produce booleans

Comparing two numbers produces a `boolean` (`true` or `false`):

```ts
const isGreater = firstAmount > secondAmount;
const isLess = firstAmount < secondAmount;
const isGreaterOrEqual = firstAmount >= secondAmount;
const isLessOrEqual = firstAmount <= secondAmount;
const isExactEqual = firstAmount === secondAmount;
```

---

## 9. Understanding `NaN`

### What it means

`NaN` means **Not a Number**. It is the result JavaScript uses when a numeric operation cannot produce a meaningful number.

### How it can appear

```ts
const notANumberValue = Number("not-a-number");
```

Invalid math conversions often produce `NaN`.

### Why its type is still `number`

In JavaScript/TypeScript, `NaN` is a special **numeric** value. Its type is `number`, even though it does not represent a usable quantity.

### How to check for it

Do **not** rely on `NaN === NaN` (that comparison is always false).

Use:

```ts
Number.isNaN(notANumberValue); // true
```

---

## 10. `Infinity` and `-Infinity`

These represent values beyond the finite number range:

```ts
const positiveInfinity = Infinity;
const negativeInfinity = -Infinity;
```

They are also typed as `number`.

---

## 11. Division by zero

In JavaScript and TypeScript:

```ts
const divisionByZero = 10 / 0;
// result: Infinity
```

Dividing by zero does **not** throw a runtime exception for ordinary numbers. It yields `Infinity` (or `-Infinity` for a negative numerator).

---

## 12. Numeric notations

| Notation | Example | Meaning |
| --- | --- | --- |
| Decimal | `42` | everyday base-10 number |
| Hexadecimal | `0xff` | base-16 (starts with `0x`) |
| Binary | `0b1010` | base-2 (starts with `0b`) |
| Octal | `0o755` | base-8 (starts with `0o`) |

All of these are still type `number`.

---

## 13. Numeric separators

You can use underscores to make large numbers easier to read:

```ts
const oneMillion = 1_000_000;
```

The underscores are only for humans. The value is still one million.

---

## 14. Precision limits (introductory)

JavaScript numbers use **floating-point** representation.

That means some decimal calculations are not exact:

```ts
console.log(0.1 + 0.2);
// often 0.30000000000000004, not exactly 0.3
```

For this lesson:

- know that unexpected decimal results can happen
- do not assume every decimal operation is exact

Advanced money/finance techniques come later if needed. `bigint` is also a separate topic.

---

## 15. Safe integer range (introductory)

JavaScript provides limits for integers that can be represented exactly:

```ts
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;
```

Integers outside that range may lose precision. For everyday beginner examples, stay within safe values. Very large integers may later use `bigint` (separate lesson).

---

## 16. `bigint` is a different type

`bigint` exists for very large integers, but it is **not** the same as `number`.

This lesson focuses only on `number`. If `bigint` appears later in the roadmap, it will be studied on its own.

---

## 17. Common mistakes

| Mistake | Why it causes trouble |
| --- | --- |
| Using strings like `"19.99"` as numbers | Wrong type; math and checking behave differently |
| Assuming `NaN === NaN` | That comparison is always false |
| Not validating conversions | `Number("abc")` becomes `NaN` silently |
| Confusing concatenation with addition | `"10" + 5` becomes `"105"` in JavaScript |
| Assuming all decimals are exact | Floating-point can surprise you (`0.1 + 0.2`) |

---

## 18. Converting a string to a number

```ts
Number("42");      // 42
parseInt("42px");  // 42
parseFloat("3.14"); // 3.14
```

---

## 19. Brief differences between converters

| Function | Behavior |
| --- | --- |
| `Number(value)` | Tries to convert the **whole** value |
| `parseInt(value)` | Reads an **integer** from the start of the text |
| `parseFloat(value)` | Reads a **decimal** number from the start of the text |

Examples of the idea:

- `Number("42abc")` → `NaN`
- `parseInt("42abc")` → `42`
- `parseFloat("3.14abc")` → `3.14`

---

## 20. External data still needs runtime validation

Type annotations protect you at **compile time** inside TypeScript code.

Values from users, forms, APIs, or files arrive as data at **runtime**. After converting with `Number`, `parseInt`, or `parseFloat`, check the result (for example with `Number.isNaN`) before trusting it.

---

## 21. Validate and run the example

Type-check without emitting JavaScript:

```bash
npx tsc --noEmit 02-typescript-types/01-primitive-types/02-number/number-example.ts
```

Run the example:

```bash
npx tsx 02-typescript-types/01-primitive-types/02-number/number-example.ts
```

---

## Review questions

1. What kinds of numeric values does the TypeScript `number` type cover?
2. What is the difference between type inference and an explicit `: number` annotation?
3. Why is `NaN` still typed as `number`, and how should you detect it?
4. What happens when you evaluate `10 / 0` in JavaScript/TypeScript?
5. Why can `0.1 + 0.2` produce a surprising result?

---

## Completion checklist

- [ ] I know that integers, decimals, negatives, hex/binary/octal, `NaN`, and `Infinity` all use `number`
- [ ] I can use inference and explicit `: number` annotations
- [ ] I can use `+`, `-`, `*`, `/`, `%`, and `**`
- [ ] I can use `++` and `--` with `let`
- [ ] I know numeric comparisons produce booleans
- [ ] I can explain `NaN`, `Infinity`, and `-Infinity`
- [ ] I know `Number.isNaN()` is the correct `NaN` check
- [ ] I understand division by zero yields `Infinity` for ordinary numbers
- [ ] I recognize decimal, hex, binary, octal, and numeric separators
- [ ] I know floating-point precision can be imperfect (`0.1 + 0.2`)
- [ ] I know `bigint` is a different type studied separately
- [ ] I can convert strings with `Number`, `parseInt`, and `parseFloat` and validate results
