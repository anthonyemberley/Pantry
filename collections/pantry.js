Pantry = new Mongo.Collection('pantry');


// Invariant:
//	username is a String representing the user that the pantry belongs to
//	ingredients is a list of Ingredient objects, representing what ingredients a user has in their pantry. Items in this list generally follow the schema for Ingredient
//	createdAt is a date object representing when the pantry was created (essentially when a user's account was created)

Pantry.attachSchema(new SimpleSchema({
	username: {
		type: String,
		label: "username"
	},
	ingredients: {
		type: [Ingredient],
		label: "ingredients",
		blackbox: true,
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

// This code allows us to update the database from the client side
Pantry.allow({
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
