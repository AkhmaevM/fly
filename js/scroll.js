document.addEventListener('DOMContentLoaded', event => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	ScrollSmoother.create({
		smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
		effects: false, // looks for data-speed and data-lag attributes on elements
		smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	})

	/* Add bg header when start scroll */
	const header = document.querySelector('.header')
	ScrollTrigger.create({
		start: 0,
		end: 'max',
		onUpdate: self => {
			if (self.scroll() > 10) {
				header.classList.add('header--scrolled')
			} else {
				header.classList.remove('header--scrolled')
			}
		}
	})

	/* Якоря */
	document.querySelectorAll('.header__menu a').forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault()
			const targetId = link.getAttribute('href').replace('#', '')
			const target = document.getElementById(targetId)
			if (target) {
				const smoother = ScrollSmoother.get()
				smoother.scrollTo(target, true)
			}
		})
	})

	const fadeIn = '.fade-in'
	const rightFadeIn = '.right-fade-in'
	const zoomInFadeIn = '.zoom-in-fade-in'

	/* Global */

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

	gsap.fromTo(
		`${luxury} > .container`,
		{ scale: 0.9, opacity: 0, x: -100 },
		{
			scale: 1,
			opacity: 1,
			x: -10,
			ease: 'none',
			scrollTrigger: {
				trigger: luxury,
				start: 'top 80%',
				end: '+=80%',
				scrub: true
			}
		}
	)

	gsap.from(luxuryPlane, {
		scale: 0.9,
		opacity: 0,
		x: 150,
		duration: 1.5,
		ease: 'power3.ease'
	})

	// Самолёт luxury
	gsap.fromTo(
		luxuryPlane,
		{
			scale: 0.9,
			x: 150
		},
		{
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
		}
	)

	/* Loyalty */
	const loyalty = '.loyalty'
	const loyaltyPlane = '.loyalty__image'

	gsap.from(`${loyalty} .loyalty__top`, {
		scale: 0.9,
		opacity: 0,
		x: 100,
		duration: 1,
		ease: 'power2.ease'
	})

	gsap.fromTo(
		`${loyalty} .loyalty__top`,
		{ scale: 0.9, opacity: 0, x: 100 },
		{
			scale: 1,
			opacity: 1,
			x: 10,
			ease: 'none',
			scrollTrigger: {
				trigger: loyalty,
				start: 'top 80%',
				end: '+=80%',
				scrub: true
			}
		}
	)

	gsap.from(`${loyalty} .loyalty__bottom`, {
		scale: 0.9,
		opacity: 0,
		x: -100,
		duration: 1,
		ease: 'power2.ease'
	})

	gsap.fromTo(
		`${loyalty} .loyalty__bottom`,
		{ scale: 0.9, opacity: 0, x: -100 },
		{
			scale: 1,
			opacity: 1,
			x: -10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: `${loyalty} .loyalty__bottom`,
				start: 'top 82%',
				end: 'top 22%',
				scrub: true
			}
		}
	)

	// Самолёт loyalty

	gsap.from(loyaltyPlane, {
		scale: 0.9,
		opacity: 0,
		x: -100,
		duration: 1.5,
		ease: 'power3.ease'
	})

	gsap.fromTo(
		loyaltyPlane,
		{
			scale: 0.9,
			x: -100
		},
		{
			x: 200,
			scale: 1.2,
			ease: 'none',
			scrollTrigger: {
				trigger: loyaltyPlane,
				start: 'top 65%', // свой старт
				end: '+=120%',
				scrub: true,
				immediateRender: false
			}
		}
	)

	/* Costs */
	const costs = '.costs'
	const costsPlane = '.costs__image'

	const costsBottomLeft = '.costs__bottom-left'
	const costsBottomRight = '.costs__bottom-right'

	gsap.from(`${costs} ${costsBottomRight}`, {
		scale: 0.9,
		opacity: 0,
		x: 100,
		duration: 1,
		ease: 'power2.ease'
	})

	gsap.fromTo(
		`${costs} ${costsBottomRight}`,
		{ scale: 0.9, opacity: 0, x: 100 },
		{
			scale: 1,
			opacity: 1,
			x: 10,
			ease: 'none',
			scrollTrigger: {
				trigger: `${costs} ${costsBottomRight}`,
				start: 'top 82%',
				end: 'top 22%',
				scrub: true
			}
		}
	)

	gsap.from(`${costs} ${costsBottomLeft}`, {
		scale: 0.9,
		opacity: 0,
		x: -100,
		duration: 1,
		ease: 'power2.ease'
	})

	gsap.fromTo(
		`${costs} ${costsBottomLeft}`,
		{ scale: 0.9, opacity: 0, x: -100 },
		{
			scale: 1,
			opacity: 1,
			x: -10,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: `${costs} ${costsBottomLeft}`,
				start: 'top 82%',
				end: 'top 22%',
				scrub: true
			}
		}
	)

	gsap.from(costsPlane, {
		scale: 0.9,
		opacity: 0,
		x: -150,
		y: -50,
		duration: 1.5,
		ease: 'power3.ease'
	})

	gsap.fromTo(
		costsPlane,
		{
			scale: 0.9,
			x: -100,
			y: -50
		},
		{
			x: 150,
			y: 50,
			scale: 1.05,
			ease: 'none',
			scrollTrigger: {
				trigger: costsPlane,
				start: 'top 65%', // свой старт
				end: '+=175%',
				scrub: true,
				immediateRender: false
			}
		}
	)

	/* Apply section */
	const applyEmpty = '.apply__empty'
	const applyCard = '.apply__card'

	gsap.utils.toArray(`${applyEmpty}, ${applyCard}`).forEach(el => {
		gsap.fromTo(
			el,
			{ y: 16, scale: 0.85, opacity: 0 },
			{
				y: 0,
				scale: 1,
				opacity: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 85%',
					end: 'top 25%',
					scrub: true,
					immediateRender: false,
					invalidateOnRefresh: true
				}
			}
		)
	})

	/* Faq section */
	const faq = '.faq'
	const faqContainer = '.faq__container'

	gsap.fromTo(
		faqContainer,
		{ y: 16, scale: 0.85, opacity: 0 },
		{
			y: 0,
			scale: 1,
			opacity: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: faq,
				start: 'top 95%',
				end: '+=100%',
				scrub: true,
				immediateRender: false,
				invalidateOnRefresh: true
			}
		}
	)

	// Optimization for performance
	gsap.set(
		[
			fadeIn,
			rightFadeIn,
			zoomInFadeIn,
			welcome,
			welcome__plane,
			`${luxury} > .container`,
			luxuryPlane,
			`${loyalty} .loyalty__top`,
			`${loyalty} .loyalty__bottom`,
			loyaltyPlane,
			`${costs} ${costsBottomRight}`,
			`${costs} ${costsBottomLeft}`,
			costsPlane,
			applyEmpty,
			applyCard,
			faqContainer
		],
		{
			force3D: true,
			transformPerspective: 1000,
			backfaceVisibility: 'hidden'
		}
	)

	// Ensure that the ScrollTrigger is refreshed after the content is loaded
	window.addEventListener('load', () => {
		ScrollTrigger.refresh()
	})
})
