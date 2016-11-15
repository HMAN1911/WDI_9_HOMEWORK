console.log('wdiLib linked');

var wdi = {

  shuffle: function(list) {
    var shuffled = list.slice(0);
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
  },

  sample: function(list, num) {
    num = num || 1;
    if (num > list.length) {
      throw 'num exceeds list length';
    } else if (num === 1) {
      return list[Math.floor(Math.random() * list.length)];
    } else {
      var listCopy = list.slice(0)
      var samples = [];
      for (var i = 0; i < num; i++) {
        var j = Math.floor(Math.random() * listCopy.length);
        samples.push(listCopy.splice(j, 1)[0]);
      }
      return samples;
    }
  },

  each: function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(i, list[i]);
    }
    return list;
  },

  map: function(list, callback) {
    var mapped = [];
    for (var i = 0; i < list.length; i++) {
      mapped.push(callback(list[i]));
    }
    return mapped;
  },

  filter: function(list, callback) {
    var filtered = [];
    for (var i = 0; i < list.length; i++) {
      if (callback(list[i])) {
        filtered.push(list[i]);
      }
    }
    return filtered;
  }

}

/*
# wdi lib

Writing our own library of useful functions

```
wdi.shuffle(list)
```

Returns a shuffled copy of the list

```
wdi.sample(list)
wdi.sample(list, 3)
```

Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

```
wdi.each(list, callback)
```

the each() method executes a provided function once per array element.

```
wdi.map(list, callback)
```

Produces a new array of values by mapping each value in list through a transformation function

```
wdi.filter(list, callback)
```

Looks through each value in the list, returning an array of all the values that pass a truth test
*/
