# 01 — TypeScript Playground

Learn how to write, check, run, and inspect TypeScript in the browser — with no local project setup.

Official site: [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

---

## 1. What is TypeScript Playground?

**TypeScript Playground** is an online editor provided by the TypeScript team. You open it in a browser tab, type TypeScript on the left, and immediately see type-checking feedback and the JavaScript that TypeScript would produce.

It is designed for quick experiments, teaching examples, and sharing small snippets.

---

## 2. What is it for?

Use Playground when you want to:

- try TypeScript syntax without creating folders or installing tools
- see type errors as you type
- run a small example and read `console` output
- compare your TypeScript source with the generated JavaScript
- share a reproducible link with someone else

---

## 3. It runs in the browser (no local install)

Playground works **entirely in the browser**. You do not need to install Node.js, npm, or TypeScript on your machine to use it.

That makes it ideal for the first minutes of learning: open the site, write code, observe results.

> Tip: a local project is still important later. Playground is complementary, not a full development environment.

---

## 4. Main areas of the interface

When you open Playground, focus on these areas:

### TypeScript editor

The main panel where you write `.ts`-style code. This is your source of truth while experimenting.

### Generated JavaScript panel

A view that shows the JavaScript TypeScript produces from your current code. Use it to confirm that type annotations are removed after compilation.

### Error messages

Type problems appear as underlines in the editor and as messages in the errors / problems area. Read them carefully: they usually say what type was expected and what you provided.

### Compiler settings

A configuration menu (often labeled **TS Config** or similar) lets you change basic compiler options for this Playground session only. Changes here affect **this online example**, not a real project on disk.

Exact labels can vary slightly as the site UI evolves, but these four ideas stay the same: edit TS, see JS, read errors, tweak settings.

---

## 5. Write and run a small example

1. Open [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play).
2. Clear the default sample if you prefer a blank start.
3. Paste a tiny example (see **Example 1** below).
4. Look at the **Errors** area — it should be clean for valid code.
5. Run the example using Playground’s **Run** action (button or menu).
6. Check the console / logs panel for `console.log` output.
7. Open the **JavaScript** (or `.JS`) panel and compare it with your TypeScript.

---

## 6. How to spot a type error

When types do not match, Playground typically:

- underlines the bad expression in the editor
- shows a message such as: a `number` is not assignable to a `string`

Practice reading the message: identify the **expected type** and the **actual type**. That habit transfers directly to local editors later.

See **Example 3** for a concrete incorrect assignment.

---

## 7. Comment out incorrect lines so the rest can run

If one line has a type error, Playground may still show the rest of the file — but for teaching demos it is cleaner to **comment the broken line**.

That way:

- you keep the mistake visible for learning
- the remaining example stays valid and runnable
- classmates (or your future self) can uncomment it to reproduce the error

---

## 8. Watch type annotations disappear in the generated JavaScript

Type annotations exist for TypeScript’s checker and for you as the author. They are **not** part of the JavaScript that runs.

In Playground:

1. Write a typed variable or a typed function parameter.
2. Open the generated JavaScript panel.
3. Confirm that `: string`, `: number`, and similar annotations are gone.

Only the runtime values and logic remain.

---

## 9. Change basic compiler options from the settings menu

Open Playground’s configuration / TS Config UI and try a simple change, for example:

- toggle a stricter checking option
- change the language `target`

Then observe:

- whether new errors appear
- whether the generated JavaScript looks different

Keep this light for now. You do not need every compiler option yet — only the idea that Playground can simulate different settings for a single snippet.

---

## 10. When Playground is especially useful

| Use case | Why it helps |
| --- | --- |
| Trying syntax | Instant feedback without project setup |
| Minimal examples | Keep demos small and focused |
| Sharing code | Send a URL that opens the same snippet |
| Reviewing generated JS | See erasure of types clearly |
| Reproducing small bugs | Isolate one error in a few lines |

---

## 11. Limitations compared with a local project

Playground is powerful for learning, but it has limits:

- it does **not** represent a full application structure (folders, many modules, build pipelines)
- it does **not** replace `package.json` (dependencies and scripts)
- it does **not** replace a real `tsconfig.json` checked into a repository
- it does **not** manage a real multi-file project with installed packages

For team work and real apps, you still set up a local TypeScript project.

---

## 12. Learning tool, not a full replacement

Treat TypeScript Playground as a **sandbox for learning and experimentation**.

Use it to explore ideas quickly. Use a local environment when you need:

- multiple source files
- dependencies
- reproducible project configuration
- a workflow that matches production development

Both approaches complement each other.

---

## Examples

Copy each example into Playground. Run the valid ones. Uncomment broken lines only when you want to see the error.

### Example 1 — string variable and `console.log`

```ts
const welcomeMessage: string = "Hello from TypeScript Playground";
console.log(welcomeMessage);

// Approximate generated JavaScript (types removed):
// const welcomeMessage = "Hello from TypeScript Playground";
// console.log(welcomeMessage);
```

What to observe:

- the program prints the message when you run it
- the JavaScript panel drops `: string`

### Example 2 — add two numbers

```ts
function addNumbers(firstValue: number, secondValue: number): number {
  return firstValue + secondValue;
}

const sumResult = addNumbers(12, 8);
console.log("Sum:", sumResult);
```

What to observe:

- Playground accepts two `number` arguments
- the console shows `Sum: 20`
- in the JavaScript panel, parameter and return type annotations disappear

### Example 3 — incorrect assignment (keep it commented)

```ts
const productName: string = "Keyboard";
console.log(productName);

// Incorrect on purpose — uncomment to see the type error:
// productName = 42;
// TypeScript error (typical message):
// Type 'number' is not assignable to type 'string'.
```

What to observe:

- with the bad line commented, the example runs
- when uncommented, Playground reports that a `number` cannot be assigned to a `string`
- comment it again to keep the lesson runnable

---

## Review questions

1. What is TypeScript Playground, and where does it run?
2. Name three main areas of the Playground interface and what each one shows you.
3. How can you confirm that type annotations are erased after compilation?
4. Give two good reasons to use Playground and two limitations compared with a local project.
5. Why is it useful to keep an incorrect line commented in a teaching example?

---

## Completion checklist

- [ ] I can open TypeScript Playground in a browser
- [ ] I know what the editor, JS panel, errors, and config areas are for
- [ ] I can write and run a small example with `console.log`
- [ ] I can recognize a type error message
- [ ] I know to comment incorrect lines so the rest of an example stays runnable
- [ ] I have compared TypeScript source with generated JavaScript and seen types disappear
- [ ] I have opened the compiler settings menu and changed at least one basic option
- [ ] I understand when Playground is useful — and when a local project is still required
