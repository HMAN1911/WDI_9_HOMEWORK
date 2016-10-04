console.log('Objects Lab');

console.log('EXAMPLE1');
var recipe = {
  title: 'Pancakes',
  servings: 4,
  ingredients: ['1cup flour','1x egg','250ml milk', 'dash vinegar'] //adding array to object
}

console.log('Lets Make: ' + recipe.title);
console.log('Serves: ' + recipe.servings);
console.log('Ingredients:');
for (i=0; i<= recipe.ingredients.length - 1; i++) {
  console.log(" - " + recipe.ingredients[i]);
}


console.log('EXAMPLE2');
var books = [['Midget Howlers', 'Athtar Naesatra', true],
             ['Frost Dryads', 'Reluraun Leofir', false],
             ['Groaning Harpies', 'Khilseith Caiwynn', true],
             ['Ice Beasts', 'Onvyr Holaharice', true],
             ['Crested Dragonborn', 'Hoccar Ulajor', true],
             ['Striped Medusas', 'Alok Xyrrona', false ],
             ['Lusting Crawlers', 'Ehrendil Preswraek', false],
             ['Groaning Harpies', 'Corym Omalynn', false],
             ['Horned Gremlins', 'Agis Preskas', false],
             ['Groaning Harpies', 'Zhoron Heigwyn', true],
             ['Skeletal Grendels', 'Folmar Holaxalim', false],
             ['Wolf Golems', 'Edyrm Shafina', true]];
var read = '';


for (i=0; i<= books.length - 1; i++) {
  if (books[i][2] === true){
    read = 'You already read ';
  } else {
    read = 'You need to read ';
  }
  console.log(read + books[i][0] + " by " + books[i][1]);
}

console.log('EXAMPLE3');

var movies = [
     {
       'title' : 'The Matrix',
       'duration' : '120',
       'stars':['Neo', 'Actor2', 'Actor3'],
   },
   {
     'title' : 'Star Wars',
     'duration' : '118',
     'stars':['Mark Hamster', 'Actor5', 'Actor6'],
 },
   {
     'title' : 'ET',
     'duration' : '124',
     'stars':['ET', 'Actor2', 'Actor3'],
  },
   ];

var faveMovie = function(i) {
  console.log(movies[i].title + ' lasts for ' + movies[i].duration + 'mins and stars: ' + movies[i].stars);
}

console.log(faveMovie(0));
console.log(faveMovie(1));
console.log(faveMovie(2));
