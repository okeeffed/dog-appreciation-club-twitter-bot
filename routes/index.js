const async 		= require('async');

/* GET home page. */
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('Server is healthy');
	});

	app.post('/', function(req, res) {
		console.log(req.body);
		res.send('Post requests are healthy');
	});

	
}
