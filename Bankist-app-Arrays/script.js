'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Kester Davis',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Displays list of transactions deposite || withdrawals
const displayMovements = function (movements, sorted = false) {
  containerMovements.innerHTML = '';

  const movs = sorted ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// C=Calculates total Balance
const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Displays total deposite In || Out
const displaySummary = function (acc) {
  const incomeIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomeIn}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${intrest}€`;
};

// Computing Usernames
// username consist of the first alphabet of each usernames
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

// Updates the UI
const updateUi = function (acc) {
  // Display Movements
  displayMovements(acc.movements);

  // Display Balance
  calDisplayBalance(acc);

  //Display Summary
  displaySummary(acc);
};

//Implementing login
let currentAccount;

btnLogin.addEventListener('click', e => {
  // prevent submitting onClick
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display Ui and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUi(currentAccount);
  }
});

// Implementing Transfers
btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update Ui
    updateUi(currentAccount);
  }
});

// Loan functionality
btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add Movements
    currentAccount.movements.push(amount);

    // Update UI
    updateUi(currentAccount);
  }
});

// Delete Account
btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );

    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Implementing sort functionality
let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// SLICE METHOD
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE METHOD
// console.log('----- splice------');
// this mutates the original array

// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// Reverse
// this mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// const testArr = [23, 45, 67, 87, 9, 1, 2, 34, 400];
// testArr.sort(function (a, b) {
//   return b - a;
// });
// console.log(testArr);
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// JOIN
// console.log(['dave', 'kelvin', 'book'].join(' '));
// console.log(letters.join(' - '));

// the new AT method es2022
// const arr3 = [23, 14, 65];
// console.log(arr3[0]);
// using the new at method
// console.log(arr3.at(0));
// getting the last element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// using the new at method
// console.log(arr3.at(-1));
// console.log(arr3.at(-2));
// at can be used on string methods
// console.log('dave'.at(0));

//
//LOOPING forEach
//

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);
// movements.sort((a, b) => b - a);
// console.log(movements);

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You Deposited ${movement}`);
//   } else {
//     console.log(`You Withdrew ${Math.abs(movement)}`);
//   }
// }

// getting the index
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movenment ${i + 1}: You Deposited ${movement}`);
//   } else {
//     console.log(`Movenment ${i + 1}: You Withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---------------------');
// Using forEach with arrow
// movements.forEach(movement => {
//   if (movement > 0) {
//     console.log(`You Deposited ${movement}`);
//   } else {
//     console.log(`You Withdrew ${Math.abs(movement)}`);
//   }
// });

// console.log('-------forEach-------------');
// for each with normal function
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You Deposited ${movement}`);
//   } else {
//     console.log(`You Withdrew ${Math.abs(movement)}`);
//   }
// });
// console.log('-------forEach-------------');
// for each with normal function
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movenment ${i + 1}: You Deposited ${movement}`);
//   } else {
//     console.log(`Movenment ${i + 1}: You Withdrew ${Math.abs(movement)}`);
//   }
// });

// movements.forEach((movement, i, arr) => {
//   if (movement > 0) {
//     console.log(`Movenment ${i + 1}: You Deposited ${movement}`);
//   } else {
//     console.log(`Movenment ${i + 1}: You Withdrew ${Math.abs(movement)}`);
//   }
//   // console.log(arr);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// looping map with forEach Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
// const currenciesUnique = new Set([
//   'USD',
//   'EUR',
//   'EUR',
//   'GBP',
//   'GBP',
//   'USD',
//   'EUR',
// ]);

// currenciesUnique.forEach(function (value, key, set) {
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// solution
// const checkDogs = function (dogsJulia, dogsKate) {
//   //using just slice
//   // const copyJuliaCorrected = dogsJulia.slice(1, -2);

//   //using slice to copy the array and using splice to mutate array
//   const copyJuliaCorrected = dogsJulia.slice();
//   copyJuliaCorrected.splice(0, 1);
//   copyJuliaCorrected.splice(-2);
//   const combinedDogData = [...copyJuliaCorrected, ...dogsKate];

//   combinedDogData.forEach((age, i) => {
//     // const peerGroup = age >= 3 ? 'adult' : 'puppy';
//     // console.log(
//     //   `Dog number ${i + 1} is an ${peerGroup}, and is ${age} years old`
//     // );
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//! Using map
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// // Doing same thing with a for loop
// const movementsUsdFor = [];
// for (const mov of movements) movementsUsdFor.push(mov * eurToUsd);
// console.log(movementsUsdFor);

// // more with map
// const movementsDiscription = movements.map(
//   (mov, i) =>
//     `Movenment ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDiscription);

// console.log(movements);

// // Filter method
// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// // doing same thing with a for of loop // just to appreciate filter method
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// // challenge
// // create same thing but for withdrawals
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

//! Reduce method
// Accumulator -> SNOWBALL
// const balance = movements.reduce(function (accumulator, current, i, arr) {
//   console.log(`Iteration ${i} : ${accumulator} `);
//   return accumulator + current;
// }, 0); // Setting the accumulator to 0

// console.log(balance);

//doing same thing with a for of loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;

// console.log(balance2);

// more on reduce
//get the max in the movements array
// console.log(movements);

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

//   const adults = humanAge.filter(age => age > 18);
//   // method 1
//   const averageAge = adults.reduce(
//     (acc, current, i, arr) => acc + current / arr.length,
//     0
//   );

//   // // method 2
//   // const averageAge = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   console.log(averageAge);
//   return averageAge;
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//PIPELINE
// Chaning methods
// const eurToUsd = 1.1;

// const totalDepositUsd = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositUsd);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAgeArrow = ages => {
//   const average = ages
//     .map(age => (age <= 2 ? ages * 2 : 16 + age * 4))
//     .filter(age => age > 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//   return average;
// };

// console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));

// Find method
// returns the first elemnt that suits the condition, dosent return a new array also ->true or false
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Kester Davis');
// console.log(account);

// SOME some array method
// i could call some ->  any ,
// for any value for which this  mov > 2000 condition is true .. return true
const anyDeposite = movements.some(mov => mov > 2000);
// console.log(anyDeposite);
// console.log(movements.includes(-130));

//! EVERY array method
// returns ture if all the elements in an array satisfy the condition
// console.log(movements.every(mov => mov > 0));
// testing with an account that has all positive values
// console.log(account4.movements.every(mov => mov > 0));

// seprating callBacks
const deposit = mov => mov > 0;
const debit = mov => mov < 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
// console.log(movements.filter(debit));

//! Flat and FlatMap array method
//with flat no callbacks
// const arr = [[1, 2, 3, 4], [5, 6, 7, 8], 9, 10];
// console.log(arr.flat()); //* result [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const arrDeep = [[[1, 2], 3], [4, 5, [6]], 7, 8, 9, [10]];
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

// // example , lets get the total balance of all account movements
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// // get all movements into one array
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// // total balance of all account movements
// const overalBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
// console.log(overalBalance);

//* flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
// console.log(overalBalance);

//* flatmap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
// console.log(overalBalance2);

//! SORT
const owners = ['zack', 'abel', 'kester', 'clinton', 'muno', 'nick'];
// console.log('kester'.split('').reverse());
//  !sort mutates the array or str
// console.log(owners.sort());

movements.sort((a, b) => {
  return a - b;
});
// console.log(movements);

// console.log('kester'.split('').sort());

//! More ways of creating and filling Arrays
//Array.fill
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7);
// console.log(x);
// x.fill(1);
// console.log(x);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 3, 6);
// console.log(arr);

//? Array.from
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

const randomDiceRolls = Array.from(
  { length: 100 },
  (cur, i) => (cur = Math.trunc(Math.random() * 6 + 1))
);
const randomDiceRollsI = Array.from(
  { length: 100 },
  (cur, i) => (i = Math.trunc(Math.random() * 6 + 1))
);

// console.log(randomDiceRolls);
// console.log(randomDiceRollsI);

//* real world use case

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    element => Number(element.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);

  const mapp = movementsUI2.map(el => Number(el.textContent.replace('€', '')));
  console.log(mapp);
});

///////////////////////////////////////
// Coding Challenge #4
//! 1
// calculate the total sum of bank deposite
// const bankDepositeSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, current) => acc + current, 0);
// * second solution using only reduce

const bankDepositeSum = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, current) => {
    current > 0 ? (acc += current) : acc;
    return acc;
  }, 0);

// console.log(bankDepositeSum);

//! 2
//how many deposite has been in the bank with 1000€
// * First solution
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

//* Second solution using reduce method
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    // (count, currentValue) => (currentValue >= 1000 ? count + 1 : count),
    // 0
    (count, currentValue) => (currentValue >= 1000 ? ++count : count),
    0
  );

// console.log(numDeposits1000);

// prefixed ++ operator
let a = 10;
// console.log(a++);
// console.log(++a);
// console.log(a);

//! 3
//* write a function that returns all sum of total deposits and total withdrawals

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, current) => {
//       current > 0 ? (sums.deposits += current) : (sums.withdrawals += current);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

//* Second solution
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, current) => {
      // current > 0 ? (sums.deposits += current) : (sums.withdrawals += current);
      sums[current > 0 ? 'deposits' : 'withdrawals'] += current;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(deposits, withdrawals);

// ! a function that covert title case . Example this is a nice title -> This Is a Nice Title
// *
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a long TITLE but NOT tOO long'));
// console.log(convertTitleCase('and here is another title with another EXAMPLE'));
// console.log(convertTitleCase('TITLE IS HERE FOR ME'));

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// First solution
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah') && dog.curFood > dog.recommendedFood) {
    console.log('Eating too much');
  }
});

// Second solution
const dogSarah = dogs.find(dog => dog?.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }.`
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
const strSolution = `"${ownersEatTooMuch.join(
  ' and '
)} dogs eat too much!" and "${ownersEatTooLittle.join(
  ' and '
)} dogs eat too little!"`;

console.log(strSolution);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
const etingRecomended = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(etingRecomended);

// function to check eating okay
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

//6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const eathingRight = dogs.some(checkEatingOkay);

console.log(eathingRight);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const dogsEatingOkay = dogs.filter(checkEatingOkay).map(dog => dog);

console.log(dogsEatingOkay);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsCopy);
