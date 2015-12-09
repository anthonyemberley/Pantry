Comment = new Mongo.Collection('comment');

// Invariant
// Comments are editable. -> body and rating can change.
// A body is always a string of length gt 0
// Rating is always a value in range 0...5
// Recipe is a foreign key to a recipe document

Comment.attachSchema(new SimpleSchema({
	author: {
		type: String,
		label: "author"
	},
	recipe: {
		type: String,
		label: "recipe"
	},
	img: {
		type: String,
		label: "img"
	},
	rating: {
		type: String,
		label: "rating"
	},
	body: {
		type: String,
		label: "body"
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
  },
}));

Comment.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc) {
	return true;
  }
})
