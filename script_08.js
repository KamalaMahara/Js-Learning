//Built in js objects
//Numbers
//js automatically ccreates number objects to store numeric values in a script.
let n = new Number(2123.123213);
console.log(n.toExponential(4)); // this method returns a string representing the number in exponential notation with two digits after the decimal point.

console.log(n.toFixed(2)); // this method returns a string representing the number in fixed-point notation with two digits after the decimal point
console.log(n.valueOf()); //this method returns the primitive value of a Number Object.

//Math
/*The JavaScript Math object allows us  to perform mathematical tasks.
The Math object is static.
All methods and properties can be used without creating a Math object first.*/
console.log(Math.PI); //returns the value of PI
console.log(Math.sqrt(16)); // returns the square root of 16 i.e 4
console.log(Math.abs(-4.45)); //returns the absolute(positive) value of -45 i.e 4.45
console.log(Math.pow(2, 4)); //returns the value of 2 to the power of 4 i.e 2*2*2*2=16
console.log(Math.random()); //returns a random number between 0 and 1
console.log(Math.round(3.141565933589739)); // returns the neaarest integer simply it roundoffs the decimal value into a integer
console.log(Math.ceil(3.141565933589739)); // returns the value rounded up to its nearest integer.simply returns the ceiling value of the decimal
console.log(Math.floor(3.141565933589739)); //returns the value rounded down to its nearest integer.returns floor value of the decimal
console.log(Math.trunc(45.141565933589739)); //returns the interger part of the decimal number
console.log(Math.sin((90 * Math.PI) / 180)); //Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).If you want to use degrees instead of radians, you have to convert degrees to radians.Angle in radians = Angle in degrees x PI / 180.
console.log(Math.cos((45 * Math.PI) / 180)); // returns the value of cos 45 degree i.e 1/root 2
console.log(Math.max(12, 33, 54, 90, 3.54)); //returns the highest value in a list
console.log(Math.min(12, 33, 54, 90, 3.54)); //returns the lowest value in a list
console.log(Math.log(2));
console.log(Math.log2(23)); //returns the base 2 logarithm of 23

//Date objeects
console.log(new Date());
console.log(new Date(2025, 10, 7, 5, 11)); // new Date(year,month,date,hour,minute,second,milisecond)

//methods of Date objects

let date = new Date();
console.log(date); // it returns present day's date and time

let year = date.getFullYear();
console.log(year);

let month = date.getMonth();
console.log(month);

let month_date = date.getDate();
console.log(month_date);

let hours = date.getHours();
console.log(hours);

let minute = date.getMinutes();
console.log(minute);

const clock = () => {
  let date = new Date();
  document.querySelector("#clock").innerHTML = date;
  setTimeout(clock, 1000);
};
clock();

//RegExp object
//Regexp object offers all the neccessary methods to test and match regular expression patterns against strings of character.Regular expressions are a built-in data typethe RegExp object is a wrapper for the regular expression primitive.A regular expression object can be created by using RegExp() constructor: syntax: let re1=new RegExp(pattern[,flags]); pattern represents the regular expression & flags repressents sequence of modifiers.
//way 1 to create RegExp : constructor function
let re_match = new RegExp("hello");

//way2 to create RegExp :literal notation
let pattern = /hello/; //This matches the word "hello"

//RegExp methods:

//1. test() → checks if a match exists (returns true/false)
let regex = /cat/;
console.log(regex.test("I have a cat.")); // true
console.log(regex.test("I have a dog.")); // false

//2.exec() → returns the first match as an object (or null if not found)
let regex_pattern = /dog/;
console.log(regex_pattern.exec("My dog  is cute.")); // if there is no dog it will return null
//// ["dog", index: 3, input: "My dog is cute.", groups: undefined]

/*3.String methods with regex:
 match() → returns matches
 search() → returns index of first match
 replace() → replaces matched text
 split() → splits string by regex  
 */
let str = "apple, banana, orange";
console.log(str.match(/banana/)); // ["banana"]
console.log(str.search(/orange/)); // 15 (index)
console.log(str.replace(/apple/, "mango")); // "mango, banana, orange"
console.log(str.split(/, /)); // ["apple", "banana", "orange"]

//4.toString() → Returns a string representation of the RegExp object including the slashes / / and any flags
let regex3 = /hello/gi;
console.log(regex3.toString());
// Output: "/hello/gi"

//RegExp Properties
//The properties of a regex are called flags. They are single letters added after the closing slash of the pattern (/). They change how the search is performed.

//1.source → Shows the text of the pattern (without the slashes / /).
let regex4 = /hello/i;
console.log(regex4.source); // "hello"

//2.global (g) → g flag, it continues searching through the entire string and finds all possible matches.
let text = "Apple, Banana, Apple pie, Orange";
let regex_single = /Apple/; // No 'g'
let regex_global = /Apple/g; // With 'g'
let result = text.match(regex_global);
console.log(result);

// Using regex_single (finds only the first "Apple"):
// Result: ["Apple"]

// Using regex_global (finds BOTH "Apple" and "Apple"):
// Result: ["Apple", "Apple"]

//3.gnore Case Flag (i) → The i flag makes the search case-insensitive, so it doesn't care if the letters are uppercase or lowercase.
let text1 = "Search for The Cat";
let regex_sensitive = /cat/; // No 'i'
let regex_insensitive = /cat/i; // With 'i'

// Using regex_sensitive (fails to find "Cat"):
// Result: null (No match)

// Using regex_insensitive (successfully finds "Cat"):
// Result: ["Cat"]
/*4.Multiline Flag (m)→ This flag is important when your string has multiple lines (like a paragraph with line breaks). It changes the behavior of two special regex characters: ^ (start of the string) and $ (end of the string).
Without m: ^ only matches the very beginning of the entire string.
With m: ^ matches the beginning of the entire string AND the beginning of every new line. The same applies to $ at the end of lines.*/

let text2 = "Line 1\nLine 2\nLine 3"; // '\n' means a new line

// Example: Search for a line that starts with "Line"
let regex_multiline = /^Line/gm; // The 'g' is often used with 'm'
// This will find "Line" at the start of Line 1, Line 2, AND Line 3.
// Result: ["Line", "Line", "Line"]
