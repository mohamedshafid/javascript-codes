//  Booleans
import decor from "./utils.js";
/*
    False Results:

        * null
        * undefined
        * false
        * empty string
        * zero value
    
    True Results:

        * positive or negative values
        * true
        * empty array
        * empty object
    
    Exception Case:

        * null == undefined
        * undefined == null
        * null != false
        * undefined != false
*/
decor("False Values");

if (!"") {
  console.log("empty string is false");
}

if (!null) {
  console.log("null is false");
}

if (!undefined) {
  console.log("undefined is false");
}

if (!0) {
  console.log("zero is false");
}

if (false) {
  console.log("false is false");
}

decor("True Values");

if ([]) {
  console.log("empty array is true");
}

if ({}) {
  console.log("empty object is true");
}

if (true) {
  console.log("true is true");
}

if (10 && -10) {
  console.log("positive and negative values is true");
}

decor("Exception Case");

console.log(null == undefined);
console.log(undefined == null);

console.log(null === undefined);
console.log(undefined === null);

console.log(null === null);
console.log(undefined === undefined);
