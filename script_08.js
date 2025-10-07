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
