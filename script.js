fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json().then((data) => console.log('all the data', data)))
	.catch((error) => console.log('error occured', error));