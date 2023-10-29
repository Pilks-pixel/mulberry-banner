const slideImages = document.querySelectorAll(".img__primary");
const navButtons = document.querySelectorAll('.info__btn')
let activeSlideIndex

navButtons.forEach(btn => {
    btn.addEventListener("click", e => {
			console.log(e.currentTarget.className.includes('next'));

            activeSlideIndex = Math.floor(tl.progress() * slideImages.length)

            if (e.currentTarget.className.includes('next')) {
                tl.progress((activeSlideIndex + 1) / slideImages.length);
                console.log((activeSlideIndex + 1) / slideImages.length);
            } else {
                tl.progress((activeSlideIndex - 1) / slideImages.length);
                console.log((activeSlideIndex - 1) / slideImages.length);

            }
		});

})

console.log(slideImages)

// Carousel Fade in/out Animation
let tl = gsap.timeline({defaults: {duration: 1}});

tl.to(".img--alexa", { opacity: 1, ease: "power1.in",});
tl.to(".img--alexa", { opacity: 0, ease: "power1.out",}, "+=2.5");
tl.to(".img--lily", { opacity: 1, ease: "power1.in" }, "-=1");
tl.to(".img--lily", { opacity: 0, ease: "power1.out" }, "+=2.5");
tl.to(".img--micro", { opacity: 1, ease: "power1.in" }, "-=1");
tl.to(".img--micro", { opacity: 0, ease: "power1.out" }, "+=2.5");
tl.to(".img--scarf", { opacity: 1, ease: "power1.in" }, "-=1");
tl.to(".img--scarf", { opacity: 0, ease: "power1.out" }, "+=2.5");


