// Responsive nav menu script
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
// -----------

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.slider');
  var slidesContainer = document.querySelector('.slides');
  var slides = Array.from(document.querySelectorAll('.slide'));
  var slideLayoutsContainer = document.querySelector('.slide-layouts');
  var slideLayouts = [];

  var currentSlide = 0;
  var slideWidth = slides[0].offsetWidth;

  function createSlideLayouts() {
    slides.forEach(function (_, index) {
      var slideLayout = document.createElement('div');
      slideLayout.classList.add('slide-layout');
      slideLayout.addEventListener('click', function () {
        goToSlide(index);
      });
      slideLayoutsContainer.appendChild(slideLayout);
      slideLayouts.push(slideLayout);
    });
  }

  function goToSlide(index) {
    if (index === currentSlide) {
      return;
    }

    slides[currentSlide].classList.remove('active');
    slideLayouts[currentSlide].classList.remove('active');

    slides[index].classList.add('active');
    slideLayouts[index].classList.add('active');

    var direction = index > currentSlide ? 1 : -1;
    var distance = Math.abs(index - currentSlide) * slideWidth * direction;
    var startPosition = -currentSlide * slideWidth;
    var endPosition = startPosition + distance;

    animateSlide(startPosition, endPosition, distance);
    currentSlide = index;
  }

  function animateSlide(start, end, distance) {
    var duration = 300; // Animation duration in milliseconds
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var ease = easeOutCubic(progress, start, distance, duration);
      slidesContainer.style.transform = 'translateX(' + ease + 'px)';

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  function easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }

  function slideNext() {
    var nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  }

  function slidePrev() {
    var prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevSlide);
  }

  createSlideLayouts();

  var arrowLeft = document.querySelector('.slider-arrow-left');
  var arrowRight = document.querySelector('.slider-arrow-right');
  arrowLeft.addEventListener('click', slidePrev);
  arrowRight.addEventListener('click', slideNext);

  goToSlide(0);
});
