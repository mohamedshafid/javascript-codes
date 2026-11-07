// Arrays

/*
    - Arrays in javascript is the class
    - The typeof the array will be the object
    - Array is mutable in javascript
*/

// There are two types of creating the array
let arr = [10, 20, 30];
let copyArr = arr;
console.log(arr.length);
console.log(arr.at(0)); // out-of-range it is undefined
console.log(arr[10]); // out-of-range it is undefined
console.log(arr.concat([40, 50])); // create the new array
// console.log(arr);
console.log(arr.fill(10));
console.log(arr.find((x) => x === 10));
console.log(arr.findIndex((x) => x === -1));
console.log(arr.includes(10));
// console.log(arr.push(10));
console.log(arr.shift()); // remove the element from the front
console.log(arr.unshift(100)); // add the element to the front
console.log(arr.slice(1, 2));
console.log(arr.splice(1, 2));
// console.log(copyArr);
console.log(arr instanceof Array);
console.log(arr);

// const newArr = new Array();
