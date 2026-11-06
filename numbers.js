// Numbers

import decor from "./utils.js";

/*
    Three new Numbers

        * Infinity
        * - Infinity
        * NaN

*/

var a = 10;
var b = 10.23;
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);

console.log(typeof NaN);

const c = "dfdfd";

if (isNaN(Number(c))) {
  console.log("It is not a number");
}

console.log(typeof Infinity);
console.log(typeof -Infinity);

let x = 10;
let y = 5;

decor("Arithmetic Operation");
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Relation Operation
decor("Relational Operation");
console.log(x > y);
console.log(x < y);
console.log(x == y);

