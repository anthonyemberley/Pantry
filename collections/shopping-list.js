ShoppingList = new Mongo.Collection('shoppinglist');

// Invariant:
//	username is a String representing the user that the list belongs to
// ingredients is a list of Ingredient objects, representing what ingredients a user has in their shopping list. Items in this list generally follow the schema for Ingredient
//	createdAt is a date object representing when the shopping list was created (essentially when a user's account was created)

ShoppingList.attachSchema(new SimpleSchema({
	username: {
		type: String,
		label: "username"
	},
	recipes: {
		type: [Number],
		label: "recipes",
	},
	ingredients: {
		type: [Ingredient],
		label: "ingredients",
		blackbox: true
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
ShoppingList.allow({
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
