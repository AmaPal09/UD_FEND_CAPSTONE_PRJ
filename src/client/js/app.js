// VARIABLES

// Variables for user input


const generatePlan = document.getElementById('generatePlan');


//Functions
function validateInput(destination, date){
	const result = {
		valid: false,
		msg: "Enter a destination and date"};


	if (destination == "" || date == "") {
		if(destination == ""){
			result.msg = "Enter a destination";
			return result;
		}
		else if(date == ""){
			result.msg = "Select a date";
			return result;
		}
	}
	else {
		result['valid'] = true;
		result['msg'] = 'All OK';
		return result
	}
}


function submitTripInfoForm(e){
	e.preventDefault();

	const tripDestination = document.getElementById('tripDestination').value;
	const tripStartDate = document.getElementById('tripStartDate').value;

	const result = validateInput(tripDestination, tripStartDate);
	if (result.valid) {
		console.log("All inputs okay")
		// TODO: process the input
	}
	else{
		console.log(result.msg);
	}
}

//Event Listners
generatePlan.addEventListener('click', submitTripInfoForm);
