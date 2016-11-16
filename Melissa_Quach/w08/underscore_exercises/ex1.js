var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

console.log('Exercise 1');

// Iterate through numbers and log each number to the console
_.each(numbers, function(val) {
  console.log(val);
});

// Iterate through numbers and multiply each one of them by 5
console.log(_.map(numbers, function(number) {
  return number * 5;
}));

// Iterate through numbers and reduce it by adding them together
console.log(_.reduce(numbers, function(memo, context) {
  return memo + context;
}));

// Get an array of all of the people in people that have the username "E"
console.log(_.filter(people, function(person) {
  return person.username === 'E';
}));

// Find the first object in people that has the id of 3
console.log(_.find(people, function(person) {
  return person.id === 3;
}));

// Find the first person who has an age of less than 50
console.log(_.find(people, function(person) {
  return person.age < 50;
}));

// Get an array of all of the people with an age of over 60
console.log(_.filter(people, function(person) {
  return person.age > 60;
}));

// Remove all of the people with an age less than 40
var over40 = _.filter(people, function(person) {
  return person.age < 40;
});

console.log(_.difference(people, over40));
