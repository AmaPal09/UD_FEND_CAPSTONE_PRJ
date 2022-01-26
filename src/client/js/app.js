//app.js
//Main js file calling all the functions

/*
* I M P O R T E D   F I L E S   &   F U N C T I O N S
*/
import { validateInputs } from './inputValidations.js';
import { validateFutureDate } from './inputValidations.js';
import { postAndPrintTrip } from './routesNreqs.js';
import { resetAllTripPlans } from './resetTripPlans.js';


/*
* V A R I A B L E S
*/


/*
* F U N C T I O N S
*/

/*
* A P I   R O U T E S   and   R E Q U E S T S
*/

/*
* submitTripInfoForm FUNCTION
* @description: Prevents default submit of user data,
*				Validates user input by calling validateInputs,
*				Validates user input date by calling validateFutureDate
* 				Calls postAndPrintTrip
* @param: {DOM Event} e: DOM event for click on form submit button
* @returns: NA
*/
const submitTripInfoForm = (e) => {
	e.preventDefault();
	resetAllTripPlans();
	// Get user input
	const tripDestination = document.getElementById('tripDestination').value;
	const tripStartDate = document.getElementById('tripStartDate').value;

	// Validate user input for blanks
	const inputsPresent = validateInputs(tripDestination, tripStartDate);
	if (inputsPresent.valid) {

		// Date handling
		const currDate = new Date();
		currDate.setHours(0,0,0,0); //set time to 0.
		let futureDate = new Date(tripStartDate+'T00:00');//convert to date in current time zone

		//Validate trip start date is bigger the current Date
		const validDepartureDate = validateFutureDate(futureDate, currDate);

		if (validDepartureDate) {
			// Compile tripData
			let tripData = { departDate: futureDate,
						currentDate: currDate,
						destination: tripDestination
						};
			// Send details to server
			postAndPrintTrip(tripData);
		}
		else {
			alert("Select a future date for derparture date");
		}

	}
	else{
		alert(inputsPresent.msg);
	}
}


/*
* E V E N T   L I S T E N E R S
*/
const addEvents = () => {
	console.log("Enter addEvents()");
}


/*
* E X P O R T   M O D U L E S
*/
export{ addEvents,
		submitTripInfoForm};