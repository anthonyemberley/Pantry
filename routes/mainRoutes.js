Router.map(function() {
  this.route('index', {
    path: '/',
  });
});

var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('/');
  } else {
    this.next();
  }
};

var goToHome = function(pause) {
  if (Meteor.user()) {
    Router.go('pantry');
  } else {
    this.next();
  }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['index']});
Router.onBeforeAction(goToHome, {only: ['index']});

Router.route('/suggested-recipes', function(){
  this.render('suggestedRecipes')
})

Router.route('/favorites', function(){
  this.render('favoriteRecipes')
})

Router.route('/pantry', function() {
  this.render('pantry');
})

Router.route('/recipes', function() {
  this.render('recipes');
})

Router.route('/recipe/:_id', function() {
  this.render('recipe');
})

Router.route('/shopping-list', function() {
  this.render('shopping-list');
})
