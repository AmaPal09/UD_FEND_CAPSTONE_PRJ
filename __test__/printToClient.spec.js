/*
 * @jest-environment jsdom
 */

import {printTripDetails} from '../src/client/js/printToClient'
import {printTripPlanImages} from '../src/client/js/printToClient'
import {showTripPlanImages} from '../src/client/js/printToClient'
import {printTripPlanCountdown} from '../src/client/js/printToClient'
import {showTripPlanCountdown} from '../src/client/js/printToClient'
import {printTripPlanWeather} from '../src/client/js/printToClient'
import {printTripDestCountryDtls} from '../src/client/js/printToClient'
import {showTripPlanSection} from '../src/client/js/printToClient'
import {showTripPlanWeather} from '../src/client/js/printToClient'
import {showTripDestCountryDtls} from '../src/client/js/printToClient'

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
			flags: "????????",
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

// -------------------------------------------------------------------
// printTripDetails

describe("Print Trip Details from server to client", ()=> {
	// Test that printTripDetails function exists
	test("Validate that the details from server are printed to the DOM", () => {
		expect(printTripDetails).toBeDefined();
	});

	//Validate that printTripDetails call appropriate functions to print test data
	test("Validate that printTripDetails call appropriate functions to print test data", () => {
		const pixaImg = document.getElementById("destinationImage");

		const tripLoc = document.getElementById("tripLoc");
		const countDown = document.getElementById("tripDaysToGo");

		const highTempEle = document.getElementById("tempHigh");
		const lowTempEle = document.getElementById("tempLow");
		const textDtls = document.getElementById("weatherText");
		const iconDtls = document.getElementById("weatherIcon");

		const ctyDtls = document.getElementById("cntryDtls");

		const ctyDesc = `Officially known as ` +
					`${tripData.rstCntyDtls.couDtl.officalNme}, it has ` +
					`a population of ` +
					`${tripData.rstCntyDtls.couDtl.population}. It is ` +
					`located on the continent of ` +
					`${tripData.rstCntyDtls.couDtl.continent[0]} in the ` +
					`${tripData.rstCntyDtls.couDtl.region} region. ` +
					`It's capital city is ` +
					`${tripData.rstCntyDtls.couDtl.capital[0]}. Currency ` +
					`accepted here is ` +
					`${tripData.rstCntyDtls.couDtl.currency[0]}. Official ` +
					`language here is ` +
					`${tripData.rstCntyDtls.couDtl.languages[0]}. Its ` +
					`flag is ${tripData.rstCntyDtls.couDtl.flags}.`;

		const elementArray = document.getElementsByClassName("trip-plan");

		printTripDetails(tripData);

		expect(pixaImg.getAttribute('src')).toBe("https://pixabay.com/get/g63f25c983ced52cf67a87ddb1e5bd158f46fea9438e2d2c17e2b8af545102ed94f809b16bb3ebf899333ea60d30288131fac01674c5df4bb540d35a3c8482036_640.jpg");

		expect(pixaImg.parentElement.classList).not.toContain("hide");

		expect(countDown.innerText).toBe(tripData.daysToGo);

		expect(tripLoc.innerText).toBe(`${tripData.geoNmeDtls.geoDtl.name}, ${tripData.geoNmeDtls.geoDtl.countryName}`);

		expect(countDown.parentElement.parentElement.classList).not.toContain("hide");

		expect(tripLoc.parentElement.parentElement.classList).not.toContain("hide");

		expect(highTempEle.innerText).toBe(`${tripData.weaBitDtls.weather.high_temp}`);

		expect(lowTempEle.innerText).toBe(`${tripData.weaBitDtls.weather.low_temp}`);

		expect(textDtls.innerText).toMatch(tripData.weaBitDtls.weather.weaDesc);

		expect(iconDtls.getAttribute("src")).toBe(`https://www.weatherbit.io/static/img/icons/${tripData.weaBitDtls.weather.weaIcon}.png`);

		expect(highTempEle.parentElement.parentElement.classList).not.toContain("hide");

		expect(ctyDtls.innerText).toBe(`${ctyDesc}`);

		expect(ctyDtls.parentElement.classList).not.toContain("hide");

		expect(elementArray[0].classList).not.toContain("hide");
	});
});


// -------------------------------------------------------------------
// printTripPlanImages()
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


// -------------------------------------------------------------------
// showTripPlanImages()
// Validate hide class removal for image display
describe("Validate showTripPlanImages shows image", ()=> {
	//Validate that showTripPlanImages removes the hide class
	test("Validate that showTripPlanImages removes the hide class from image div", () => {
		const elementArray = document.getElementsByClassName("trip-plan__images");

		showTripPlanImages();

		expect(elementArray[0].classList).not.toContain("hide");
	});
});


// -------------------------------------------------------------------
//  printTripPlanCountdown()
//Validate destination and countdown days are printed printTripPlanCountdown
describe("Validate that countdown days and destination is printed", () => {

	const tripLoc = document.getElementById("tripLoc");
	const countDown = document.getElementById("tripDaysToGo");

	//Validate that trip destination and countdown days are printed when available from geoNames Details
	test("Validate that countdown days and destination are printed when availabe from geoNames details", ()=> {

		printTripPlanCountdown(tripData);

		expect(countDown.innerText).toBe(tripData.daysToGo);

		expect(tripLoc.innerText).toBe(`${tripData.geoNmeDtls.geoDtl.name}, ${tripData.geoNmeDtls.geoDtl.countryName}`);

		expect(countDown.parentElement.parentElement.classList).not.toContain("hide");

		expect(tripLoc.parentElement.parentElement.classList).not.toContain("hide");
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


// -------------------------------------------------------------------
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


// -------------------------------------------------------------------
// printTripPlanWeather
// Validate weather data is printed when availalbe and displayed
describe("Validate weather data is printed when availalbe and displayed", () => {
	const highTempEle = document.getElementById("tempHigh");
	const lowTempEle = document.getElementById("tempLow");
	const textDtls = document.getElementById("weatherText");
	const iconDtls = document.getElementById("weatherIcon");

	test("Weather data is printed and displayed when available", () => {
		printTripPlanWeather(tripData.weaBitDtls);

		expect(highTempEle.innerText).toBe(`${tripData.weaBitDtls.weather.high_temp}`);
		expect(lowTempEle.innerText).toBe(`${tripData.weaBitDtls.weather.low_temp}`);
		expect(textDtls.innerText).toMatch(tripData.weaBitDtls.weather.weaDesc);
		expect(iconDtls.getAttribute("src")).toBe(`https://www.weatherbit.io/static/img/icons/${tripData.weaBitDtls.weather.weaIcon}.png`);

		expect(highTempEle.parentElement.parentElement.classList).not.toContain("hide");
	});

	//Validate that no data is printed for weather when non is available from server
	test("Validate that no data is printed for weather when no data is available from server", () => {

		const weaBitDtls2 = {
			MSG: "No weather data found for this location.",
			found: false,
			weather: {},
		};

		printTripPlanWeather(weaBitDtls2);

		expect(highTempEle.innerText).toBe("");
		expect(lowTempEle.innerText).toBe("");
		expect(textDtls.innerText).toBe("");
		expect(iconDtls.getAttribute("src")).toBe('');

		expect(highTempEle.parentElement.parentElement.classList).toContain("hide");

	});

	//Validate that no data is printed for weather when trip is more than 16 days away
	test("Validate that no data is printed for weather when trip is more than 16 dyss away", () => {

		const weaBitDtls3 = {
			MSG: "Forcast for this date is not available. Please check upto 16 days before the trip",
			found: false,
			weather: {},
		};

		printTripPlanWeather(weaBitDtls3);

		expect(highTempEle.innerText).toBe("");
		expect(lowTempEle.innerText).toBe("");
		expect(textDtls.innerText).toBe("");
		expect(iconDtls.getAttribute("src")).toBe('');

		expect(highTempEle.parentElement.parentElement.classList).toContain("hide");

	});
});


// -------------------------------------------------------------------
// showTripPlanWeather
// Validate hide class removal from for weather display
describe("Validate showTripPlanWeather shows weather", ()=> {
	//Validate that showTripPlanCountdown removes the hide class
	test("Validate that showTripPlanWeather removes the hide class from weather display", () => {
		const elementArray = document.getElementsByClassName("trip-plan__weather");

		showTripPlanWeather();

		expect(elementArray[0].classList).not.toContain("hide");
	});
});


// -------------------------------------------------------------------
// printTripDestCountryDtls
// Validate country details when available are displayed
describe("Validate country details are printed when availalbe and displayed", () => {
	const ctyDtls = document.getElementById("cntryDtls");

	const ctyDesc = `Officially known as ` +
					`${tripData.rstCntyDtls.couDtl.officalNme}, it has ` +
					`a population of ` +
					`${tripData.rstCntyDtls.couDtl.population}. It is ` +
					`located on the continent of ` +
					`${tripData.rstCntyDtls.couDtl.continent[0]} in the ` +
					`${tripData.rstCntyDtls.couDtl.region} region. ` +
					`It's capital city is ` +
					`${tripData.rstCntyDtls.couDtl.capital[0]}. Currency ` +
					`accepted here is ` +
					`${tripData.rstCntyDtls.couDtl.currency[0]}. Official ` +
					`language here is ` +
					`${tripData.rstCntyDtls.couDtl.languages[0]}. Its ` +
					`flag is ${tripData.rstCntyDtls.couDtl.flags}.`;

	test("Country details are printed and displayed when available", () => {
		printTripDestCountryDtls(tripData.rstCntyDtls);

		expect(ctyDtls.innerText).toBe(`${ctyDesc}`);

		expect(ctyDtls.parentElement.classList).not.toContain("hide");
	});

	//Validate that no data is printed for country details when none is available from server
	test("Validate that no data is printed for country details when no data is available from server", () => {

		const rstCntyDtls2 = {
			MSG: "No details found for country",
			found: false,
			couDtl: {}
		};

		printTripDestCountryDtls(rstCntyDtls2);

		expect(ctyDtls.innerText).toBe("");

		expect(ctyDtls.parentElement.classList).toContain("hide");

	});

	//Validate that pcountry details are printed correctly when there are mutiple currencies, languages to pick from
	test("Correct country details are printed and displayed when available", () => {

		const rstCntyDtls3 = {
			MSG: "Details found for country",
			found: true,
			couDtl: {
			capital: ['C1', 'C2'],
			continent: ['Europe', 'Asia'],
			currency: ['Euro', 'USD'],
			flags: "????????",
			languages: ['Dutch', 'Englist'],
			officalNme: "Kingdom of Faries",
			population: 300,
			region: "Eastern Europe",
			}
		};

		const ctyDesc3 = `Officially known as ` +
					`${rstCntyDtls3.couDtl.officalNme}, it has ` +
					`a population of ` +
					`${rstCntyDtls3.couDtl.population}. It is ` +
					`located on the continents of ` +
					`${rstCntyDtls3.couDtl.continent[0]},` +
					`${rstCntyDtls3.couDtl.continent[1]} in the ` +
					`${rstCntyDtls3.couDtl.region} region. ` +
					`It's capital cities are ` +
					`${rstCntyDtls3.couDtl.capital[0]},` +
					`${rstCntyDtls3.couDtl.capital[1]}. Currencies ` +
					`accepted here are ` +
					`${rstCntyDtls3.couDtl.currency[0]},` +
					`${rstCntyDtls3.couDtl.currency[1]}. Official ` +
					`languages spoken here are ` +
					`${rstCntyDtls3.couDtl.languages[0]},` +
					`${rstCntyDtls3.couDtl.languages[1]}. Its ` +
					`flag is ${tripData.rstCntyDtls.couDtl.flags}.`;
		printTripDestCountryDtls(rstCntyDtls3);

		expect(ctyDtls.innerText).toBe(`${ctyDesc3}`);

		expect(ctyDtls.parentElement.classList).not.toContain("hide");
	});
});


// -------------------------------------------------------------------
// showTripDestCountryDtls
// Validate hide class removal from for country details display
describe("Validate showTripDestCountryDtls shows weather", ()=> {
	//Validate that showTripPlanCountdown removes the hide class
	test("Validate that showTripDestCountryDtls removes the hide class from weather display", () => {
		const elementArray = document.getElementsByClassName("trip-plan__country-details");

		showTripDestCountryDtls();

		expect(elementArray[0].classList).not.toContain("hide");
	});
});


// -------------------------------------------------------------------
// showTripPlanSection
// Validate hide class removal from for trip plan section
describe("Validate showTripPlanSection shows trip plan section", ()=> {
	//Validate that showTripPlanCountdown removes the hide class
	test("Validate that showTripPlanSection removes the hide class from trip plan section", () => {
		const elementArray = document.getElementsByClassName("trip-plan");

		showTripPlanSection();

		expect(elementArray[0].classList).not.toContain("hide");
	});
});