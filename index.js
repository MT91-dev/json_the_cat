const { fetchBreedDescription } = require('./breedFetcher');

let breedFromUser = process.argv.slice(2).join("").toLowerCase().replaceAll(" ", "").replaceAll("-", "").replaceAll(",", ""); //remove all characters that are not letters

fetchBreedDescription(breedFromUser, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});