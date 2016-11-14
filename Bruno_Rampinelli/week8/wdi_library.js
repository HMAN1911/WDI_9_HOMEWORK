// Writing our own library of useful functions
// wdi.shuffle(list)
// Returns a shuffled copy of the list
// wdi.sample(list)
// wdi.sample(list, 3)
// Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

// wdi.sample(list)
// wdi.sample(list, 3)
// Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

// wdi.each(list, func)
// the each() method executes a provided function once per array element.
//
// wdi.map(list, func)
// Produces a new array of values by mapping each value in list through a transformation function
//
// wdi.filter(list, func)
// Looks through each value in the list, returning an array of all the values that pass a truth test


var wdi = {

  name: 'Bruno',
  greet : function(){
    alert("Hi, this is the Bruno's library");
  },

  shuffle : function(array, num1) {
      for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
      }
      return array
  },

  sample : function (list,num1) {
    if (num1 == null || num1 == 0) {

      var value = list[Math.floor(Math.random() * list.length)];

    }
    else {
      var value=[];
      for (let i = num1; i; i--) {
        var number = list[Math.floor(Math.random() * list.length)];
        value.push(number);
      }

    }

    return value

  },

  each : function (list, func) {

    for (var i = array.length; i; i--) {
      console.log(i)
    }


  }





}
