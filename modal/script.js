'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const viewModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Show modal on click btn showmodal
for (const showModal of btnsOpenModal) {
  showModal.addEventListener('click', function () {
    viewModal();
  });
}

// closing Modal on click X button
btnCloseModal.addEventListener('click', closeModal);

//closing Modal on click overlay or ouside when modal is open
overlay.addEventListener('click', closeModal);

// Exit open modal on click ESC button on keyboard
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
