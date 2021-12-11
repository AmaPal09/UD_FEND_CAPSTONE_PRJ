//Server side JS code

/*
* ALL REQUIRED PACKAGES
*/
//web framework - express to run server and routes
const express = require('express');
const bodyParser = require('body-parser'); //body-parser to parse JSON
const cors = require('cors'); // Cross-Origin Resource Sharing (CORS)


// Basic server configuration
// Start up an instance of the app
const app = express();
// Configure express to use body parser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use cors for cross origin allowance. Use cors middleware
app.use(cors());

//SERVER SET-UP
app.use(express.static('../client/views'));

const port = 3100;

app.listen(port, ()=>{
	console.log(`Server running on port: ${port}`)
});