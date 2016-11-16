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
_.each(numbers, function (number) {
  console.log(number);
});

// Iterate through numbers and multiply each one of them by 5
var multiplied = []
_.each(numbers, function(number){
  multiplied.push(number*5)
});
console.log(multiplied);

// Iterate through numbers and reduce it by adding them together
var sumNumbers = 0;
_.each(numbers, function(number){
  sumNumbers = sumNumbers + number;
});
console.log(sumNumbers);

// Get an array of all of the people in people that have the username "E"
var usernameE = [];
_.each(people, function(person){

  if (person.username === 'E') usernameE.push(person) ;
});
console.log(usernameE);


// Find the first object in people that has the id of 3
var first = _.find(people, function(person){
  return person.id === 3
});
console.log(first);

// Find the first person who has an age of less than 50
var firstAge = _.find(people, function(person) {
  return person.age < 50
});
console.log(firstAge);

// Get an array of all of the people with an age of over 60
var allOver60 = [];
_.each(people, function(person){
  if (person.age > 60){
    allOver60.push(person);
  }
});
console.log(allOver60);

// Remove all of the people with an age less than 40
var moreThan40 = _.reject(people, function(person){ return person.age < 40; });
console.log(moreThan40);
