import axios from 'axios';

axios.get('https://codersuk-test.s3-eu-west-1.amazonaws.com/data.json')
  .then((data) => {
	  console.log('all the data', data);
  })
  .catch((error) => {
	  console.log('error occured', error);
  });