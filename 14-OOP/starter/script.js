'use strict';

// constructor function
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this
  //   this.calcAge = function () {
  //     console.log(2022 - this.birthYear);
  //   };
};

const dave = new Person('Dave', 1995);
console.log(dave);
// 1. New {} is created
// 2. func is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2010);
const becham = new Person('Becham', 1992);
console.log(matilda, becham);

const jay = 'jay';
console.log(dave instanceof Person);
console.log(jay instanceof Person);
