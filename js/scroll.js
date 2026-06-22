// use a script tag or an external JS file
document.addEventListener('DOMContentLoaded', event => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	// gsap code here!

	ScrollSmoother.create({
		smooth: 0.8, // how long (in seconds) it takes to "catch up" to the native scroll position
		effects: true, // looks for data-speed and data-lag attributes on elements
		smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	})

	gsap.from('.fade-in', {
		y: 20,
		opacity: 0,
		duration: 0.6,
		stargger: 0.1,
		ease: 'power2.out'
	})
})
