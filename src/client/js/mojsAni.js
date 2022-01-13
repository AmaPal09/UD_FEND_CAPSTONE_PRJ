//File to animate using mojs
import mojs from '@mojs/core'
let xstart = 40;
const lNode = document.getElementById("animateL");
const eNode = document.getElementById("animateE");
const tNode = document.getElementById("animateT");

const lAnimation = new mojs.Html({
	el: lNode,
	x: {
		30: 60
	},
	y: {
		10: 20,
		// duration: 8000,
		// speed: 2,
		// repeat: 1,
	},
	rotateY:  {
		0: 360,
	},
	duration: 8000,
	speed: 5,
  	repeat: 1,
  	easing: 'sin.out',
  	backwardEasing: 'sin.in',
  	isYoyo: true
}).play();

const eAnimation = new mojs.Html({
	el: eNode,
	x: {
		30: 60
	},
	y: {10: 20},
	rotateY:  {
		0: 360
	},
	duration: 8000,
	delay: 1000,
	speed: 5,
  	repeat: 1,
  	easing: 'sin.out',
  	backwardEasing: 'sin.in',
  	isYoyo: true
}).play();

const tAnimation = new mojs.Html({
	el: tNode,
	x: {
		30: 60
	},
	y: {10:20},
	rotateY:  {
		0: 360
	},
	duration: 8000,
	delay: 2000,
	speed: 5,
  	repeat: 1,
  	easing: 'sin.out',
  	backwardEasing: 'sin.in',
  	isYoyo: true
}).play();

export {lAnimation};
export {eAnimation};
export {tAnimation};

