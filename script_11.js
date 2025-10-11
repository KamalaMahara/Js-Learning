//sync and async in js
//sync: Code runs sequentially, one instruction after the other, in the order it appears.

//Async:Code execution does not wait for a time-consuming task to finish. The program starts the operation and then moves on to the next instructions immediately.
console.log("one");
console.log("two");
setTimeout(() => {
  console.log("hello world");
}, 2000);
console.log("three");
console.log("four");

//callbacks: its a function passed as an aegument to another function.
//sync callback
function sum(a, b) {
  console.log(a + b);
}
function calculate(a, b, sum) {
  sum(a, b);
}
calculate(3, 9, sum);

//async callback
const greet = () => {
  console.log("namaste sansar");
};
setTimeout(greet, 4000);

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
let promise = new Promise((resolve, reject) => {
  console.log("im a promise");
  resolve("sucess");
  // reject("some err occurred");
});
