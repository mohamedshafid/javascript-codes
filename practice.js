// Practice

let arr = [10, 20, 30];

arr.forEach((x) => console.log(x));

const arr1 = arr.map((x) => x * 2);
console.log(arr1);

const ans = arr.reduce((acc, curr) => {
  return (acc = acc + curr);
}, 0);
console.log(ans);

let rabbit = {
  name: "mohamed hafid",
  speak: function (line) {
    console.log(this.name + " speaks " + line);
  },
};
rabbit.speak("hello");

let empty = {};
console.log(empty.toString());
console.log(Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(empty.prototype);
Object.prototype.speaks = function () {
  console.log("hello");
};

// console.log(empty);
empty.speaks("hello");

function Rabbit(type) {
  this.type = type;
  
}

let r = new Rabbit("weird");
// console.log(Rabbit.prototype);
r.speak();
