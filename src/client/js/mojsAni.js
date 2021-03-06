//mojsAni.js
//File to animate using mojs

/*
* I M P O R T   R E Q U I R E D   M O D U L E S
*/
import mojs from '@mojs/core'


/*
* V A R I A L B E S
*/
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

/*
* M O J S   O B J E C T S
*/
//Animate L
const lAnimation = new mojs.Html({
	el: lNode,
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
		speed: 5,
		easing: 'back.inout',
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
		speed: 5,
		easing: 'back.inout',
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
		speed: 5,
		easing: 'back.inout',
	},
}).play();


/*
* E X P O R T   M O D U L E S
*/
export {lAnimation};
export {eAnimation};
export {tAnimation};
export {apostAnimation};
export {sAnimation};
export {gAnimation};
export {oAnimation};
export {exclaimAnimation};
export {spaceAnimation};