const request = require('request');

// let breedFromUser = process.argv.slice(2).join("").toLowerCase().replaceAll(" ", "").replaceAll("-", "").replaceAll(",", ""); //remove all characters that are not letters

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds', function(error, response, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    let allBreeds = JSON.parse(body);
    let description = null;
    let breedExists = false;

    allBreeds.forEach(element => {
      let sanitizedElement = element.name;
      // let sanitizedElement = element.name.toLowerCase().replaceAll(" ", "").replaceAll("-", "").replaceAll(",", "");
      if (sanitizedElement === breedName) {
        description = element.description;
        breedExists = true;
      }
    });

    if (!breedExists) {
      description = "The Breed you tried to search was not found! Try searching again.";
    }

    callback(error, description);

  });
};

module.exports = {
  fetchBreedDescription,
};
