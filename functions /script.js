'use strict';

//  Default params

const bookings = [];

const createBooking = function (
  flightNum,
  numOfPassengers = 1,
  price = 200 * numOfPassengers
) {
  // Es5 concept
  //   numOfPassengers = numOfPassengers || 1;
  //   price = price || 200;

  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

// createBooking('LGH');
// createBooking('LGH', undefined, 150);
// createBooking('LGH', 2);

// Fucntions accepting Callback functions
// First order function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function

const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

// transformer('Javascript is awesome', upperFirstWord);
// transformer('Javascript is awesome', oneWord);

// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

// this works because of closures
const greeter = greet('hey');

// greeter('dave');
// greeter('kester');

// greet('hello')('chibuike');

// Using Arrow functions
// First method

// const greeting = niceword => {
//   return name => {
//     console.log(`${niceword} ${name}`);
//   };
// };

//  Second method
const greeting = greet => name => console.log(`${greet} ${name}`);

// const testGreet = greeting('hello ouuu ...');
// testGreet('ma love... lol');
// greeting('hiiii')('chibuike');

//  The call and apply methods

const ethiopian = {
  airline: 'Ethiopian',
  iatacode: 'ETH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} Booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iatacode}${flightNum}`,
      name,
    });
  },
};

// ethiopian.book(356, 'Dave chibuike');
// ethiopian.book(221, 'Kester Dizzy');
// console.log(ethiopian);

const british = {
  airline: 'British',
  iatacode: 'Brt',
  bookings: [],
};

const book = ethiopian.book;

// book(234, 'life is good'); // Won't work due to this keyword is set to undefined
//this keyword depends on how the function is called

// functions are also seen as objects, which can also have acess to methods
// call method

// book.call(british, 112, 'kelvin clan');
// console.log(british);

// book.call(ethiopian, 102, 'david becham');
// console.log(ethiopian);

const swiss = {
  airline: 'Swiss Airlines',
  iatacode: 'Lx',
  bookings: [],
};

// book.call(swiss, 100, 'tom ford');

// apply method
// this basically takes the this and the prams as an array

// const flightData = [300, 'Gorge malawi'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// Bind method
// book(234, 'life is good'); // Won't work due to this keyword is set to undefined
//this keyword depends on how the function is called

const bookSws = book.bind(swiss);
const bookBrt = book.bind(british);
// bookSws(303, 'sally mally');
// bookBrt(101, 'kelly lewi');

// adding a default params with bind method
const bookBrt23 = book.bind(british, 23);
// bookBrt23('kester willy');

// With event listeners
british.planes = 300;
british.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// british.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', british.buyPlane.bind(british));

// Partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));
// same as writting this
// const adddVat = value => value + value * 0.23;

// Test 1
//  first method
// const adVatt = function (value) {
//   return function adVat(rate = 0.23) {
//     console.log(value + value * rate);
//   };
// };
// const vall = adVatt(300);
// vall(0.23);
// adVatt(100)();

//  Test 2
// using arrow func

const adVatt =
  value =>
  (rate = 0.23) =>
    value + value * rate;

// console.log(adVatt(300)());

console.log('........Coding challenge.........');
//

// Coding challenge

const poll = {
  question: 'What is your favorite programmiong language ?',
  options: ['0: Javescript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number ?)`
      )
    );

    // register the answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // poll.displayResults();
    // poll.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 4, 2, 3] }, 'array');
// poll.displayResults.call({ answers: [5, 4, 2, 3] }, 'string');
console.log('.................................');

// Immediately invoked function expressions

// Example

const normalFunc = function () {
  console.log('this will run once');
};
// normalFunc();

// IIFE
(function () {
  // console.log('This will never run again');
})();

// IIFE using javascripts
// (() => console.log('This will never run again'))();

const secureBooking = function () {
  let passengerCount = 1;

  return function () {
    passengerCount++;

    console.log(`${passengerCount} Passengers`);
  };
};

// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

// closures with out returning a func

let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

// console.log(f);
// console.dir(f);
// console.dir(g);

const h = function () {
  const b = 339;

  f = function () {
    console.log(b * 2);
  };
};

// g();
// f();

// h();
// f();
// console.dir(f);

// Example 2

// setTimeout(function () {
//   console.log('TIMer');
// }, 2000);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now Boarding all ${n} Passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  // first method
  // function turnBlue() {
  //   header.style.color = 'blue';
  // }
  // document.querySelector('body').addEventListener('click', turnBlue.bind());

  // second method
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
