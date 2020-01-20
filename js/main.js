
gsap.to("#look", {delay: 1, duration:0.5, x: -10, ease:Power1.easeOut});

gsap.to("#this", {delay: 1, duration:0.1, x: 10, opacity:0, height: 10, color: "#FF0000", fontSize:0, ease:Power1.easeOut});
gsap.to("#parentthis", {delay: 1, duration:0.5, x: 10, height: 10, backgroundColor: "#FF0000", ease:Power1.easeOut});

gsap.to("#or", {delay: 1, duration:0.1, opacity:0, x: -10, color: "#FF0000", ease:Power1.easeOut});
gsap.to("#parentor", {delay: 1, duration:0.5, x: 10, height: 10, backgroundColor: "#FF0000", ease:Power1.easeOut});

gsap.to("#that", {delay: 1, duration:0.5, x: 10, ease:Power1.easeOut});

function onStart(){
	console.log('started')
}
function onUpdate(){
	console.log('Update')
}
function onComplete(){
	console.log('Complete')
}

