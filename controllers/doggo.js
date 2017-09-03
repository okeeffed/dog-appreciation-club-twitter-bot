const axios = require('axios');

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
