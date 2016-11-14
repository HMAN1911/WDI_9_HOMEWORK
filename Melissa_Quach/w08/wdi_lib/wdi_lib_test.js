var MAX_ATTEMPTS = 3;

// Test if shuffle returns changed array
var testShuffleArray = function() {
  var array = [1, 2, 3, 4, 5];
  // Run check a few times in case of edge case
  // where array and shuffled array are the same
  for (var i = 0; i < MAX_ATTEMPTS; i++) {
    var shuffled = wdi.shuffle(array);
    for (var j = 0; j < shuffled.length; j++) {
      if (array[j] !== shuffled[j]) {
        return true;
      }
    }
  }
  return false;
}

// Test sample with no args returns random value from arr
var testSampleOne = function() {
  var array = [1, 2, 3, 4, 5];
  return array.indexOf(wdi.sample(array)) >= 0;
}

// Test sample with argument returns n samples
var testSampleMultiple = function() {
  var array = [1, 2, 3, 4, 5];
  var samples = wdi.sample(array, 3);

  if (samples.length !== 3) {
    return false;
  }

  for (var i = 0; i < samples.length; i++) {
    if (array.indexOf(samples[i]) === -1) {
      return false;
    }
  }
  return true;
}

// Test array transform
var testMap = function() {
  var array = [1, 2, 3, 4, 5];
  var expected = [2, 4, 6, 8, 10];
  var actual = wdi.map(array, function(value) {
    return value * 2;
  });

  if (expected.length !== actual.length) {
    return false;
  }

  for (var i = 0; i < actual.length; i++) {
    if (expected[i] !== actual[i]) {
      return false;
    }
  }
  return true;
}

// Test filter method
var testFilter = function() {
  var array = [1, 2, 3, 4, 5];
  var expected = [2, 4];
  var actual = wdi.filter(array, function(val) {
    return val % 2 === 0;
  });

  if (expected.length !== actual.length) {
    return false;
  }

  for (var i = 0; i < actual.length; i++) {
    if (expected[i] !== actual[i]) {
      return false;
    }
  }
  return true;
}

// Test engine
var testCases = [
  testShuffleArray,
  testSampleOne,
  testSampleMultiple,
  testMap,
  testFilter
];

// Report results for each test
var runTests = function() {
  testCases.forEach(function(test, i) {
    console.log('Test ' + (i + 1) + ': ' + (test() ? 'PASS' : 'FAIL'));
  });
}
