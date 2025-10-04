// // //DOM METHODS
//getElementById()
let element=document.getElementById("id"); //returns the element with the specified id
console.log(element);
console.dir(element);//shows all properties of the element

//getElementByClassName()
let elements=document.getElementsByClassName("class");//returns a collection of all elements with the specified class name
console.log(elements);
console.dir(elements); //shows all properties of the collection

//getElementByTagName()
let tags=document.getElementsByTagName("p");
console.log(tags); //returns a collection of all elements with the specified tag name

//querySelector()
let firstElement=document.querySelector(".class");//returns the first element that matches a specified css selector
console.log(firstElement); //it returns only one  first element that matches the selector

//querySelectorAll()
let allelements=document.querySelectorAll(".class"); //returns a static nodelist of all elements that matches a specidied css selector
console.log(allelements);//it returns all the elements that matches the selctor .class 

//tagname
let a=document.querySelector(".class");
console.log(a);

//InnerText
console.log(a.innerText);//it returns the plain text contained within the element

let text=document.querySelector("#id")
text.innerText="its the text element changed by inner text property in the id div"; // it sets the content of the element 
console.log(text.innerText);
//innerHTML
console.log(a.innerHTML);//it returns the html content of the element
// a.innerHTML="<h2>good night guys literally its 11:30 pm</h2>";//it sets the html content of the element
// console.log(a.innerHTML);

//textContent
console.log(a.textContent);//it returns the text content of the element including hidden elements

let x=document.querySelector("h2");
console.log(x.innerText)
x.innerText=x.innerText  +" from mnr nepal";
console.log(x.innerText);
 
let ch=document.querySelectorAll(".box");
ch.forEach((e)=>{
  e.style.color="red";
})

for(let div of ch){
  div.style.backgroundcolor="yellow";
}
function check(){
  let char1;
  let length=document.f1.pass.value.length;
  if(length>5){
    char1="good password";
  }
  else{
     char1="poor password";
  }
  document.getElementById("length").innerText=char1;
}
