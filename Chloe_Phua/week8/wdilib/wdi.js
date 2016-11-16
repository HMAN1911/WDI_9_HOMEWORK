//wrapping it so that it executes automatically and has its own contained code
//closure will wrap the entire definition
var list = [3,3,3,3,5];

(function(window) {

    'use strict';
    //First, strict mode eliminates some JavaScript silent errors by changing them to throw errors.
    //Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
    //Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

    function define_Library() {

      var wdi = {};

      wdi.shuffle = function(array) {
        //to shuffle
        //loop through array and return each in a randomised order
        var i = 0;
        var j = 0;
        //where j is a randomIndex
        var temp = null;
        //where temp is a temporary number

        //loop through indexes
        for (var i = array.length - 1; i > 0; i -= 1){
          j = Math.floor(Math.random() * (i+1))
          //assign the value at array[i] to temp
          temp = array[i]
          //give a new random value j to array[i]
          array[i] = array[j]
          // we now give the value at array[i] to the random index
          array[j] = temp
        }
        return array
      }

      wdi.sample = function(array, num) {
        if (num == undefined) {
          //return one random number
          return array[Math.floor(Math.random() * array.length)];
        } else {
          //this is where we return num number of values
          return wdi.shuffle(array).slice(0,num)
        }
      }

      //when each is called, we are aiming for it to iterate over the array
      //every time the call back is run, it is passed through the loop iteration, from 0
      //the keyword 'this' refers to the element
      wdi.map = function(array, func) {
        var answer = [];
        for (var i = 0; i < array.length; i++) {
          answer.push(func(array[i]));
        }
        return answer;
      }

      //we do not need to return anything
      //we just need to apply any function to it, and it'll
      // do it for however many array indexes there are
      wdi.each = function(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
      }

      wdi.filter = function(array, func) {
        var trueshit = [];
        for (var i = 0; i < array.length; i++) {
          if (func(array[i])) {
            trueshit.push(array[i])
          }
        }
        return trueshit;
      }
      return wdi;
    }
//This checks to see if Library is already defined elsewhere, and if not runs your definition function to create it.
    if(typeof(wdi) === 'undefined') {
      window.wdi = define_Library();
    } else {
      console.log("library already defined");
    }
})(window);
