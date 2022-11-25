
//Reverse engineered using fetchMyIP callback example from iss.


const request = require("request");

// const breedName = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) return callback(error, null);
    const data = JSON.parse(body);
    if (typeof data[0] === "undefined") {
      callback(Error("Breed Not Found"), null);
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = fetchBreedDescription;

// const fetchMyIP = function (callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
//       return;
//     }
//     const ip = JSON.parse(body).ip;
//     callback(null, ip);
//   });
// };
