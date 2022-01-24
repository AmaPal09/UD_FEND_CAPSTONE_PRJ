//inputValidations.js
//Validate inputs provided by user


/*
* F U N C T I O N S
*/

/*
* validateInputs FUNCTION
* @description: Validate that user has provided some input for the trip
* @param: {string} destination: Trip destination from user
* @param: {string} date: Trip start date from user
* @returns: {object} results: Contains Boolean value for if user provided some * 							 input and error messages
*/
function validateInputs(destination, date){

	// console.log("Enter validateInputs()");
	const result = {};

	if (destination == "" || date == "") {
		if(destination == "" && date == ""){
			result['msg'] = "Enter a destination and select a date";
			result['valid'] = false;
			return result;
		}
		else if(destination == ""){
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

	// console.log("Enter validateFutureDate()");
	// console.log(fDate);
	// console.log(cDate);s
	if (fDate.getTime() > cDate.getTime()){
		return true;
	}
	else {
		return false;
	}
}


/*
* E X P O R T   M O D U L E S
*/
export { validateInputs,
		 validateFutureDate };