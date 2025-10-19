//http verbs:HTTP methods (or verbs) tell the server what kind of action the client (like your browser or app) wants to perform on a resource (like data, files, or webpages).When you make a request to a web server (like when you visit a website or use an API), you use one of these methods.
//1.GET:Retrieves (reads) data from the server. It does not change anything on the server.
//2.POST: Sends (creates) new data to the server.
//3.PUT: Updates existing data on the server (replaces the entire resource).

//4.PATCH:Updates part of an existing resource (partial modification).

//5. DELETE: Removes a resource from the server
//6. HEAD:Similar to GET, but only requests headers (no body/content). Used to check metadata.
//AJAX:its a asynchronous JS & XML
//7.OPTIONS:Asks the server which HTTP methods are allowed for a resource.

//8.CONNECT:Converts the request into a transparent TCP/IP tunnel, often used for HTTPS connections.
//9.TRACE:Echoes back the request for debugging or testing purposes.

//JSON :JSON(Javascript Object Notation) is basically a string representation of a JavaScript object.It uses key-value pairs, similar to JavaScript objects, but the keys and string values must be enclosed in double quotes ("").To send or receive data between a server and a web application.Used in APIs, configuration files, and databases (like MongoDB).
//we can convert js objects into json strig.like
// const person = {
//   name: "Kmla",
//   age: 19,
//   country: "Nepal",
// };

// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// // Output: {"name":"Kamala","age":19,"country":"Nepal"}

// //We can convert json string into js objects like:

// const jsObject = JSON.parse(jsonString);
// console.log(jsObject.name);
// // Output: Kamala

//fetch API (Application programming languagek)
//The fetch API provides an interface for (sending/receiving ) resources.it uses Request and Response objects.The fetch() method is used to fetch a resource(data)
//The Fetch API lets us  fetch resources (like JSON data, images, or text) from a URL using the fetch() function, which returns a Promise.

/* syntax:fetch(url, options)
  .then(response => {
    //  handle response
  })
  .catch(error => {
    // handle error
  }); 
   URl means the address we wanna fetch data from 

   options means optional object to define the method (GET,POST,PUT,DELETE,etc),headers,body,etc
  */

let URL = "https://catfact.ninja/facts";

const factsPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

let allFacts = []; // store all facts here
let index = 0; // keep track of which fact to show next

const getFacts = async () => {
  console.log("fetching data .....");
  let response = await fetch(URL);
  let data = await response.json();
  allFacts = data.data; // store fetched facts
  index = 0; // reset index
  showNextFact(); // show first one immediately
};

const showNextFact = () => {
  if (allFacts.length === 0) {
    factsPara.innerText = "No facts loaded yet! Click again.";
    return;
  }

  // show current fact
  factsPara.innerText = allFacts[index].fact;

  // move to next, or loop back to start
  index = (index + 1) % allFacts.length;
};

btn.addEventListener("click", () => {
  // if facts not loaded yet, fetch them first
  if (allFacts.length === 0) {
    getFacts();
  } else {
    showNextFact();
  }
});
