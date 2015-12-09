Counter = new Mongo.Collection('counter');

// Invariant
// Counter will always return a new id and increment the value stored
//    in the counting document.

_.extend(Counter, {
  // returns a comments cursor for all comments without a parentId
  getNextSequence: function(name) {
    var ret = Counter.findOne({name: name}, {_id: 1});
    if (ret == undefined) {
      Counter.insert({name: name, seq: 1});
      return 1;
    } else {
      Counter.update({_id: ret._id}, {$inc: {seq: 1}});
      ret = Counter.findOne({name: name});
      console.log(ret);
      return ret.seq;
    }
  }
});

Counter.allow({
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
