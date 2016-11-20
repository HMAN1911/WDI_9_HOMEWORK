console.log('checking if its working');

list = [1,2,3,4,5];

console.log('shuffle:');
console.log(wdi.shuffle(list));


console.log('sample, 3');
console.log(wdi.sample(list, 3));

console.log('sample with no number:');
console.log(wdi.sample(list));

console.log('each;');
console.log(wdi.each(list, function() {
  console.log('hi');
}));

console.log(wdi.map(list, function(list) {
  +1
}));
