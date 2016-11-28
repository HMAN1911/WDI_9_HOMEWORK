var list = [1, 2, 3, 4, 5];

function timesBy2(i){
  console.log(i * 2);
}

var wdi = {
    shuffle: function(array){
      var arrayLength = array.length;
      var tempArray = [];
      for ( var i = 0; i < arrayLength - 1; i++) {
        tempArray.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);  //array.slice
    }
    tempArray.push(array[0]);
    array = tempArray;
    return array
  },
    sample: function(array){
    var sample = array[Math.floor(Math.random() * array.length)];
    return sample
  },
    each: function(array, func){
      for(var i = 0; i < array.length; i++){
        func(array[i]);
      }
    }

  }

// console.log(wdi.shuffle(list));
console.log(wdi.sample(list));
console.log(wdi.each(list, timesBy2));


//
// array.forEach(function(element)){
//   console.log(element);
// }
//
// array.forEach(MultiplyByTwo)
