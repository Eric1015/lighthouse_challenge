const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Code here!
    var res = "";
    
    recipes.forEach((recipe) => {
      if (bakeryA.includes(recipe.ingredients[0]) && bakeryB.includes(recipe.ingredients[1])) {
        res = recipe.name;
      } else if (bakeryB.includes(recipe.ingredients[0]) && bakeryA.includes(recipe.ingredients[1])) {
        res = recipe.name;
      }
    });
    // Remember to return a value
    return res;
}  