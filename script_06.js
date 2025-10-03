//DOM METHODS
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


