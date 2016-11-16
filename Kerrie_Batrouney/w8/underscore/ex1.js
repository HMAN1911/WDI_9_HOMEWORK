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
var each = _.each(numbers, function(num){console.log(num);});

// Iterate through numbers and multiply each one of them by 5
var map = _.map(numbers, function(num){return num * 5;});
console.log(map);

// Iterate through numbers and reduce it by adding them together
var reduced = _.reduce(numbers, function(memo, num){return memo + num;});
console.log(reduced);

// Get an array of all of the people in people that have the username "E"
var usernames = _.filter(people, function(person){return person.username === "E"});
console.log(usernames);

// Find the first object in people that has the id of 3
var found_id = _.find(people, function(person){return person.id === 3});
console.log("id = 3", found_id);

// Find the first person who has an age of less than 50
var found_age = _.find(people, function(person){return person.age < 50});
console.log("age less than 50", found_age);

// Get an array of all of the people with an age of over 60
var found_age2 = _.filter(people, function(person){return person.age > 60});
console.log("age greater than", found_age2);

// Remove all of the people with an age less than 40
var oldpeeps = _.reject(people, function(person){return person.age < 40});
console.log('younger than', oldpeeps);
