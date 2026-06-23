// Diaporama des témoignages — change toutes les 3 secondes
(function () {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.testimonial'));
  const dots = Array.from(carousel.querySelectorAll('.carousel__dot'));
  if (slides.length === 0) return;

  let current = 0;
  let timer = null;
  const DELAY = 3000;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  }

  function next() {
    show(current + 1);
  }

  function start() {
    stop();
    timer = setInterval(next, DELAY);
  }

  function stop() {
    if (timer) clearInterval(timer);
  }

  // Navigation manuelle via les puces (relance le minuteur)
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      show(Number(dot.dataset.index));
      start();
    });
  });

  // Pause au survol
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);

  show(0);
  start();
})();
