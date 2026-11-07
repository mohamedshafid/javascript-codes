//  Objects

/*
    - It stores the data as key-value pairs
    - it is mutable and dynamic properties can be added
*/

let obj = {
  name: "mohamed hafid",
  age: 21,
  greet: function () {
    console.log(this.name + " hi good morning");
  },
};

console.log(obj);
console.log(obj instanceof Object);
console.log(Object.keys(obj).length);

obj.degree = "cse";

console.log(obj);
obj.greet();

console.log("name" in obj);
console.log(obj.hasOwnProperty("name"));

for (const [key, value] of Object.entries(obj)) {
  console.log(key + " : " + value);
}

const { name, age } = obj; // objection destructuring
console.log(name, age);
