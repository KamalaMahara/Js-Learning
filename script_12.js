//advance js concepts
//array destructuring : its js ES6  feature that allows us to extract values from arrays assign them to individual variables in a single,simple statement.

const user = ["kamala", 12, "mnr"];

//old way of extracting the values
// const name=user[0];
// const grade=user[1];
// const location=user[2];

//new way by destructuring
// const [naam, grade, address] = user;
// console.log(naam, grade, address);

//object destructuring : its ES6 feature that allows to extract properties from an object and assign them to variables using a simple n clean syntax.

const Person = {
  name: "kmla",
  age: 19,
  address: {
    country: "Nepal",
    city: "mnr",
  },
  jobs: [
    { role: "manager", whrs: 5 },
    {
      role: "devloper",
      whrs: 9,
      salary: 200000,
      activities: ["sports", "trainig"],
    },
    { role: "designer", whrs: 10, salary: 1300000 },
  ],
};

// //old way
// const name = Person.name;
// const age = Person.age;
// const addres = Person.address.city;
// const job = Person.jobs[0].role;
// console.log(job, addres);

// new way by destructuring
const {
  name,
  age,
  address: { city },
  jobs: [, { role, activities }],
} = Person;
console.log(name, age, city, role, activities);

//Nullish coalescing :The nullish coalescing operator (??) returns the right-hand value only if the left-hand value is null or undefined.?? gives a fallback value only when the first value is null or undefined (not 0, false, or empty string).
let value = null;
let value1 = undefined;
let isPresent = false;

let present = isPresent ?? "present";
console.log(present);
let finalvalue = value ?? "codecurly";
console.log(finalvalue);

//Hoisting:Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope during the compile phase — before the code is executed.

//1.functions declaratioin are hoisted completely
greet();
function greet() {
  console.log("Namaste sansar");
}

//2.var declarations are hoisted, but not the value becase the initialization happens later
console.log(a); //undefineed (not err)
var x = 90;

//what actually happens behind the scenes:
/* var a; //declaration hoisted 
console.log(a);
a=90; */

//3.  let and const are hoisted but in a "Temporal Dead Zone"
console.log(a); // ❌ ReferenceError
let a = 5;

//With let and const, hoisting still happens internally, but they are placed in a Temporal Dead Zone (TDZ) — meaning we  can’t access them before declaration.

//Spread Operator:The spread operator (...) in JavaScript is used to expand elements of an array or object into individual elements or properties. It’s commonly used for copying, merging, and passing elements.

//copying an array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];
console.log(arr2); //[1,2,3,4,5]

//combining array
const x = [1, 3];
const y = [4, 5];

const combined = [...x, ...y];
console.log(combined); //[1,3,4,5]

//passing array values as function arguments
function sum(p, q, r) {
  return p + q + r;
}
const nums = [10, 20, 30];
console.log(sum(...nums));

//spread in objects
//copying an object
const Person1 = { name: "kmla", age: 19 };
const copy = { ...Person1 };
console.log(copy);

//merging objects
const info = { country: "Nepal" };
const details = { name: "Kmla", age: 19 };
const merged = { ...info, ...details };

console.log(merged);
// { country: "Nepal", name: "Kamala", age: 19 }

//rest operator:The rest operator “gathers” items into one place, while the spread operator “spreads” them out.

const fruits = ["apple", "banana", "mango", "orange"];
const [first, second, ...restFruits] = fruits;

console.log(first); // apple
console.log(second); // banana
console.log(restFruits); // ["mango", "orange"]
