// Webpack entry file

//import styles
import (/*webpackPreload: true*/'./styles/main.scss');

// import js scripts
// import { addEvents, submitTripInfoForm } from './js/app.js';
import { submitTripInfoForm } from './js/app.js';
// import { submitTripInfoForm } from './js/app.js';
// import defaultImg1 from './media/images/defaultImg1.jpg';
import templateImg1 from './media/images/templateImg1.jpg';


// console.log(validateInputs);
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});

const destinationImage = document.getElementById("destinationImage");
destinationImage.src = templateImg1;

const generatePlan = document.getElementById('generatePlan');
generatePlan.addEventListener('click', submitTripInfoForm);

alert("Hi there!");

// addEvents();
// export { addEvents,
// 		 submitTripInfoForm };
export { submitTripInfoForm };
