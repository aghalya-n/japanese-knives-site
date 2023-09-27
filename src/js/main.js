/* Your JS here. */
console.log('Hello World!')

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const bubblesContainer = document.querySelector('.bubbles');

let slideIndex = 0;

// Create bubble indicators
slides.forEach((_, index) => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    if (index === 0) {
        bubble.classList.add('active');
    }
    bubble.addEventListener('click', () => {
        goToSlide(index);
    });
    bubblesContainer.appendChild(bubble);
});

function goToSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });

    document.querySelectorAll('.bubble').forEach((bubble, i) => {
        bubble.classList.toggle('active', i === index);
    });

    slideIndex = index;
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    goToSlide(slideIndex);
}

function showPrevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    goToSlide(slideIndex);
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);