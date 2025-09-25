//js Loops and Strings
//loops are used to execute a piece of code again and again till the condition meets


// //for loop
for(let i=1; i<=10;i++){      //initialization; condition; increment/decrement
  console.log("good night");
}

//calculate sum of 1 t0 n
let sum=0;
let n=prompt("enter the number to find sum upto");
for(let i=1;i<=n;i++){
  sum+=i;
}
 console.log("the sum is:",sum);

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