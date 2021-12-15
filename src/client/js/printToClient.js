/*
* printTripDetails FUNCTION
* @description: Prints details of the trip received from the server to
* 				the webpage
* @param: {object} tripDetails: Details of trip to be posted
* @returns: NA
*/
function printTripDetails(tripDetails) {

	console.log("Enter printTripDetails()");
	console.log(tripDetails);
	document.getElementById("tripLoc").innerText = tripDetails.destination;
	document.getElementById("tripDaysToGo").innerText = tripDetails.daysToGo;
}


export{ printTripDetails };