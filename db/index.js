let Sequelize = require('sequelize');
let db = new Sequelize('postgres://localhost:5432/todoApp', {
	logging: false
});

module.exports = db;