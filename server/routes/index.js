let express = require('express');
let router = express.Router();
let Todos = require('../db/models/todos');

module.exports = router;


//route for all notes
router.get('/', function(req, res, next) {
	
	//**Renders just the data from db without formatting or using html**//

	// Todos.findAll()
	// .then(arrOfTodos => res.send(arrOfTodos))
	// .catch(next)

	//**Renders just the html file, nothing else **//
	res.send('inside the get all api route');
})

//route for one specific note
router.get('/:noteId', function(req, res, next) {
	Todos.findById(req.params.noteId)
	.then(todo => {
		console.log('todo:', todo)
		res.send(todo)
	})
	.catch(next)
})