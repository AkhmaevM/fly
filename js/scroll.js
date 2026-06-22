document.addEventListener('DOMContentLoaded', event => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	ScrollSmoother.create({
		smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
		effects: false, // looks for data-speed and data-lag attributes on elements
		smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	})

	const fadeIn = '.fade-in'
	const rightFadeIn = '.right-fade-in'
	const zoomInFadeIn = '.zoom-in-fade-in'

	/* Global */

	gsap.set([fadeIn, rightFadeIn, zoomInFadeIn], {
		force3D: true,
		transformPerspective: 1000,
		backfaceVisibility: 'hidden'
	})

	gsap.from(fadeIn, {
		y: -25,
		opacity: 0,
		duration: 1,
		stagger: 0.1,
		ease: 'power2.ease'
	})

	gsap.from(rightFadeIn, {
		x: 25,
		opacity: 0,
		duration: 1,
		stagger: 0.1,
		ease: 'power2.ease'
	})

	/* Welcome section */
	const welcome = '.welcome'
	const welcome__plane = '.welcome__plane'

	gsap.from(zoomInFadeIn, {
		scale: 0.8,
		opacity: 0,
		duration: 0.8,
		ease: 'power2.out',
		stagger: 0.1,
		immediateRender: false
	})

	gsap.from(welcome__plane, {
		x: -140,
		y: 50,
		duration: 1.5,
		ease: 'power3.ease',
		immediateRender: false
	})

	const welcomeTl = gsap.timeline({
		scrollTrigger: {
			trigger: welcome,
			start: 'top top',
			end: '+=120%',
			scrub: true
		}
	})

	welcomeTl
		.to(
			zoomInFadeIn,
			{
				scale: 0.8,
				opacity: 0,
				ease: 'none'
			},
			0
		)
		.to(
			welcome__plane,
			{
				x: 140,
				y: -50
			},
			0
		)

	/* Mission section */
	const mission = '.mission'

	gsap.utils.toArray(`${mission} > div`).forEach((item, index) => {
		gsap.fromTo(
			item,
			{ y: 25, scale: 0.7, opacity: 0 },
			{
				y: 0,
				scale: 1,
				opacity: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: item,
					start: 'top 95%',
					end: 'top 45%',
					scrub: true
				}
			}
		)
	})

	/* Luxury */
	const luxury = '#luxury'
	const luxuryPlane = '.luxury-flights__image'

	gsap.from(`${luxury} > .container`, {
		scale: 0.9,
		opacity: 0,
		x: -100,
		duration: 1,
		ease: 'power2.ease'
	})

	gsap.from(luxuryPlane, {
		scale: 0.9,
		opacity: 0,
		x: 150,
		duration: 1.5,
		ease: 'power3.ease'
	})

	gsap.fromTo(
		`${luxury} > .container`,
		{ scale: 0.9, opacity: 0, x: -100 },
		{
			scale: 1,
			opacity: 1,
			x: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: luxury,
				start: 'top 80%',
				end: '+=80%',
				scrub: true
			}
		}
	)

	// Самолёт luxury
	gsap.to(luxuryPlane, {
		x: -300,
		scale: 1.2,
		ease: 'none',
		scrollTrigger: {
			trigger: luxuryPlane,
			start: 'top 65%', // свой старт
			end: '+=120%',
			scrub: true,
			immediateRender: false
		}
	})

	// Ensure that the ScrollTrigger is refreshed after the content is loaded
	window.addEventListener('load', () => {
		ScrollTrigger.refresh()
	})
})
