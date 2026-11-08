// // console.log("Inside the script");

// // // accessing the window object
// // // console.log(window);

// // // this == window
// // console.log(this == window);

// // console.log(a); // undefined
// // console.log(window.a);
// // console.log(this.a);
// // var a = 10;
// // console.log(a); // 10
// // console.log(window.a);
// // console.log(this.a);

// let b = 20;
// const c = 30;

// console.log(b);
// console.log(c);

// console.log(x); // stores the function itself

// function x() {
//   console.log("Inside the function x");
// }

// console.log(y); // stores the undefined

// var y = function () {
//   console.log(this);
//   console.log("Inside the function y");
// };

// var z = () => {
//   console.log(this);
//   console.log("Inside the function z");
// };

// x();
// y();
// z();

let obj = {
  speak: function (msg) {
    console.log(msg);
  },
};
console.log(Array.prototype);

let kill = Object.create(obj);
kill.name = "master";
kill.speak("death");

console.log(obj.prototype);
console.log(Object.prototype);
console.log(typeof kill);
console.log(kill);
