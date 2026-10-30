/**
 * Topic: abstract classes
 * Level: 2
 *
 * Goal:
 * Share a concrete method on an abstract exporter.
 *
 * Requirements:
 * 1. Create abstract class Exporter with abstract fileName(): string.
 * 2. Add format(): string that returns fileName() + ".csv".
 * 3. Create CsvExporter that implements fileName().
 * 4. Log format().
 *
 * Expected behavior:
 * A file name ending in .csv prints.
 *
 * Acceptance criteria:
 * - Exporter is abstract.
 * - format is concrete on the base class.
 * - CsvExporter implements fileName.
 */

export {};

console.log("=== abstract classes - Level 2 ===");

// TODO: Create Exporter, CsvExporter, and log new CsvExporter().format().

