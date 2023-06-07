// Отримуємо необхідні елементи DOM
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-slide');
const thumbnails = document.querySelectorAll('.slider-thumbnail');
const prevArrow = document.querySelector('.arrow-left');
const nextArrow = document.querySelector('.arrow-right');

// Ініціалізуємо поточний слайд
let currentSlide = 0;

// Додаємо обробник події для лівої стрілки
prevArrow.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlider();
});

// Додаємо обробник події для правої стрілки
nextArrow.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  updateSlider();
});

// Додаємо обробник події для мініатюр
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentSlide = index;
    updateSlider();
  });
});

// Функція для оновлення слайдера
function updateSlider() {
  // Видаляємо клас "active" у всіх слайдів та мініатюр
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('active');
  });

  // Додаємо клас "active" до поточного слайда та мініатюри
  slides[currentSlide].classList.add('active');
  thumbnails[currentSlide].classList.add('active');
  
  // Зміщуємо слайдер за допомогою стилів CSS
  const slideWidth = slides[currentSlide].offsetWidth;
  const translateX = -slideWidth * currentSlide;
  sliderWrapper.style.transform = `translateX(${translateX}px)`;
}

// Ініціалізуємо слайдер
updateSlider();
