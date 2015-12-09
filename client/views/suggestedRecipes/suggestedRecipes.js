var recipe_increment = 2;

Template.suggestedRecipes.onRendered(function() {
  Session.set('suggestedRecipes', recipe_increment);

  //set the shopping list session variable for displaying part of the recipe widget
  Session.set('shoppingList', false);
  //Fetch the recipe titles here
  var recipe_titles = Recipe.find({}, {'title': 1, 'id': 1}).fetch();
  var projected_recipes = recipe_titles.map(function(item) {
    var projection = {};
    projection.title = item.title;
    projection.id = item.id;
    return {'title': item.title, 'id': item.id};
  });


});

Template.suggestedRecipes.helpers({
  //This function will return the proper number of suggested recipes based on the ingredients in the
  //user's pantry.  Each time the load more recipes button is clicked, three more recipes will become
  //visible
  'suggestedRecipe' : function(){

    var filter = {}
    //Start with all recipes and your pantry - all values one to know we search for it
    var initialRecipes = Recipe.find(filter, { name: 1, description: 1, price: 1, cooktime: 1, rating: 1, img: 1});
    var pantry = Pantry.findOne({username: Meteor.user().username});

    if(pantry != undefined){
      //look for "qualified recipes" - ones where we have more than half the ingredients in our pantry
      var qualifiedRecipes = [];
      var total = 0;
      var ingredients = pantry.ingredients;
      var ingredientDict = {};
      //create dictionary to search for the names of ingredients and their amounts
      ingredients.forEach(function(ingredient){
        ingredientDict[ingredient.ingredientName] = ingredient.amount;
      })


      //loop through each recipe and see if it has the proper ingredients
      initialRecipes.forEach(function(recipe){
        total = 0;
        var recipeIngredients = recipe.ingredients;
        recipeIngredients.forEach(function(ingredient){

          if(ingredient.name in ingredientDict ){
            if(parseInt(ingredientDict[ingredient.name]) >= parseInt(ingredient.amount)){
                total +=1;
            }
          }
        })

        // Add recipe to suggestions if user has > 50%
        // of the ingredients in their pantry.
        if(total >= recipeIngredients.length/2){
          qualifiedRecipes.push(recipe);
        }
      })
    }

    //load 3 more everytime someone presses the more recipes button
    var maxElements = Session.get('suggestedRecipes');
    var returnedElements = qualifiedRecipes.length;
    if(maxElements>returnedElements){
      $('.info.message').removeClass("hidden");
      $('.more').addClass("hidden")
      maxElements = returnedElements;
    }
    return qualifiedRecipes.slice(0,maxElements);


  },
});

Template.suggestedRecipes.events({

  'click .search.button' : function () {
    Router.go('/pantry');
  },
  'click .button.more' : function(event) {
    var currNumSuggested = Session.get('suggestedRecipes');
    Session.set('suggestedRecipes', currNumSuggested + recipe_increment);
  },
});
