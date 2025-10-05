//DOM -Attributes
//setAttribute()
let element=document.querySelector("div");
console.log(element);
element.setAttribute("class","mydiv");
console.log(element); // this method is used to set the attribute or modify the value of an existing attribute on html element

//getAttribute()
let attr=element.getAttribute("class");
console.log(attr);
 // this method is used to get the value of an attribute on html element

 //removeAttribute()
 element.removeAttribute("class");
 console.log(element);
 //this method is used to  remove an attribute from html element

 //hasAttribute()
 let ispresent=element.hasAttribute("class");
 console.log(ispresent);
 //this method is used to check whether an attribute is present on html element or not. it returns true or false 

 //toggleAttribute()
 element.toggleAttribute("class");
 console.log(element);
 //this method is used to toggle an attribute on html element.if the attribute is present it removes it otherwise it adds it.


//DOM -Style
//style attribute is used to directly access or modify the inline styles of an html element.
element.style.color="blue";
element.setAttribute("style","background-color:yellow" ,"font-size:20px","font-wight:bold");
//setAttribute() is used to set multiple styles at once.

//CreateElement() this method is used to create a new html element.this element doesnt appear on the page until we add(append/insert) it to the DOM using methods like appendchild() ,append(),insertBefore()etc.
let newElement=document.createElement("p");
newElement.innerText="this is a new paragraph";
console.log(newElement);
element.appendChild(newElement); //its used insert the new element at the end of the parent element. syntax : parentElement.appendChild(newElement);

//prepend(): it insert the new element at the beginning of the parent element
element.prepend(newElement);

//before(): it insert the new element before the parent element.parent element ko size(height,width) vanda exactly agadi rakxa
element.before(newElement);

//after:its same as before but inserts after the parent element
element.after(newElement);
//remove():it removes the element from the DOM 

//EVENTS IN JS
//an event is an action or occurance,the state of an objecct that we can respond to it.like,clicking a button,hovering over an element etc

//event handler : this is a function that gets executed when a specific event occurs.its where we define the behavior or logic we want to perform in response to the event

function doubleClick(){
  alert("button was clicked");
}
//event listener:its the mechnism that waits for an event to occur and then triggers the associated event handler function when the event happens
 let btn=document.querySelector("button");
 btn.addEventListener("dblclick",doubleClick);// syntax: element.addEventListener("event",eventHandlerFunction);

 //methods to appy events
 //1.inline events
//2.event handler
let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//   btn1.setAttribute("style", "color:white;border-radius:30px; background-color:blue; border:solid 1px yellow;");
// }


// Event Object
//when an event occurs,an event object is automatically created and passed to the event handler function as an argument.this object contains the details about the event that occured,such as the type of event,the target element,the mouse position etc. syntax: node.event=(event objects variable)=>{}
btn1.onclick=(evt)=>{
  console.log(evt);
}
//peoperties of event object
//1.type: it returns the type of event that occurred
btn1.onclick=(evt)=>{
 console.log(evt.type);
}



//2.target:it returns the element that triggered the event
btn1.onclick=(evt)=>{
  console.log(evt.target);
}

//3.clientX and clientY:it returns the x and y coordinates of the mouse pointer relative to the viewport when the event occured 
btn1.onclick=(evt)=>{
  console.log(evt.clientX,evt.clientY);
}

//Event Listeners: 
//1.addEventListener():this method is used to attach an event listener to an element.it takes two arguments:the type of event to listen for and the event handler functioin to be executed when the event occurs.
// event handling ko lagi yo method best hunxa kinaki jasto inline event le html element mai event handling grxa jasko drawback, code messy r bulkey hunxa ani yo vanda better way vaneko event handler ho jasma event hanling js file ma garinxa but yesle euta matra event handler attach garxa tessaile eutai node ma nultiple event handler attach garnu xa vane yo method use garinxa

//syntax : element.addEventListener(event,eventhandlerfunction);
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
  btn2.setAttribute("style", "color:white; border:solid 2px green;background-color:blue; border-radius:20px;");
})
btn2.addEventListener("click",()=>{
 alert("Thanks for your support 😘");
})
let para1=document.querySelector("#para1");
let btn3=document.querySelector("#btn3");
let likes=()=>{
 para1.innerText="thanks for liking ";
}
btn3.addEventListener("dblclick",likes)

//2.removeEventListener():this method is used to remove an event listener from an element.
//syntax:element.removeEventListener(event,eventhandlerfunctioinn)
btn3.removeEventListener("dblclick",likes)

//UI events 
/* load,unload,error,resize,scroll

Keyboard events
keydown,keyprress,keyup

Mouse events
click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout

form events
focus,submit,change,blur etc
*/

//Event propagation
let parent = document.querySelector("#parent");
  let child = document.querySelector("#child");

  parent.addEventListener("click", () => {
    alert("Parent Div clicked!");
  });

  child.addEventListener("click", () => {
    alert("Child Button clicked!");
  });
  //event propagation vannale event handler function ko execution order lai bujhauxa when multiple event listeners are attached to nested elements.here parent div is the outer element and child button is the inner element.when we click on the child button both the child buttons and parent div event handlers are triggered.ho yessailae vanxa event propagation

  //task:- mode button
  let currentMode="light";
  let modebtn=document.querySelector("#mode");
  modebtn.addEventListener("click",()=>{
    if(currentMode==="light"){
      document.body.setAttribute("style","background-color:black;color:white");
     currentMode="dark";
    }
    else{
      document.body.setAttribute("style","background-color:white;color:black");
      currentMode="light";
    }


  })

