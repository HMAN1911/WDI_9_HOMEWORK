
array1 = [1,2,3,4,5,6,7,8,9,10]

var logNum = function(num){
  console.log(num);
}

var timesTwo = function(num){
  return num * 2;
}

var isEven = function(num){
  if (num % 2 === 0) {
    return num;
  } else {
    return false;
  }
}


var wdi = {

  shuffle : function(array, num){
    var copy = array.slice();
    var shuf = [];
    var indx = 0;
    if (num === undefined) {
      var leng = copy.length;
    } else {
      var leng = num + 1;

    }
    while (--leng) {
      indx = Math.floor(Math.random() * (leng+1));

      shuf.push(copy[indx]);
      copy.splice(indx, 1);
    }

    return shuf;
  },

  sample : function(array, num){
    if (num === undefined) {
      num = 1
    }
    return wdi.shuffle(array, num);
  },

  each : function(array, func){
    for (var i = 0; i < array.length; i++) {
      func(array[i]);
    }
  },

  map : function(array, func){
    var map = array.slice();

    for (var i = 0; i < map.length; i++) {
      map[i] = func(map[i]);
    }
    return map;
  },

  filter : function(array, func){
    var filter = [];

    for (var i = 0; i < array.length; i++) {
      if (func(array[i])) {
        filter.push(array[i]);
      }
    }
    return filter;

  }

}


// (function(window){
//   // 'use strict';
//
//   function define_wdi(){
//
//     var wdi = {};
//
//     wdi.shuffle = function(array, num){
//       var copy = array.slice();
//       var shuf = [];
//       var indx = 0;
//       if (num === undefined) {
//         var leng = copy.length;
//       } else {
//         var leng = num + 1;
//
//       }
//       while (--leng) {
//         indx = Math.floor(Math.random() * (leng+1));
//
//         shuf.push(copy[indx]);
//         copy.splice(indx, 1);
//       }
//
//       return shuf;
//     },
//
//     wdi.sample = function(array, num){
//       if (num === undefined) {
//         num = 1
//       }
//       return wdi.shuffle(array, num);
//     },
//
//     wdi.each = function(array, func){
//       for (var i = 0; i < array.length; i++) {
//         func(array[i]);
//       }
//     },
//
//     wdi.map = function(array, func){
//       var map = [];
//
//       for (var i = 0; i < array.length; i++) {
//         array[i] = func(array[i]);
//         map.push(array[i]);
//       }
//       return map;
//     },
//
//     wdi.filter = function(array, func){
//       var map = [];
//
//       for (var i = 0; i < array.length; i++) {
//         if (func(array[i])) {
//           map.push(array[i]);
//         }
//       }
//       return map;
//
//     }
//
//     return wdi;
//   }
//
//   if(typeof(wdi) === 'undefined'){
//         window.wdi = define_wdi();
//     }
//     else{
//         console.log("wdi already defined.");
//     }
//
// })(window);
//
// console.log(wdi);
