/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here

function convertTime(time) {
  if (time.split("")[2] === ":") {
    const result = parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(3));
    return result;
  }
  return null;
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof convertTime, "function");
assert.strictEqual(convertTime.length, 1);

assert.strictEqual(convertTime("02:30"), 150);
console.log('✅ "02:30",150');
assert.strictEqual(convertTime("01:45"), 105);
console.log('✅ "01:45",105');
assert.strictEqual(convertTime("01h45m"), null);
console.log('✅ "01h45m", null');
// TODO add your tests here
// End of tests

console.log("🎉");
