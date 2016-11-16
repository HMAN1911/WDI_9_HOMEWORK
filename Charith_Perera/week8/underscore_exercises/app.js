console.log("***********************EXERCISE 1***********************");

console.log("Question 1")

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

_.each(numbers, function(num) {
  console.log(num);
})

console.log("Question 2")

var questionTwo = _.map(numbers, function(num) {
  return num * 5;
})

console.log(questionTwo);

console.log("Question 3")

var questionThree = _.reduce(numbers, function(memo, num) {
  return memo + num;
}, 0);

console.log(questionThree);

console.log("Question 4")

var questionFour = _.filter(people, function(person) {
  return person.username === "E";
});

_.each(questionFour, function(person) {
  console.log(person.username);
})

console.log("Question 5")

var questionFive = _.find(people, function(person) {
  return person.id === 3;
})

console.log(questionFive);

console.log("Question 6");

var questionSix = _.find(people, function(person) {
  return person.age < 50;
})

console.log(questionSix);

console.log("Qestion 7");

var questionSeven = _.filter(people, function(person) {
  return person.age > 60;
})

console.log(questionSeven)

console.log("Question 8");

var questionEight = _.reject(people, function(person) {
  return person.age < 40;
})

console.log(questionEight);

console.log("***********************EXERCISE 2***********************");

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
];

console.log("Question 1")

var questionOne = _.sortBy(people, 'uid');

console.log(questionOne)

console.log("Question 2")

var questionTwo = _.groupBy(words, function(word) {
  return word[0].toLowerCase();
})

console.log(questionTwo);

console.log("Question 3")

var questionThree = _.every(words, function(word) {
  return word.length > 3;
})

console.log(questionThree);

console.log("Question 4");

var questionFour = _.some(words, function(word) {
  return word.length > 20;
});

console.log(questionFour);

console.log("Question 5");

var questionFive = _.pluck(people, 'uid');

console.log(questionFive);

console.log("Question 6");

var questionSix = _.max(people, function(person) {
  return person.uid;
})

console.log(questionSix);

console.log("Question 7");

var questionSeven = _.countBy(numbers, function(number) {
  return number % 2 == 0 ? 'Even' : 'Odd';
})

console.log(questionSeven);

console.log("Question 8");

var questionEight = _.sample(numbers, 3);

console.log(questionEight);

console.log("***********************EXERCISE 3***********************");


var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

console.log("Question 1");

var questionOne = _.range(30, 101, 5);

console.log(questionOne);

console.log("Question 2");

var questionTwo = _.flatten(bumpyArr);

console.log(questionTwo);

console.log("Question 3");

var questionThree = _.compact(uncompactedArr);

console.log(questionThree);

console.log("Question 4");
//
// [1, 25, 100]
// [1, 14, 25]
// [24, Infinity, 0]

console.log("QUESTION 4 MAKES NO SENSE DT NOT DOING IT")


console.log("Quesion 5");

var questionFive = _.findIndex(numbers, function(num) {
  return (num > 7 && num % 2 === 0);
});

console.log("Index: " + questionFive);

console.log("QUestion 6");

var questionSix = _.object(arrToTransform[0], arrToTransform[1]);

console.log(questionSix);
