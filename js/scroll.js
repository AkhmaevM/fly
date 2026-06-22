// use a script tag or an external JS file
document.addEventListener('DOMContentLoaded', event => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	// gsap code here!

	ScrollSmoother.create({
		smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
		effects: false, // looks for data-speed and data-lag attributes on elements
		smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	})

	const fadeIn = '.fade-in'
	const zoomInFadeIn = '.zoom-in-fade-in'
	const welcome = '.welcome'
	const rightFadeIn = '.rightFadeIn'

	gsap.set([fadeIn, rightFadeIn, zoomInFadeIn], {
		force3D: true,
		transformPerspective: 1000,
		backfaceVisibility: 'hidden'
	})

	gsap.from(fadeIn, {
		y: - 20,
		opacity: 0,
		duration: 0.8,
		stargger: 0.1,
		ease: 'power2.easy'
	})

	gsap.from(rightFadeInfadeIn, {
		x: 20,
		opacity: 0,
		duration: 0.8,
		stargger: 0.1,
		ease: 'power2.ease'
	})

	const welcomeTl = gsap.timeline({
		ScrollTrigger: {
			trigger: welcome,
			start: 'top top',
			scrub: true
		}
	})

	gsap.from(zoomInFadeIn, {
		scale: 0.8,
		opacity: 0,
		duration: 0.8,
		ease: 'power2.out',
		stagger: 0.1
	})

	welcomeTl.to(zoomInFadeIn, {
		scale: 0.8,
		opacity: 0,
		ease: 'none'
	})
})

window.addEventListener('load', () => {
	ScrollTrigger.refresh()
})
