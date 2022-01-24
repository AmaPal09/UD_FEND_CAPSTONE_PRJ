//printToClient.js
//load data received from server to the client

import { hideTripPlanSection ,
		hideTripPlanImages ,
		hideTripPlanCountdown ,
		hideTripPlanWeather ,
		hideTripDestCountryDtls } from './resetTripPlans.js';


/*
* F U N C T I O N S
*/

/*
* printTripPlanImages FUNCTION
* @description: Prints images from server if avaliable to frontend else
*				display loaded templates
* @param: {object} pixImgDtls: Details of images to be posted
* @returns: NA
*/
function printTripPlanImages(pixImgDtls) {
	if(pixImgDtls.found) {
		//TODO: Once loading of file from images is successful, uncomment below lines, remove current attribute set-up
		document.getElementById("destinationImage").setAttribute("src",
									pixImgDtls.imageDetails.webformatURL);
	}
	else {
		document.getElementById("destinationImage").setAttribute("src", 												`./images/defaultImg1.jpg`);
	}
	showTripPlanImages();
}


/*
* printTripPlanCountdown FUNCTION
* @description: Prints count down details and destination from server
* @param: {object} tripDetails: Details of trip to be posted
* @returns: NA
*/
function printTripPlanCountdown(tripDetails) {
	if (tripDetails.geoNmeDtls.found) {
		document.getElementById("tripLoc").innerText =
						`${tripDetails.geoNmeDtls.geoDtl.name}, ` +
						`${tripDetails.geoNmeDtls.geoDtl.countryName}`;
	}
	else {
		alert("Geonames could not find this location. Please verify that your destination is correct to obtain weather and country details");
		document.getElementById("tripLoc").innerText = tripDetails.destination;
	}

	document.getElementById("tripDaysToGo").innerText = tripDetails.daysToGo;
	showTripPlanCountdown();
}


/*
* printTripPlanWeather FUNCTION
* @description: Prints weather details and destination from server if avaliable
* 				to front end.
* @param: {object} tripDetails: Details of trip to be posted
* @returns: NA
*/
function printTripPlanWeather(weaDtls) {

	if (weaDtls.found) {
		document.getElementById("tempHigh").innerText =
											`${weaDtls.weather.high_temp}`;
		document.getElementById("tempLow").innerText =
											`${weaDtls.weather.low_temp}`;
		document.getElementById("weatherText").innerText =
									`${weaDtls.weather.weaDesc} `;
		const weatherIconSrc= `https://www.weatherbit.io/static/img/icons/` +
										`${weaDtls.weather.weaIcon}.png`;
		console.log(weatherIconSrc);
		document.getElementById("weatherIcon").setAttribute("src", 																weatherIconSrc);
		showTripPlanWeather();
	}
	else {
		if (weaDtls.MSG == "Forcast for this date is not available. Please check upto 16 days before the trip") {
			alert("Forcast for this date is not available. Please check upto 16 days before the trip");
		}
		document.getElementById("tempHigh").innerText ='';
		document.getElementById("tempLow").innerText = '';
		document.getElementById("weatherText").innerText = '';
		document.getElementById("weatherIcon").setAttribute("src", '');
		hideTripPlanWeather();
	}
}


/*
* printTripDestCountryDtls FUNCTION
* @description: Prints information about destination country from server if     *			    avaliable to front end.
* @param: {object} ctyDtls: Details of destination country
* @returns: NA
*/
function printTripDestCountryDtls(ctyDtls) {

	if (ctyDtls.found) {
		console.log(ctyDtls.couDtl.continent);
		let descPara = ''
		descPara = `Officially known as ${ctyDtls.couDtl.officalNme}, it has a population of ${ctyDtls.couDtl.population}.`;

		if (ctyDtls.couDtl.continent.length > 1) {
			let contiString = ctyDtls.continent.toString();
			descPara = descPara + ` It is located on the continents of ` +
						`${contiString} in the ${ctyDtls.couDtl.region} ` +     ` region.`;
		}
		else {
			descPara = descPara + ` It is located on the continent of ${ctyDtls.couDtl.continent[0]} in the ${ctyDtls.couDtl.region} region.`;
		}

		if (ctyDtls.couDtl.capital.length > 1) {
			let contiString = ctyDtls.capital.toString();
			descPara = descPara + ` It's capital cities are ` +
						`${contiString}.`;
		}
		else {
			descPara = descPara + ` It's capital city is ` +
						`${ctyDtls.couDtl.capital[0]}.`;
		}

		if (ctyDtls.couDtl.currency.length > 1) {
			let contiString = ctyDtls.currency.toString();
			descPara = descPara + ` Currencies accepted here are ` +
						`${contiString}.`;
		}
		else {
			descPara = descPara + ` Currency accepted here is ` +
						`${ctyDtls.couDtl.currency[0]}.`;
		}

		if (ctyDtls.couDtl.languages.length > 1) {
			let contiString = ctyDtls.couDtl.languages.toString();
			descPara = descPara + ` Official languages spoken here are ` +
						`${contiString}.`;
		}
		else {
			descPara = descPara + ` Official language here is ` +
						`${ctyDtls.couDtl.languages[0]}.`;
		}

		descPara = descPara + ` Its flag is ${ctyDtls.couDtl.flags}.`

		document.getElementById("cntryDtls").innerText = descPara;
		showTripDestCountryDtls()
	}
	else {
		document.getElementById("cntryDtls").innerText = '';
		hideTripDestCountryDtls()
	}
}


/* showTripPlanSection FUNCTION
* @description: Shows images for the trip plan
* @param: NA
* @returns: NA
*/
function showTripPlanSection() {
	document.getElementsByClassName("trip-plan")[0].classList.remove('hide');
}


/* showTripPlanImages FUNCTION
* @description: Shows images for the trip plan
* @param: NA
* @returns: NA
*/
function showTripPlanImages() {
	document.getElementsByClassName("trip-plan__images")[0].classList.remove('hide');
}


/* showTripPlanCountdown FUNCTION
* @description: Shows countdown details for the trip plan
* @param: NA
* @returns: NA
*/
function showTripPlanCountdown() {
	document.getElementsByClassName("trip-plan__countdown")[0].classList.remove('hide');
}


/* showTripPlanWeather FUNCTION
* @description: Shows weather for the trip plan
* @param: NA
* @returns: NA
*/
function showTripPlanWeather() {
	document.getElementsByClassName("trip-plan__weather")[0].classList.remove('hide');
}


/* showTripDestCountryDtls FUNCTION
* @description: Shows info details about destination country for the trip plan
* @param: NA
* @returns: NA
*/
function showTripDestCountryDtls() {
	document.getElementsByClassName("trip-plan__country-details")[0].classList.remove('hide');
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
	printTripPlanImages(tripDetails.pixBayDtls);
	printTripPlanCountdown(tripDetails);
	printTripPlanWeather(tripDetails.weaBitDtls);
	printTripDestCountryDtls(tripDetails.rstCntyDtls);
	showTripPlanSection();

}


/*
* E X P O R T   M O D U L E S
*/
export{ printTripDetails };