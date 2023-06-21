const request = require('request');
const breedSearchUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breedName, callback) {
  request(`${breedSearchUrl}${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    // convert the JSON string into an object
    const responseBody = JSON.parse(body);
    //when breed is not found
    if (responseBody.length === 0) {
      return callback(error, `${breedName} breed is not found`);
    }
    const breedDescription = responseBody[0]['description'];
    // error if error present, otherwise error = null
    return callback(error, breedDescription);
  });
};

module.exports = { fetchBreedDescription };