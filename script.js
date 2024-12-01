document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const sliderWrapper = document.getElementById('sliderWrapper');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    showSlide(currentSlide); // Initialize slider
});
