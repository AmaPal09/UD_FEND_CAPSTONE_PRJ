//File to animate using mojs
import mojs from '@mojs/core'
let xstart = 40;
const lNode = document.getElementById("animateL");
const eNode = document.getElementById("animateE");
const tNode = document.getElementById("animateT");
const apostNode = document.getElementById("animateappost");
const sNode = document.getElementById("animateS");
const gNode = document.getElementById("animateG");
const oNode = document.getElementById("animateO");
const exclaimNode = document.getElementById("animateexclaim");
const spaceNode = document.getElementById("animateBr");

//Animate L
const lAnimation = new mojs.Html({
	el: lNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	// repeat: 1,
	  	easing: 'sin.inout',
	  	// isYoyo: true,
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 8000,
		speed: 5,
		// repeat: 1,
		easing: 'back.inout',
	},
  	// backwardEasing: 'sin.in',
  	// isYoyo: false
}).play();

//Animate E
const eAnimation = new mojs.Html({
	el: eNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	easing: 'sin.inout',
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 8000,
		speed: 5,
		easing: 'back.inout',
	},
}).play();

//Animate T
const tAnimation = new mojs.Html({
	el: tNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	easing: 'sin.inout',
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 8000,
		speed: 5,
		easing: 'back.inout',
	},
}).play();

//Animate apostrophe
const apostAnimation = new mojs.Html({
	el: apostNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	easing: 'sin.inout',
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 8000,
		speed: 5,
		easing: 'back.inout',
	},
}).play();

//Animate S
const sAnimation = new mojs.Html({
	el: sNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	easing: 'sin.inout',
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 8000,
		speed: 5,
		easing: 'back.inout',
	},
}).play();

//Animate G
const gAnimation = new mojs.Html({
	el: gNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	easing: 'sin.inout',
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 8000,
		speed: 5,
		easing: 'back.inout',
	},
}).play();

//Animate O
const oAnimation = new mojs.Html({
	el: oNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	easing: 'sin.inout',
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 8000,
		speed: 15,
		easing: 'back.inout',
		repeat: 4,
	},
}).play();

//Animate exclaimation
const exclaimAnimation = new mojs.Html({
	el: exclaimNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	easing: 'sin.inout',
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 4000,
		speed: 10,
		easing: 'back.inout',
		repeat: 2,
	},
}).play();

//Animate line Breake
const spaceAnimation = new mojs.Html({
	el: spaceNode,
	x: {
		30: 60,
		duration: 8000,
		speed: 5,
	  	easing: 'sin.inout',
	},
	y: {
		0: -20,
		duration: 8000,
		speed: 10,
		repeat: 1,
		easing: 'elastic.inout',
		backwardEasing: 'ease.out',
		isYoyo: true,
	},
	rotateY:  {
		0: 360,
		duration: 8000,
		speed: 15,
		easing: 'back.inout',
	},
}).play();

export {lAnimation};
export {eAnimation};
export {tAnimation};
export {apostAnimation};
export {sAnimation};
export {gAnimation};
export {oAnimation};
export {exclaimAnimation};
export {spaceAnimation};

