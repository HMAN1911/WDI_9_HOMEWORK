var wdi = {
  // Return copy of list with items shuffled
  shuffle: function(list) {
    var newList = list.slice();

    // Swap elements throughout entire array
    for (var i = 0; i < newList.length; i++) {
      var swapIndex = Math.floor(Math.random() * newList.length);
      var temp = newList[swapIndex];
      newList[swapIndex] = newList[i];
      newList[i] = temp;
    }

    return newList;
  },
  // Return random elements from list
  sample: function(list, size) {
    // Set default value for size
    if (typeof size === 'undefined') {
      size = 1;
    }

    var samples = this.shuffle(list);

    if (size === 1) {
      return samples[0];
    }
    return samples.slice(0, size);
  },
  // Execute callback for each element in list
  each: function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  },
  // Produce new array by transforming each element
  // from list using the given callback
  map: function(list, callback) {
    var newList = list.slice();

    for (var i = 0; i < newList.length; i++) {
      newList[i] = callback(list[i], i);
    }

    return newList;
  },
  // Return new array containing items from list that
  // pass the given predicate
  filter: function(list, callback) {
    var filteredList = [];
    for (var i = 0; i < list.length; i++) {
      if (callback(list[i], i)) {
        filteredList.push(list[i]);
      }
    }

    return filteredList;
  }
};
