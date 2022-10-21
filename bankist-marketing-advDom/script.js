'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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

// *Button scrolling
btnScrollTo.addEventListener('click', e => {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //* Scrolling to section1

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // morden way
  section1.scrollIntoView({ behavior: 'smooth' });
});

//! Page Navigation
// Without event propagation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// * Page nav with event propagation
// 1. Add event listner to common parent element
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//! Operation Tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//* Using event deligation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //? Guard Clause
  if (!clicked) return;

  //* Remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  //* Active Tab
  clicked.classList.add('operations__tab--active');

  //* Activate Content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//! Menu Fade Animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// passing "Argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//! Sticky Nav
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//
//////////////////////////////////////////////////////////////////////
//! Practice Session

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const btns = document.getElementsByClassName('btn');
// console.log(btns);

// //! creating and inserting elements
// //  insertAdjecentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent =
// //   'We use cookies for improved functionalities and analytics.';

// message.innerHTML =
//   'We use cookies for improved functionalities and analytics. <buttton class="btn btn--close--cookie">Got it!</button>';
// console.log(message);

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // ! Detele elements
// document.querySelector('.btn--close--cookie').addEventListener('click', () => {
//   message.remove(); // recent method
//   // message.parentElement.removeChild(message); // old method
// });

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color); //nothing happens cause its an inline style
// console.log(message.style.backgroundColor);

// // console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // ! Styles , attributes and classes

// //* styles
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // * attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.alt);
// console.log(logo.baseURI);
// console.log(logo.classList);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-Standard
// console.log(logo.designer); // now lets set that attribute
// logo.setAttribute('designer', 'kester davey');
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('company'));

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// // const link = document.querySelector('.twitter-link');
// // console.log(link.href);
// // console.log(link.getAttribute('href'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // ! Data attribute
// console.log(logo.dataset.versionNumber);

// //! Classes
// logo.classList.add('c', 'j'); // allows us use multiple classes and can add and remove
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes , its called contains

//  Dont use this
// this will overwrite all the exisiting class and can only use one class
// logo.className = 'davey';

// ! Event and Event handelers

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert(" 'onmouseenter': You're Reading the Heading");
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

//* Using on //old method
// h1.onmouseenter = e => {
//   alert(" 'onmouseenter': You're Reading the Heading");
// };

//! rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINKS', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //! Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);

// * Stop propagation
// e.stopPropagation();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// ! DOM Traversing
// const h1 = document.querySelector('h1');

// //? Going downwards : child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = '#fff';
// h1.lastElementChild.style.color = '#7299';

// //? Going upwards : parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //? Going sideways : siblings
// console.log(h1.previousElementSibling);
// // console.log((h1.nextElementSibling.style.background = 'red'));
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// //* Selecting the parent element and getting all the children
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
