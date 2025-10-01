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

