var wdi = {

  shuffle : function(array) {
    //put shuffle logic here
  var i = 0;
  var j = 0;
  var temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

    }
    return array;
  },

  each : function(array, callback) {
    for (var i=0; i<list.length; i++){
      callback.list[i];
    }

  },

  map : function() {
    console.log(this);
  },

  sample : function(array, n) {
    console.log(n);
    if (n === undefined) {
      // var newArray = wdi.shuffle.array.slice(0,1);
      var newArray = array.slice(0,1);
    } else {
      var newArray = array.slice(0, n);
    }
    return newArray;
  },

  filter : function() {
    console.log(this);
  }
}
