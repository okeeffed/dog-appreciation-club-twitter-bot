const Twitter = require('twitter');

function init() {
	return new Promise((resolve, reject) => {
		const client = new Twitter({
			consumer_key: process.env.TWITTER_CONSUMER_KEY,
			consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
			access_token_key: process.env.TWITTER_TOKEN_KEY,
			access_token_secret: process.env.TWITTER_TOKEN_SECRET
		});

		post('Testing', client)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
}

function post(tweet, client) {
	return new Promise((resolve, reject) => {
		client.post('statuses/update', {status: tweet})
			.then(function (tweet) {
				resolve(tweet);
			})
			.catch(function (error) {
				reject(error);
			});
	});
}

module.exports = {
	init,
	post
};
