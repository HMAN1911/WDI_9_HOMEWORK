var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// - Create an array of every five numbers between 30 and 101

var num_arr = _.range(30, 101, 5)

console.log(num_arr);


// - Turn ` bumpyArr ` into one flat array (no nested arrays)
var flatten = _.flatten(bumpyArr)
console.log(flatten);

// - Remove all of the falsey elements in the ` uncompactedArr `
_.filter(uncompactedArr, function(elem){
  // if truthy
  return elem === true ? true: false;
  //
  // if (elem){
  //   return true;
  // }
  // else {
  //   return false;
  // }
});


// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `

var arrU = [[ 1, 25, 100, 14 ],[ 1, 14, 25 ],[24, Infinity, -0]]
var flatArrU = _.uniq(_.flatten(arrU));


// - Find the index of the first element in ` numbers ` that is over 7 and is even
_.filter(numbers, function(elem) {
  return elem > 7 && elem % 2 === 0 ? true: false;
});
// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined }
// You can do this with _.map, _.values and _.object, like this
console.log(_.object(arrToTransform[0], arrToTransform[1]));
