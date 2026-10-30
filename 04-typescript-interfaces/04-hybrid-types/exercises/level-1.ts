/**
 * Topic: hybrid types
 * Level: 1
 *
 * Goal:
 * Describe a callable formatter with a prefix property.
 *
 * Requirements:
 * 1. Create interface Labeler { (text: string): string; prefix: string }.
 * 2. Create a value that can be called and has prefix.
 * 3. Log a call result and prefix.
 *
 * Expected behavior:
 * The formatted text and prefix print.
 */

export {};

console.log("=== hybrid types - Level 1 ===");

interface Labeler {
  (text: string): string;
  prefix: string;
}

const labelerShape = ((text: string): string => {
  return labelerShape.prefix + text;
}) as Labeler;

labelerShape.prefix = "[JOB] ";

void labelerShape;

// TODO: Create your own Labeler value, set prefix, call it, and log the result.

