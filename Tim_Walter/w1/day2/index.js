var person = prompt("Please enter your name: ");

console.log('hello ' + person);



// multiplication tables
for (i=1; i<=10; i++) {
  for (m=1; m<=10; m++) {
    console.log(i + " x " + m + " = " + (i * m));
  }
}


// - If a vegan can eat it, return "This cuisine is vegan friendly."
// - Otherwise, return "Vegans beware!"
// - For the sake of this exercise. Tofurkey is definitely vegan friendly.


var checkChoice = '';
while (checkChoice === '') {
  var menu = prompt("On the menu tonight: Steak, fruit salad, Tofurkey, pork chops. PLEASE CHOOSE:")
    if (menu === 'fruit salad' || menu === 'tofurkey' ) {
      console.log('This cuisine is vegan friendly');
      checkChoice = 'ok'
    } else if (menu === 'steak' || menu === 'pork chops') {
      console.log('Vegans beware!');
      checkChoice = 'ok'
}
}
