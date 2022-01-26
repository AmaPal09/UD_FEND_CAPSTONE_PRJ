# Weather Journal App Project

## Table of contents
* [Description](#description)
* [Project Requirements](#project-requirements)
* [Demo](#demo)
* [Usage](#usage)
* [Testing](#testing)
* [Extra Enhancements (Optional)](#Extra-Enhancements)
* [References](#Reference-material)


## Description
### Languages used
- JS
- HTML
- SCSS
- CSS
### Tools used
- Webpack 5
- Jest
- MoJS


## Project Requirements
### Required Enhancements
Required features as a part of the project Rubic
- [x] Architecture: Files split in structured directories that come together to render clear homepage.
- [x] Webpack config should contain atleast 3 scripts
- [x] Atleast one test
- [ ] Project must have service workers installed
- [x] Features must run across moder desktop, tablet and phone browser
- [x] Interactive elements with hover state
- [x] Properly indented HTML structure with classes and ID's
- [x] New visual design (Different from previous projects)
- [x] Atelast one event listner present
- [x] README file should be included
- [x] Comments present where explanation is necessary
- [x] Code is formatted with consistent easy to read formatting as per Udacity Style guides



## Demo
Please see Usage Section


## Usage
1. Download the code from GitHub
2. Go to the project folder on your machine.
3. Run npm install (to install all packages in your project folder)
4. Create .env file at the root of the project.
5. Go to [GeoNames](http://www.geonames.org/export/web-services.html "GeoNames") and create your account.
6. Store your user name .env file
	```
		GEONAMES_USER=**YOUR_USER_NAME**
	```
7. Go to [WeatherBit](https://www.weatherbit.io/account/create "WeatherBit") and create your account.
8. Store your API KEY .env file
	```
		WEATHERBIT_KEY=**YOUR_API_KEY**
	```
9. Go to [Pixabay](https://pixabay.com/api/docs/ "Pixabay") and create your account.
10. Store your API KEY .env file
	```
		PIXABAY_KEY=**YOUR_API_KEY**
	```
11. For dev version
	- Build dev files and start dev server
		```
			npm run build-dev
		```
	- On a different terminal window, go to the project folder and execute
		```
			npm run start
		```
	- On your preferred browser open http://localhost:8080/
12. For prod version
	```
		npm run build-prod
	```
13. To start the server
	```
		npm run start
	```
14. To see the client side
	Run the command on step 9, the open your preferred browser
	and go to http://localhost:3100/


## Testing
1. To test the project
	```
		npm run test
	```


## Extra Enhancements (Optional)
- [ ] Add end date and display trip length.
- [x] Pull image for country from Pixabay API when entered location brings up no results.
- [ ] Allow user to add multiple destinations on the same trip.
	- [ ] Pull in weather for additional locations.
- [ ] Allow the user to add hotel and/or flight data.
	- [ ] Multiple places to stay? Multiple flights?
- [x] Integrate the REST Countries API to pull in data for the country being visited.
- [ ] Allow the user to remove the trip.
- [ ] Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
- [ ] Instead of just pulling a single day forecast, pull the forecast for multiple days.
- [x] Incorporate icons into forecast.
- [ ] Allow user to Print their trip and/or export to PDF.
- [ ] Allow the user to add a todo list and/or packing list for their trip.
- [ ] Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
	- [ ] Automatically sort additional trips by countdown.
	- [ ] Move expired trips to bottom/have their style change so it’s clear it’s expired.


## References
1) [Getting current date as minimun date](https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today) [and](https://jsbin.com/bujogejonu/edit?html,css,js,output).

2) [Getting current date](https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?rq=1).

3) [Convert String to Date and in current time zone](https://livecodestream.dev/post/date-manipulation-in-javascript-a-complete-guide/).

4) [Adding invent listeners to index.js](https://www.valentinog.com/blog/webpack/)
section - Code splitting with dynamic imports.

5) [Getting current date without timezone](https://stackoverflow.com/questions/65362869/get-date-object-with-utc-instead-of-local-time-zone-in-vanilla-javascript).

6) [for loading images to webpack](https://medium.com/a-beginners-guide-for-webpack-2/file-loader-for-large-size-images-97b90249aef).

7) [Mo.js animation of HTML elements](https://mojs.github.io/api/modules/html/#full-api-reference), [MoJs tutorials](https://mojs.github.io/tutorials/shape-swirl/#animation-use-cases) and [Mo.js example of html element animation](https://code.tutsplus.com/tutorials/getting-started-with-mojs-animation-library-html-module--cms-30388).