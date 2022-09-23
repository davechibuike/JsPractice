'use strict';

const flight = 'LH321';
const jonas = {
  name: 'Jonas Sm',
  passportNum: 2473674891,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh909';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passportNum === 2473674891) {
    console.log('Checked In');
  } else {
    console.log('Wrong Passport');
  }
};

// console.log(flight, jonas);
// checkIn(flight, jonas);
// console.log(flight, jonas);

const oneWord = str => str.replaceAll(' ', '').toLowerCase();

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`original str: ${str}`);
  console.log(`Transformer str: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// transformer('JavaScript is the best', upperFirstWord);

// Js uses callBacks all the time
// const high5 = function () {
//   console.log('👋🏼');
// };

// document.querySelector('body').addEventListener('click', high5);
// ['dave', 'john', 'mark'].forEach(high5);

//  Functions that return functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greeterHey = greet('hey');
// console.log(typeof greeterHey);
// greeterHey('dave');
// greeterHey('kizzy');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// greetArrow('hey')('kester');

//  CALL AND APPLY METHODS
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(234, 'Davie kizzy');
// lufthansa.book(254, 'john kenody');
// console.log(lufthansa);

const eurowing = {
  airline: 'Eurowing',
  iataCode: 'EW',
  bookings: [],
};

// copying a method to different objects using call and apply

const bookFn = lufthansa.book;

//using it
// Call method
// bookFn.call(eurowing, 301, 'amaka oluchi');
// bookFn.call(lufthansa, 256, 'kelvin durant');

// console.log(eurowing);
// console.log(lufthansa);

const swissairlines = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

// Apply Method
// apply method  takes the argument as an array // ps : not used in morden js
// const swissData = [501, 'john kenoly'];
// bookFn.apply(swissairlines, swissData); // same 01
// console.log(swissairlines);
// bookFn.call(swissairlines, ...swissData); // same 01

// console.log('..... Bind Method........');

// Bind method
// bookFn.call(eurowing, 301, 'amaka oluchi');
// const bookEuroWing = bookFn.bind(eurowing);
// bookEuroWing(502, 'daniel durant');
// console.log(eurowing);

// lets book for only flight 23 eurowing
const euroWing23 = bookFn.bind(eurowing, 23);
// when we specify parts of our app ie parameters its called partial application
// euroWing23('david bikiey');
// euroWing23('john bikiey');
// console.log(eurowing);

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// temp make it work
// lufthansa.buyPlanes();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// partial application of bind

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.2, 100));
//now adding vat but binding a specific rate
const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));
// console.log(addVat(23));
//
//challenge rewrite this addtax and addvat using a func returning a func

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
// console.log(addVat2(100));
// console.log(addVat2(23));

// coding challenge
const poll = {
  question: 'What is your favorite programming language ?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number) `
      )
    );
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.answerpoll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//  Closures

// A closure gives a function access to the variables in its parent function even when the parent function has returened. the function keeps a reference to its outter scope.

const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} Passangers.`);
  };
};

const booker = secureBooking();
booker();
booker();

console.dir(booker);

// More examples of closures
//  Example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f finction
h();
f();

//  Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passeng ers.`);
  }, wait * 1000);

  console.log(`Will start Boarding in ${wait} seconds`);
};

boardPassengers(180, 5);

// coding challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
