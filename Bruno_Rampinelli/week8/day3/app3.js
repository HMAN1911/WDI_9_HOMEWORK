var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// - Create an array of every five numbers between 30 and 101

var every5 = [];
_.each(_.range(30,101), function(num){
  if (num % 5 === 0) {
    every5.push(num);
  }
});

console.log(every5)

// - Turn ` bumpyArr ` into one flat array (no nested arrays)

var flat = _.flatten(bumpyArr);
console.log(flat);

// - Remove all of the falsey elements in the ` uncompactedArr `

var not_falsey = _.compact(uncompactedArr);

console.log (not_falsey);

// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `

var uniqueA = _.flatten([[1, 25, 100], [ 1, 14, 25 ], 24, Infinity, -0]);

_.uniq(uniqueA);

console.log (_.uniq(uniqueA));

// - Find the index of the first element in ` numbers ` that is over 7 and is even

var even_and_7 = _.findIndex(numbers, function(number) {
  return number > 7 && number % 2 === 0;
});

console.log(even_and_7);

// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `

_.object(arrToTransform[0], arrToTransform[1]):
