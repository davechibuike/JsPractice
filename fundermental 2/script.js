"use strict";
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence);
// console.log("Yaay you can Drive ;)");

// const interface = "Audio";
// const private = 5342;

function loggger() {
  console.log("Dave here");
}

// calling, invoking, running a function
// loggger();

function fruitProcessor(apple, orange) {
  const juice = `Juice with ${apple} Apples and ${orange} Oranges. `;
  return juice;
}

const appleOrangeJuice = fruitProcessor(0, 3);
// console.log(appleOrangeJuice);

// using normal functions
function percentageOfWorld(country, population) {
  String(country);

  const percentage = (Number(population) / 7900) * 100;
  const result = `${country} Has ${population} million peple, Which is about ${percentage}% of the world.`;
  return result;
}

const countryPercent = percentageOfWorld("China", 1441000000);

// using arrow functions
const percentageOfWorld2 = (country, population) => {
  String(country);

  const percentage = (Number(population) / 7900) * 100;
  const result = `${country} Has ${population} million peple, Which is about ${percentage}% of the world.`;
  return result;
};

const countryPercent2 = percentageOfWorld2("Nigeria", 36000000);
// console.log(countryPercent2);

function getYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return Number(currentYear);
}

// Function Declearation
function calcAge1(birthYear) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear - birthYear;
}

const age1 = calcAge1(1995);

// Function Expression
const calcAge2 = function (birthYear) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear - birthYear;
};

const age2 = calcAge2(1995);

// Arrow Functions
const calcAge3 = (birthYear) => getYear() - birthYear;

const age3 = calcAge3(1995);

// console.log("Func Decleration :", age1, "Expression :", age2, "Arrow:", age3);

// More Arrow Functions

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = getYear() - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} Years.`;
};

// console.log(yearsUntilRetirement(1986, "Bob"));

// Functions calling other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);
  const juice = `Juice with ${applePieces} Apples and ${orangePieces} Oranges. `;
  return juice;
}

// console.log(fruitProcessor(2, 3));

// Reviewing Functions
const calcAge = function (birthYear) {
  return getYear() - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} Years.`;
  } else {
    return `${firstName} retires in ${retirement} Years.`;
  }
};

// console.log(yearUntilRetirement(1995, "John"));

// Coding Challenge

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphins = calcAverage(44, 23, 71);
let koalas = calcAverage(65, 54, 41);

const checkWinner = function (firstTeam, secondTeam) {
  if (firstTeam >= 2 * secondTeam) {
    return `Dolphins Win (${firstTeam} VS ${secondTeam})`;
  } else if (secondTeam >= 2 * firstTeam) {
    return `Koalas Win (${secondTeam} VS ${firstTeam})`;
  } else if (firstTeam === secondTeam) {
    return `Both Teams Draw  (${firstTeam} VS ${secondTeam})`;
  } else {
    return "No Team Wins...";
  }
};

// console.log(checkWinner(dolphins, koalas));
// console.log(checkWinner(100, 200));

dolphins = calcAverage(85, 54, 41);
koalas = calcAverage(23, 34, 27);

// console.log(checkWinner(dolphins, koalas));

////////////////////////////////////////////////////////////////////
// Arrays
/*
const y = new Array(1995, 1996, 1997, 1998, 1999, 2000);

const friends = ["kester", "tolu", "buchi"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends[friends.length - 2]);

friends[2] = "jay";
console.log(friends);

const firstName = "kester";
const kester = [firstName, "kelvin", getYear() - 1995, "Developer", friends];
console.log(kester);

const years = [1994, 1992, 1987, 1990, 1902, 1892];
const age4 = calcAge(years[0]);
const age5 = calcAge(years[2]);
const age7 = calcAge(years[years.length - 1]);
*/
// console.log(age4, age5, age7);

// another way to do this

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[2]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

const friends = ["kester", "tolu", "buchi"];
const newLength = friends.push("jay"); // push to add element to the end of the array

// console.log(friends);
// console.log(newLength);

friends.unshift("john"); // to add element to the begining of the array
// console.log(friends);

// Removes the last element
friends.pop();
// console.log(friends);

// Removes First element
friends.shift();
// console.log(friends);

//Get the index of an element
// console.log(friends.indexOf("buchi"));
// console.log(friends.includes("buchi"));
// console.log(friends.includes("23"));

friends.push("davido");
// using splice of to remove an element of your choice
const ind = friends.indexOf("davido");
// console.log(friends);
friends.splice(ind, 1);
// console.log(friends);

let tip;

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? Number(bill) * 0.15 : Number(bill) * 0.2;
};

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log("Bills", bills);
// console.log("Tips", tips);
// console.log("Total Bills", total);

///////////////////////////////////////
// Object Methods
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
// };

// console.log(jonas.birthYear);
// console.log(jonas["birthYear"]);

const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

//const intrestedIn = prompt(
//   "What would you love to know about jonas ? choose between firstName, lastName, birthYear, job, friends nad hasDriverslicense "
// );

// if (jonas[intrestedIn]) {
//   console.log(jonas[intrestedIn]);
// } else {
//   console.log(
//     "Wrong request, choose between firstName, lastName, birthYear, job, friends nad hasDriverslicense"
//   );
// }

//Adding to the object using both the dot and bracket notation

// jonas.location = "America";
// jonas["twitter"] = "@jonassmcodes";

// console.log(jonas);

// Adding Functions with objects
// Object methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return getYear() - birthYear;
  //   },

  //   calcAge: function () {
  //     console.log(this);
  //     return getYear() - this.birthYear;
  //   },

  calcAge: function () {
    this.age = getYear() - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's licence.`;
  },
};

// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));
// console.log(jonas["calcAge"](jonas["birthYear"]));

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas);

// console.log(jonas.getSummary());

// Coding Challenge

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

john.calcBmi();
mark.calcBmi();

// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is Higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// } else if (john.bmi === mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is Equal to ${mark.fullName}'s (${mark.bmi})`
//   );
// } else {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is Higher than ${john.fullName}'s (${john.bmi})`
//   );
// }

////////////////////////////////////////
// For loop

// for loop keeps running whiles the condition is true
for (let rep = 1; rep <= 5; rep++) {
  //   console.log(`Lifting Weight's repetition ${rep} 🏋🏻‍♀️`);
}

for (let num = 0; num <= 50; num++) {
  if (num % 2 === 0) {
    // console.log(`${num} is Even`);
  } else {
    // console.log(`${num} is Odd`);
  }
}

const lifestyle = [
  "Entertainment",
  "travel",
  45,
  true,
  "private jets",
  "swift cars",
  ["ice", "celebrity", "ceo", "investors"],
];

const types = [];

for (let i = 0; i < lifestyle.length; i++) {
  // Reading from Lifestyle
  //   console.log(lifestyle[i], typeof lifestyle[i]);

  // Filling types Array
  //   types[i] = typeof lifestyle[i];

  types.push(typeof lifestyle[i]);
}

// console.log(types);

const years = [1990, 1872, 1995, 1909, 1029, 1978];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(getYear() - years[i]);
  //   console.log(ages);
}
// console.log(ages);

// Continue and Break

// console.log("---ONLY STRINGS---");
for (let i = 0; i < lifestyle.length; i++) {
  if (typeof lifestyle[i] !== "string") continue;
  //   console.log(lifestyle[i], typeof lifestyle[i]);
}

// console.log("--- BREAK WITH NUMBER---");
for (let i = 0; i < lifestyle.length; i++) {
  if (typeof lifestyle[i] === "number") break;
  //   console.log(lifestyle[i], typeof lifestyle[i]);
}

// Looping backwards
for (let i = lifestyle.length - 1; i >= 0; i--) {
  //   console.log(lifestyle[i]);
}

//loops in a loop

for (let exercise = 1; exercise < 4; exercise++) {
  //   console.log(`---------Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    // console.log(`Exercise : ${exercise} Lifting weight reptition ${rep} 🏋🏻‍♀️`);
  }
}

// WHile loop
// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`Lifting Weight's repetition ${rep} 🏋🏻‍♀️`);
// }

let rep = 1;

while (rep <= 5) {
  //   console.log(`While : Lifting Weight's repetition ${rep} 🏋🏻‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if (dice === 6) console.log("Loop is about to end...");
// }

// Coding challenge
// calcTip()
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let bill = 0; bill < bills.length; bill++) {
  const tip = calcTip(bills[bill]);
  tips.push(tip);
  const total = tip + bills[bill];
  totals.push(total);
}

// console.log(bills, tips, totals);

let totalSum = 0;

const calculateAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  return totalSum / arr.length;
};

// console.log(calculateAverage(totals));

///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);

  return max - min;
};

// const amplitude = calcTempAltitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should recieve 2 arrays of temprature

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAltitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);

  return max - min;
};

// const amplitudeNew = calcTempAltitude(
//   [5, 8, 9, 6, 5, 4, 3],
//   [3, 5, 1, 2, 3, 4]
// );
// console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unti: "celsius",
    //Fix
    value: Number(prompt("Degrees Celcsius : ")),
  };

  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;

  return kelvin;
};

console.log(measureKelvin());
