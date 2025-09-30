//operators and conditional statements in js
 // operatoes are used to perform the operation on data

 //Arithmetic operators  (they need at least 2 operands to perform operation)

 let a=100;
 let b=120;

 console.log("a = ",a +" b =",b);
 console.log("a + b=",a + b);      //addition
 console.log("a - b =",a-b);  //sub
 console.log("a * b =",a*b); //mul
 console.log("a / b =",a/b); //div
 console.log("a % b =",a%b);  //mod
 console.log("a ** b=",a**b); //exponential


 //unary operator (they need only one operand
 //post inr/dcr
 console.log("a++ =",a++); //a=100
 console.log("a++ =",a);   //a=101      // a++ is a post increment  operator, it will first print the value then increses its value by 1

 console.log("a-- =",a--);  
 console.log("a-- =",a);       //a-- is a post decrement operator, it will first print the value of the operand then decreases by 1

 //pre inr/dcr
 console.log("++b =",++b);
 console.log("--b =",--b);    // ++b & --b are pre inr/dcr operator,they will first increse/decrease the value then print.

//Assignment operator
let num=10;                      //10 is assigned to the variable num
num+=2;                         //mum=num+2  its a shorthand 
console.log("the number is:",num);

console.log("the value is",num-=3);
console.log("the multiply :",num*=2);
console.log("the divisioin:",num/=3);
console.log("the square:",num**=2);
console.log("the mode :",num%=2);


//comparision operator
let x=10;
let y=120;
console.log("not eequal to:",x!=y);             //the values are not equal to each other
console.log("not equal to & type :",x!==y);     //the value & their datatype isn't equal
console.log(" equal to:",x==y);                        // this only checks the value equality.ie the actual data is the same
console.log("equal to & type :",x==="10");                // it checks both value equality and datatype.the data types must also match
console.log("greater than :",x>y);
console.log("greater than Or equals to :",x>=y);    // the operand is greater or equal.then only it returns true otherwise false
console.log("less than :",x<y);
console.log("less than or equals to  :",x<=y);

//Logical operator
let num1=10;
let num2=20;
let cod1=(num1==10);
let cod2=(num1==num2);
console.log("the logical operator &&:",(cod1&&cod2));  // both codition must be same then only it will return true
console.log("the logical operator ||:",(cod1||cod2));
console.log("the logical operator !:",!(cod1==cod2));

//task
let mode="white";
let color;

if(mode=="dark")
{
  color="white";
  console.log(color);
}
else{
  color="dark";
  console.log(color);

}
//Ternary operators(3 operands) simpler,compact if-else
// condition?true output:false output;
let user_age=16;
user_age>=16?console.log("you can vote BALEN"):console.log("sorry you need to wait");

//practice question
//get a user to input a number.check if it is a multiple of 5 or not
let number=prompt("enter a number");
if(number%5==0){
  console.log(`the input number ${number} is a multiple of 5`);
}
else{
  console.log(`the input number ${number} isnt a multiple of 5`);
}

/* //wap which can give grades to the student according to their marks scored.
  80-100 -->A
  70-79-->B
   60-69-->C
   50-59-->D */

   let marks=prompt("enter the marks you scored");
   if(marks>=80){
    console.log("kangratulation successful person you got A");
   }
   else if(marks>=70 && marks<=79 ){
    console.log("congratulation successful person you got B");
   }
   else if (marks>=60 && marks<=69 ){
    console.log("congratulation successful person you got c");
   }
   else{
    console.log("vai ye tune kya kar diya. padhae likae kar liyo reels kam kam vejo.tera toh D aaye hain ");
   }