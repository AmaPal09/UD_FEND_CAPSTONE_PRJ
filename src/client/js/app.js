/*
* V A R I A B L E S
*/

// Variables for user input
const generatePlan = document.getElementById('generatePlan');


/*
*
* F U N C T I O N S
*
*/

/*
* A P I   R O U T E S   and   R E Q U E S T S
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

	console.log("Enter postTRip function");
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
* H E L P E R   F U N C T I O N S
*/

/*
* printTRipDetails FUNCTION
* @description: Prints details of the trip received from the server to
* 				the webpage
* @param: {object} tripDetails: Details of trip to be posted
* @returns: NA
*/
function printTripDetails(tripDetails) {

	console.log(tripDetails);
	document.getElementById("tripLoc").innerText = tripDetails.destination;
	document.getElementById("tripDaysToGo").innerText = tripDetails.daysToGo;
}


/*
* validateInputs FUNCTION
* @description: Validate that user has provided some input for the trip
* @param: {string} destination: Trip destination from user
* @param: {string} date: Trip start date from user
* @returns: {object} results: Contains Boolean value for if user provided some * 							 input and error messages
*/
function validateInputs(destination, date){

	const result = {};

	if (destination == "" || date == "") {
		if(destination == ""){
			result['msg'] = "Enter a destination";
			result['valid'] = false;
			return result;
		}
		else if(date == ""){
			result['msg'] = "Select a date";
			result['valid'] = false;
			return result;
		}
	}
	else {
		result['valid'] = true;
		result['msg'] = 'All OK';
		return result;
	}
}


/*
* validateFutureDate FUNCTION
* @description: Validate that user provided trip start date is in the future 	*				when compared with current date
* @param: {date} fDate: Trip start date from user
* @param: {date} cdate: Current date from browser
* @returns: {Boolean}: true or false
*/
function validateFutureDate(fDate, cDate) {

	console.log(fDate);
	console.log(cDate);
	if (fDate.getTime() > cDate.getTime()){
		return true;
	}
	else {
		return false;
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

	const results = await postData("/postTrip", tripData);
	printTripDetails(results);
}


/*
* submitTripInfoForm FUNCTION
* @description: Prevents default submit of user data,
*				Validates user input by calling validateInputs,
*				Validates user input date by calling validateFutureDate
* 				Calls postAndPrintTrip
* @param: {DOM Event} e: DOM event for click on form submit button
* @returns: NA
*/
function submitTripInfoForm(e){
	e.preventDefault();

	// Get user input
	const tripDestination = document.getElementById('tripDestination').value;
	const tripStartDate = document.getElementById('tripStartDate').value;

	// Validate user input for blanks
	const inputsPresent = validateInputs(tripDestination, tripStartDate);
	if (inputsPresent.valid) {
		console.log(inputsPresent.msg);

		// Date handling
		const currDate = new Date();
		currDate.setHours(0,0,0,0); //set time to 0.
		let futureDate = new Date(tripStartDate+'T00:00');//convert to date in current time zone

		//Validate trip start date is bigger the current Date
		const validDepartureDate = validateFutureDate(futureDate, currDate);
		if (validDepartureDate) {
			console.log('Trip start date is bigger than current Date');

			// Compile tripData
			let tripData = { departDate: futureDate,
						currentDate: currDate,
						destination: tripDestination
						};
			// Send details to server
			postAndPrintTrip(tripData);
		}
		else {
			console.log("Something went wrong");
		}

	}
	else{
		console.log(inputsPresent.msg);
	}
}


/*
*
* E V E N T   L I S T E N E R S
*
*/
generatePlan.addEventListener('click', submitTripInfoForm);