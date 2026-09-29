/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true
*/
function isPalindrome(word) {
  if (word === null || word === "") {
    return true;
  }
  word = word.toLowerCase();
  // OR    return word === word.split("").reverse().join(""); */

  const tab = word.split("");
  const ceil = Math.ceil(tab.length / 2);

  for (let i = 0; i < ceil; i++) {
    if (tab[i] !== tab[tab.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
// TODO add your code here

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof isPalindrome, "function");
assert.strictEqual(isPalindrome.length, 1);
assert.strictEqual(isPalindrome("rotor"), true);
console.log('✅ "rotor",true');
assert.strictEqual(isPalindrome("tacos"), false);
console.log('✅ "tacos",false');
assert.strictEqual(isPalindrome("Kayak"), true);
console.log('✅ "Kayak", true');
assert.strictEqual(isPalindrome(null), true);
console.log('✅ "null", true');

// TODO add your tests here
// End of tests

console.log("🎉");
