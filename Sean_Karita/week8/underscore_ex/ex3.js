console.log('underscore ex3');

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// - Create an array of every five numbers between 30 and 101
var fifth_number = _.ranges(30, 101, 5);
console.log(fifth_number);

// - Turn ` bumpyArr ` into one flat array (no nested arrays)
var one_bumpyArr = _.flatten(bumpyArr);
console.log(one_bumpyArr);
// - Remove all of the falsey elements in the ` uncompactedArr `
var truthy_uncompactArr = _.compact(uncompactedArr);
console.log(truthy_uncompactArr);
// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `
var unique_elements = _.unique([1, 25, 100], [1, 14, 25], [25, Infinity, -0]);
console.log(unique_elements);
// - Find the index of the first element in ` numbers ` that is over 7 and is even
var even_over_seven = _.findIndex(numbers, function(num){
  return num > 7 && num%2 ===0;
});
// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `
var arrToTransformNew = _.object(arrToTransform[0], arrToTransform[1]);
console.log(arrToTransformNew);
