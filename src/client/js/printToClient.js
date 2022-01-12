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
	document.getElementById("tripLoc").innerText =
						`${tripDetails.geonamesDetails.geoDetails.name}, ` +
						`${tripDetails.geonamesDetails.geoDetails.countryName}`;
	document.getElementById("tripDaysToGo").innerText = tripDetails.daysToGo;

	if (tripDetails.weatherbitDetails.found) {
		document.getElementById("tempHigh").innerText =
						`${tripDetails.weatherbitDetails.weather.high_temp}`;
		document.getElementById("tempLow").innerText =
						`${tripDetails.weatherbitDetails.weather.low_temp}`;
		document.getElementById("weatherText").innerText =
				`${tripDetails.weatherbitDetails.weather.weather.description} `;
		const weatherIconSrc= `https://www.weatherbit.io/static/img/icons/${tripDetails.weatherbitDetails.weather.weather.icon}.png`
		console.log(weatherIconSrc);
		document.getElementById("weatherIcon").setAttribute("src", weatherIconSrc);
	}

	if(tripDetails.pixabayDetails.found) {

		//TODO: Once loading of file from images is successful, uncomment below lines, remove current attribute set-up

		document.getElementById("destinationImage").setAttribute("src",
			tripDetails.pixabayDetails.imageDetails.webformatURL);

		/*document.getElementById("destinationImage").setAttribute("src", `./images/defaultImg1.jpg`);*/
	}
	else {
		document.getElementById("destinationImage").setAttribute("src", `./images/defaultImg1.jpg`);
	}
}


export{ printTripDetails };