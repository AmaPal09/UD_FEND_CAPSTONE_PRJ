// VARIABLES

// Variables for user input


const generatePlan = document.getElementById('generatePlan');


//Functions
function validateInputs(destination, date){
	const result = {};


	if (destination == "" || date == "") {
		if(destination == ""){
			result.msg = "Enter a destination";
			result.valid = false;
			return result;
		}
		else if(date == ""){
			result.msg = "Select a date";
			result.valid = false;
			return result;
		}
	}
	else {
		result['valid'] = true;
		result['msg'] = 'All OK';
		return result
	}
}


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


function submitTripInfoForm(e){
	e.preventDefault();

	const tripDestination = document.getElementById('tripDestination').value;
	const tripStartDate = document.getElementById('tripStartDate').value;

	const inputsPresent = validateInputs(tripDestination, tripStartDate);
	if (inputsPresent.valid) {
		console.log(inputsPresent.msg);

		//Validate trip start date is bigger the current Date
		// console.log(tripStartDate);
		const currDate = new Date();
		let futureDate = new Date(tripStartDate+'T00:00');//convert to date in current time zone

		const validDepartureDate = validateFutureDate(futureDate, currDate);
		if (validDepartureDate) {
			console.log('Trip start date is bigger than current Date');
		}
		else {
			console.log("Something went wrong")
		}
	}
	else{
		console.log(result.msg);
	}
}

//Event Listners
generatePlan.addEventListener('click', submitTripInfoForm);
