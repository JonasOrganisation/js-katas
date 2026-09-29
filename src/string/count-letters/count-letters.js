/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

// TODO add your code here
function countChar(array, char) {
  if (array === null || char === null || char.length !== 1) {
    return -1;
  }

  const tab = array.split("");
  let count = 0;

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === char) {
      count++;
    }
  }

  return count;
}

// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof countChar, "function");
console.log("✅ countChar est bien une fonction");

assert.strictEqual(countChar.length, 2);
console.log("✅ countChar prend bien 2 paramètres");

assert.strictEqual(countChar("", "a"), 0);
console.log('✅ "" et "a" -> 0');

assert.strictEqual(countChar("a", "a"), 1);
console.log('✅ "a" et "a" -> 1');

assert.strictEqual(countChar("aaaaabbbaa", "a"), 7);
console.log('✅ "aaaaabbbaa" et "a" -> 7');

assert.strictEqual(countChar("bbacbaaa", "c"), 1);
console.log('✅ "bbacbaaa" et "c" -> 1');

assert.strictEqual(countChar("bbcc", "a"), 0);
console.log('✅ "bbcc" et "a" -> 0');

assert.strictEqual(countChar(null, "a"), -1);
console.log('✅ null et "a" -> -1');

assert.strictEqual(countChar("bonjour", null), -1);
console.log('✅ "bonjour" et null -> -1');

assert.strictEqual(countChar("bonjour", ""), -1);
console.log('✅ caractère vide "" -> -1');

assert.strictEqual(countChar("bonjour", "ou"), -1);
console.log("✅ caractère de longueur > 1 -> -1");

// End of tests

console.log("🎉");
