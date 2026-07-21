const slides = document.querySelectorAll('.slideContainer img');

console.log(slides);

let slideIndex = 0;
let intervalId = null;

// initialSlide();
document.addEventListener('DOMContentLoaded', initialSlide);

function initialSlide() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {

    slides.forEach(mob => {
        mob.classList.remove('displaySlide')
    })

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.add('displaySlide');

}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function previousSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

