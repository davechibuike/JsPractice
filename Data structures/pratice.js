'use strict';

// restaurant.orderDelivery({
//   time: '2:30',
//   address: 'Flat 7 13 Atlas Manchester',
//   st: 1,
//   mi: 2,
// });

// restaurant.orderDelivery({
//   time: '12:45',
//   address: 'Flat 1 23 luton',
//   st: 0,
//   mi: 1,
// });

//Spread operator
// const arr = [1, 2, 3, 4, 5];
// const newArr = [8, 9, 0, ...arr];
// console.log(newArr);

// copy arrays using spread operator
// const menuCopy = [...restaurant.mainMenu];

//merge two arrays together
// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// const str = 'daies';
// const letters = [...str, '', 'f', 'g'];
// console.log(...str);
// console.log(letters);

// const ingredients = [
//   prompt("Let's make Pasta! Ingredient 1? "),
//   prompt("Ingredient 2? "),
//   prompt("Ingredient 3? "),
// ];

// restaurant.orderPasta(...ingredients);

// copying  objects and adding some more values and keys
// const restaurantCopy = {
//   foundedIn: 1984,
//   ...restaurant,
//   foundedBy: 'Davie Kester',
// };

// console.log(restaurantCopy);

//  Rest partterns and parameters
// const [pizza, , risotto, ...otherFood] = [
// rest is on the left side and can be used once ...otherfood
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Rest in objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);
// const { thur, fri } = weekDays;

// console.log(thur, fri);

//functions with rest parameters
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   console.log(sum);
//   return sum;
// };

// add(2, 4);
// add(2, 5, 6, 7, 8);
// add(2, 5, 6, 7, 8, 23, 43, 65, 76);

// const x = [23, 45];
// add(...x);

// Short circuting
// console.log('------ OR Operator');
// console.log(3 || 'dave');
// console.log(0 || true);
// console.log(undefined || null);
// console.log('' || 'dave');
// the || operator returns the first truthy value

// restaurant.numGuest = 0;

// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 20;
// console.log(guest2);
// AND operator
// the && operator returns the first fasley value
// console.log('------ AND Operator');
// console.log(0 && 'dave');
// console.log(3 && 'dave');
// console.log(0 && true);
// console.log(undefined && null);
// console.log('' && 'dave');

// pratical example
// normal way
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('cheese', 'bread');
// }

// restaurant.orderPizza && restaurant.orderPizza('bread', 'pepperroni');

// nulish
// restaurant.numGuest = 0;
// const guests = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests);

//Nullish operator works on null and undefined
// const guestCorrect = restaurant.numGuest ?? 15;
// console.log(guestCorrect);

// const res1 = {
//   name: 'capri',
//   numOfGuest: 0,
// };
// const res2 = {
//   name: 'pizza',
//   owner: 'Giovani rossi',
// };

// console.log(res2.numOfGuest);

// OR assignment operator
// res1.numOfGuest = res1.numOfGuest || 10;
// res2.numOfGuest = res2.numOfGuest || 10;
// res1.numOfGuest ||= 10;
// res2.numOfGuest ||= 10;

// Nullish assignment operator (null / undefined)
// res1.numOfGuest ??= 10; // result would be 0 because 0 is defined and not null
// res2.numOfGuest ??= 10; // result would be 10 because numOfGuest is undefined

// AND && operator returns the first falsey value
// res1.owner = res1.owner && '<ANONYMOUS>';
// res2.owner = res2.owner && '<ANONYMOUS>';

// Coding Challenge
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = [...game.players];
// // console.log(players1, players2);
// const [gk, ...fieldPlayers] = players1;
// // const [...allPlayers] = [...game.players];
// const [...allPlayerss] = [...players1, ...players2];
// // console.log(allPlayerss);
// const playersFinal = [...players1, 'Thaigo', 'coutinho', 'perisic'];
// // console.log(playersFinal);
// const { team1, x: draw, team2 } = game.odds;
// // console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(`${players.length} Goals was scored`);
//   for (const player of players) {
//     console.log(`${player} Scored`);
//   }
// };

// printGoals(...game.scored);

// const win =
//   (team2 > team1 && console.log('Team 1 is more likely to win the game')) ||
//   (team1 > team2 && console.log('Team 2 is more likely to win  the game'));

// Looping with for of
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);
// using destructuring to get both the index and element ( entries())
// for (const [i, element] of menu.entries()) {
//   console.log(i + 1, element);
// }

// Optional chaning
// example using if statement
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon);

// console.log(restaurant.openingHours.mon.open);

// using optional chaning
// console.log(restaurant.openingHours.mon?.open); //only if mon exisit then open
// console.log(restaurant.openingHours?.mon?.open);

// Example
// we going to loop over this days to see when the restaurant
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(open);
//   console.log(`On ${day}, we open at ${open}`);
// }

// Optional chaning with Methods
// console.log(restaurant.order?.(1, 2) ?? 'Method does not exist');
// console.log(restaurant.orderPas?.(1, 2) ?? 'Method does not exist');

// Optional chaning with Arrays
// const users = [{ name: 'dave chibike', age: 30, email: 'user@email.com' }];
// console.log(users[0]?.name ?? 'Empty Array');

// LOOPING OBJECTS, KEYS VALUES AND ENTRIES
// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open ${properties.length} Days.`;
// for (const days of properties) {
//   openStr += ` ${days}, `;
// }
// console.log(openStr);

//property Values
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   //   console.log(x);
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Test
// for (const [name, ...all] of Object.entries(restaurant)) {
//   console.log(name, all);
//   const [details, ...others] = all;
//   console.log(details, others);
// }

// // Coding Challenge 2
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// const allOdds = Object.values(game.odds);
// let averageOdd = 0;

// for (let value of allOdds) {
//   averageOdd += value / allOdds.length;
// }
// console.log(`Average Odd is : ${averageOdd}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'Draw' : `Victory ${game[team]}`;
//   console.log(`Game of ${teamStr} is ${odd}`);
// }

// SETS
// SETs  sets can hold mixed data types

// const orderSet = new Set(['pizza', 'yam', 'coco yam', 'oil']);
// console.log(orderSet);
// console.log(orderSet.size);
// // to check if an element exist
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// // adding to set method
// orderSet.add('bread');
// console.log(orderSet);
// // orderSet.clear();
// // console.log(orderSet);
// // looping with sets
// for (const order of orderSet) console.log(order);

// // Example // remove duplicate in an array
// const staff = ['manager', 'chef', 'waiter', 'manager', 'chef'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Maps

// const rest = new Map();
// // adding keys and values
// rest.set('name', 'El-Classino Maskaretta');
// rest.set(1, 'Frienze Italy');
// rest.set(2, 'Valencia Spain');
// rest.set(true, 'We are open :)');
// // console.log(rest.set(3, 'Lagos Nigeria'));

// const arr = [1, 2];

// // chaining Maps // calling the set method returns the Map
// rest
//   .set('categories', ['pizza', 'yam', 'coco yam', 'oil'])
//   .set('birthYear', 1995)
//   .set('open', 11)
//   .set('close', 23)
//   .set('Address', 'Manchester city center')
//   .set(false, 'We are closed :(')
//   .set(arr, 'Arry test')
//   .set(document.querySelector('h1'), 'Heading');

// console.log(rest);

// // read data from a map using Get
// // console.log(rest.get(true));
// // more on reading data
// const time = 24;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// // rest.delete(2);
// // rest.clear();
// console.log(rest.size);

// // Populating the Map without using the set method
// const question = new Map([
//   ['question', 'What is the best programming language in the world ?'],
//   [1, 'python'],
//   [2, 'javascript'],
//   [3, 'C'],
//   ['correct', 2],
//   [true, 'Correct 🎉'],
//   [false, 'Try again'],
// ]);

// console.log(question);

// // looping through the map
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key} : ${value}`);
//   }
// }

// const answer = Number(prompt('Your Answer ? '));
// console.log(question.get(answer === question.get('correct')));

//  convert map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
//

// // Coding challange 3

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow Card'],
//   [69, 'Red Card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [36, 'Substitution'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow Card'],
// ]);

// const events = new Set([...gameEvents.values()]);
// // console.log(events);

// gameEvents.delete(64);
// // console.log(gameEvents);

// const time = 90 / gameEvents.size;
// console.log(`An event happened on average every ${time} mins.`);

// // for (const [key, value] of gameEvents) {
// //   if (key <= 45) {
// //     console.log(`[FIRST HALF] ${key}: ${value}`);
// //   }
// //   if (key > 45) {
// //     console.log(`[SECOND HALF] ${key}: ${value}`);
// //   }
// // }

// for (const [key, value] of gameEvents) {
//   const halfEvents = key <= 45 ? 'FIRST HALF' : 'SECOND HALF';
//   console.log(`${halfEvents} ${key}: ${value}`);
// }

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thur: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 12,
    close: 23,
  },
  sat: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Es6 object literals
  openingHours,

  // creating and order method
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  //Method on delivery using obj destructuring
  orderDelivery({ address, time, st, mi }) {
    console.log(
      `Your Order : ${this.starterMenu[st]} and ${this.mainMenu[mi]}, would be delivered to ${address}, at ${time}. thank you`
    );
  },

  //Order paster using spread operator
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(ing1, ing2) {
    console.log(`Confirmed order for pizza with ${ing1} and ${ing2}`);
  },
};

// String methods
// const airline = 'TAP air portugal';
// const plane = 'A320';

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// String methods in pratice
// write a function to check middle seat

const checkMiddleSeat = function (seat) {
  // Middle Seat = 'B' and 'E'
  const checkLastLetter = seat.toLowerCase().slice(-1);
  const result =
    checkLastLetter === 'b' || checkLastLetter === 'e'
      ? 'Middle Seat 😬'
      : 'You got lucky 🎉';
  console.log(result);
  return result;
};

// checkMiddleSeat('12e');
// checkMiddleSeat('24A');
// checkMiddleSeat('34E');

// email check
const email = 'dave@email.com';
const loginEmail = ' Dave@email.com \n';
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(email === normalizedEmail);

// replacing
const priceGb = '234,48£';
const priceUs = priceGb.replace('£', '$').replace(',', '.');
// console.log(priceGb);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';
// console.log(announcement.replaceAll('door', 'Gate'));

// Booleans
// returns true or false
// const plane = 'Airbus A320boa';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));
// if (plane.startsWith('Air') && plane.endsWith('boa')) {
//   console.log('Part of the new airbus family');
// }

//practice execrise
const checkLaugage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log("you're not Allowed On-board");
  } else {
    console.log('Welcone Aboard');
  }
};

// checkLaugage('i have food, gun, knife and some tear-gas');
// checkLaugage('my baby, laptop and food stuff');

// Split method
// console.log('a+very+nice+string'.split('+'));
// console.log('Dave Kizzy'.split(' '));
// const [firstName, lastName] = 'Dave kizzy'.split(' ');
// const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
// console.log(newName);

// write a function to capilatize all first letter of the name
// const capilatize = function (name) {
//   let str = ' ';
//   const names = name.toLocaleLowerCase().split(' ');

//   for (let i = 0; i < names.length; i++) {
//     let firstLetter = names[i][0];

//     const capitalizedName = names[i].replace(
//       firstLetter,
//       firstLetter.toLocaleUpperCase()
//     );

//     str += `${capitalizedName} `;
//   }
//   console.log(str);
//   return str;
// };

//second method
const capilatize = function (name) {
  const names = name.toLocaleLowerCase().split(' ');
  const capilatizedNames = [];

  for (const n of names) {
    capilatizedNames.push(n[0].toUpperCase() + n.slice(1));
  }
  const result = capilatizedNames.join(' ');
  console.log(result);
  return result;
};

// capilatize('nweze KesTer dAvey');

// Padding
const message = 'Go to Gate 23.';
const dee = 'dave';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log(dee.padStart(20, '-').padEnd(30, '-'));

// practice
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// console.log(maskCreditCard(2435464582736475));
// console.log(maskCreditCard(8763029836725142));

// repeat
const depMessage = 'Bad Weather.. All Depatures Delayed... ';
// console.log(depMessage.repeat(10));

// more example
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

// planesInLine(5);
// planesInLine(10);
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const row = text.split('\n');

  for (const [i, rows] of row.entries()) {
    const [first, second] = rows.toLocaleLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toLocaleUpperCase()
    )} `;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCityCode = code => code.slice(0, 3).toLocaleUpperCase();

const flightData = flights.split('+');

for (let i = 0; i < flightData.length; i++) {
  const [flight, departure, destination, time] = flightData[i].split(';');

  const output = `${
    flight.startsWith('_Delayed') ? '🔴' : ''
  }${flight.replaceAll('_', ' ')} from ${getCityCode(
    departure
  )} to ${getCityCode(destination)} (${time.replaceAll(':', 'h')})`.padStart(
    45
  );

  // console.log(output);
}

// Main solution

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');

//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(45);
//   console.log(output);
// }

// const flightBigData = function (data) {
//   const flightData = data.split('+');
//   console.log(flightData.length);

//   for (let i = 0; i < flightData.length; i++) {
//     const [flight, departure, destination, time] = flightData[i].split(';');
//     console.log(i);

//     const output = `${flightStatus(flight)} from ${getCityCode(
//       departure
//     )} to ${getCityCode(destination)} (${time})`;

//     console.log(output);
//     return output;
//   }
// };

// flightBigData(flights);
