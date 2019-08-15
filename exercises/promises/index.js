/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

let chance = takeAChance('jase');
chance.then(function (value) {
  console.log(value);
});
chance.catch(function (value) {
  console.log(value);
});
