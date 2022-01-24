/*
* @jest-environment jsdom
*/

//Test functions in resetTripPlans.js
import {resetAllTripPlans} from '../src/client/js/resetTripPlans.js';
import {hideTripPlanSection} from '../src/client/js/resetTripPlans.js';
import {hideTripPlanImages} from '../src/client/js/resetTripPlans.js';
import {hideTripPlanCountdown} from '../src/client/js/resetTripPlans.js';
import {hideTripPlanWeather} from '../src/client/js/resetTripPlans.js';
import {hideTripDestCountryDtls} from '../src/client/js/resetTripPlans.js';

document.body.innerHTML = `
	<section class="trip-plan hide">
		<div class="trip-plan--left">
			<!-- Images for trip destination  -->
			<div class="trip-plan__images hide">
				<img src="" id="destinationImage" class="img">
			</div>
		</div>

		<div class="trip-plan--right">
			<!-- Countdown to departure -->
			<div class="trip-plan__countdown hide">
				<p>Trip to <span id="tripLoc"></span> is <span id="tripDaysToGo"></span> days away</p>
			</div>

			<!-- Weather at destination -->
			<div class="trip-plan__weather hide">
				<p>Typical weather for then is:</p>
				<p id="tempRange"> High: <span id="tempHigh"></span>, Low: <span id="tempLow"></span></p>
				<div class="weather__flex">
					<p id="weatherText"></p>
					<!-- <br> <br> -->
					<img id="weatherIcon" src="" alt="Weather icon">
				</div>
			</div>

			<!-- Destination country details -->
			<div class="trip-plan__country-details hide">
				<p id="cntryDtls">
				</p>
			</div>
		</div>

	</section>
`

// -------------------------------------------------------------------
// resetAllTripPlans()
// Validate hide class added to all trip planning divs and sections
describe("Validate resetAllTripPlans hides all trip planning divs and sections", () => {
	test("Validate resetAllTripPlans hides all trip planning divs and sections", () => {

		const elementArray1 = document.getElementsByClassName("trip-plan");
		const elementArray2 = document.getElementsByClassName("trip-plan__images");
		const elementArray3 = document.getElementsByClassName("trip-plan__countdown");
		const elementArray4 = document.getElementsByClassName("trip-plan__weather");
		const elementArray5 = document.getElementsByClassName("trip-plan__country-details");

		resetAllTripPlans();

		expect(elementArray1[0].classList).toContain("hide");
		expect(elementArray2[0].classList).toContain("hide");
		expect(elementArray3[0].classList).toContain("hide");
		expect(elementArray4[0].classList).toContain("hide");
		expect(elementArray5[0].classList).toContain("hide");
	});
});


// -------------------------------------------------------------------
// hideTripPlanSection()
// Validate hide class added to trip plan sections
describe("Validate hideTripPlanSection hides Trip Plan sections", () => {

	test("Validate hideTripPlanSection adds hide class to trip plan sections", () => {
		const elementArray = document.getElementsByClassName("trip-plan");

		hideTripPlanSection();

		expect(elementArray[0].classList).toContain("hide");

	});
});


// -------------------------------------------------------------------
// hideTripPlanImages()
// Validate hide class added to trip plan images div
describe("Validate hideTripPlanImages hides Trip Plan Image div", () => {

	test("Validate hideTripPlanImages adds hide class to trip plan image div", () => {
		const elementArray = document.getElementsByClassName("trip-plan__images");

		hideTripPlanImages();

		expect(elementArray[0].classList).toContain("hide");

	});
});

// -------------------------------------------------------------------
// hideTripPlanCountdown()
// Validate hide class added to trip plan countdown div
describe("Validate hideTripPlanCountdown hides Trip Plan countdown div", () => {

	test("Validate hideTripPlanCountdown adds hide class to trip plan countdown div", () => {
		const elementArray = document.getElementsByClassName("trip-plan__countdown");

		hideTripPlanCountdown();

		expect(elementArray[0].classList).toContain("hide");

	});
});

// -------------------------------------------------------------------
// hideTripPlanWeather()
// Validate hide class added to trip plan weather div
describe("Validate hideTripPlanWeather hides Trip Plan weather div", () => {

	test("Validate hideTripPlanWeather adds hide class to trip plan weather div", () => {
		const elementArray = document.getElementsByClassName("trip-plan__weather");

		hideTripPlanWeather();

		expect(elementArray[0].classList).toContain("hide");

	});
});


// -------------------------------------------------------------------
// hideTripDestCountryDtls()
// Validate hide class added to trip plan country details div
describe("Validate hideTripDestCountryDtls hides Trip Plan country details div", () => {

	test("Validate hideTripDestCountryDtls adds hide class to trip plan country details div", () => {
		const elementArray = document.getElementsByClassName("trip-plan__country-details");

		hideTripDestCountryDtls();

		expect(elementArray[0].classList).toContain("hide");

	});
});
