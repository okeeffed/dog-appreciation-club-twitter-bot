const Twitter = require('twitter');
const Doggo = require('./doggo');

/**
 * Initialise the Twitter client, fetch the dog info and then
 * post the tweet
 * @return {Object} Return the error or successful reply
 */
function init() {
	return new Promise((resolve, reject) => {
		const client = new Twitter({
			consumer_key: process.env.TWITTER_CONSUMER_KEY,
			consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
			access_token_key: process.env.TWITTER_TOKEN_KEY,
			access_token_secret: process.env.TWITTER_TOKEN_SECRET
		});

		Doggo.fetch()
			.then(res => {
				const limit = 136;
				if (typeof res.data.dog.info[0] !== 'undefined') {
					var info = `${res.data.dog.name} - ${res.data.dog.info[0]}`;
				} else {
					var info = `${res.data.dog.name} - find out about this doggo and more at https://dogappreciation.club`;
				}
				const update = info.substring(0, limit);
				// const tweet = `${update}... ${res.data.photos[0].url}`;
				const tweet = `${update}...`;

				post(tweet, client)
					.then(res => resolve(res))
					.catch(err => reject(err));
			})
			.catch(err => reject(err));
	});
}

/**
 * Post a tweet
 * @param  {String} tweet  Tweet string
 * @param  {Twitter} client Client instance of Twitter package
 * @return {Object}        Return error or success object
 */
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
