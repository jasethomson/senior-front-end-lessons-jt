/* eslint-disable no-console, no-unused-vars */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var names = [
  'Bill',
  'Monique',
  'Dan',
  'TJ',
  'Scott',
  'Tim H.',
  'Cody',
  'Brett',
  'Andy',
  'Tim D.'
];

var evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

var overFive = numbers.filter(number => number > 5);
console.log(overFive);

var startWithT = names.filter(name => name[0] === 'T');
console.log(startWithT);

var haveD = names.filter(name => name.includes('d') || name.includes('D'));
console.log(haveD);
