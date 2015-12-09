// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Pantry',
  DESCRIPTION: 'A data driven web app for maintaining peace and happiness regarding all things food.'
};
