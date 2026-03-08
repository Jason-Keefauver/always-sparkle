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


const bubble = document.getElementById("floatingBubble");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    bubble.classList.add("show");
  } else {
    bubble.classList.remove("show");
  }
});