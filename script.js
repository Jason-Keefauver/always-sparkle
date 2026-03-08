// FADE-IN ANIMATIONS
const faders = document.querySelectorAll('.fade-in, .services-grid, .review');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// DYNAMIC COPYRIGHT YEAR
document.getElementById('year').textContent = new Date().getFullYear();

// HAMBURGER TOGGLE
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
});