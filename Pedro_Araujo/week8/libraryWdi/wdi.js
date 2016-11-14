var wdi = {

  shuffle: function(list) {
    var i = 0
      , j = 0
      , temp = null;
    for (i = list.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    return list
  },

  sample: function(list , num = 1) {
    var randomList = [];
    for (var i = 0; i < num; i++) {
      var randomItem = list[Math.floor(Math.random()*list.length)];
      randomList.push(randomItem);
    }
    return randomList;
  },

  each: function(list , outerFunction) {
    listReturns = []
    for (var i = 0; i < list.length; i++) {
      outerFunction(list[i])
    }
    return listReturns;
  },

  map: function(list, outerFunction) {
    listReturns = []
    for (var i = 0; i < list.length; i++) {
      listReturns.push(outerFunction(list[i]))
    }
    return listReturns;
  },

  filter: function(list, outerFunction){
    listReturns = []
    for (var i = 0; i < list.length; i++) {
      var back = (outerFunction(list[i]));
      debugger
      if (back > 15){
        listReturns.push(back);
      }
    }
    return listReturns;
  }

}
