var tl = gsap.timeline();

tl.from(".title", {x: -100, duration: 1, ease:Power2.easeOut},);
tl.from("#desc_about", {y: 100, opacity: 0, duration: 1, ease:Power2.easeOut},'-=1');
tl.from(".desc", {y: 100, opacity: 0, duration: 1, ease:Power2.easeOut},"-=0.5");

