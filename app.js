var fs = require('fs');
var dotenv = require('dotenv');
var envConfig = dotenv.parse(fs.readFileSync('.env'));
for (var k in envConfig) {
	process.env[k] = envConfig[k]
}

// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

// Routes Setup
const routes = require('./routes');

// Twitter
const Twitter = require('./controllers/twitter');
Twitter.init()
	.then(res => console.log(res))
	.catch(err => console.log(err));

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));


// Map routes to URL
routes(app);

// Server Setup
const port = process.env.NODE_ENV == 'production' ? 80 : 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
