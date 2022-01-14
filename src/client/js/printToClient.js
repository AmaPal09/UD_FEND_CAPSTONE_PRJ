//printToClient.js
//load data received from server to the client


/*
* F U N C T I O N S
*/

/*
* printTripPlanImages FUNCTION
* @description: Prints images from server if avaliable to frontend else
*				display loaded templates
* @param: {object} pixaImgDetails: Details of images to be posted
* @returns: NA
*/
function printTripPlanImages(pixaImgDetails) {
	if(pixaImgDetails.found) {
		//TODO: Once loading of file from images is successful, uncomment below lines, remove current attribute set-up
		document.getElementById("destinationImage").setAttribute("src",
									pixaImgDetails.imageDetails.webformatURL);
		/*document.getElementById("destinationImage").setAttribute("src", `./images/defaultImg1.jpg`);*/
	}
	else {
		document.getElementById("destinationImage").setAttribute("src", 												`./images/defaultImg1.jpg`);
	}
}


/*
* printTripPlanCountdown FUNCTION
* @description: Prints count down details and destination from server
* @param: {object} tripDetails: Details of trip to be posted
* @returns: NA
*/
function printTripPlanCountdown(tripDetails) {
	document.getElementById("tripLoc").innerText =
						`${tripDetails.geonamesDetails.geoDetails.name}, ` +
						`${tripDetails.geonamesDetails.geoDetails.countryName}`;
	document.getElementById("tripDaysToGo").innerText = tripDetails.daysToGo;
}


/*
* printTripPlanWeather FUNCTION
* @description: Prints weather details and destination from server if avaliable
* 				to front end.
* @param: {object} tripDetails: Details of trip to be posted
* @returns: NA
*/
function printTripPlanWeather(weatherDetails) {

	if (weatherDetails.found) {
		document.getElementById("tempHigh").innerText =
										`${weatherDetails.weather.high_temp}`;
		document.getElementById("tempLow").innerText =
										`${weatherDetails.weather.low_temp}`;
		document.getElementById("weatherText").innerText =
							`${weatherDetails.weather.weather.description} `;
		const weatherIconSrc= `https://www.weatherbit.io/static/img/icons/${							weatherDetails.weather.weather.icon}.png`;
		console.log(weatherIconSrc);
		document.getElementById("weatherIcon").setAttribute("src", 																weatherIconSrc);
	}
}


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
	printTripPlanImages(tripDetails.pixabayDetails);
	printTripPlanCountdown(tripDetails);
	printTripPlanWeather(tripDetails.weatherbitDetails);

}

/*
* E X P O R T   M O D U L E S
*/
export{ printTripDetails };