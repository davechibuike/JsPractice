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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

const h1 = document.querySelector('h1');

const alertH1 = e => {
  alert(" 'onmouseenter': You're Reading the Heading");
};

h1.addEventListener('mouseenter', e => {
  alert(" 'addEventListner': You're Reading the Heading");
});

//* Using on
h1.onmouseenter = e => {
  alert(" 'onmouseenter': You're Reading the Heading");
};
