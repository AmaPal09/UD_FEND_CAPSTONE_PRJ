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


function printTripPlanCountdown(tripDetails) {
	document.getElementById("tripLoc").innerText =
						`${tripDetails.geonamesDetails.geoDetails.name}, ` +
						`${tripDetails.geonamesDetails.geoDetails.countryName}`;
	document.getElementById("tripDaysToGo").innerText = tripDetails.daysToGo;
}


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
	// document.getElementById("tripLoc").innerText =
	// 					`${tripDetails.geonamesDetails.geoDetails.name}, ` +
	// 					`${tripDetails.geonamesDetails.geoDetails.countryName}`;
	// document.getElementById("tripDaysToGo").innerText = tripDetails.daysToGo;

	printTripPlanImages(tripDetails.pixabayDetails);
	printTripPlanCountdown(tripDetails);
	printTripPlanWeather(tripDetails.weatherbitDetails);

}


export{ printTripDetails };