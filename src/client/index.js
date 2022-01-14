// Webpack entry file

/*
* I M P O R T   R E Q U I R E D   M O D U L E S   &   F I L E S
*/
//import styles
import (/*webpackPreload: true*/'./styles/main.scss');
import (/*webpackPreload: true*/'./styles/slideShow.scss');

// import js scripts
// import { addEvents, submitTripInfoForm } from './js/app.js';
import { submitTripInfoForm } from './js/app.js';
// import { submitTripInfoForm } from './js/app.js';
// import defaultImg1 from './media/images/defaultImg1.jpg';
import templateImg1 from './media/images/templateImg1.jpg';
import templateImg2 from './media/images/templateImg2.jpg';
import templateImg3 from './media/images/templateImg3.jpg';

import {lAnimation} from './js/mojsAni.js';
import {eAnimation} from './js/mojsAni.js';
import {tAnimation} from './js/mojsAni.js';
import {apostAnimation} from './js/mojsAni.js';
import {sAnimation} from './js/mojsAni.js';
import {gAnimation} from './js/mojsAni.js';
import {oAnimation} from './js/mojsAni.js';
import {exclaimAnimation} from './js/mojsAni.js';
import {spaceAnimation} from './js/mojsAni.js';
import {showSlides} from './js/slideShow.js';
import {plusSlides} from './js/slideShow.js';
import {currentSlide} from './js/slideShow.js';


/*
* E V E N T    L I S T E N E R S
*/
// console.log(validateInputs);
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});

const destinationImage1 = document.getElementById("destinationImage1");
const destinationImage2 = document.getElementById("destinationImage2");
const destinationImage3 = document.getElementById("destinationImage3");
destinationImage1.src = templateImg1;
destinationImage2.src = templateImg2;
destinationImage3.src = templateImg3;


const generatePlan = document.getElementById('generatePlan');
generatePlan.addEventListener('click', submitTripInfoForm);

// const animationBtn = document.getElementById("animationBtn");
generatePlan.addEventListener('click', function(){
	lAnimation.play();
	eAnimation.play();
	tAnimation.play();
	apostAnimation.play();
	sAnimation.play();
	spaceAnimation.play();
	gAnimation.play();
	oAnimation.play();
	exclaimAnimation.play();
});

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
leftArrow.addEventListener('click', plusSlides(-1));
rightArrow.addEventListener('click', plusSlides(1));
const dot1 = document.getElementById('dot1' );
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
dot1.addEventListener('click', currentSlide(1));
dot2.addEventListener('click', currentSlide(2));
dot3.addEventListener('click', currentSlide(3));


/*
* V A R I A B L E S
*/
const slideIndex = 1;
showSlides(slideIndex);

/*
* F U N C T I O N S
*/
alert("Hi there!");

// addEvents();
// export { addEvents,
// 		 submitTripInfoForm };
/*
* E X P O R T   M O D U L E S
*/
export { submitTripInfoForm };
