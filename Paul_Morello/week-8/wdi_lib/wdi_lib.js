
var wdi = {
  shuffle: function(array) {
    var newArray = array.slice();
    var currentIndex = newArray.length;
    var temporaryValue;
    var randomIndex;

    while (currentIndex) {
      index = Math.floor(Math.random() * currentIndex);
      currentIndex --;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[index];
      newArray[index] = temporaryValue;
    }
    return newArray;
  },
  // grab the corresponding value of the random index value
  // push values to new array
  // return new array

  sample: function(array, optional) {
    optional = optional || 0;
    newArray = [];
    array2 = array.slice();

    if(optional === 0) {

      randomIndex = Math.floor(Math.random() * (array.length));
      // loop through the array with length of optional parameter
      return array[randomIndex];
    }
    else {

      for (var i = 0; i < optional; i++) {
        randomIndex = Math.floor(Math.random() * (array2.length));
        newArray.push(array2[randomIndex]);
        array2.splice(randomIndex, 1);
      }
      return newArray;
    }
  },

  each: function(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  },

  map: function(array, callback) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(callback(array[i]));
    }
  },

  filter: function(array, callback) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i]) === true) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
}

array = [1,2,3,4,5,6,7,8,9,10,11,12];

function evans(num) {
  return num % 2 == 0;
}
