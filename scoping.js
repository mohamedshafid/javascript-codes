// scoping

/*
    var 
        * it is the global and function scope

    let, const
        * it is the block scope
*/

var a = 10; // global scope

{
  let b = 20;
  const c = 30;
  var d = 40;
}

function x() {
  console.log(a);
}
x();

// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined
console.log(d);

function f() {
  // all three variables are the function scope can't able to access outside the function
  var x = 10;
  let y = 20;
  const z = 30;

  function f2() {
    // this is called as the lexical scoping & scope chain it means accessing the parent lexical environemtn
    console.log(x);
    console.log(y);
    console.log(z);
  }
  f2();
}

f();
