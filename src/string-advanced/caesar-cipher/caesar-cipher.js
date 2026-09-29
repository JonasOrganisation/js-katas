/*
In cryptography, a Caesar cipher is a simple encryption technique, in which each letter in text is replaced by a letter some fixed number of positions down the alphabet.

For example, with a right shift of 3, a becomes d, b becomes e, and so on until w which become z. Then x, y and z become a, b and c.

Create a function `cipher` which encrypts a word (only in lowercase) using Caesar cipher, where the shift value (which can be positive or negative) is a parameter.

  word:      shift:   result:
* "abcd"     1        "bcde"
* "abcd"     -1       "zabc"
* "tacos"    3        "wdfrv"
* "zebra"    2        "bgdtc"

If `word` is null or not a string, or if `shift` is null or not a number, throw a TypeError.

Add you own tests.

*/

// TODO add your code here
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function cipher(word, number) {
  if (typeof word === "string" && typeof number === "number") {
    let result = [];
    let tab = word.split("");

    for (let i = 0; i < tab.length; i++) {
      let index = alphabet.indexOf(tab[i]);

      let newIndex = (index + number) % alphabet.length;

      // Gestion des nombres négatifs
      if (newIndex < 0) {
        newIndex += alphabet.length;
      }

      result.push(alphabet[newIndex]);
    }

    return result.join("");
  }
  throw new TypeError();
}
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof cipher, "function");
assert.strictEqual(cipher.length, 2);

assert.strictEqual(cipher("abcd", 1), "bcde");
console.log('✅ cipher("abcd", 1) -> "bcde"');

assert.strictEqual(cipher("abcd", -1), "zabc");
console.log('✅ cipher("abcd", -1) -> "zabc"');

assert.strictEqual(cipher("tacos", 3), "wdfrv");
console.log('✅ cipher("tacos", 3) -> "wdfrv"');

assert.strictEqual(cipher("zebra", 2), "bgdtc");
console.log('✅ cipher("zebra", 2) -> "bgdtc"');

assert.throws(() => cipher(null, 1), TypeError);
console.log("✅ cipher(null, 1) -> TypeError");

assert.throws(() => cipher("abcd", null), TypeError);
console.log('✅ cipher("abcd", null) -> TypeError');

assert.throws(() => cipher("abcd", "1"), TypeError);
console.log('✅ cipher("abcd", "1") -> TypeError');
// End of tests

console.log("🎉");
