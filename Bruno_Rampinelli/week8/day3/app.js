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
_.each(numbers,function(number) {
  console.log(number);
});

// / map is intended to be a functional mapping method: its function argument should return a value, but is not expected to have any side-effects.
//
// each is just a functional replacement for an imperative for loop: its purpose is to have an effect, and it is not expected to return any value.
// Iterate through numbers and multiply each one of them by 5
 var multiplied =[]
_.map(numbers,function(number){

   multiplied.push(number *5);
});
console.log(multiplied);
// Iterate through numbers and reduce it by adding them together

var sum = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);
console.log (sum);

// Get an array of all of the people in people that have the username "E"

var E = _.where(people, {username: "E"});

console.log(E);

// Find the first object in people that has the id of 3
var id_3 = _.findWhere(people, {id: 3});
console.log(id_3);
// Find the first person who has an age of less than 50
var young = _.find(people, function(person){
  return person.age < 50;
});

console.log(young);

// Get an array of all of the people with an age of over 60

var old_people = _.filter(people, function(person){
  return person.age > 60;
});

console.log(old_people);
// Remove all of the people with an age less than 40

var over_fourty = _.reject(people, function(person){
  return person.age > 40;
});

console.log(over_fourty);
