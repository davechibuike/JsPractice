'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

let check = true;

//  Render country
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
};

// Error msg
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJson = function (url, errorMsg = 'Something Went Wrong') {
  return fetch(url).then(responce => {
    if (!responce.ok) {
      throw new Error(`${errorMsg}. ${responce.status}`);
    }

    return responce.json();
  });
};
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
//

// // Get country data
// const getCountryData = function (country) {
//   if (!check) return;
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(responce => {
//       if (!responce.ok) {
//         throw new Error(`Country not Found (${responce.status})`);
//       }
//       return responce.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(responce => responce.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.log(`${err.message}`);
//       renderError(`Something Went Wrong. ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('togo');
//   check = false;
// });

// // getCountryData('hjhjhjj');

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
//

// Get country data
const getCountryData = function (country) {
  if (!check) return;

  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not Found')
    .then(data => {
      renderCountry(data[0]);

      const neighbor = data[0].borders?.[0];

      if (!neighbor) throw new Error(`No neighbor Found`);

      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Country not Found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err.message}`);
      renderError(`${err.message}! Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('ghana');
  check = false;
});
getCountryData('new zealand');
