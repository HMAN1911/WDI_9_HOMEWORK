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

var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];

var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Iterate through numbers and log each number to the console

_.each(numbers, function(num) {
  console.log(num);
});

// Iterate through numbers and multiply each one of them by 5

_.map(numbers, function(num) {
  return num * 5;
});

// Iterate through numbers and reduce it by adding them together

_.reduce(numbers, function(memo, num) {
  return memo + num;
}, 0);

// Get an array of all of the people in people that have the username "E"

_.filter(people, function(v) {
  return v.username === "E";
});

// Find the first object in people that has the id of 3

_.find(people, function(v) {
  return v.id === 3;
});

// Find the first person who has an age of less than 50

_.find(people, function(v) {
  return v.age < 50;
});

// Get an array of all of the people with an age of over 60

_.filter(people, function(v) {
  return v.age > 60;
});

// Remove all of the people with an age less than 40

_.reject(people, function(v) {
  return v.age < 40;
});

// Sort the people by 'uid'

_.sortBy(people, 'uid');

// Group the random words by the lower case version of their first letter

_.groupBy(words, function(word) {
  return word[0].toLowerCase();
});

// Check to see if all the words have more than 3 characters

_.every(words, function(word) {
  return word.length > 3;
});

// Check if some words are over twenty characters long

_.some(words, function(word) {
  return word.length > 20;
});

// Get an array of all of the uids in people

_.pluck(people, 'uid');

// Find the person with the highest uid

_.max(people, function(p) {
  return p.uid;
});

// Return an object that says how many even numbers and how many odd numbers there are in numbers

_.countBy(numbers, function(num) {
  return num % 2 === 0 ? 'even' : 'odd';
});

// Get three random numbers out of numbers

_.sample(numbers, 3);

// - Create an array of every five numbers between 30 and 101

_.range(30, 101, 5);

// - Turn ` bumpyArr ` into one flat array (no nested arrays)

_.flatten(bumpyArr);

// - Remove all of the falsey elements in the ` uncompactedArr `

_.compact(uncompactedArr);

// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `



// - Find the index of the first element in ` numbers ` that is over 7 and is even

_.findIndex(numbers, function(num) {
  return num > 7 && num % 2 === 0;
});

// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `

_.object(arrToTransform[0], arrToTransform[1]);
