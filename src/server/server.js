//Server side JS code

/*
*
* A L L   R E Q U I R E D   P A C K A G E S
*
*/
//web framework - express to run server and routes
const express = require('express');
const bodyParser = require('body-parser'); //body-parser to parse JSON
const cors = require('cors'); // Cross-Origin Resource Sharing (CORS)
var path = require('path');
const fetch = require('node-fetch'); //fetch command to access APIs
const dotenv = require('dotenv');


/*
*
* S E R V E R   S E T - U P
*
*/

//Basic server configuration
// Start up an instance of the app
const app = express();
// Configure express to use body parser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Use cors for cross origin allowance. Use cors middleware
app.use(cors());

// File access setup
// app.use(express.static(path.resolve('src/client/')));
app.use(express.static(path.resolve('dist/')));
console.log(__dirname)

// Port setup
const port = 3100;
app.listen(port, ()=>{
	console.log(`Server running on port: ${port}`)
});

//Environment setup
dotenv.config(); //configure env variables


/*
*
* V A R I A L B E S
*
*/
let tripData = {};
const GEONAMES_API =
			'http://api.geonames.org/searchJSON?maxRows=1&style=MEDIUM';
const GEONAMES_USER = process.env.GEONAMES_USER;
const WEATHERBIT_API = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
const PIXABAY_API='https://pixabay.com/api/?';
const PIXABAY_KEY=process.env.PIXABAY_KEY;


/*
*
* F U N C T I O N S
*
*/

/*
* HELPER FUNCTIONS
*/

/*
* diffInDates FUNCTION
* @description: Calculate the difference between 2 dates in number of days
* @param {date object} date1: first date (ideally bigger date)
* @param {date object} date2: second date (ideally smaller date)
* @returns: NA
*/
const diffInDates = (date1, date2) => {
	console.log("diffInDates");
	let numDays = 0;

	numDays = Math.round((date1.getTime() - date2.getTime())
						/(1000*3600*24));
	if (numDays < 0) {
		// console.log("Please check order of date parameters");
		return 0;
	}
	else {
		return numDays;
	}
}


/*
* processGeoData FUNCTION
* @description: Process api response received from Geonames API
* @param {object} apiRes: API response from Geonames API
* @returns {object} geoData: Processed response
* geoData structure
* geoData = { found: false;
*			MSG: "Some messge"
*			geoDetails: {}
*		}
*/
const processGeoData = (apiRes) => {
	console.log("processGeoData");
	let geoData = {};

	//If api fetch was successful
	if (apiRes.received) {
		//No location found
		if (apiRes.response.totalResultsCount == 0) {
			geoData.found = false;
			geoData.MSG = "Location not found on geonames";
			geoData.geoDetails = {};
			return geoData;
		}
		//location found
		else {
			geoData.found = true;
			geoData.MSG = "Record found for location";
			geoData.geoDetails = {};
			geoData.geoDetails.lat = apiRes.response.geonames[0].lat;
			geoData.geoDetails.lng = apiRes.response.geonames[0].lng;
			geoData.geoDetails.name = apiRes.response.geonames[0].name;
			geoData.geoDetails.countryName = apiRes.response.geonames[0].countryName;
			return geoData;
		}
	}
	//API fetch was unsuccessful
	else {
		geoData.found = false;
		geoData.MSG = apiRes.response;
		geoData.geoDetails = {};
		return geoData;
	}
}


/*
* processWeatherData FUNCTION
* @description: Process API response from Weatherbit API
* @param {object} apiRes: API response received from weatherbit API
* @param {numeric} daysToGo: Number of days to go for the trip
* @param {string} departISODate:  Departure date in ISO format
* @returns {object} weaData: Processed response
* weaData structure
* weaData = {found: true,
*			MSG: "some message",
*			weather: {}
*		}
*/
const processWeatherData = (apiRes, daysToGo, departISODate) => {
	console.log("processWeatherData");
	let weaData = {};
	if (apiRes.received) {
		//If is trip is less than 17 days away, then match dates for forecast
		if (daysToGo < 17) {
			//If API returned weather data, process weather data
			if (apiRes.response.data) {
				//Check for each days forecast to find departure date's forecast
				for (let i = 0; i < apiRes.response.data.length; i++) {
					//Forecast for trip departure date is found
					if (apiRes.response.data[i].valid_date === departISODate) {
						weaData.found = true;
						weaData.MSG = "weather record found for trip location and date."
						weaData.weather = apiRes.response.data[i];
						return weaData;
					}
				}
				//If no matching record for trip departure date is found
				if (!weaData.found) {
					weaData.found = false;
					weaData.MSG = "Weather for this date for trip location not found."
					weaData.weather = {};
					return weaData;
				}
			}
			//API returned 0 records for weather data
			else {
				weaData.found = false;
				if (apiRes.response.error) {
					weaData.MSG = error;
				}
				else {
					weaData.MSG = "No weather forcast found.";
				}
				weaData.weather = {};
				return weaData;
			}
		}
		//trip departure is more than 16 days in away
		else {
			weaData.found = false;
			weaData.MSG = "Forcast for this date is not available. Please check upto 16 days before the trip";
			weaData.weather = {};
			return weaData;
		}
	}
	//API fetch resulted in error
	else {
		weaData.found = false;
		weaData.MSG = apiRes.response;
		weaData.weather = {};
		return weaData;
	}
}


/*
* ROUTES and REQUESTS
*/

/* getHomePage FUNCTION
* @description: Process the get request from client side and send
* 				index page in response
* @param req: request with details of method and information from client
* @param res: response sent with details of status and data to client
* @returns: NA
*/
const getHomePage = (req,res)=>{
	console.log("getHomePage");
	// res.sendFile(path.resolve('src/client/views/index.html'))
	res.sendFile(path.resolve('dist/index.html'));
}


/*
* postTrip ASYNC FUNCTION
* @description: Process the post request from client side and send
* 				trip plan details in response
* @param req: request with details of method and information from client
* @param res: response sent with details of status and data to client
* @returns: NA
*/
const postTrip = async (req,res)=> {
	console.log("postTrip");
	//Start will blank tripData for every new destination
	if (tripData.destination != req.body.destination) {
		tripData = {};
	}
	tripData.message = "POST received";
	tripData.departureDate = new Date(req.body.departDate);
	tripData.currentDate = new Date(req.body.currentDate);
	tripData.destination  = req.body.destination;
	tripData.departISODate = tripData.departureDate.toISOString().slice(0,10);

	//Get the number of days to go before the trip
	tripData.daysToGo = diffInDates(tripData.departureDate,
									tripData.currentDate);

	//Get the latitude and longitude f the trip destination
	geoAPIrespose = await fetchGeonames(tripData.destination);
	tripData.geonamesDetails = processGeoData(geoAPIrespose);
	// console.log(tripData.geonamesDetails);
	if (!tripData.geonamesDetails.found) {
		res.send(tripData);
		return
	}

	weatherAPIresponse = await fetchWeatherbit(
									tripData.geonamesDetails.geoDetails.lat,
									tripData.geonamesDetails.geoDetails.lng);
	tripData.weatherbitDetails = processWeatherData(weatherAPIresponse,
													tripData.daysToGo,
													tripData.departISODate);

	//Get images from pixabay
	const imageDetails = await fetchPixabay(
								tripData.geonamesDetails.geoDetails.name);
	if (imageDetails.total > 0) {
		console.log("Images found");
		tripData.images = imageDetails.hits[1];
	}
	else {
		console.log("Images not found use country instead");
		const imageDetails = await fetchPixabay(tripData.countryName);
		if (imageDetails.total < 1) {
			tripData.imageMSG = 'No image found';
			//TODO: replace above with 1 generic travel image on FE
		}
		else {
			tripData.images = imageDetails.hits[1];
		}
	}

	//Send trip data as a response to this post request
	res.send(tripData);
}


/*
* get REQUEST
* @description: Process get request for home page from client and send home
* 				page in response
* @param {string} url: URL for the request
* @param {function} callback function: getHomePage function to execute on      * 									 route request
* @returns: NA
*/
app.get('/', getHomePage);


/*
* post REQUEST
* @description: Process post request from client and call postTrip function
* @param {string} url: URL for the request
* @param {function} callback function: postTrip function to execute on route
* 										request
* @returns: NA
*/
app.post('/postTrip', postTrip);


/*
* fetchGeonames ASYNC FUNCTION
* @description: Makes a fetch request to geonames API
* @param {string} destination: trip destination whose details are needed
* @return {object} apiRes: location details received from API
*/
const fetchGeonames = async (destination) => {
	console.log("Enter fetchGeonames");
	let apiRes = { };

	//Fetch from API
	const response = await fetch(`${GEONAMES_API}&username=${GEONAMES_USER}&name=${destination}`, {method: 'GET'});
	try {
		apiRes.response = await response.json();
		apiRes.received = true;
		return apiRes;
	}catch(error) {
		console.log("error:", error);
		apiRes.received = false;
		apiRes.response = error;
		return apiRes;
	}
}


/*
* fetchWeatherbit ASYNC FUNCTION
* @description: Makes a fetch request to weatherbit API
* @param {string} lat: destination latitude
* @param {string} lon: destination longitude
* @return {object} apiRes: weather details received from API
*/
const fetchWeatherbit = async (lat, lng) => {
	console.log("Enter fetchWeatherbit");

	let apiRes = { };

	//Fetch from API
	const response = await fetch(`${WEATHERBIT_API}key=${WEATHERBIT_KEY}&units=I&lat=${lat}&lon=${lng}`);
	try {
		apiRes.response = await response.json();
		apiRes.received = true;
		return apiRes;
	}catch(error) {
		console.log("error:",error);
		apiRes.received = false;
		apiRes.response = error;
		return apiRes;
	}
}


/*
* fetchPixabay ASYNC FUNCTION
* @description: Makes a fetch request to Pixabay API
* @param {string} name: placename (city/country)
* @return {json} imageData: image details received from API
*/
const fetchPixabay = async (name) => {
	console.log("Enter fetchPixabay");
	console.log(`${PIXABAY_API}key=${PIXABAY_KEY}&q=${name}&image_type=photo&category=travel&safesearch=true`)
	const response = await fetch(`${PIXABAY_API}key=${PIXABAY_KEY}&q=${name}&image_type=photo&category=travel&safesearch=true`);
	try {
		const imageData = await response.json();
		return imageData;
	}catch(error) {
		console.log("error:",error);
	}
}
