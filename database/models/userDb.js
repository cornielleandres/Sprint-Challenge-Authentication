const db = require('../dbConfig.js');

module.exports = {
	insertNewUser: function(user) {
		let query = db('users')
		return query
			.insert(user)
			.then(id => ({ id: id }));
	},
	getUser: function(username) {
		let query = db('users')
		return query
			.first()
			.where({ username });
	},
};
