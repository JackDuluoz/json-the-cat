
const fetchBreedDescription = require('./breedFetcher2');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error:', error.message);
  } else {
    console.log(desc);
  }
});