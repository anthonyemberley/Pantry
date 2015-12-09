Template.recipewidget.onRendered(function () {
	$('.ui.rating.recipe')
    .rating('disable');

  $('.special.cards .image').dimmer({
    on: 'hover'
  });
});


Template.recipewidget.helpers({
	'shoppingList' : function(){
	    return Session.get('shoppingList');
	  },

});

Template.recipewidget.events({
  'click .redirect.button' : function(event) {
    var recipeId = $(event.target).attr('value');
    var route = '/recipe/' + recipeId;
    Router.go(route);
  },

	'click .remove.button' : function(event) {
		var recipeId = $(event.target).attr('value');
		var listId = ShoppingList.findOne({username: Meteor.user().username})._id;
		ShoppingList.update(
				{ _id: listId },
				{ $pull: { recipes: recipeId }}
		);

		//remove ingredients from shopping list that were in this recipe
		var shoppingList = ShoppingList.findOne({username: Meteor.user().username});
		var shoppingListIngredients = shoppingList.ingredients;
		var recipe = Recipe.findOne({id:parseInt(recipeId)});
		var recipeIngredients = recipe.ingredients;

		var newIngredients = [];
		shoppingListIngredients.forEach(function(listIngredient){
			recipeIngredients.forEach(function(recipeIngredient){
				if(recipeIngredient.name == listIngredient.ingredientName){
					var total = parseFloat(listIngredient.amount) - parseFloat(recipeIngredient.amount);
					listIngredient.amount = total;
				}

			})
			if(parseInt(listIngredient.amount)>0){
					newIngredients.push(listIngredient);
			}

		})
		ShoppingList.update({_id: listId},{ $set:{ ingredients: newIngredients }});

	}
});
