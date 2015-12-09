Template.recipes.onRendered(function() {
  $('.ui.rating')
    .rating('disable')
  ;

  //Project the recipes to map each projection to the recipe
  var recipe_titles = Recipe.find({}, {'title': 1, 'id': 1}).fetch();
  var projected_recipes = recipe_titles.map(function(item) {
    var projection = {};
    projection.title = item.title;
    projection.id = item.id;
    return {'title': item.title, 'id': item.id};
  });

  //Search initialization
  $('.ui.search.recipes')
  .search({
    source : projected_recipes,
    searchFields   : [
      'title',
    ],
    searchFullText: false,
    onSelect : function(result, response) {
      var route = '/recipe/' + result.id;
      Router.go(route);
    }
  })
  ;

});

Template.recipes.helpers({
	//Helper function for filtering recipes based on various searches like cooktime, price, main ingredient
  'recipe' : function () {
    Session.setDefault('main-ingredient', 'all');
    Session.setDefault('price', 'any');
	Session.setDefault('cooktime', 'all');
    var filter = {}

    var mainIngredient = Session.get('main-ingredient');
    var price = Session.get('price');
	var cooktime = Session.get('cooktime');

    if (mainIngredient != 'all') {
      filter.mainIngredient = mainIngredient;
    }
    if (price != 'any') {
      filter.price = price;
    }
	if (cooktime != 'all'){
		if (cooktime == "15 minutes or less"){
			filter.cooktime = { $lt: "16" }
		}
		if (cooktime == "30 minutes or less"){
			filter.cooktime = { $lt: "31" }
		}
		if (cooktime == "45 minutes or less"){
			filter.cooktime = { $lt: "46" }
		}
	}
    return Recipe.find(filter, { name: 1, description: 1, price: 1, cooktime: 1, rating: 1, img: 1});
  },
  
});

Template.recipes.events({
  'click .redirect.button' : function(event) {
    var recipeId = $(event.target).attr('value');
    var route = '/recipe/' + recipeId;
    Router.go(route);
  },
  'click .form.button.add' : function() {
    $('.ui.modal')
      .modal('setting', 'closable', false)
      .modal('show');
  },
  'click .button.suggested' : function() {
    var route = '/suggested-recipes'
    Router.go(route);
  },
  'click .ingredient.item' : function(event) {
    $('.ingredient.item.active').toggleClass('active');
    var item = $(event.target);
    item.toggleClass('active');
    var type = $(event.target).text();
    Session.set('main-ingredient', type.toLowerCase());
  },
  'click .price.item' : function(event) {
    $('.price.item.active').toggleClass('active');
    var item = $(event.target);
    item.toggleClass('active');
    var type = $(event.target).text();
    Session.set('price', type.toLowerCase());
  },
  
  'click .cooktime.item' : function(event) {
    $('.cooktime.item.active').toggleClass('active');
    var item = $(event.target);
    item.toggleClass('active');
    var type = $(event.target).text();
    Session.set('cooktime', type.toLowerCase());
  },
});
