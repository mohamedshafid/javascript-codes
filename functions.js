// Function

/*
    1. Function Declaration
    2. Function Expression
    3. Anonymous Function
    4. Arrow Function
    5. Callback Function

    only the function declaration supports the hoisting
*/
// function declaration
function a() {
  console.log("Inside the function a");
}
a();

// function expression
var b = function () {
  console.log("Inside the function b");
};
b();

// anonymous function
setTimeout(function () {
  console.log("Inside the anonymous function");
}, 1000);

// arrow function
var c = () => {
  console.log("Inside the function c");
};
c();

function takeFunction(callback) {
  callback();
}

takeFunction(function () {
  console.log("Inside the callback function");
});
