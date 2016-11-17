var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// - Create an array of every five numbers between 30 and 101
var by5 = _.range(30,101,5);
console.log(by5);

// - Turn ` bumpyArr ` into one flat array (no nested arrays)
bumpyArr = _.flatten(bumpyArr);
console.log(bumpyArr);

// - Remove all of the falsey elements in the ` uncompactedArr `
var truthy = _.compact(uncompactedArr);
console.log(truthy);

// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `
var array = [1,25,100].concat([1,14,25]).concat([24,-0,Infinity]);
var unique = _.uniq(array);
console.log(unique);

// - Find the index of the first element in ` numbers ` that is over 7 and is even
var indof = _.findIndex(numbers, function(num){return num > 7 && num%2==0} )
console.log(indof);

// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `
var obj = _.object(arrToTransform[0], arrToTransform[1]);
console.log(obj);
