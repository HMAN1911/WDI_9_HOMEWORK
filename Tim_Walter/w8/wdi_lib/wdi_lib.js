console.log('wdi_lib at your service');


var list = [1,2,3,4,5,6,7,8,9,10]

var wdi = {

  shuffle: function(list) {
    var shuffle_pos, x;
    for (var i = list.length; i>0; i--) {
       shuffle_pos = Math.floor(Math.random() * i);
       x = list[i - 1];
       list[i - 1] = list[shuffle_pos];
       list[shuffle_pos] = x;
    };
    return list
  },

  sample: function(list, size) {
    var sample_list = [];
    for (i=0; i<size; i++) {
      index = Math.floor(Math.random() * list.length);
      sample_list.push(list[index]);
      list.splice(index, 1);
    }
    return sample_list
  }
}




// https://gist.github.com/epoch/b8579eb4545abc004fe832d77e634787#file-wdi_lib-md

// # wdi lib
//
// Writing our own library of useful functions
//
// ```
// wdi.shuffle(list)
// ```
//
// Returns a shuffled copy of the list
//
// ```
// wdi.sample(list)
// wdi.sample(list, 3)
// ```
//
// Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
//
// ```
// wdi.each(list, callback)
// ```
//
// the each() method executes a provided function once per array element.
//
// ```
// wdi.map(list, callback)
// ```
//
// Produces a new array of values by mapping each value in list through a transformation function
//
// ```
// wdi.filter(list, callback)
// ```
//
// Looks through each value in the list, returning an array of all the values that pass a truth test
