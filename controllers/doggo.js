const axios = require('axios');

/**
 * Fetch doggo from API
 * @return {Object} Return data or error
 */
function fetch() {
	return new Promise((resolve, reject) => {
		axios.get(process.env.DOG_API_URL)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
}

module.exports = {
	fetch
};
