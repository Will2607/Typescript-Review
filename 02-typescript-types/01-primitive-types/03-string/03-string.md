# 03 — string

Learn how the `string` primitive type works in TypeScript: text values, quotes, template literals, common methods, and frequent mistakes.

Example file for this lesson:

- `string-example.ts`

---

## 1. What does `string` represent?

The `string` type represents **text**.

In TypeScript, a string is a sequence of characters: names, messages, titles, codes, paths, and any other textual data.

---

## 2. Text and character sequences

A string can be short:

```ts
const label = "Hi";
```

or longer:

```ts
const sentence = "Welcome to the string lesson.";
```

Each character has a position (index) starting at `0`.

---

## 3. Three main ways to write strings

| Style | Syntax | Example |
| --- | --- | --- |
| Single quotes | `'...'` | `'Module'` |
| Double quotes | `"..."` | `"Primitive Types"` |
| Backticks (template literals) | `` `...` `` | `` `Lesson topic` `` |

Single and double quotes are interchangeable for plain text. Backticks add interpolation and multi-line text support.

---

## 4. Type inference vs explicit annotation

### Type inference

TypeScript sees a text literal and infers `string`:

```ts
const courseTitle = "Introduction to TypeScript";
```

### Explicit annotation

You declare the type yourself:

```ts
const studentName: string = "Ada Lovelace";
```

---

## 5. Simple examples of both

```ts
// Inference
const topicName = "string";

// Explicit annotation
const teacherName: string = "Instructor";
```

Both create values of type `string`.

---

## 6. Concatenation with `+`

You can join strings with `+`:

```ts
const concatenatedMessage =
  "Student: " + studentName + " | Course: " + courseTitle;
```

This works, but longer messages with many pieces become harder to read.

---

## 7. Template literals

Template literals use backticks:

```ts
const progressMessage = `${studentName} completed the ${completedTopic} topic.`;
```

They are ideal for building dynamic text.

---

## 8. Interpolation with `${value}`

Inside backticks, `${...}` inserts an expression into the string:

```ts
`Welcome, ${name}! You are studying ${course}.`
```

The expression inside `${}` is evaluated, then converted into text inside the final string.

---

## 9. Why template literals are usually clearer

Compare:

```ts
"Student: " + studentName + " | Course: " + courseTitle
```

with:

```ts
`Student: ${studentName} | Course: ${courseTitle}`
```

Template literals usually win for readability because:

- the full message shape stays visible
- you avoid juggling many `+` operators and quote boundaries
- interpolation keeps variables next to the surrounding words

---

## 10. The `length` property

`length` tells you how many characters the string contains:

```ts
const sampleText = "  TypeScript Strings  ";
sampleText.length;
```

Spaces count as characters.

---

## 11. Common string methods

| Method | Typical use |
| --- | --- |
| `toUpperCase()` | Convert to uppercase |
| `toLowerCase()` | Convert to lowercase |
| `trim()` | Remove leading and trailing whitespace |
| `includes(text)` | Check whether text appears inside the string |
| `startsWith(text)` | Check the beginning |
| `endsWith(text)` | Check the ending |
| `slice(start, end)` | Take a portion of the string |
| `replace(from, to)` | Replace text (first match for a plain string) |

```ts
sampleText.trim();
sampleText.includes("Script");
sampleText.slice(2, 12);
```

---

## 12. Accessing characters

Two common options:

```ts
courseTitle[0];        // bracket notation
courseTitle.charAt(0); // charAt method
```

Both can read one character at an index.

---

## 13. Missing positions (brief)

If you request an index that does not exist:

- `text[index]` yields `undefined`
- `text.charAt(index)` yields an empty string `""`

Example idea: `courseTitle[999]` is outside the string.

---

## 14. Strings are immutable

String methods do **not** change the original value.

They usually return a **new** string:

```ts
const originalCity = "London";
const upperCity = originalCity.toUpperCase();

// originalCity is still "London"
// upperCity is "LONDON"
```

If you need the new value, store it in another constant or variable.

---

## 15. Comparing strings

```ts
courseTitle === "Introduction to TypeScript"; // true or false
studentName !== "Grace Hopper";               // true or false
```

These comparisons produce **boolean** results.

---

## 16. Comparisons are case-sensitive

```ts
"TypeScript" === "typescript"; // false
```

Uppercase and lowercase letters are different characters in string comparison.

---

## 17. Converting values to string

Use `String(value)`:

```ts
String(19.99); // "19.99"
String(true);  // "true"
```

This is useful when you intentionally want text form of another value.

---

## 18. Empty string vs whitespace string

| Value | Meaning |
| --- | --- |
| `""` | empty string — no characters |
| `"   "` | string that contains only spaces |

They are not the same:

```ts
"".length;      // 0
"   ".length;   // 3
```

---

## 19. Checking emptiness after trimming

To ignore leading/trailing spaces when checking “is this blank?”:

```ts
value.trim().length === 0
```

Examples:

- `"".trim().length === 0` → `true`
- `"   ".trim().length === 0` → `true`
- `"hi".trim().length === 0` → `false`

---

## 20. Truthy / falsy notes for strings (brief)

In JavaScript conditions:

- `""` is **falsy**
- non-empty strings are **truthy**
- `" "` (a space) is **truthy**, because it is not empty

So a whitespace-only string can pass an `if (value)` check even though it looks blank to a human. Prefer `trim().length === 0` when blank-checking user text.

This stays introductory — narrowing and type guards come later.

---

## 21. Keep this lesson focused

This lesson covers everyday `string` usage:

- declaring text
- building messages
- reading length and characters
- using common methods

Advanced topics (literal types, template literal types, narrowing) are intentionally out of scope here.

---

## 22. Common mistakes

| Mistake | Why it causes trouble |
| --- | --- |
| Confusing strings with numbers | `"10"` is text; `10` is numeric |
| Accidental concatenation with numbers | `"Total: " + 5` becomes `"Total: 5"` as text joining |
| Forgetting case sensitivity | `"Ada" === "ada"` is false |
| Assuming `trim()` edits in place | The original string stays unchanged |
| Confusing `""` with `"   "` | Only one of them has `length === 0` before trimming |

---

## 23. When to annotate vs when inference is enough

**Inference is usually enough** for clear string literals:

```ts
const courseTitle = "Introduction to TypeScript";
```

**Explicit `: string` can help** when you want the contract to be obvious — especially for function parameters and return types:

```ts
function buildWelcomeMessage(name: string, course: string): string {
  return `Welcome, ${name}! You are studying ${course}.`;
}
```

---

## 24. Validate and run the example

Type-check without emitting JavaScript:

```bash
npx tsc --noEmit 02-typescript-types/01-primitive-types/03-string/string-example.ts
```

Run the example:

```bash
npx tsx 02-typescript-types/01-primitive-types/03-string/string-example.ts
```

---

## Review questions

1. What are the three main ways to write string literals in TypeScript?
2. Why are template literals often clearer than many `+` concatenations?
3. What does it mean that strings are immutable?
4. How do `""` and `"   "` differ, and how can you blank-check with `trim()`?
5. Why is `"TypeScript" === "typescript"` false?

---

## Completion checklist

- [ ] I know that `string` represents text / character sequences
- [ ] I can write strings with `'...'`, `"..."`, and backticks
- [ ] I can tell inference apart from an explicit `: string` annotation
- [ ] I can concatenate with `+` and build messages with template literals
- [ ] I understand `${value}` interpolation
- [ ] I can use `length` and common methods (`trim`, `includes`, `slice`, and others)
- [ ] I can read characters with `text[index]` and `charAt`
- [ ] I know string methods return new values and do not mutate the original
- [ ] I know `===` / `!==` comparisons are case-sensitive and produce booleans
- [ ] I can convert values with `String(value)`
- [ ] I can distinguish empty strings from whitespace-only strings
- [ ] I recognize common string mistakes
