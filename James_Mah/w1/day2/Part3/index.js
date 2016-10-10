var choice = prompt("What would you like to have tonight? Please input one of the following:\nsteak, fruit salad, tofurkey, pork chops");

if (choice != null) {
  if (choice === 'fruit salad' || choice === 'tofurkey'){
    console.log('This cuisine is vegan friendly.');
  }
  else if (choice === 'steak' || choice === 'pork chops'){
    console.log('Vegans beware!');
  }
  else {
    console.log('Your choice is not available.');
  }
}