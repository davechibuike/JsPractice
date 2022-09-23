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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// SLICE METHOD
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
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
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
const testArr = [23, 45, 67, 87, 9, 1, 2, 34, 400];
// testArr.sort(function (a, b) {
//   return b - a;
// });
// console.log(testArr);
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
