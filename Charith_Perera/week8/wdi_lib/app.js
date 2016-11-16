var list = [1,2,3,4,5];

console.log(wdi.shuffle(list));
console.log(wdi.sample(list, 3));
console.log(wdi.each(list, function(el) {
  console.log(3 * el);
}));

new_arr = wdi.map(list, function(el) {
  return el * 3;
})

console.log(new_arr);

// console.log(list);
results = wdi.filter(list, function(el) {
  return el % 2 == 0;
})

console.log(results);
