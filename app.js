let express = require('express');
let router = express.Router(); //might not need since don't have routes
let app = express();
let db = require('./db/index');
let routes = require('./routes');
let morgan = require('morgan');

//TODO: still need nunjucks & bodyParser for templating/using body of requests

app.use(morgan('combined'))

app.use('/', routes);

app.listen(3000, function() {
	console.log("server is listening on port 3000")
	db.sync({
		force: true
	})
	.then(function() {
		console.log("database is synced!")
	})
	.catch(function(err) {
		console.error('ERROR: Ran into problem when syncing the db',err)
	})
})

app.use(function(err, req, res, next) {
	if (err.message) {
		res.send(err.message)
	}
	else {
		res.sendStatus(500)
	}
})