const db = require('../dbConfig.js');

module.exports = {
	register: function(user) {
		let query = db('users')
		return query
			.insert(user)
			.then(id => ({ id: id }));
	},
	login: function(user) {
		let query = db('users')
		return query
			.where({ username: user.username });
	},
};
