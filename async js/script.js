'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// // ! Using AJAX OLD METHOD
// const getCountryData = function (...countries) {
//   for (const country of countries) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);

//       const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//               <h3 class="country__name">${Object.values(data.name)[0]}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 data.population / 1000000
//               ).toFixed(1)}</p>
//               <p class="country__row"><span>🗣️</span>${Object.values(
//                 data.languages
//               )}</p>
//               <p class="country__row"><span>💰</span>${
//                 Object.values(data.currencies)[0].name
//               }</p>
//             </div>
//           </article>

//     `;

//       countriesContainer.insertAdjacentHTML('beforeend', html);
//       countriesContainer.style.opacity = 1;
//     });
//   }
// };

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
              <h3 class="country__name">${Object.values(data.name)[0]}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${Object.values(
                data.languages
              )}</p>
              <p class="country__row"><span>💰</span>${
                Object.values(data.currencies)[0].name
              }</p>
            </div>
          </article>

    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // Render country 1
//     renderCountry(data);

//     // Get country Neighbor 2
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('benin');

// ! Using Fetch Api

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (res) {
//       console.log(res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//  Using arrow function
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(responce => responce.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbor = data[0].borders?.[0];
      if (!neighbor) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
        .then(responce => responce.json())
        .then(data => renderCountry(data[0], 'neighbour'));
    });
};

btn.addEventListener('click', function () {
  getCountryData('ghana');
});
