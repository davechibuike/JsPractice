// let js = "amazing";
// if (js === "amazing") {
//   alert("Javascript is amazing");
// }
// console.log(34 + 3 + 4 + 4 - 10);

let firstName = "Dave";
let lastName = "Nwaeze";

// console.log(firstName);

const PI = 3.1415;
let $function = 25;
// console.log(typeof $function);

let myFirstJob = "Programmer";
let myCurrentJob = "Javascript Developer";

let country = "Kenya";
let continent = "Africa";
let population = 1500000;
/*
console.log(
  "Country :",
  country,
  "Continent :",
  continent,
  "Population :",
  population
);
*/

let javascriptIsFun = true;

// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof firstName);
// Dynamic typing
let year;
// console.log(year);
// console.log(typeof year);

year = 1999;
// console.log(typeof year);

// bug
// console.log(typeof null);

let isIsland;
let language;
isIsland = true;
// console.log(typeof isIsland);
// console.log(typeof language);

/*
let usersYear = prompt("Birth Year :");
const currentdate = new Date();
const currentYear = currentdate.getFullYear();

const usersAge = currentYear - usersYear;
console.log("You are", usersAge, "Years Old.");

if (usersAge < 20) {
  console.log("You're not allowed. Still young");
} else if (usersAge > 20 && usersAge <= 30) {
  console.log("Welcome");
} else {
  console.log("You're too old for this . get a life");
}*/

// console.log(currentdate);
// console.log(currentYear);
// console.log(usersYear);

// Assignment operators
let sum = 10 + 5; // 15
sum += 10; // x = x + 10 = 25
sum *= 4; // x = x * 4 = 100
sum++; // x = x + 1
sum--;
sum--;
// console.log(sum);

// Comparison operators
// > < >= <= && ||

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Coding challenge

function bmi(mass, height) {
  const bmi = mass / height ** 2;
  return bmi;
}
// Test case 1
const marksFirstBmi = Math.round(bmi(78, 1.69));
const johnsFirstBmi = Math.round(bmi(92, 1.95));
let markHigherBmi = marksFirstBmi > johnsFirstBmi;
/*
console.log(
  "Mark's First BMI :",
  marksFristBmi,
  "John's First BMI :",
  johnsFristBmi
);
console.log(markHigherBmi);
*/

// Conditional Statement Challenge

/*
if (marksFirstBmi > johnsFirstBmi) {
  console.log(`Mark's BMI is ${marksFirstBmi}, which is higher than John's!`);
} else if (marksFirstBmi === johnsFirstBmi) {
  console.log(
    `Mark and John's BMI is Equal, with same value of ${marksFirstBmi}`
  );
} else {
  console.log(`John's BMI is ${johnsFirstBmi}, which is higher than Mark's!`);
}
*/
// Test case 2
const marksSecondBmi = bmi(95, 1.88);
const johnsSecondBmi = bmi(85, 1.76);
markHigherBmi = marksSecondBmi > johnsSecondBmi;
/*
console.log(
  "Mark's Second BMI :",
  marksSecondBmi,
  "John's Second BMI :",
  johnsSecondBmi
);
console.log(markHigherBmi);
*/
// Conditionals for Test case 2
/*
if (marksSecondBmi > johnsSecondBmi) {
  console.log(`Mark's BMI is ${marksSecondBmi}, which is higher than John's!`);
} else if (marksSecondBmi === johnsSecondBmi) {
  console.log(
    `Mark and John's BMI is Equal, with same value of ${marksSecondBmi}`
  );
} else {
  console.log(`John's BMI is ${johnsSecondBmi}, which is higher than Mark's!`);
}
*/

const user = {
  names: "Dave Chibuike",
  job: "Software Developer",
  age: 27,
  birthyear: 1995,
  hobbies: ["programming", "swimming", "traveling"],
};

const userDetails = `My name is ${user.names},I work as a ${user.job} in Google, i"m ${user.age} year's old, i was born in ${user.birthyear}.`;
// console.log(userDetails);

// Using \n\ = next line
const myHobbies = "My Hobbies are: \n movies\n coding \n traveling";
// console.log(myHobbies);

const myHobbiesList = `My Hobbies are: 
${user.hobbies[0]} 
${user.hobbies[1]} 
${user.hobbies[2]}`;

// console.log(myHobbiesList);

// Type conversion
const mainYear = "1996";
// console.log(Number(mainYear), mainYear);

// Type coercion
// console.log("i am " + 25 + " years old");
// console.log("i am " + "25" + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

let n = "1" + 1; //11 string
n -= 1; //gets converted and substract 1
// console.log(n); //10

// Truthly and Falsy
//5 Falsy Valuse : 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(""));

// let money = 0;
// if (money) {
//   console.log("You're rich");
// } else {
//   console.log("Go get a job");
// }

// Equallity operator

// const age = 18;
// if (age === 18) console.log("you just became an adult");

// const favNumber = Number(prompt("Wht's your favorite number :"));

// if (favNumber === 36) {
//   console.log(`your favorite num is ${favNumber}`);
//   console.log(typeof favNumber);
// }

// Logical operators

const hasDriversLicence = true; // A
const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log("Sarah is able to drive ");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = true;

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// Coding challenge
// function averageScore(scoreOne, scoreTwo, scoreThree) {
//   average = (scoreOne + scoreTwo + scoreThree) / 3;
//   return average;
// }

const averageScore = (scoreOne, scoreTwo, scoreThree) => {
  average = (scoreOne + scoreTwo + scoreThree) / 3;
  return average;
};

const dolphins = averageScore(97, 12, 11);
const koalas = averageScore(19, 20, 26);

const minimumScore = 100;

if (dolphins >= minimumScore && dolphins > koalas) {
  console.log(`Dolphins WINS 🏆`);
} else if (koalas >= minimumScore && koalas > dolphins) {
  console.log(`Koalas WINS 🏆`);
} else if (
  dolphins === koalas &&
  koalas >= minimumScore &&
  dolphins >= minimumScore
) {
  console.log(`BOTH TEAMS DRAW, with a score of : ${dolphins}`);
} else {
  //   console.log("No One Wins the Trophy 😭");
}

////////////////////////////////////
// The switch Statement

const day = "";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
  // console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  //   console.log("Not a valid day!");
}

// Conditional (Ternary) Operator

const age = 30;
// age >= 18
//   ? console.log("I like to drink wine🍷")
//   : console.log("I like to drink water💧");

const drink = age >= 18 ? "wine🍷" : "water💧";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💧"}`);

// Coding challenge
// First Method
/*
const bill = 275;
let tip = Number(0);

bill >= 50 && bill <= 300
  ? console.log(
      `Bill is $${bill}, Tip is $${(tip = bill * 0.15)}, Total is : $${
        bill + tip
      }`
    )
  : console.log(
      `Bill is $${bill}, Tip is $${(tip = bill * 0.2)}, Total is : $${
        bill + tip
      }`
    );
*/

// Second Method

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`Bill is $${bill}, Tip is $${tip}, Total is : $${bill + tip}`);
