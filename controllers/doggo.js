const axios = require('axios');

function fetch() {
	return new Promise((resolve, reject) => {
		axios.get(process.env.DOG_API_URL)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	});
}

module.exports = {
	fetch
};
