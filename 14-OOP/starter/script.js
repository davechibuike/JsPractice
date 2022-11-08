'use strict';

// constructor function
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this, Use prototype rather
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
};

const dave = new Person('dave', 1995);
// 1. New {} is created
// 2. func is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically returns {}

const matilda = new Person('matilda', 2010);
const becham = new Person('becham', 1992);
// console.log(dave, matilda, becham);

// const jay = 'jay';
// console.log(dave instanceof Person);
// console.log(jay instanceof Person);

//* Prototypes
// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

Person.prototype.upperFirstName = function () {
  let fName =
    this.firstName.split('')[0].toUpperCase() + this.firstName.slice(1);
  console.log(fName);
};

//* Using prototypes
// dave.calcAge();
// dave.upperFirstName();

// * View all prototypes
// console.log(dave.__proto__);
// console.log(dave.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(dave));
// console.log(Person.prototype.isPrototypeOf(Person));
//*Think of this as = .isPrototypeOfLinkedObject

Person.prototype.species = 'Homo sapient'; //can be array['Homo sapient', 'Human'];
// console.log(dave.species, matilda.species);

// console.log(dave.hasOwnProperty('firstName'));
// console.log(dave.__proto__);
// console.log(dave.__proto__.__proto__); //This would bring the main object propreties
// console.log(dave.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

//? Example
const arr = [2, 3, 4, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8, 9, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype);

//! Add a prototype to get all the unique values in an Array
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1.__proto__);

// console.dir(x => x + 1);

//! Coding challenge
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} Km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} Km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();

// bmw.break();
// bmw.break();
// bmw.break();
// bmw.break();

// mercedes.accelerate();
// mercedes.break();

// ES6 Class

//*Class experssion
// const PersonC = class {};

//*Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.currentYear = new Date().getFullYear();
  }

  //* Methods would be added to .prototype property
  calcAge() {
    const age = this.currentYear - this.birthYear;
    console.log(age);
    return age;
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  //? Set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) return (this._fullName = name);
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }
}

const david = new PersonCl('david Chibuike', 1993);
// console.log(david);
// david.calcAge();
// david.greet();
// console.log(david.age);

/*
Rules about Classes

1. Classes are not Hoisted

2. Classes are first class Citizens : meaning they can be passed into functions and return them from functions

3. Classes are exceuted in strict mode
*/

const walter = new PersonCl('walter white', 1990);

//* Getters and Setters
const account = {
  name: 'Dave Kester',
  movements: [233, 12, 45, 366, 500, 300],

  //* Using Getters
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //* Using Setters
  set latest(mov) {
    this.movements.push(mov);
  },
};
// this is helpful when needed to read something as a property but do some calculations
// console.log(account.latest);

// Using setters
account.latest = 50;
// console.log(account.movements);

//* Static methods

PersonCl.hey = function () {
  // console.log('Hey there 👋🏼');
  // console.log(this);
};

PersonCl.hey();
// david.hey();  //wont work because hey mathod is static and not a prototype
