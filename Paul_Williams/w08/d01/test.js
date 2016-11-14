console.log('test linked');

var testArrNums = [1, 2, 3, 4, 5, 6];
var testArrStrings = ['one', 'two', 'three', 'four', 'five', 'six'];

var testEachCallback = function(i, v) {
  console.log('Value at index ' + i + ' is ' + v);
}

var testMapCallbackNums = function(v) {
  return v *= 2;
}

var testMapCallbackStrings = function(v) {
  return v + ' mapped';
}

var testFilterCallbackNums = function(v) {
  return v % 2 === 0;
}

var testFilterCallbackStrings = function(v) {
  return v.slice(-1) === 'e';
}
