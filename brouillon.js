/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/

function build(n) {
  if (n === null || typeof n !== "number") {
    throw new TypeError();
  }

  if (n <= 0) {
    throw new RangeError();
  }
  let array = [];

  for (let i = 0; i < n; i++) {
    const numStar = 2 * i + 1;
    const numSpace = n - i - 1;

    const line =
      " ".repeat(numSpace) + "*".repeat(numStar) + " ".repeat(numSpace);

    array.push(line);

    console.log("result:", result);
  }
}
