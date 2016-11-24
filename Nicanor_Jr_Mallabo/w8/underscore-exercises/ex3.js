console.log('Underscore Exercise 3')
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

console.log(_.range(30, 101, 5));

console.log(_.flatten(bumpyArr));

console.log(_.filter(uncompactedArr, function(Arr) { return Arr; }));

console.log(_.find(numbers, function(num) { return num > 7 && num % 2 === 0; }));

console.log(_.object(arrToTransform[0], arrToTransform[1]));
