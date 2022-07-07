const request = require('request');

let breedFromUser = process.argv.slice(2).join("").toLowerCase().replaceAll(" ", "").replaceAll("-", "").replaceAll(",", ""); //remove all characters that are not letters

request('https://api.thecatapi.com/v1/breeds', function(error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  let allBreeds = JSON.parse(body);

  allBreeds.forEach(element => {
    let sanitizedElement = element.name.toLowerCase().replaceAll(" ", "").replaceAll("-", "").replaceAll(",", "");
    // console.log(element.name);
    if (sanitizedElement === breedFromUser) {
      console.log(element.description);
    }
  });
});