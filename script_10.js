//objects
//An entity having state and behavior(properties and method)
//objects are collections of key–value pairs.Keys are called properties (if values are data) or methods (if values are functions).

//ways to create an object in js
//1.object literal
let student = {
  name: "kmla",
  "full name": "kmla mahara",
  roll: 12,
  weight: 55,
  greet: function () {
    console.log("Namaste sanchai hunuhunxa");
  },
};

console.log(student);
student.greet();
delete student.weight;

//2.new keyword
let user = new Object();
user.name = "prativa";
user.age = 19;

console.log(user);
console.log(user.name);

//nested objects
let employee = {
  name: "sara",
  address: {
    city: "ktm",
    zip: 1234,
  },
};
console.log(employee.address.city); //ktm

//js 2 approaches: 1. prototype-based 2.class-based

//Class
//class is an entity that determines how an object will behave and what the object will contain.its blueprint or set of instruction to build a specific type of object.A class itself doesnot hold values,it describes what an object should have and do .we create objects form a class using the 'new' keyword.

//They contain a special method called constructor. Constructor is a method for creating and initializing an object created within a class.its automatically called when the object of the class is created using new keyword

class Car {
  constructor(name) {
    this.name = name;
  }
  speed() {
    console.log(`${this.name} has highest speed`);
  }
}

let c1 = new Car("lamborghini"); //creating object of class car
c1.speed();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age; //this keyword refes to the current object in a method or constructor
  }
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

let p2 = new Person("kmla", 22);
p2.greet(); // Hi, I am Maya

//Inheritence :its the process of acquiring all the properties and methods of parent class to child class. 'extends' keyword is used to inherit the properties of super class .its of many types:1.single inheritence 2.multi-level inheritance 3.hierarchical inheritance.

//1 single inheritance: when a class inherits from one and only superclass
class Animal {
  eat() {
    console.log("this animal eats food");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}
let d = new Dog();
d.eat();
d.bark();

//2.multilevel inheritance:where a class inherits from another class and then another class inherits from that derived class
class LivingBeing {
  breathe() {
    console.log("takes O2");
  }
}
class Human extends LivingBeing {
  eat() {
    console.log("they eat food");
  }
}
class Puppy extends Human {
  barks() {
    console.log("dog barks");
  }
}
let p = new Puppy();
p.barks();
p.eat();
p.breathe();

//hierarchical inheritance: in this type two or more classes inherit the properties of the single base class.
class Vechicle {
  startEngine() {
    console.log("engine started");
  }
  fuelCapacity() {
    console.log("fuel capacityy is 50 liters");
  }
  speed() {
    console.log("speed is 100km/h");
  }
}

class Bike extends Vechicle {
  HandleType() {
    console.log("bike has straight handlebar");
  }
}
class Bus extends Vechicle {
  color() {
    console.log("bus has beautiful color");
  }
}

let v = new Vechicle();
console.log("vechile properties n methods:");
v.startEngine();
v.fuelCapacity();
v.speed();

let b = new Bike();
console.log("Bike properties and methodsd:");
b.HandleType();
b.startEngine();
b.fuelCapacity();
b.speed();

let bus = new Bus();
console.log("the properties and methods of Bus class:");
bus.color();
bus.startEngine();
bus.fuelCapacity();
bus.speed();

//super keyword:its the reference variable that is used to refer parent class objects.its use to access the parent class properties and methods from their child class in inheritance.
class Superclass {
  message() {
    console.log("this superclass message");
  }
}
class Subclass extends Superclass {
  message() {
    console.log("this is subclass message");
  }
  display() {
    this.message();
    super.message();
  }
}
let msg = new Subclass();
msg.display();

//Error Handling:error handling means detecting, catching, and handling runtime errors so  program doesn’t crash unexpectedly.

//try..catch() block

let x = prompt("enter the first num");
let y = prompt("enter the second num");

try {
  console.log("the division is :", x / y);
} catch (e) {
  console.log("the error is", e.message);
}

console.log("the addition of x and y is:", x + y);
console.log("the subtraction of x and y is:", x - y);

//throw keyword
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero not allowed!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.log("Caught error:", e.message);
}
