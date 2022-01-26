//routesNreqs.js
//All routes and requests to servers


/*
* I M P O R T   R E Q U I R E D   M O D U L E S
*/
import { printTripDetails } from './printToClient.js';


/*
* F U N C T I O N S
*/

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
const postAndPrintTrip = async(tripData) => {

	console.log("Enter tripData()");
	//TODO: Fix before submiting. Done for ease of compilation
	// const results = await postData("/postTrip", tripData);
	const results = await postData("http://localhost:3100/postTrip", tripData);
	printTripDetails(results);
}


/*
* E X P O R T   M O D U L E S
*/
export { postAndPrintTrip,
		 postData };