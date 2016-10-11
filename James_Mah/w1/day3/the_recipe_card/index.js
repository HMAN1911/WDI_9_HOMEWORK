var favoriteRecipe = { title: "Chicken rice",
                       servings: 1,
                       ingredients: ['rice', 'chicken', 'sauce']
                     };

console.log('RECIPE INFORMATION');
console.log('- ' + favoriteRecipe.title);
console.log('- Serves: ' + favoriteRecipe.servings);
console.log('- Ingredients: ');

for (var i = 0; i < favoriteRecipe.ingredients.length; i++){
  console.log('- ' + favoriteRecipe.ingredients[i]);
}