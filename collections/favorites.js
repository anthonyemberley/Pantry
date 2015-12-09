Favorites = new Mongo.Collection('favorites');

// Invariant
// Recipes is a set of ids that correspond to recipe documents
// Username does not change

Favorites.attachSchema(new SimpleSchema({
	username: {
		type: String,
		label: "username"
	},
	recipes: {
		type: [Number],
		label: "recipes",
	},
	createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
}));

Favorites.allow({
	'update': function (userId,doc) {
		/* user and doc checks ,
		 return true to allow insert */
		return true;
	},

	'insert': function (userId,doc) {
		/* user and doc checks ,
		 return true to allow insert */
		return true;
	}
});
