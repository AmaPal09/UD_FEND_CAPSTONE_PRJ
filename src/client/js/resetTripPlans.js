//resetTripPlans.js
//Hide trip plan blocks

/*
* F U N C T I O N S
*/

/*resetAllTripPlans FUNCTION
* @description: Hide all trip plan details
* @param: NA
* @returns: NA
*/
const resetAllTripPlans = () => {
	hideTripPlanSection();
	hideTripPlanImages();
	hideTripPlanCountdown();
	hideTripPlanWeather();
	hideTripDestCountryDtls();
}


/* hideTripPlanSection FUNCTION
* @description: Shows images for the trip plan
* @param: NA
* @returns: NA
*/
const hideTripPlanSection = () => {
	document.getElementsByClassName("trip-plan")[0].classList.add('hide');
}


/* hideTripPlanImages FUNCTION
* @description: hide images for the trip plan
* @param: NA
* @returns: NA
*/
const hideTripPlanImages = () => {
	document.getElementsByClassName("trip-plan__images")[0].classList.add('hide');
}


/* hideTripPlanCountdown FUNCTION
* @description: hide countdown details for the trip plan
* @param: NA
* @returns: NA
*/
const hideTripPlanCountdown = () => {
	document.getElementsByClassName("trip-plan__countdown")[0].classList.add('hide');
}


/* hideTripPlanWeather FUNCTION
* @description: Shows weather for the trip plan
* @param: NA
* @returns: NA
*/
const hideTripPlanWeather = () => {
	document.getElementsByClassName("trip-plan__weather")[0].classList.add('hide');
}


/* hideTripDestCountryDtls FUNCTION
* @description: Shows info details about destination country for the trip plan
* @param: NA
* @returns: NA
*/
const hideTripDestCountryDtls = () => {
	document.getElementsByClassName("trip-plan__country-details")[0].classList.add('hide');
}


export{resetAllTripPlans ,
		hideTripPlanSection ,
		hideTripPlanImages ,
		hideTripPlanCountdown ,
		hideTripPlanWeather ,
		hideTripDestCountryDtls }