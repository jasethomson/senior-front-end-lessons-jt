/* eslint-disable no-console */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
fetch('https://pokeapi.co/api/v2/pokemon/4')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
