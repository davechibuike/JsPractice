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
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
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

//Using map
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

// Reduce method
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
