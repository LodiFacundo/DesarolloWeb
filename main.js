document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

 // ScrollReveal animations
    ScrollReveal().reveal('.cajas div', { delay: 200, duration: 1000, distance: '50px', origin: 'bottom', reset: true });
    ScrollReveal().reveal('.card-category', { interval: 200, duration: 800, origin: 'left', distance: '30px', reset: true });
