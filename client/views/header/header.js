Template.header.created = function () {
  Session.set('isActive', false);
  Session.set('showLogin', false);
};

Template['header'].helpers({
  showLogin: function () {
    return Session.get('showLogin');
  },
  isActive: function () {
    return Session.get('isActive') ? 'active' : '';
  },
  animateClass: function () {
    return Session.get('isActive') ? 'fadeIn' : 'fadeOut';
  },
  iconClass: function () {
    return Meteor.user() ? 'user' : 'sign in';
  }
});

Template['header'].events({
  //showing the login screen depending on a user click
  'click .resize.button' : function () {
    text = $('.white.button').text()
    if (text == 'Sign In') {
      $('.white.button').text('Close');
    } else {
      $('.white.button').text('Sign In');
    }
    var showLogin = Session.get('showLogin');

    Session.set('isActive', !Session.get('isActive'));

    setTimeout(function () {
      Session.set('showLogin', !Session.get('showLogin'));
    }, 600);
  },
  'click .log-out.button' : function () {
    Meteor.logout();
  }
});
