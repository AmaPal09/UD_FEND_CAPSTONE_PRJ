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

export {validateInputs}