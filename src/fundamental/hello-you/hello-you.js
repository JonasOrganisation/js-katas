/*
Create a function `sayHello` which takes a string as parameter and returns: "Hello {first name}", where {first name} is replaced with the argument value, example:
* sayHello("Barbara") -> "Hello Barbara"

If the argument is empty, null or undefined, return "Hello World":
* sayHello(null) -> "Hello World"

*/

// TODO add your code here

let name = "Barbara";
function sayHello(name) {
  //   if ((name === null) | (name === undefined) | (name === ""))
  if (!name) {
    return "Hello World";
  }
  return "Hello " + name;
}
//(!name) renvoi false comme (name === null) | (name === undefined) | (name === "")

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sayHello, "function");
assert.strictEqual(sayHello.length, 1);
assert.strictEqual(sayHello("Barbara"), "Hello Barbara");
assert.strictEqual(sayHello("Jean-Michel"), "Hello Jean-Michel");
assert.strictEqual(sayHello(""), "Hello World");
assert.strictEqual(sayHello(null), "Hello World");
assert.strictEqual(sayHello(), "Hello World");
// End of tests

console.log("🎉");
