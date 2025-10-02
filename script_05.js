//js functions
//functions are the block of resuable code designed to p erform a specific task 
function calculate(l,b){   //function definition with parameters
  let area=l*b;
  return area;
}
let area=calculate(20,40);  //function calling with arguments
console.log("the area of rectangle is:",area);


//Arrow function (modern js)
//its a shorthand syntax for writing functions introduced in ES6,they allow us to create more concise and readable code.
let arrowfun=(a,b)=>{
  return a*b;
}

let mul= arrowfun(30,40);
console.log("the multiply is:",mul);

//task
//wap to input a string and count vowel letters using arrow function

let  countvowel=(str)=>{
  let count=0;
  for(let i of str){
  if(i==="a" || i==="A"|| i==="e" || i==="E" || i==="i" || i==="I" || i==="o" || i==="O"|| i==="u" || i==="U"){
    count++;
  }
}
  console.log(`the number of vowel letters in the string are:${count}`);

}
countvowel("Oii Aaejo");  //7

//Write an arrow function factorial that returns the factorial of a number using recursion.

const factorial=n=>{
 if(n==0) return 1;
 return  n*factorial(n-1);
};

factorial(10);
//for each loop in array(Higher order function/method)
//for each is a method specially used for array to iterate over the elements of an array and execute a provided function for each element 
//Higher order function are those method which either takes another function as parameter or return another function as their output


//syntax
//arrName.ForEach(call back function)
// {
//   taks to perform 
// }

let arr=[1,12,13,32,14,41];
arr.forEach((items,index)=>{
  console.log(`the square of array elements in index ${index} :`,items*items);
})