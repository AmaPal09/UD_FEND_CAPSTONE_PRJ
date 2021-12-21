import { printTripDetails } from './printToClient.js';
/*
* postData ASYNC FUNCTION
* @description: Makes a post request to the server to
* 				post data.
* @param {string} url: url to post to,
* @param  {object} data: data that is to be posted
* @returns {json} response: response from the server
*/
const postData = async(url='', data={}) => {


	console.log("Enter postData()");
	console.log("URL is: ", url);
	console.log("Data is: ", data);
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	try {
		const results = await response.json();
		console.log(results);
		return results;
	}catch(error){
		console.log("error: ", error);
	}
}


/*
* postAndPrintTrip ASYNC FUNCTION
* @description: Sends a post request to the server with trip details
* 				and call function to print the server feedback
* @param: {object} tripData: Trip data provided by the user
* @returns: NA
*/
async function postAndPrintTrip(tripData) {

	console.log("Enter tripData()");

	const results = await postData("/postTrip", tripData);
	printTripDetails(results);
}


export { postAndPrintTrip,
		 postData };