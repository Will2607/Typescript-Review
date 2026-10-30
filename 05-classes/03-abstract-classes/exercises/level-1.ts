/**
 * Topic: abstract classes
 * Level: 1
 *
 * Goal:
 * Create an abstract report and one concrete subclass.
 *
 * Requirements:
 * 1. Create abstract class ReportBase with abstract title(): string.
 * 2. Create class SalesReport extends ReportBase that implements title().
 * 3. Log new SalesReport().title().
 *
 * Expected behavior:
 * A report title string prints.
 */

export {};

console.log("=== abstract classes - Level 1 ===");

abstract class ReportBaseShape {
  abstract title(): string;
}

class SalesReportShape extends ReportBaseShape {
  title(): string {
    return "Sales";
  }
}

void SalesReportShape;

// TODO: Create ReportBase and SalesReport, then log new SalesReport().title().

// Invalid (keep commented):
// const report = new ReportBase();

