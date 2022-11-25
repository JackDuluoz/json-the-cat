
const request = require('request');

let breed = process.argv[2];
let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

request(url, (error, response, body) => {
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