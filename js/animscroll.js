const sr = ScrollReveal({
	duration: 1000
});

sr.reveal('.banner', {
	origin:'top',
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	delay: 300,
	reset: true
});

sr.reveal('.banner__vid', {
	origin:'bottom',
	easing: 'ease',
	delay: 600,
	reset: true
});




