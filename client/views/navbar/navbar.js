Template.navbar.events({
  'click .home': function () {
    Router.go("/pantry");
  },
  'click .recipes': function() {
    Router.go("/recipes");
  },
  'click .list': function() {
    Router.go("/shopping-list");
  },
  'click .favorites': function() {
    Router.go("/favorites");
  },
  'click .signout': function() {
    Meteor.logout();
    Router.go("/");
  },
});
