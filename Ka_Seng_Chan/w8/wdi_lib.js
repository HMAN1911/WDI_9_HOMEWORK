// console.log('its working')

var wdi = {
  shuffle: function(arr) {
    var newArr = arr.slice();
    var currentIndex = newArr.length;
    var randomIndex;
    var tempValue;
    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      tempValue = newArr[currentIndex];
      newArr[currentIndex] = newArr[randomIndex];
      newArr[randomIndex] = tempValue;
    }
    return newArr;
  },

  sample: function(arr, num) {
    if (typeof num === 'undefined') { num = 1; }
    var shuffledArr = wdi.shuffle(arr);
    return shuffledArr.slice(0,num);
  },

  each: function(arr, callback) {
    if (typeof arr !== 'object') { throw 'first argument should be an array'; }
    for (var i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  },

  map: function(arr, callback) {
    if (typeof arr !== 'object') { throw 'first argument should be an array'; }
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
  },

  filter: function(arr, callback) {
    if (typeof arr !== 'object') { throw 'first argument should be an array'; }
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

}

// test functions
function print(element) {
  console.log(element);
}

function double(element) {
  return element * 2;
}

function isEven(element) {
  return element % 2 === 0;
}


a = [0,1,2,3,4,5];
