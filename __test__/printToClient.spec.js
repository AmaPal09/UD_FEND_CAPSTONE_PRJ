/*
 * @jest-environment jsdom
 */

import {printTripDetails} from '../src/client/js/printToClient'
import {printTripPlanImages} from '../src/client/js/printToClient'
import {printTripPlanCountdown} from '../src/client/js/printToClient'
import {printTripPlanWeather} from '../src/client/js/printToClient'
import {printTripDestCountryDtls} from '../src/client/js/printToClient'
import {showTripPlanSection} from '../src/client/js/printToClient'
import {showTripPlanCountdown} from '../src/client/js/printToClient'
import {showTripPlanImages} from '../src/client/js/printToClient'

// import * as printToClient from '../src/client/js/printToClient'


const tripData = {
	currDte: "2022-01-23T08:00:00.000Z",
	daysToGo: 13,
	departDte: "2022-02-05T08:00:00.000Z",
	departISODte: "2022-02-05",
	destination: "Amsterdam",
	message: "POST received",
	geoNmeDtls: {
		MSG: "Record found for location",
		found: true,
		geoDtl: {
			countryName: "Netherlands",
			lat: "52.37403",
			lng: "4.88969",
			name: "Amsterdam",
		},
	},
	pixBayDtls: {
		MSG: "Image found for city",
		found: true,
		imageDetails: {
			collections: 1600,
			comments: 17,
			downloads: 107972,
			id: 6778915,
			imageHeight: 3693,
			imageSize: 4963303,
			imageWidth: 5570,
			largeImageURL: "https://pixabay.com/get/g4c52f03a3dedc88bf19c1bd4a0f4ba855dec288d23de441b0a99e6202561323440cc8cd070e004726099d6d7fff2cd843dbe3cae49adb2f9ba4793c5e129e78c_1280.jpg",
			likes: 89,
			pageURL: "https://pixabay.com/photos/buildings-amsterdam-historic-6778915/",
			previewHeight: 99,
			previewURL: "https://cdn.pixabay.com/photo/2021/11/08/11/19/buildings-6778915_150.jpg",
			previewWidth: 150,
			tags: "buildings, amsterdam, historic",
			type: "photo",
			user: "MemoryCatcher",
			userImageURL: "https://cdn.pixabay.com/user/2014/10/17/00-44-25-234_250x250.png",
			user_id: 168384,
			views: 119718,
			webformatHeight: 424,
			webformatURL: "https://pixabay.com/get/g63f25c983ced52cf67a87ddb1e5bd158f46fea9438e2d2c17e2b8af545102ed94f809b16bb3ebf899333ea60d30288131fac01674c5df4bb540d35a3c8482036_640.jpg",
			webformatWidth: 640,
		},
	},
	rstCntyDtls: {
		MSG: "Details found for country",
		found: true,
		couDtl: {
			capital: ['Amsterdam'],
			continent: ['Europe'],
			currency: ['Euro'],
			flags: "🇳🇱",
			languages: ['Dutch'],
			officalNme: "Kingdom of the Netherlands",
			population: 16655799,
			region: "Western Europe",
		},
	},
	weaBitDtls: {
		MSG: "weather record found for trip location and date.",
		found: true,
		weather: {
			high_temp: 48.5,
			low_temp: 39.5,
			weaDesc: "Broken clouds",
			weaIcon: "c03d",
		},
	},
} ;


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


describe("Print Trip Details from server to client", ()=> {
	// Test that printTripDetails function exists
	test("Validate that the details from server are printed to the DOM", () => {
		expect(printTripDetails).toBeDefined();
	});
});


//Validate image display
describe("Print image details and display image", () => {
	//Test that printTripPlanImages function exists
	test("Validate that the function exist", () => {
		expect(printTripPlanImages).toBeDefined();
	});

	//Test that when image details are provided, function displays image
	test("Validate that image is displayed when data is available", ()=> {
		const pixaImg = document.getElementById("destinationImage");

		printTripPlanImages(tripData.pixBayDtls);

		//Validate correct source attribute is provided
		expect(pixaImg.getAttribute('src')).toBe("https://pixabay.com/get/g63f25c983ced52cf67a87ddb1e5bd158f46fea9438e2d2c17e2b8af545102ed94f809b16bb3ebf899333ea60d30288131fac01674c5df4bb540d35a3c8482036_640.jpg");

		//Validate that image was displayed
		expect(pixaImg.parentElement.classList).not.toContain("hide");

	});

	//Validate that default image displayed when no impage was provided
	test("Validate that default image displayed when no impage was provided", ()=> {
		const pixBayDtls2 = {
			MSG: "Image not found for city and country",
			found: false,
			imageDetails: {},
		};
		const pixaImg = document.getElementById("destinationImage");

		printTripPlanImages(pixBayDtls2);

		expect(pixaImg.getAttribute('src')).toBe('./images/defaultImg1.jpg');

		expect(pixaImg.parentElement.classList).not.toContain("hide");
	});
});


//Validate hide class removal for image display
describe("Validate showTripPlanImages shows image", ()=> {
	//Validate that showTripPlanImages removes the hide class
	test("Validate that showTripPlanImages removes the hide class from image div", () => {
		const elementArray = document.getElementsByClassName("trip-plan__images");

		showTripPlanImages();

		expect(elementArray[0].classList).not.toContain("hide");
	});
});


//Validate destination and countdown days are printed printTripPlanCountdown
describe("Validate that countdown days and destination is printed", () => {

	const tripLoc = document.getElementById("tripLoc");
	const countDown = document.getElementById("tripDaysToGo");

	//Validate that trip destination and countdown days are printed when available from geoNames Details
	test("Validate that countdown days and destination are printed when availabe from geoNames details", ()=> {

		printTripPlanCountdown(tripData);

		expect(countDown.innerText).toBe(tripData.daysToGo);

		expect(tripLoc.innerText).toBe(`${tripData.geoNmeDtls.geoDtl.name}, ${tripData.geoNmeDtls.geoDtl.countryName}`);
	});

	//Validate that trip destination printed from tripData when not available from geoNames details
	test("Validate that trip destination location is printed from tripData when its not available from geoNames details", () => {

		const tripData2 = {
			currDte: "2022-01-23T08:00:00.000Z",
			daysToGo: 13,
			departDte: "2022-02-05T08:00:00.000Z",
			departISODte: "2022-02-05",
			destination: "Sus Road",
			message: "POST received",
			geoNmeDtls: {
				MSG: "Record not found for location",
				found: false,
				geoDtl: {
				},
			},
		}

		printTripPlanCountdown(tripData2);

		expect(tripLoc.innerText).toBe(`${tripData2.destination}`);
	})

});


// showTripPlanCountdown
//Validate hide class removal for countdown display
describe("Validate showTripPlanCountdown shows countdown to destination", ()=> {
	//Validate that showTripPlanCountdown removes the hide class
	test("Validate that showTripPlanCountdown removes the hide class from countDown", () => {
		const elementArray = document.getElementsByClassName("trip-plan__countdown")

		showTripPlanCountdown();

		expect(elementArray[0].classList).not.toContain("hide");
	});
});
