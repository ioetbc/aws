const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
	.then((data) => {
		console.log('all the data', data);
	})
	.catch((error) => {
		console.log('error occured', error);
});