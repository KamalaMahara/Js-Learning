//Arrays
// its a special type of object or variable used to store mltiple values in a single variable.arrays are mutable i.e we can change the array value
let fruits=["apple","pineapple","orange","cherry"];
console.log(fruits[0]);
fruits[1]="banama";
console.log(fruits[1]);
// loop over an array

for(let i=0; i<=fruits.length;i++){
  console.log(fruits[i]);
}

//for of loop
for(let fr of fruits){
  console.log(fr);
}
//we can use string function 
for(let fr of fruits){
  console.log(fr.toUpperCase());
}

//find the sum and average
let arr=[65,56,45,87,88,98,78];
let sum=0,avg=0;
for(let i of arr)
{
  sum+=i;
}
console.log(`the total marks  is ${sum}`);
avg=sum/arr.length;
console.log(` the average marks is ${avg} `);

//for a given array with prices of 5 items: [240,540,650,234,290].all items have an offer of 10% off on them .change the array to store final price after appying offer

let price=[240,540,650,234,290];
for(let i=0;i<price.length;i++){
  let offer=price[i]/10;
  price[i]-= offer;
}
console.log(price);



// Array methods
//1.Push()
let array=["Apple","pineapple","litchi","avocardo","dragon"];
array.push("mango");   //this method adds the elements to the end of the array
console.log(array);

//2.pop()
array.pop();
console.log(array); //this removes the last element from array

//3.shift()
array.shift()
console.log(array); //this removes the first  element from the array
//4.unshift()
array.unshift("cherry");
console.log(array); // this adds the elements to the beginning of the array

//5.concat()
let array2=["momo","noodles","pizza"];
let food=array.concat(array2);
console.log(food);  // this combines 2 or more arrays into a new one

//6.slice() 
console.log(array.slice(0,3)); //this extracts the part of array into new one. slice(start index,end index)

//7.toString()
console.log(array.toString());  //it conerts the array into string 

//8.splice()
let num=[1,2,3,6,5,8];
num.splice(2,0,3020); //this method adds, removes and replaces the elements at specific positions. splice(start index,delete elements,new vslue) simply splice(add,remove,replace)

//practice question
/*Store your 3 favorite colors in an array.

Ask the user for a new favorite color (use prompt()).

Add it to the array and print all colors.*/

let color=["black","blue","purple"];
let newColor=prompt("enter your favorite color");
console.log(color.push(newColor));

/*Store marks of 5 students in an array.

Find the average marks.

Print the highest and lowest marks.*/
let marks=[50,60,54,90,89];
let sum1,average=0;
for(let i=0;i<=marks.length;i++){
  sum1+=marks;
}
console.log(marks);
average=sum1/marks.length;
console.log(average);

let highest = Math.max(...marks);
let lowest = Math.min(...marks);

console.log(`the lowest marks is:${lowest}`);
console.log(`the highest marks is:${highest}`);


