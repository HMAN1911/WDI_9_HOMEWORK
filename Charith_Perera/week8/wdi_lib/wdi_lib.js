wdi = {
  shuffle: function(arr) {
    var shuffled = arr.slice();
    var min = 0;
    var max = shuffled.length;
    var rand, temp;
    for (var i = 0; i < shuffled.length; i++) {
       rand = Math.floor(Math.random() * (max - min) + min);
       temp = arr[i];
       shuffled[i] = shuffled[rand];
       shuffled[rand] = temp;
    }
    return shuffled;
  },
  sample: function(arr, n) {
    var min = 0;
    var max = arr.length;
    if (n) {
      var sample = [];
      for (var i = 0; i < n; i++) {
        rand = Math.floor(Math.random() * (max - min) + min);
        sample[i] = arr[rand]
      }
      return sample;
    }
    else {
      rand = Math.floor(Math.random() * (max - min) + min);
      return arr[rand]
    }
  },
  each: function(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
      fn(arr[i]);
    }
    return arr;
  },
  map: function(arr, fn) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
      new_arr.push(fn(arr[i]));
    }
    return new_arr;
  },
  filter: function(arr, fn) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        results.push(arr[i]);
      }
    }
    return results;
  }
}
