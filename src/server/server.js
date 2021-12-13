//Server side JS code

/*
* ALL REQUIRED PACKAGES
*/
//web framework - express to run server and routes
const express = require('express');
const bodyParser = require('body-parser'); //body-parser to parse JSON
const cors = require('cors'); // Cross-Origin Resource Sharing (CORS)
var path = require('path');

// Basic server configuration
// Start up an instance of the app
const app = express();
// Configure express to use body parser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use cors for cross origin allowance. Use cors middleware
app.use(cors());

//SERVER SET-UP
// app.use(express.static('../client'));
app.use(express.static(path.resolve('src/client/')));

const port = 3100;

app.listen(port, ()=>{
	console.log(`Server running on port: ${port}`)
});

console.log(__dirname)


// Other variables
let tripData = {};


// OTHER FUNCTIONS
const postTrip = (req,res)=> {
	console.log("req has body", req.body);
	tripData.departureDate = new Date(req.body.departDate);
	tripData.currentDate = new Date(req.body.currentDate);
	tripData.destination  = req.body.destination;
	// console.log(typeof(tripData.currentDate));
	tripData.daysToGo = Math.round((tripData.departureDate.getTime()
									- tripData.currentDate.getTime())/(1000*3600*24))
	tripData.message = "POST received"
	res.send(tripData);
}


/*Routes and get requests*/
app.get('/', (req,res)=>{
	// res.send('hello world');
	res.sendFile(path.resolve('src/client/views/index.html'))
});

app.post('/postTrip', postTrip);
