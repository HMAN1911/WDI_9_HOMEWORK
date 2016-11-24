var wdi = {

  shuffle: function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },

  sample: function(array, num) {
    if (!num) {
      var rand = array[Math.floor(Math.random() * array.length)];
      return rand
    }
    else {
      var randArr = [];
      for (var i = 0; i < num; i++) {
        var rand = array[Math.floor(Math.random() * array.length)];
        if (randArr.indexOf(rand) === -1) {
          randArr.push(rand);
        } else {
          randArr.push(rand); // need to add something here to remove duplicates
        }
      }
      return randArr;
    }
  },

  each: function(array, callback) {
    for (var i = 0; i < array.length; i++) {
     if (callback && typeof(callback) === "function") {
       callback();
      }
    }
  },

  map: function(array, callback) {
    newArr = [];
    for (var i = 0; i < array.length; i++) {
     if (callback && typeof(callback) === "function") {
       var transformed = callback();
       newArr.push(transformed)
      }
    }
    return newArr;
  },

  // filter: function(array, callback) {
  //   for (var i = 0; i < array.length; i++) {
  //    if (callback && typeof(callback) === "function") {
  //      callback();
  //     }
  //   }
  // }

}
