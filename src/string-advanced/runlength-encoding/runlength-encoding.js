/*
Run-length encoding (RLE) is a very simple form of lossless data compression, in which same consecutive elements are stored as a single data value and count.

Create a function `encode` that implements a RLE of a string. If a character is present only once or twice consecutively, you must not compress it.

Example:
* "a" -> "a"
* "aa" -> "aa"
* "aaa" -> "a3"
* "aaaabbccca" -> "a4bbc3a"

If the argument is null, return an empty string.
If the argument is not a string, throw a TypeError.

Add you own tests.

*/
function encode(code) {
  if (code === null) {
    return "";
  }
  if (typeof code !== "string") {
    throw new TypeError("code must be a string");
  }
  code = code.split("");
  console.log(code);
  let result = "";
  let count = 1;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === code[i + 1]) {
      count++;
    } else {
      if (count >= 3) {
        result += code[i] + count;
      } else {
        result += code[i].repeat(count);
      }

      count = 1;
    }
  }

  return result;
}
// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof encode, "function");
assert.strictEqual(encode.length, 1);

assert.strictEqual(encode(null), "");
console.log('✅ encode(null) -> "null"');
assert.throws(() => encode(123), TypeError);
console.log("✅ encode(123) -> TypeError");
assert.strictEqual(encode("a"), "a");
console.log('✅ encode("a") -> "a"');

assert.strictEqual(encode("aa"), "aa");
console.log('✅ encode("aa") -> "aa"');
assert.strictEqual(encode("aaa"), "a3");
console.log('✅ encode("aaa") -> "a3"');
assert.strictEqual(encode("aaaabbccca"), "a4bbc3a");
console.log('✅ encode("aaaabbccca") -> "a4bbc3a"');
// TODO add your tests:

// End of tests

console.log("🎉");
