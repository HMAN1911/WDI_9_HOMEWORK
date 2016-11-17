console.log('works');

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// - Create an array of every five numbers between 30 and 101

var array = _.range(30, 101, 5);

console.log(array);

// - Turn ` bumpyArr ` into one flat array (no nested arrays)

var flattenArray = _.flatten(bumpyArr);

console.log(flattenArray);

// - Remove all of the falsey elements in the ` uncompactedArr `

// _.compact returns a copy of the array with all falsy values removed.
var truthyArray = _.compact(uncompactedArr);

console.log(truthyArray);

// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `

// _.union computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
var uniqueArray = _.union([ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0])

console.log(uniqueArray);

// - Find the index of the first element in ` numbers ` that is over 7 and is even

var evenOver7 = _.findIndex(numbers, function(num) {
  return num > 7 && num % 2 === 0
});

console.log(evenOver7);

// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `
var object = _.object(arrToTransform);

console.log(object);


// Reference:
// http://stackoverflow.com/questions/21631127/find-the-array-index-of-an-object-with-a-specific-key-value-in-underscore
