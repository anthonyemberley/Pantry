Ingredient = new Mongo.Collection('ingredient');
Ingredient.attachSchema(new SimpleSchema({
	ingredientName: {
		type: String,
		label: "ingredientName"
	},
	amount: {
		type: Number,
		label: "amount"
	},
	unit: {
		type: String,
		label: "unit"
	},
	dateAdded: {
		type: Date,
		label: "dateAdded"
	}
}));

Ingredient.allow({
	'insert': function (userId,doc) {
		/* user and doc checks ,
		 return true to allow insert */
		return true;
	}
});