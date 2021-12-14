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
app.use(express.static(path.resolve('src/client/')));

// Port setup
const port = 3100;
app.listen(port, ()=>{
	console.log(`Server running on port: ${port}`)
});

console.log(__dirname)

/*
*
* V A R I A L B E S
*
*/
let tripData = {};


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

/*
* postTrip FUNCTION
* @description: Process the post request from client side and send
* 				trip plan details in response
* @param req: request with details of method and information from client
* @param res: response sent with details of status and data to client
* @returns: NA
*/
const postTrip = (req,res)=> {
	console.log("req has body", req.body);
	tripData.departureDate = new Date(req.body.departDate);
	tripData.currentDate = new Date(req.body.currentDate);
	tripData.destination  = req.body.destination;
	// console.log(typeof(tripData.currentDate));
	tripData.daysToGo = diffInDates(tripData.departureDate,
									tripData.currentDate);
	tripData.message = "POST received"
	res.send(tripData);
}

/*
* get REQUEST
* @description: Process get request for home page from client and send home
* 				page in response
* @param url {string}: URL for the request
* @param callback function {function}: Function to execute on route request
* @param req: request with details of method and information from client
* @param res: response sent with details of status and data to client
* @returns: NA
*/
app.get('/', (req,res)=>{
	// res.send('hello world');
	res.sendFile(path.resolve('src/client/views/index.html'))
});

/*
* post REQUEST
* @description: Process post request from client and call postTrip function
* @param url {string}: URL for the request
* @param callback function {function}: postTrip function to execute on route
* 										request
* @returns: NA
*/
app.post('/postTrip', postTrip);
