// use a script tag or an external JS file
document.addEventListener('DOMContentLoaded', event => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	// gsap code here!

	ScrollSmoother.create({
		smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
		effects: false, // looks for data-speed and data-lag attributes on elements
		smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	})

    gsap.set(['.fade-in', '.zoom-in-fade-in'],{
        force3D: true,
        transformPerspective: 1000,
        backfaceVisibility: 'hidden'
    })

	gsap.from('.fade-in', {
		y: 20,
		opacity: 0,
		duration: 0.8,
		stargger: 0.1,
		ease: 'power2.out'
	})

    gsap.from('.zoom-in-fade-in', {
        scale:0.8,
        opacity: 0,
        duration: 0.4,
        stagger:0.1,
        ease: 'power2.out'
    })
})


window.addEventListener('load', ()=>{
    ScrollTrigger.refresh();
})