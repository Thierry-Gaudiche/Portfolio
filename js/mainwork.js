gsap.from("#title", {x: -500, opacity: 0, duration: 1, ease:Power2.easeOut});
gsap.from("#type", {y: 1000, opacity: 0, duration: 1, ease:Power2.easeOut});
gsap.from("#indic", {opacity: 0, y: 1000, duration: 1, ease:Power2.easeOut});

/*proj 1 2---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var mqlmax= window.matchMedia('(max-width: 600px)');
var mqlmin = window.matchMedia('(min-width: 600px)');

if(mqlmin.matches) {
	var tl = gsap.timeline({onUpdate:updatePercentage});
	const controller = new ScrollMagic.Controller();
	
	tl.to("#projet_1_2", {scale: 0.5, duration: 1, ease:Power1.easeOut});
	tl.to("#back", { css:{color: "black",}},"-=1");

	tl.to("#projet_1", {scale: 0.5, duration: 1, ease:Power1.easeOut},"-=1");
	tl.to("#projet_2", {scale: 0.5, duration: 1, ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_1", {scale: 0.5, duration: 1, opacity: 0, ease:Power1.easeOut},"-=1");
	tl.to("#projTxt_2", {scale: 0.5, duration: 1, opacity: 0, ease:Power1.easeOut},"-=1");
	
	tl.to("#projet_1_2", {duration: 0.3, ease:Power1.easeOut, css:{zIndex:1, opacity: 0}});

	tl.to("#projet_1", {duration:1, x: "-30%", ease:Power1.easeOut});
	tl.to("#projet_2", {duration:1, x: "30%", ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_1", {duration:1, x: "-30%", ease:Power1.easeOut},"-=1");
	tl.to("#projTxt_2", {duration:1, x: "30%", ease:Power1.easeOut},"-=1");
	
	tl.to("#projet_1", {duration:1, y: "-30%", ease:Power1.easeOut});
	tl.to("#projet_2", {duration:1, y: "30%", ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_1", {duration:1, y: "-30%", ease:Power1.easeOut},"-=1");
	tl.to("#projTxt_2", {duration:1, y: "30%", ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_1", {duration:1, x: "30%", opacity: 1, ease:Power1.easeOut});
	tl.to("#projTxt_2", {duration:1, x: "-30%", opacity: 1, ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_2", {duration:1});
	
	const scene = new ScrollMagic.Scene({
	  triggerElement: ".scrollProj_1_2",
	            triggerHook: "onLeave",
	            duration: "100%"
	})
	    .setPin(".scrollProj_1_2")
	    .setTween(tl)
		.addTo(controller);
	
	
	function updatePercentage() {
	  tl.progress();
	}
}

else {

	var tl2 = gsap.timeline({onUpdate:updatePercentage});
	const controller = new ScrollMagic.Controller();

	tl2.to("#projet_1_2", {duration: 0.3, ease:Power1.easeOut, css:{zIndex:1, opacity: 0}});

	tl2.to("#projet_1", {duration:1, y: "-100%", ease:Power1.easeOut});
	tl2.to("#projet_2", {duration:1, y: "50%", ease:Power1.easeOut},"-=1");
	
	
	const scene = new ScrollMagic.Scene({
	  triggerElement: ".scrollProj_1_2",
	            triggerHook: "onLeave",
	            duration: "100%"
	})
	    .setPin(".scrollProj_1_2")
	    .setTween(tl2)
		.addTo(controller);
	
	
	function updatePercentage() {
	  tl2.progress();
	}
}

/*proj 3 4---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
if(mqlmin.matches) {
var tl3 = gsap.timeline({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl3.to("#back", {css:{color: "white"}});
tl3.from("#img3", {duration: 1, x: "-5%", opacity:0, ease:Power1.easeOut},"-=1");
tl3.from("#img4", {duration:1, x: "5%", opacity:0, ease:Power1.easeOut},"-=1");


tl3.from("#projText_3", {duration:1, x: "-5%", ease:Power1.easeOut},"-=1");
tl3.from("#projText_4", {duration:1, x: "5%", ease:Power1.easeOut},"-=1");

tl3.from("#projText_3", {duration:1, opacity: 0, ease:Power1.easeOut});
tl3.from("#projText_4", {duration:1, opacity: 0, ease:Power1.easeOut},"-=1")


tl3.to("#projText_3", {duration:1, x: "50vw", ease:Power1.easeOut},"-=1");
tl3.to("#projText_4", {duration:1, x: "-50vw", ease:Power1.easeOut},"-=1");





const scene = new ScrollMagic.Scene({
  triggerElement: "#projets_3_4",
            triggerHook: "onLeave",
            duration: "100%"
})
    .setPin("#projets_3_4")
    .setTween(tl3)
	.addTo(controller);


function updatePercentage() {
  tl3.progress();
}
}

/*proj 5 6---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
if(mqlmin.matches) {
var tl4 = gsap.timeline({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl4.from("#img5", {duration: 1, x: "-5%", opacity:0, ease:Power1.easeOut});
tl4.from("#img6", {duration:1, x: "5%", opacity:0, ease:Power1.easeOut},"-=1");

tl4.from("#projText_5", {duration:1, x: "-5%", ease:Power1.easeOut},"-=1");
tl4.from("#projText_6", {duration:1, x: "5%", ease:Power1.easeOut},"-=1");

tl4.from("#projText_5", {duration:1, opacity: 0, ease:Power1.easeOut});
tl4.from("#projText_6", {duration:1, opacity: 0, ease:Power1.easeOut},"-=1")

tl4.to("#projText_5", {duration:1, x: "50vw", ease:Power1.easeOut},"-=1");
tl4.to("#projText_6", {duration:1, x: "-50vw", ease:Power1.easeOut},"-=1");



const scene = new ScrollMagic.Scene({
  triggerElement: "#projets_5_6",
            triggerHook: "onLeave",
            duration: "100%"
})
    .setPin("#projets_5_6")
    .setTween(tl4)
	.addTo(controller);


function updatePercentage() {
  tl4.progress();
}
}