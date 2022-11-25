
const request = require('request');

const breed = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

const fetchBreedDescription = () => {
  request(breed, (error, response, body) => {
    try {
      const data = JSON.parse(body);
      if (typeof data[0] === "undefined") {
        console.log("Breed Not Found");
      } else {
        console.log(data[0]);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  });
};

fetchBreedDescription();

module.exports = fetchBreedDescription;