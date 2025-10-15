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

   options means optional object to define the method (GET,POST,PUT,etc),headers,body,etc
  */
let URl = "https://cat-fact.herokuapp.com/facts";
const getFacts = async () => {
  console.log("fetching data .....");
  let promise = await fetch(URL);
  console.log(promise);
};
