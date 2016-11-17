console.log('works');

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console

_.each(numbers, function(num) {
    console.log(num);
});

// Iterate through numbers and multiply each one of them by 5

var number = []

_.each(numbers, function(num) {
    number.push(num * 5);
});

console.log('Numbers multiplied by 5: ' + number);

// Iterate through numbers and reduce it by adding them together

var sum = _.reduce(numbers, function(memo, num){
  return memo + num; }, 0);

console.log('Numbers reduced: ' + sum);

// Get an array of all of the people in people that have the username "E"

var usernameE = _.where(people, {username: 'E'});

console.log(usernameE);

// Find the first object in people that has the id of 3
var personId3 = _.findWhere(people, {
  id: 3
});

console.log(personId3);

// Find the first person who has an age of less than 50

var personUnder50 = _.filter(people, function(person) {
  return person.age < 50
});

console.log(personUnder50[0]);

// Get an array of all of the people with an age of over 60

var peopleOver60 = _.filter(people, function(person) {
  return person.age > 60
});

console.table(peopleOver60);

// Remove all of the people with an age less than 40

var peopleUnder40 = _.reject(people, function(person){
  return person.age < 40
});

console.table(peopleUnder40);


// Notes:

// http://stackoverflow.com/questions/25552952/what-is-really-the-difference-between-underscore-each-and-map
// map is intended to be a functional mapping method: its function argument should return a value, but is not expected to have any side-effects.

// each is just a functional replacement for an imperative for loop: its purpose is to have an effect, and it is not expected to return any value.
