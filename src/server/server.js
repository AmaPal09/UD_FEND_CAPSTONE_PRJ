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

/*
* Basic server configuration
*/
// Start up an instance of the app
const app = express();
// Configure express to use body parser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Use cors for cross origin allowance. Use cors middleware
app.use(cors());

// File access setup
// app.use(express.static('../client'));
// app.use(express.static(path.resolve('src/client/')));
app.use(express.static(path.resolve('dist/')));

// Port setup
const port = 3100;
app.listen(port, ()=>{
	console.log(`Server running on port: ${port}`)
});

console.log(__dirname)

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
* @param date1 {date object}: first date (ideally bigger date)
* @param date2 {date object}: second date (ideally smaller date)
* @returns: NA
*/
const diffInDates = (date1, date2) => {
	let numDays = 0;

	numDays = Math.round((date1.getTime() - date2.getTime())
						/(1000*3600*24));
	if (numDays < 0) {
		console.log("Please check order of date parameters");
		return 0;
	}
	else {
		return numDays;
	}
}

/*
* ROUTES and REQUESTS
*/

/* getHomePage FUNCTIPN
* @description: Process the get request from client side and send
* 				index page in response
* @param req: request with details of method and information from client
* @param res: response sent with details of status and data to client
* @returns: NA
*/
const getHomePage = (req,res)=>{
	// res.sendFile(path.resolve('src/client/views/index.html'))
	res.sendFile(path.resolve('dist/index.html'));
}

/*
* postTrip FUNCTION
* @description: Process the post request from client side and send
* 				trip plan details in response
* @param req: request with details of method and information from client
* @param res: response sent with details of status and data to client
* @returns: NA
*/
const postTrip = async (req,res)=> {
	// console.log("req has body", req.body);
	tripData.message = "POST received";
	tripData.departureDate = new Date(req.body.departDate);
	tripData.currentDate = new Date(req.body.currentDate);
	tripData.destination  = req.body.destination;

	//Get the number of days to go before the trip
	tripData.daysToGo = diffInDates(tripData.departureDate,
									tripData.currentDate);

	//Get the latitude and longitude f the trip destination
	const geonamesDetails = await fetchGeonames(tripData.destination);
	// console.log(geonamesDetails.geonames[0].lng, geonamesDetails.geonames[0].lat, geonamesDetails.geonames[0].countryName, geonamesDetails.geonames[0].name);
	tripData.lat = geonamesDetails.geonames[0].lat;
	tripData.lng = geonamesDetails.geonames[0].lng;
	tripData.name = geonamesDetails.geonames[0].name;
	tripData.countryName = geonamesDetails.geonames[0].countryName;

	if (tripData.daysToGo < 17) {
		const weatherDetails = await fetchWeatherbit(tripData.lat, tripData.lng);
		// console.log(weatherDetails);

		for(let i=0; i<weatherDetails.data.length; i++) {
			let departureISODate = tripData.departureDate.toISOString().slice(0,10);
			if (weatherDetails.data[i].valid_date === departureISODate) {
				console.log(weatherDetails.data[i]);
				tripData.weather = weatherDetails.data[i];
				break;
			}
		}
	}
	else {
		tripData.weather = "No forcast for that date is available. Please upto 16 days before the trip"
	}

	//Send trip data as a response to this post request
	res.send(tripData);
}


/*
* get REQUEST
* @description: Process get request for home page from client and send home
* 				page in response
* @param url {string}: URL for the request
* @param callback function {function}: getHomePage function to execute on route * 										request
* @returns: NA
*/
app.get('/', getHomePage);

/*
* post REQUEST
* @description: Process post request from client and call postTrip function
* @param url {string}: URL for the request
* @param callback function {function}: postTrip function to execute on route
* 										request
* @returns: NA
*/
app.post('/postTrip', postTrip);


/*
* fetchGeonames FUNCTION
* @description: Makes a fetch request to geonames API
* @param {string} destination: trip destination whose details are needed
* @return {json} newData: location details received from API
*/
const fetchGeonames = async (destination) => {
	console.log("Enter fetchGeonames")
	console.log(destination);
	const response = await fetch(`${GEONAMES_API}&username=${GEONAMES_USER}&name=${destination}`, {method: 'GET'});
	try {
		const geoData = await response.json();
		return geoData;
	}catch(error) {
		console.log("error:", error);
	}
}


/*
* fetchWeatherbit FUNCTION
* @description: Makes a fetch request to weatherbit API
* @param {string} lat: destination latitude
* @param {string} lon: destination longitude
* @return {json} newData: weather details received from API
*/
const fetchWeatherbit = async (lat, lng) => {
	console.log("Enter fetchWeatherbit");
	console.log(lat, lng);
	console.log(`${WEATHERBIT_API}key=${WEATHERBIT_KEY}&units=I&lat=${lat}&lon=${lng}`)
	const response = await fetch(`${WEATHERBIT_API}key=${WEATHERBIT_KEY}&units=I&lat=${lat}&lon=${lng}`);
	try {
		const weatherData = await response.json();
		return weatherData;
	}catch(error) {
		console.log("error:",error);
	}
}
