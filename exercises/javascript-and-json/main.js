/* eslint-disable no-console */
var hipObject = [
  { title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', isbn: '9780062273208' },
  { title: 'The Inevitable', author: 'Kevin Kelly', isbn: '9780735206069' },
  { title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future', author: 'Ashlee Vance', isbn: '9780062301239' }
];
var hipString = JSON.stringify(hipObject);
console.log('hipString result: ', hipString);
console.log('hipString typeof: ', typeof hipString);

var hipJson = '[{ "id": 1, "name": "Jase" }, { "id": 2, "name": "Nick" }, { "id": 3, "name": "Jae" }, { "id": 4, "name": "Sam" }]';
var hipJsonObject = JSON.parse(hipJson);
console.log('hipJsonObject: ', hipJsonObject);
console.log('typeof hipJson: ', typeof hipJsonObject);
