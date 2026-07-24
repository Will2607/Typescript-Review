/**
 * Small JavaScript helpers used by the TypeScript interoperability lesson.
 * These functions are plain JavaScript and are imported from a .ts file.
 */

/**
 * Multiplies price by quantity to get a line subtotal.
 * @param {number} price - Unit price of the item.
 * @param {number} quantity - How many units were purchased.
 * @returns {number} The subtotal (price * quantity).
 */
export function calculateSubtotal(price, quantity) {
  return price * quantity;
}

/**
 * Builds a full customer name from first and last name.
 * @param {string} firstName - Customer's first name.
 * @param {string} lastName - Customer's last name.
 * @returns {string} The full name.
 */
export function formatCustomerName(firstName, lastName) {
  return firstName + " " + lastName;
}
