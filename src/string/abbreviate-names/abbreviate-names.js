/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here

function abbreviate(name) {
  let initial = [];
  let mots = name.split(" ");
  for (let i = 0; i < mots.length; i++) {
    result = initial.push(mots[i][0].toUpperCase());
  }
  return initial.join(".");
}
// Begin of tests

const assert = require("assert");

assert.strictEqual(typeof abbreviate, "function");
assert.strictEqual(abbreviate.length, 1);

console.log(abbreviate("Alyson Hannigan")); // A.H
assert.strictEqual(abbreviate("Alyson Hannigan"), "A.H");

console.log(abbreviate("Cobie Smulders")); // C.S
assert.strictEqual(abbreviate("Cobie Smulders"), "C.S");

console.log(abbreviate("Neil Patrick Harris")); // N.P.H
assert.strictEqual(abbreviate("Neil Patrick Harris"), "N.P.H");

console.log("🎉");
