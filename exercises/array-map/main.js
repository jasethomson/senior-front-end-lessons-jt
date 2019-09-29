/* eslint-disable no-console, no-unused-vars */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

var doubled = numbers.map(num => num * 2);
console.log('doubled: ', doubled);

var prices = numbers.map(num => '$' + num.toFixed(2));
console.log('prices: ', prices);

var upperCased = languages.map(str => str.toUpperCase());
console.log('upperCased: ', upperCased);

var firstLetters = languages.map(str => str[0]);
console.log(firstLetters);
