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
  getCountryData('usa');
  check = false;
});
// getCountryData('new zealand');

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/

// Auth 	132638067048793371710x67900

navigator.geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude } = position.coords;
    // whereAmI(latitude, longitude);
  },
  () => console.log("Can't Access Your Location")
);

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=132638067048793371710x67900`
  )
    .then(responce => {
      if (!responce.ok) {
        throw new Error(`Wahala! ${responce.status.code}`);
      }
      return responce.json();
    })
    .then(data => {
      console.log(`You're in ${data.city}, ${data.country}.`);
      getCountryData(data.country);
    })
    .catch(err => {
      console.log(err.message);
      renderError(`${err.message} ! Try again`);
    });
};

// 6.4487424
// 3.4504704

// whereAmI(44.5, -89.5);
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
