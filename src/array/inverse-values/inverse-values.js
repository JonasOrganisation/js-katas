/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/

// TODO add your code here
const arg = [1];
function inverse(arg) {
  let result = [];
  if (arg === null || arg === undefined) {
    return [];
  } else {
    for (let item of arg) {
      item = item * -1;
      result.push(item);
    }
    return result;
  }
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof inverse, "function");
assert.strictEqual(inverse.length, 1);
assert.deepStrictEqual(inverse([]), []);
assert.deepStrictEqual(inverse(null), []);
assert.deepStrictEqual(inverse([1]), [-1]);
assert.deepStrictEqual(inverse([-1]), [1]);
assert.deepStrictEqual(inverse([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
assert.deepStrictEqual(inverse([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
assert.deepStrictEqual(arg, [1]);
// End of tests

console.log("🎉");
