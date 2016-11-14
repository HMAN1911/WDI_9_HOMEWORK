console.log('test linked');

var testArrNums = [1, 2, 3, 4, 5, 6];
var testArrStrings = ['one', 'two', 'three', 'four', 'five', 'six'];

var testEachCallback = function(i, v) {
  console.log('Value at index ' + i + ' is ' + v);
}

var testMapCallbackNums = function(v) {
  v *= 2;
  return v;
}

var testMapCallbackStrings = function(v) {
  v = v + ' mapped';
  return v;
}

var testFilterCallbackNums = function(v) {
  if (v % 2 === 0) {
    return true;
  }
  return false;
}

var testFilterCallbackStrings = function(v) {
  if (v.slice(-1) === 'e') {
    return true;
  }
  return false;
}
