// Webpack entry file

//import styles
import './styles/main.scss'

// import js scripts
import { addEvents, submitTripInfoForm } from './js/app.js';
// import { submitTripInfoForm } from './js/app.js';

alert("Hi there!");

// console.log(validateInputs);
addEvents();
export { addEvents,
		 submitTripInfoForm };
