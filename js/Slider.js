
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function nextSlide() {
        if (currentSlide === totalSlides - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateSlide();
    }

    function updateSlide() {
        const slideWidth = slides[0].clientWidth;
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    // Intervalo para cambiar de slide automáticamente
    setInterval(nextSlide, 5000); // Cambia cada 5 segundos (5000 milisegundos)

    // Event listeners para los botones de navegación
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const slideId = this.getAttribute('href');
            const slide = document.querySelector(slideId);
            const slideIndex = Array.from(slide.parentNode.children).indexOf(slide);
            currentSlide = slideIndex;
            updateSlide();
        });
    });
});

