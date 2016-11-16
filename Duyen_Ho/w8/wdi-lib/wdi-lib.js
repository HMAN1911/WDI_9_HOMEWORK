// # wdi lib

// Writing our own library of useful functions
var wdi = {

  // Returns a shuffled copy of the list
  shuffle: function(array) {
    var oldArray = array;
    var newArray = [];
    var counter = array.length;
    var i;

    while (counter) {
      i = Math.floor(Math.random() * counter);
      newArray.push(oldArray[i]);
      oldArray.splice(i, 1);
      counter -= 1;
    }
    // look into why newArray won't return
    // return newArray;
    console.log(newArray);
  },

  // Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
  sample: function(array, b) {
    b = b || 1;
    // need to call own shuffle method, but using underscore js until above is resolved
    // var newArray = this.shuffle(array);
    var newArray = _.shuffle(array);
    // same problem
    // return newArray.splice(0, b);
    console.log(newArray.splice(0, b));
  },

  // the each() method executes a provided function once per array element.
  // each: function(array, newFunc) {
  //
  //   for (var i = 0; i < array.length, i++) {
  //     newFunc(array[i]);
  //   };
  //
  // },

  // Produces a new array of values by mapping each value in list through a transformation
  // map: function() {
  //
  // },

  // Looks through each value in the list, returning an array of all the values that pass a truth test
  // filter: function() {
  //
  // }
};

var list = [1,2,3,4,5];
wdi.shuffle(list);

// wdi.sample(list);
// wdi.sample(list, 3);

// wdi.each(list, func);

// wdi.map(list, func);

// wdi.filter(list, func);
