// Add two numbers entered using prompt() and show result in alert(). 
// let a=prompt("enter the first number");
// let b=prompt("enter the second number");
// let sum=a+b;
// alert("the sum is",sum);

// //Check whether a number is positive, negative, or zero. 
// let x=prompt("enter the number");
// if(x>0){
//   console.log("the number is positive");
// }
// else if(x<0){
//   console.log("the number is negative");

// }
// else{
//   console.log("the number is zero")
// }

// //Check voting eligibility (age ≥ 18). 
// let age=prompt("renter your age");
// (age>=18)? "you can vote":"you cant vote";

// //Display the largest among three numbers. 
// let num1=4;
// let num2=9;
// let num3=2;


// if( num1 >num2 & num1>num2){
//   console.log("num1 is greater");
// }
// else if (num2 > num1 & num2>num3){
//   console.log("num2 is greater");

// }
// else {
//   console.log("num3 is greater ");
// }

//Calculate discount based on purchase amount (20%, 10%, or none).
// let amount=32243;
// if(amount >=50000){
//   console.log("20% discount");
// }
// else if (amount >=20000 ){
//    console.log("10% discount");
// }
// else{
//   console.log("there is no discount at all");
// }

//Display even numbers from 1 to 50. 
// for(let n=1; n<=50; n+2){
//   if(n%2==0){
//     console.log(n);
//   }
  
// }
//Find factorial of a number.
// let f=5;
// let fact=1;

// let light=document.querySelector("#light");
// let dark=document.querySelector("#dark");
// let dtxt=document.querySelector(".dlabel");
// let wtxt=document.querySelector(".label");


// light.addEventListener("click",()=>{
//   wtxt.style.visibility="hidden";
//   light.style.visibility="hidden";
//   dark.style.visibility="visible";
//   dtxt.style.visibility="visible";
//   document.body.style.backgroundColor="black";
//   document.body.style.color="white";
// })
// dark.addEventListener("click",()=>{
//   dtxt.style.visibility="hidden";
//   dark.style.visibility="hidden";
//   light.style.visibility="visible";
//   wtxt.style.visibility="visible";
//   document.body.style.backgroundColor="white";
//   document.body.style.color="black";
// })

//event bubbling and  event.stopPropagation()
// let topParent=document.querySelector("body");
// let parent=document.querySelector(".parent");
// let child=document.querySelector(".child");

// topParent.addEventListener("click",()=>{
//    console.log("this is a top level parent event")
// })

// parent.addEventListener("click",()=>{
//    console.log("this is a  parent event");
// })
// child.addEventListener("click",()=>{
//    console.log("this is a child event");
//    event.stopPropagation();
// })

// let link=document.querySelector("a");
// link.addEventListener("click",()=>{
//   event.preventDefault();
//   console.log("link is clicked but default action is prevented");
// })


// const mainQuoteText=document.querySelector(".quote-text");
// const quoteAuther=document.querySelector(".author");
// const quoteBtn=document.querySelector(".new-quote-btn");
// const copyBtn=document.querySelector(".copy-btn");
// const copyMsg=document.querySelector(".copy-msg");
// const shareBtn=document.querySelector(".share-btn");



// async function getQuote(){
//   try{
//     const response= await fetch("http://api.quotable.io/random");
//     const data=await response.json();
//     console.log(data);
    
//     mainQuoteText.innerText=data.content;
//     quoteAuther.innerText=data.author;

//   }
//   catch(error){
//     console.error("error fetching quote:",error);
//   }
// }

// let copyTxt = async () =>{
//   const quoteText = mainQuoteText.innerText;
//   await navigator.clipboard.writeText(quoteText);
//   copyMsg.style.opacity = "1";
//   setTimeout(() =>{
//     copyMsg.style.opacity ="0"
//   }, 1000)
// }
 

// quoteBtn.addEventListener("click",getQuote);
// copyBtn.addEventListener("click",copyTxt);
// shareBtn.addEventListener("click", async ()=>{
//   try {

//         await navigator.share({
//             title: "Motivational Quote",
//             text: "Success comes from consistency.",
//             url: "https://yourwebsite.com"
//         });

//         console.log("Shared Successfully");

//     } catch (error) {

//         console.log("Sharing Failed");

//     }

// });
// num1=document.querySelector("input[name='num1']");
// num2=document.querySelector("input[name='num2']");
// result=document.querySelector("#result");

// document.querySelector("#add").addEventListener("click",(e)=>{
//   let sum=Number(num1.value)+Number(num2.value);
//   result.innerText=sum;
//   e.preventDefault();

// })
// document.querySelector("#sub").addEventListener("click",(e)=>{
//   let sub=Number(num1.value)-Number(num2.value);
//   result.innerText=sub;
//   e.preventDefault();
// })
// document.querySelector("#mul").addEventListener("click",(e)=>{
//   let mul=Number(num1.value)*Number(num2.value);
//   result.innerText=mul;
//   e.preventDefault();
// })
// document.querySelector("#div").addEventListener("click",(e)=>{
//   let div=Number(num1.value)/Number(num2.value);
//   result.innerText=div;
//   e.preventDefault();
// })
// document.querySelector("#mod").addEventListener("click",(e)=>{
//   let mod=Number(num1.value)%Number(num2.value);
//   result.innerText=mod;
//   e.preventDefault();
// })

class BankAccont{
  constructor(balance=0){
    this.balance=balance;
  }
  deposit(amount){
    if(amount>0){
      this.balance +=amount;
      return `${amount} has been sucessfully deposited`
    }
    return ` please enter the valid amount`
  }
  withdraw(amount){
    if(amount>0 && amount < this.balance){
      this.balance-=amount;
return ` ${amount} has been withdrawn sucessfully`
    }
    
    return` insufficient balance in your account to withdraw ${amount}`
  }

  checkBalance(){
 return ` your current balance is ${this.balance}`
  }
}

const account= new BankAccont();
const amountInput= document.getElementById("amount");
const outputMsg=document.getElementById("outputmessage");

document.getElementById("deposit").addEventListener("click",()=>{

  const Amount= parseFloat(amountInput.value)
outputMsg.textContent=account.deposit(Amount); 
 
})
document.getElementById("withdraw").addEventListener("click",()=>{
   const Amount= parseFloat(amountInput.value)
   outputMsg.textContent=account.withdraw(Amount); 
})

document.getElementById("check").addEventListener("click",()=>{
  outputMsg.textContent=account.checkBalance(); 
})