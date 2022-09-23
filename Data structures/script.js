'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}

const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  // [`Birthday ${10 + 6} Dec`]: {
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 enhanced object literials
  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious Pasta with, ${ing1}, ${ing2}, and ${ing3} .`
    );
  },

  orderPizza(mainIng, ...others) {
    console.log(mainIng);
    console.log(others);
  },
};

// Strings / string methods
const airline = 'TAP Air Portugal';
const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('bhdg45');

// console.log(airline.length);
// console.log('dbegegege'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// combining both

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are the middle seats
  const s = seat.slice(-1);
  const isMiddleseat =
    s === 'B' || s === 'E' ? 'Middle Seat' : 'Not Middle seat';
  // console.log(isMiddleseat);
  return isMiddleseat;
};

checkMiddleSeat('11A');
checkMiddleSeat('12B');
checkMiddleSeat('15E');

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const fixNameCapitalization = function (name) {
  const passangerLower = name.toLocaleLowerCase(); //jonas
  const passangerCorrect =
    passangerLower[0].toLocaleUpperCase() + passangerLower.slice(1);

  // console.log(passangerCorrect);
  return passangerCorrect;
};

fixNameCapitalization('dAVE');

// Using trim
const email = 'dave@basetech.com';
const loginEmail = '  Dave@BASETECH.COm';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail === email);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail === email);

// Using replace
const price = '288,35£';
const priceUS = price.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passangers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll(/door/g, 'gate')); // using regular expression g = global
// console.log(announcement.replaceAll('door', 'gate'));

// Booleans
// const planeOne = 'Airbus A320neo';
// console.log(planeOne.includes('A320'));
// console.log(planeOne.includes('Boeaing'));
// console.log(planeOne.startsWith('Air'));

// if (planeOne.startsWith('Air') && planeOne.endsWith('neo'))
//   console.log('Part of the new Airbus family');

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log("You're not allowed On-Board");
  } else {
    console.log('Welcome On-Board');
  }
};
// checkBaggage('i have a Knife, Camera and my laptop');
// checkBaggage('socks and camera');
// checkBaggage('got a snack and a gun for protection');

// Using split and join

console.log('a+very+nice+string'.split('+'));
console.log('Dave Kester'.split(' '));

const [firstName, lastName] = 'Dave Kester'.split(' ');
// console.log(lastName);

const newName = ['Mr', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const isCapitalized = [];
  for (const n of names) {
    // first method
    // isCapitalized.push(n[0].toUpperCase() + n.slice(1));

    // Another method
    isCapitalized.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(isCapitalized.join(' '));
};

// capitalizeName('nwaeze dave kester');
// capitalizeName('kelvin zee');
// capitalizeName('ransford manny');

//  Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('dave'.padStart(20, '+').padEnd(30, '+'));

// Example using credit/debit card number

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(29253647586713322));
console.log(maskCreditCard(3827625343435223009));
console.log(maskCreditCard('93844939848483939'));

// Repeat / repeat method
const message2 = 'Bad Weather.. All Depatures Delayed.... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} Planes in line. ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(10);
//

// Sets

const orederSet = new Set([
  'pasta',
  'pasta',
  'pizza',
  'rossoto',
  'pizza',
  'spagetti',
]);

// console.log(orederSet);
// console.log(new Set('dave'));
// console.log(orederSet.size);
// console.log(orederSet.has('pizza'));
// console.log(orederSet.has('bread'));
orederSet.add('Garlic Bread');
orederSet.add('Garlic Bread');
orederSet.delete('rossoto');
// console.log(orederSet);
// for (const items of orederSet) console.log(items);

// Example
const employeeList = [
  'waiter',
  'waiter',
  'front desk',
  'Hr manager',
  'chef',
  'manager',
  'waiter',
  'waiter',
  'front desk',
  'Hr manager',
  'chef',
  'manager',
];

// console.log(employeeList);

const uniqueEmployeeList = [...new Set(employeeList)];
// console.log(uniqueEmployeeList);

// Maps

const rest = new Map();
rest.set('name', 'dave kester');
rest.set(1, 'portugal, italy');
// console.log(rest.set(2, 'leeds, Uk'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, "we're open")
  .set(false, "we're closed");

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(false));
// console.log(rest.get(1));

const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //Dont over use'make code reable'
// console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
// console.log(rest);

const arrr = [1, 2];
rest.set(arrr, 'Test');
rest.set(document.querySelector('H1'), 'HEADING');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arrr));

// Maps Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world ?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again !!'],
]);

// console.log(question);

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer: '));
// first method
// console.log(question.get(answer === 3));

//second method
// console.log(question.get(question.get('correct') === answer));

//  convert map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
//

// console.log(restaurant.openingHours.mon); //dosent exist so it returns undefined
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log('yes'); //this solves the problem and returns nothing if object dosent exist
}

// Looping Objects , Keys, Values, Entries
// Property names
// Object Keys
const properties = Object.keys(openingHours);
// console.log(properties);

let openingDays = `We are open for ${properties.length} Days: `;

for (const day of properties) {
  openingDays += `${day}, `;
}
// console.log(openingDays);

//  Property Values
const values = Object.values(openingHours);
// console.log(openingHours);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [Key, { open, close }] of entries) {
  // console.log(`on ${Key} we open at ${open}, and clost at ${close}`);
}

//

// Using optional chaning
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Example using Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

// Using Arrays with optional chaning

// const users = [{ name: 'dave', email: 'davebest@gmail.com', age: 28 }];

// console.log(users[0]?.name ?? 'user array is empty');

//

const menuA = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menuA) console.log(item);

// for (const item of menuA.entries()) {
//   console.log(item);
// }

// Using deconstructing
for (const [index, item] of menuA.entries()) {
  // console.log(`${index + 1}: ${item} ${item[0]}`);
  for (let i = 0; i < item.length; i++) {
    // console.log(item[i]);
  }
}

// Coding Challenge
console.log('<------- Coding Challenge -------->');
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1, players2] = game.players;
// 2
const [gk, ...fieldplayers] = players1;
// 3
const [...allPlayers] = [...players1, ...players2];
// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'perisic'];
// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
// 6
const printGoals = function (...players) {
  console.log(`${players.length} Goals were Scored`);
  for (let i = 0; i < players.length; i++) {
    // console.log(players[i]);
  }
};

// printGoals('kelvin', 'mark', 'clown');
// printGoals(...game.scored);

// 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// Second challenge

//  1

// const playerScored = Object.values(game.scored);
// first method
// for (const player of game.scored) {
//   console.log(`Goal 1: ${player}`);
// }
//  Second method
// console.log(`Goal ${i + 1}: ${player}`);

// 2
// const allOdds = Object.values(game.odds); // when looping Objects use Objects.entries/values or keys
// let averageOdd = 0;
//  First method
// for (const odd of allOdds) {
//   averageOdd += odd / allOdds.length;
// }
//  Second method
// for (const [i, player] of game.scored.entries()) //when looping arrays we use game.scored
//   for (const odd of allOdds) averageOdd += odd;
// averageOdd /= allOdds.length;

// console.log(`Average Odd is: ${averageOdd}`);

// 3
//  First method
// const {
//   team1: firstTeam,
//   team2: secondTeam,
//   odds: { team1: firstOdd, x, team2: secondOdd },
// } = game;

// console.log(`Odd of victory ${firstTeam}: ${firstOdd}`);
// console.log(`Odd of Draw ${x}`);
// console.log(`Odd of victory ${secondTeam}: ${secondOdd}`);

// second method

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'Draw' : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

//pi

// Coding challenge maps

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [36, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

// create an array events with no duplicates
// 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );

// Another more acurate method
// const lastMin = [...gameEvents.keys()].pop();
// console.log(lastMin);
// console.log(
//   `An event happened, on average, every ${lastMin / gameEvents.size} minutes.`
// );

// 4.
// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[First Half] ${key}: ${value}`);
//   } else {
//     console.log(`[Second Half] ${key}: ${value}`);
//   }
// }

// Another more acurate method

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`${half} HALF ${min}: ${event}`);
// }

// String Coding challenge

const camelCaseConverter = function (str) {
  // First solution
  // const s = str.toLowerCase().split('_');
  // const camelCase = [];
  // camelCase.push(
  //   s[0] + s[1][0].replace(s[1][0], s[1][0].toUpperCase()) + s[1].slice(1)
  // );
  // console.log(camelCase.join(''));
  // return camelCase.join('');

  // Second solution

  const [first, second] = str.toLowerCase().trim().split('_');
  // console.log(first, second);
  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;

  console.log(output);
  return output;
};

// camelCaseConverter('ASDFG_HFJIU');
// camelCaseConverter('dave_chibuike');
// camelCaseConverter('kester_like');
// camelCaseConverter('aboyfromabule_a');

console.log('<--------------------------------->');

// const testing = [1, 2, 3, 4, 5, 6];

// for (let [index, value] of testing.entries()) {
//   console.log(index, value);
// }
// console.log('Rest operators');

// 1) Destructuring
// Spread because on right side of = operator
const tArr = [1, 2, 3, ...[4, 3, 2, 1]];
// console.log(tArr);

// Rest because its on the left side of the = operator
const [z, zz, ...others] = [1, 2, 3, 4, 5, 6, 7];
// console.log(z, zz, others);
const [pizza, , risotto, ...otherfoods] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
// console.log(pizza, risotto, otherfoods);
//  Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
// console.log('............................................................');

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

// console.log(add(1, 2, 3));
// console.log(add(4, 5, 6, 7, 8));
// console.log(add(1, 34, 56, 7, 4, 5, 6, 7, 8));

const xSum = [34, 233, 455, 678];
// console.log(add(...xSum));

// restaurant.orderPizza('mushrooms', 'onion', 'veges', 'carbage');

// console.log('...........................................................');
// ... Spread operator
const arr = [7, 8, 9];
const badArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(badArr);

const newArr = [1, 2, 3, ...arr];
// console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'pepper soup', 'jollof rice'];
// console.log(newMenu);

//copying an array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(allMenu);

// iterables are arrays, maps, sets, strings . Not objects
const str = 'Dave';
const letters = [...str, ' ', 'iD.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} is spready operator and won't work`);

// Real world example
// const ingredients = [
//   prompt("Let's make Pasta : Ingredient 1 ?"),
//   prompt('Ingredient 2 ?'),
//   prompt('Ingredient 3 ?'),
// ];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Short-circuting { || and &&}
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
// console.log('----->', guest);

// || takes the first truthy value
//  && takes the opposite of || which is the falsey value

//Nullish Values ?? null and undefined
const guestCorrect = restaurant.numGuest ?? 10;
// console.log('----->', guestCorrect);

//LogicalAssignment operator

const res1 = {
  name: 'capri',
  numOfGuest: 0,
};
const res2 = {
  name: 'pizza',
  owner: 'Giovani rossi',
};

// console.log(res2.numOfGuest);

// OR assignment operator
// res1.numOfGuest = res1.numOfGuest || 10;
// res2.numOfGuest = res2.numOfGuest || 10;
// res1.numOfGuest ||= 10;
// res2.numOfGuest ||= 10;

// Nullish assignment operator (null / undefined)
res1.numOfGuest ??= 10; // result would be 0 because 0 is defined and not null
res2.numOfGuest ??= 10; // result would be 10 because numOfGuest is undefined

// AND && operator returns the first falsey value
res1.owner = res1.owner && '<ANONYMOUS>';
res2.owner = res2.owner && '<ANONYMOUS>';

// console.log(res1);
// console.log(res2);

// Objects
const newResturant = { foundIn: 1998, ...restaurant, founder: 'kester dave' };
// console.log(newResturant);

// Another method
const resturantCopy = { ...restaurant };
resturantCopy.name = 'Ristorante italian';
// console.log(restaurant.name);
// console.log(resturantCopy.name);
// console.log(resturantCopy);

// restaurant.orderDelivery({
//   starterIndex: 0,
//   mainIndex: 0,
//   time: '13:00',
//   address: 'vescon estate bamburi',
// });

// restaurant.orderDelivery({
//   time: '23:00',
//   address: 'vescon 1 estate bamburi',
// });
// Destructuring Objects
const { name, openingHours: openHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const { name: restaurantName, openHours: hours, categories: tags } = restaurant;

// console.log(restaurantName, hours, tags);

// assigning default values to objects
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables
let y = 111;
let b = 90;

let obj = { y: 23, b: 7, c: 34 };
({ y, b } = obj);
// console.log(y, b);
// console.log(typeof y);

// Nested objects

// const { fri } = openingHours;
// console.log(fri);

const {
  fri: { open, close },
} = openingHours;

// console.log(open, close);

// Destructuring Arrays
let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//  Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(1, 2));
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Loop destructing

const nested = [2, 3, [3, 4, 5]];
// const [a, , c] = nested;
const [a, , [c, d, e]] = nested;
// console.log(a, c, d, e);

// assigning
// const [q, w, s, r] = [9, 4, 3]; // last element returns undefined
const [q = 1, w = 1, s = 1, r = 1] = [9, 4]; // assign 1 to all value by default
// console.log(q, w, s, r);
