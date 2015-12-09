Recipe = new Mongo.Collection('recipe');

// Invariant
// Each id is unique and distinct. They are generated automatically by the counter Collection
// Ingredients are objects containing the type, amount, and unit of a particular ingredient
// Rating is the only field that should change after the initial creation

Recipe.attachSchema(new SimpleSchema({
	id: {
		type: Number,
		label: "id",
	},
	author: {
		type: String,
		label: "author",
	},
	title: {
		type: String,
		label: "title"
	},
	mainIngredient: {
		type: String,
		label: "mainIngredient"
	},
	ingredients: {
		type: [Object],
		label: "ingredients",
		blackbox: true,
	},
	directions: {
		type: [String],
		label: "directions"
	},
	description: {
		type: String,
		label: "description"
	},
	rating: {
		type: String,
		label: "rating"
	},
	cooktime: {
		type: String,
		label: "cooktime"
	},
	price: {
		type: String,
		label: "price"
	},
	img: {
		type: String,
		label: "img"
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

Recipe.allow({
	'insert': function (userId,doc) {
		/* user and doc checks ,
		 return true to allow insert */
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		//can be changed from client side
	    return true;
 	}
});
