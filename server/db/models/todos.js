let db = require('../index');
let Sequelize = require('sequelize');

let Todos = db.define('todos', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	completed: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
		allowNull: false
	}
})

module.exports = Todos;