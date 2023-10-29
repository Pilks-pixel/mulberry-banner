const slideImages = document.querySelectorAll(".img__primary");
const navButtons = document.querySelectorAll(".info__btn");
let nextSlide;

const getActiveSlide = () => {
    return  Math.floor(tl.progress() * slideImages.length);
}

// button functionality
navButtons.forEach(btn => {
	btn.addEventListener("click", e => {
		
		if (e.currentTarget.className.includes("next")) {
			nextSlide = getActiveSlide() + 1;
		} else {
			nextSlide = getActiveSlide() - 1;
		}

		if (nextSlide < 0) nextSlide = slideImages.length - 1;
		if (nextSlide > slideImages.length - 1) nextSlide = 0;

		tl.progress(nextSlide / slideImages.length);
	});
});

// Carousel Fade in/out Animation
let tl = gsap.timeline({ repeat: -1 }, { defaults: { duration: 0.5 , ease: "power1.inOut"} });
tl.to(".img--alexa", { opacity: 0 }, "+=1.5");
tl.to(".img--lily", { opacity: 1 }, "-=0.5");
tl.to(".img--lily", { opacity: 0 }, "+=1.5");
tl.to(".img--micro", { opacity: 1 }, "-=0.5");
tl.to(".img--micro", { opacity: 0 }, "+=1.5");
tl.to(".img--scarf", { opacity: 1 }, "-=0.5");
tl.to(".img--scarf", { opacity: 0 }, "+=1.5");
tl.to(".img--alexa", { opacity: 1 }, "-=0.5");
