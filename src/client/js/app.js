// VARIABLES

// Variables for user input
const generatePlan = document.getElementById('generatePlan');


// Routes and requests.
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



//Functions
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

			tripData = { departDate: futureDate,
						currentDate: currDate,
						destination: tripDestination
					};
			// const results = postData("/postTrip", tripData);
			const results = postData("/postTrip", {answer: 42});
			console.log("results are: ", results);
		}
		else {
			console.log("Something went wrong");
		}
	}
	else{
		console.log(result.msg);
	}
}

//Event Listners
generatePlan.addEventListener('click', submitTripInfoForm);

