const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

console.log("slides", slides)
let activeSlide = 0;
setBgToBody();

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
})


leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})




function setBgToBody() {
    console.log('activeSlide', activeSlide);
    console.log(" slides[activeSlide]", slides[activeSlide]);
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}