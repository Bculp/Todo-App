let express = require('express');
let app = express();
let db = require('./server/db/index');
let routes = require('./server/routes');
let morgan = require('morgan');
let nunjucks = require('nunjucks');
let bodyParser = require('body-parser');

app.use(morgan('combined'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(3000, function() {
	console.log("server is listening on port 3000")
	db.sync({
		force: false
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