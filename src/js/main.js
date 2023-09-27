/* Your JS here. */
console.log('Hello World!')

 // smooth scroll + animation for scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // rem '#' character
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.getElementById("navbar").offsetHeight; // get height of navbar

        if (targetSection) {
            const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;
            const duration = 600;
            const startY = window.pageYOffset;
            const diff = targetOffset - startY - navbarHeight;
            let start = null;

            // animate scroll
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOut(progress, startY, diff, duration));
                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            }

            function easeInOut(t, b, c, d) {
                t /= d / 2;
                if (t < 1) {
                    return c / 2 * t * t + b;
                }
                t--;
                return (-c / 2 * (t * (t-2) - 1) + b);
            }

            window.scrollTo({
                top: targetOffset - navbarHeight,
                // top: targetOffset,
                behavior: 'smooth',
                
            });
            requestAnimationFrame(step);
        }
    });
});


 // shrink navbar on scroll
window.onscroll = function() { scrollFunction() };
function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navbar.style.padding = "1.5% .5%";
        navbar.style.fontSize = ".8em";
    } else {
        navbar.style.padding = "2% .5%";
        navbar.style.fontSize = "1em";
    }
}


 // detect section and highlight corresponding link in navbar
// update active link based on section visibility
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-sects a');

    sections.forEach((section, index) => {
        const sectionId = section.getAttribute('id');
        const options = {
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // rem active class from links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // add active class to corresponding link
                    document.querySelector(`.nav-sects a[href="#${sectionId}"]`).classList.add('active');
                }
            });
        }, options);

        observer.observe(section);
    });
}

window.addEventListener('load', setActiveLink);
window.addEventListener('scroll', setActiveLink);


// carousel

let slideIndex = 0;
showSlides(slideIndex);

// next/prev controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    let i = 0;
    let slides = document.getElementsByClassName("carousel-item");

    if (n >= slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
                  
    slides[slideIndex].style.display = "block";
}

// modal images
document.addEventListener("DOMContentLoaded", function () {
    // open specific modal
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    // close specific modal
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // click event listeners -- images to open its respective modal
    document.getElementById("img1").addEventListener("click", function () {
        openModal("modal1");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close1").addEventListener("click", function () {
        closeModal("modal1");
    });

    // click event listeners -- images to open its respective modal
    document.getElementById("img2").addEventListener("click", function () {
        openModal("modal2");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close2").addEventListener("click", function () {
        closeModal("modal2");
    });

    // click event listeners -- images to open its respective modal
    document.getElementById("img3").addEventListener("click", function () {
        openModal("modal3");
    });

    // click event listeners -- close buttons to close their respective modals
    document.getElementById("close3").addEventListener("click", function () {
        closeModal("modal3");
    });
});