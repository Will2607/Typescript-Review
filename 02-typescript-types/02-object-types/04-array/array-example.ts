/**
 * 04 — Array
 *
 * Practical examples of TypeScript arrays: typed lists, index access,
 * adding/removing elements, iteration, object arrays, and read-only arrays.
 */

// 1) string[] — a list of city names
const cities: string[] = ["Lima", "Cusco", "Arequipa"];
console.log("cities:", cities);

// 2) Array<number> — a list of temperatures
const temperatures: Array<number> = [18, 21, 24, 20];
console.log("temperatures:", temperatures);

// 3) Reading an element by index (indexes start at 0)
const firstCity = cities[0];
console.log("firstCity:", firstCity);

// 4) Updating an element by index
cities[1] = "Trujillo";
console.log("cities after update:", cities);

// 5) Adding at the end with push
cities.push("Piura");
console.log("cities after push:", cities);

// 6) Removing the last element with pop
const removedLastCity = cities.pop();
console.log("removedLastCity:", removedLastCity);
console.log("cities after pop:", cities);

// 7) Adding at the beginning with unshift
cities.unshift("Iquitos");
console.log("cities after unshift:", cities);

// 8) Removing the first element with shift
const removedFirstCity = cities.shift();
console.log("removedFirstCity:", removedFirstCity);
console.log("cities after shift:", cities);

// 9) Traditional for loop
console.log("for loop:");
for (let index = 0; index < cities.length; index++) {
  console.log("-", cities[index]);
}

// 10) for...of loop
console.log("for...of:");
for (const city of cities) {
  console.log("-", city);
}

// 11) forEach
console.log("forEach:");
cities.forEach(function (city) {
  console.log("-", city);
});

// 12) Array of objects with an explicit inline object type
const users: { id: number; name: string; active: boolean }[] = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
];
console.log("users:", users);

// 13) Read-only array using readonly string[]
const supportedLanguages: readonly string[] = ["English", "Spanish"];
console.log("supportedLanguages:", supportedLanguages);
console.log("first language:", supportedLanguages[0]);

// 14) Read-only array using ReadonlyArray<number>
const lockedPrices: ReadonlyArray<number> = [9.99, 14.99, 19.99];
console.log("lockedPrices:", lockedPrices);
console.log("first locked price:", lockedPrices[0]);

// Incorrect examples — kept commented so this file type-checks:
//
// cities.push(42);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//
// temperatures.push("hot");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
//
// supportedLanguages.push("French");
// Error: Property 'push' does not exist on type 'readonly string[]'.
//
// lockedPrices.pop();
// Error: Property 'pop' does not exist on type 'readonly number[]'.
