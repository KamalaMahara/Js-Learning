//js Loops and Strings
//loops are used to execute a piece of code again and again till the condition meets


// //for loop
for(let i=1; i<=10;i++){      //initialization; condition; increment/decrement
  console.log("good night");
}

//calculate sum of 1 t0 n
// let sum=0;
// let n=prompt("enter the number to find sum upto");
// for(let i=1;i<=n;i++){
//   sum+=i;
// }
//  console.log("the sum is:",sum);

 //while loop
//  let i=1;
//  while(i<=5){
//   console.log("hello world");
//   i++;
//  }

 //do..while..loop
 //this loop execute at least once and then check the condition
 let j=1;
 do{
  console.log("whats going on gen z");
  j++;
 }while(j<=12);

 //for ..of loop this loop is used to loop through values of an iterable (like arrays, strings, maps, sets) but not in objects.
 // for strings
 let str="kamala";
 let len=0;
 for(let k of str){
  console.log("the char are:",k);
  len++;
 }
 console.log("the length of the string is:",len);

 //for arrays
 let fruits=["aapple","papaya","pineapple","grapes"];
 for(let c of fruits){
  console.log("the fruits are:",c);
 }

 //for..in loop
 let student={
  name:"kamala",
  age:19,
  roll:12,
  faulty:"bca",
 };
  for(let std in student){
    console.log(std,student[std]);
  }

  //task
//   let num=prompt("enter the number of 2 digit ");
//   let guess=13;
// while(num!=guess){
//   num=prompt(" sorry wrong number enter another number");

// }
// alert(" correct guess you win 🎉🎇🎊");


//Strings 
// strings are the sequence of characters
let names="kamalamahara";
console.log(names.length);
console.log(names);

//template literal and string interpolation 
// this uses back-ticks rather than the quotes to define a string. it allows both single and double quotes inside a string.
age=19;
let txt=` \t hello guys its me "kamala"  'mahara' \n im ${age} years old`;

console.log(txt);

//string  function/methods in js
//string length
let user="kjadkaerwerw";
console.log(user.length);