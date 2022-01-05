// Webpack entry file

//import styles
import (/*webpackPreload: true*/'./styles/main.scss');

// import js scripts
// import { addEvents, submitTripInfoForm } from './js/app.js';
import { submitTripInfoForm } from './js/app.js';
// import { submitTripInfoForm } from './js/app.js';

// console.log(validateInputs);
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});

const generatePlan = document.getElementById('generatePlan');
generatePlan.addEventListener('click', submitTripInfoForm);

alert("Hi there!");

// addEvents();
// export { addEvents,
// 		 submitTripInfoForm };
export { submitTripInfoForm };
