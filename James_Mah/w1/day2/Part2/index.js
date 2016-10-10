for (var count = 0; count <= 10; count++){
  for (var count2 = 1; count2 <= 10; count2++){
    console.log(count + ' * ' + count2 + ' = ' + (count*count2));
  }
}

var color = prompt("What is your name?");

if (color != null) {
    console.log(
    "Hello " + color + "! How are you today?");
}