let currentIndex = 0;
function moveSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
    function scrollSlider(value) {
        const slider = document.getElementById("movieSlider");
        slider.scrollLeft += value;
    }


