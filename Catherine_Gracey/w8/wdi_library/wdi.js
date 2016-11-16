// wdi lib

// Writing our own library of useful functions

// wdi.VERSION;
// returns "1.0"

var list = [1,2,3,4,5];
// wdi.shuffle(list);
// Returns a shuffled copy of the list

// wdi.sample(list);
// wdi.sample(list, 3);
// Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

// wdi.each(list, callback);
// the each() method executes a provided function once per array element.

// wdi.map(list, callback);
// Produces a new array of values by mapping each value in list through a transformation function

// wdi.filter(list, callback);
// Looks through each value in the list, returning an array of all the values that pass a truth test

wdi = {};
wdi.VERSION = "1.0";
wdi.copyArray = function(list){
  var copy = [];
  for (var i = 0; i < list.length; i++){
    copy.push(list[i]);
  }
  return copy;
}
wdi.shuffle = function(list){
  var copy = wdi.copy(list), shuffle = [];
  while (copy.length > 0){
    var i = copy.splice(Math.floor( Math.random() * copy.length ), 1);
    shuffle.push(i[0]);
  }
};
wdi.sample = function(list, num){
  var shuffled = wdi.shuffle(list);
  if (num === undefined){
    num = 1;
  }
  var sample = shuffled.splice(0, num);
  if (num == 1){
    return sample[0];
  } else {
    return sample;
  }
};
wdi.each = function(list, callback){
  for (var i = 0; i < list.length; i++){
    callback(list[i]);
  }
};
wdi.map = function(list, callback){
  var map = [];
  for (var i = 0; i < list.length; i++){
    map.push(callback(list[i]));
  }
  return map;
};
wdi.filter = function(list, callback){
  var filter = [];
  for (var i = 0; i < list.length; i++){
    if (callback(list[i])){
      filter.push(list[i]);
    }
  }
  return filter;
};
