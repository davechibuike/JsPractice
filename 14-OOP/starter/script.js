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
console.log(Person.prototype);
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
console.log(dave.__proto__);
console.log(dave.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(dave));
console.log(Person.prototype.isPrototypeOf(Person));
//*Think of this as = .isPrototypeOfLinkedObject

Person.prototype.species = 'Homo sapient'; //can be array['Homo sapient', 'Human'];
console.log(dave.species, matilda.species);

console.log(dave.hasOwnProperty('firstName'));
