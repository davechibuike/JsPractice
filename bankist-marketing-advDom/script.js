'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

const btns = document.getElementsByClassName('btn');
console.log(btns);

//! creating and inserting elements
//  insertAdjecentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionalities and analytics.';

message.innerHTML =
  'We use cookies for improved functionalities and analytics. <buttton class="btn btn--close--cookie">Got it!</button>';
console.log(message);

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// ! Detele elements
document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  message.remove(); // recent method
  // message.parentElement.removeChild(message); // old method
});

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); //nothing happens cause its an inline style
console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// ! Styles , attributes and classes

//* styles
document.documentElement.style.setProperty('--color-primary', 'orangered');

// * attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);
console.log(logo.baseURI);
console.log(logo.src);
console.log(logo.classList);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-Standard
console.log(logo.designer); // now lets set that attribute
logo.setAttribute('designer', 'kester davey');
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));
