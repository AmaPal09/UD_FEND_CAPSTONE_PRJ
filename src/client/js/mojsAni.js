//File to animate using mojs
import mojs from '@mojs/core'

const lNode = document.getElementById("animateL");

const lAnimation = new mojs.Html({
	el: lNode,
	scale: {0:1},
	duration: 1000,
  	repeat: 4,
  	isYoyo: true
}).play();

export {lAnimation};

