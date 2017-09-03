const Twitter = require('twitter');

function init() {
	const client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_TOKEN_SECRET
	});
}

function post(tweet) {
	client.post('statuses/update', {status: 'I Love Twitter'})
	.then(function (tweet) {
	console.log(tweet);
	})
	.catch(function (error) {
	throw error;
	})
}

module.exports = {
	init,
	post
};
