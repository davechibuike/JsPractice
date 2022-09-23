'use strict';

function calcAge(birthYear) {
  let date = new Date();
  const age = date.getFullYear() - birthYear;

  function printAge() {
    let output = `You are ${age} years old, Born in ${birthYear}`;
    // console.log(output);

    if (birthYear >= 1986 && birthYear <= 1996) {
      var mellienial = true;
      // creating new variable with same name as outter scope
      //   const firstName = 'Kester';

      //reassigning outer scope's variable
      output = 'New Output lol';

      const str = `oh, and you're a mellienial ${firstName}`;
      //   console.log(str);

      function add(a, b) {
        return a + b;
      }
      //   console.log(output);
    }

    // console.log(mellienial);
    // console.log(add(2, 3)); only works using strict mode
    // console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Dave';
calcAge(1995);

// eat;
// console.log(eat); //undefined
// var eat = 'im eating yam';
// console.log(eat);

//This keyword and usage

// console.log(this);

const calcThisAge = function (year) {
  const date = new Date();
  const age = date.getFullYear() - year;
  //   console.log(age);
  //   console.log(this);
};

calcThisAge(1995);

const calcThisAgeArrow = year => {
  const date = new Date();
  const age = date.getFullYear() - year;
  //   console.log(age);
  //   console.log(this);
};

calcThisAgeArrow(1995);

const dave = {
  year: 1995,
  calcAge: function () {
    // console.log(this);
    // console.log(2022 - this.year);
  },
};

dave.calcAge();

// Browing methods

const matilda = {
  year: 2002,
};

matilda.calcAge = dave.calcAge;
matilda.calcAge();

// More look into This keyword

// var firstName = 'kizzo';

// const kester = {
//   firstName: 'Chibuike Dave',
//   year: 1995,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// kester.greet();

const kester = {
  firstName: 'Chibuike Dave',
  year: 1995,
  calcAge: function () {
    // console.log(this);
    // console.log(2022 - this.year);

    //  Solution 1
    // const self = this; //can be called self or that
    // const isMillinial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1986 && self.year <= 1996);
    //   //   console.log(this.year >= 1986 && this.year <= 1996);
    // };

    // Solution 2
    const isMillinial = () => {
      //   console.log(this);
      //   console.log(this.year >= 1986 && this.year <= 1996);
    };

    isMillinial();
  },
  greet: () => {
    // console.log(this);
    // console.log(`Hey ${this.firstName}`);
  },
};

kester.calcAge();
kester.greet();

// arguments keyword

const addExpr = function (a, b) {
  //   console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 5, 4, 5, 78);

const addExprArrow = (a, b) => {
  //   console.log(arguments);
  return a + b;
};

// addExprArrow(2, 5);

// Primitives vs Objects

// Primitive types
let lastName = 'Obuzor';
let oldLastName = lastName;

lastName = 'Nwaeze';
console.log(lastName, oldLastName);

// Reference types

const jessica = {
  firstName: 'jessica',
  lastName: 'nwaeze',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'obuzor';

console.log('before marriage :', jessica);
console.log('before marriage :', marriedJessica);

// copying objects

const jessica2 = {
  firstName: 'jessica',
  lastName: 'nwaeze',
  age: 27,
};

const jessicaNew = Object.assign({}, jessica2);
jessicaNew.lastName = 'obuzor';

console.log('before marriage :', jessica2);
console.log('before marriage :', jessicaNew);
