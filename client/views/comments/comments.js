Template.comments.onRendered(function () {
	$('.ui.rating.input').rating();
});

Template.comments.helpers({
  //this function will return a list of all the comments for a given recipe
  //it is called in the template to render all the comments for the given recipe
  'isCurrentUser' : function (author) {
    return author == Meteor.user().username;
  },

  'comments' : function () {
    filter = {};
    filter.recipe = Router.current().params._id;
    return Comment.find(filter);
  },
  'hasReviewed': function(author) {
	  return Comment.findOne({author: Meteor.user().username, recipe: Router.current().params._id});
  }
});

Template.comments.events({
  //This function is called when a user submits a comment to a recipe.  We add the comment
  //to the database and it is immediately shown on the recipe page
  'click .submit.button' : function (event, template) {
    event.preventDefault();

    //create a new comment
    newComment = {};

    newComment.body = template.$('.reply.form textarea').val();

		if (newComment.body == "") {
			$('.warning').removeClass('hidden');
			return;
		}
		$('.warning').addClass('hidden');

	  var currRating = $('.ui.rating.input')
	                  .rating('get rating');
	  newComment.rating = currRating;

	  newComment.author = Meteor.user().username;
	  newComment.img = Meteor.user().img || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXp7vG6vsG3u77i6Ovb4OPf5ejm6+7V2dzEyMvIzdC/w8bs8fTO0tXX3N+0uLvS1tlgWLqSAAABnElEQVR4nO3Z4W6DIBRAYRVFAdH3f9uhtbR0bYQuXs1yvp/armdXxKyrKgAAAAAAAAAAAAAAvuWqrohyAlFqqMuM+vCmrjCprht7dJMzzfI5BcKr+6OvYEga2gLehjcc3KSLf3FDlA63e8Y7JKOcD1uDNfu7kGTUeLvfbXedKNc22y60uwkJRsVtfWovE6Vt3K/Hl1WlXm5OuSj1MUrbZjwpqopRk0+i9BAWW9IpuKb8faHX6Wm7Hn+eleCk1oksV69Pzm5Hn2cluqOPdn02u+RknN9jVrKPmc73rU6ahthU1/P9zLkP5Kc5rXflFaKSOS1V26xOiNKPE2lTeJ05KcqZbZt6ndNjVuJRIWXqb4d/N23rSjrKmeWjw6zezWmJGuSjtpSpV2/ndE6UuX+4fZt0RtSHS3ZulNlLko/KmJN8VMacxKPUp7VNFFHfRg02hxGNqrTKoWWj8glFzVeLWv4Ktb7PNwt8vXj7IrZM44tG+wVlS6uaw69eWFUma4+K7Lj/M//O5W0HcVuQ+DcIAAAAAAAAAAAAAOC/+gEL6BVCB2yhfAAAAABJRU5ErkJggg==';
	  newComment.recipe = Router.current().params._id;

	  var comment = Comment.findOne({author: Meteor.user().username});

    //calculate the rating of this recipe after the new comment
	  var total = currRating;
	  var numComments = 1;
	  var  comments = Comment.find({"recipe":Router.current().params._id.toString()}).forEach(function(comment){
	      if(!comment){
	      	total = total + parseInt(comment.rating);
	      	numComments = numComments +1;
	  	  }
	  });
	  var rating = Math.round(total/numComments);
	  var thisId = Recipe.findOne({id:parseInt(Router.current().params._id)})._id;
	  Recipe.update({ _id: thisId }, { $set: { rating: rating }});
	  //bind it to the container that contains that view then reset the template

	  var comment = Comment.findOne({author: Meteor.user().username, recipe: Router.current().params._id});

	  if (comment) {
		 Comment.update({_id: comment._id}, {$set: {body: newComment.body, rating: newComment.rating}});
	  }
	  else {
		Comment.insert(newComment);
	  }

		$('.ui.rating.' + Meteor.user().username).rating('set rating', currRating);
	  $('.ui.rating.input').rating('set rating', 5);
	  template.$('.reply.form').get(0).reset();
	}
});
