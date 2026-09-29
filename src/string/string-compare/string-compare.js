/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.
*/

// TODO add your code here
function compare(a, b) {
  if (a.length === b.length && a !== null && b !== null) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        count++;
      }
    }
    return count;
  }
  return -1;
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof compare, "function");
assert.strictEqual(compare.length, 2);

assert.strictEqual(compare("a", "a"), 1);
console.log('✅ "a","a", true');

assert.strictEqual(compare("a", "b"), 0);
console.log('✅ ("a", "b"), 0');

assert.strictEqual(compare("aa", "ba"), 1);
console.log('✅ ("aa", "ba"), 1');

assert.strictEqual(compare("tacos", "Poulpe"), -1);
console.log('✅ ("tacos", "Poulpe"), -1');

assert.strictEqual(compare("null", "a"), -1);
console.log('✅ ("null", "a"), -1');

// TODO add your tests here
// End of tests

console.log("🎉");
