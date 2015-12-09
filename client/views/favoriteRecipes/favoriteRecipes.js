Template.favoriteRecipes.onRendered(function() {
  //Set the shoppingList session variable so we don't show a remove option like we do in shopping list.
  Session.set('shoppingList', false);
  var numSuggestedRecipes = 3;
  $('.ui.rating')
    .rating('disable')
  ;
  //Fetch the recipe titles here
  var recipe_titles = Recipe.find({}, {'title': 1, 'id': 1}).fetch();
  var projected_recipes = recipe_titles.map(function(item) {
    var projection = {};
    projection.title = item.title;
    projection.id = item.id;
    return {'title': item.title, 'id': item.id};
  });


});

Template.favoriteRecipes.helpers({
  //This function will return favorite recipes of a user
  'favoriteRecipe' : function(){

    var favoriteIDs = Favorites.findOne({username: Meteor.user().username}).recipes;
    //Start with all recipes and your pantry - all values one to know we search for it

    //find those recipes with an $in call
    var favoriteRecipes = Recipe.find({id: {$in: favoriteIDs}});

    return favoriteRecipes;


  },
});

Template.favoriteRecipes.events({
  //Go to a certain recipe
  'click .recipes.button' : function(event) {
    Router.go('/recipes');
  },
});
