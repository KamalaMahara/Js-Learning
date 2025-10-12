//sync and async in js
//sync: Code runs sequentially, one instruction after the other, in the order it appears.

//Async:Code execution does not wait for a time-consuming task to finish. The program starts the operation and then moves on to the next instructions immediately.
// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("hello world");
// }, 2000);
// console.log("three");
// console.log("four");

// //callbacks: its a function passed as an aegument to another function.
// //sync callback
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculate(a, b, sum) {
//   sum(a, b);
// }
// calculate(3, 9, sum);

// //async callback
// const greet = () => {
//   console.log("namaste sansar");
// };
// setTimeout(greet, 4000);

//Callback Hell :nested callbacks stacked below one another forming a pyramid structure.(pyramid of Doom).this style of programming becomes difficult to understand and manage.Callback Hell happens when multiple asynchronous operations are nested inside each other, each depending on the previous one’s result.

// const cart = ["laptop", "s25", "mouse", "heels"];

// api.createOrder(cart, () => {
//   api.proceedPayment(() => {
//     api.showOrderSummary(() => {
//       api.updateWallet();
//     });
//   });
// });
//Promises:promise is for "eventual " completion of task.its an object and a solution to callback hell.Syntax ti create promise: let promise=new Promise((resolve,reject)=>{..}) .here resolve and reject are callbacks.it has three states :pending,fullfilled (resolved),rejected
// //creating promise
// // let promise = new Promise((resolve, reject) => {
// //   console.log("im a promise");
// //   resolve("sucess");
// //   // reject("some err occurred");
// });
//using promise, .then() & .catch()
//promise.then((res)=>{...})
//promise.catch((res)=>{...})

const getPromise = () => {
  // 1. ADD 'return'
  return new Promise((resolve, reject) => {
    console.log("i am a promise");
    // resolve("success");
    reject("network error");
  });
};

// 2. The variable 'proomise' now holds the returned Promise object
let proomise = getPromise();

// 3. Call .then() on the specific Promise instance (proomise), not the global Promise constructor
proomise.then((sus) => {
  console.log("promise fulfilled", sus);
});

Promise.catch((err) => {
  console.log("rejected ", err);
});

//promise chain
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("sucess");
    }, 4000);
  });
}
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("sucess");
    }, 4000);
  });
}
console.log("Fetching data1....");
asyncFunc1().then((re) => {
  console.log(re);
  console.log("fetching data2.....");
  asyncFunc().then((res) => {
    console.log(res);
  });
});

//Async-Await:async function always returns apromise.Syntax: async function myfunction(){..}
//await pauses the execution of its surrounding async function until the promise is settled.

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}
(async function getWeatherData() {
  await api(); //first call
  await api(); //second call
})();

//IIFE :Immediately Invoked Function Expression
//IIFE  is a function that is called immediately as soon as it is defined
//syntax: (function() { ... })();
(function () {
  // Code inside this function runs immediately
  console.log("I run right now!");
})();
