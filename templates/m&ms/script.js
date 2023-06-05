// const sliderWrapper = document.querySelector('.slider-wrapper');
// const sliderSlides = document.querySelectorAll('.slider-slide');

// const slideWidth = sliderSlides[0].offsetWidth;

const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderSlides = document.querySelectorAll('.slider-slide');
const sliderThumbnails = document.querySelectorAll('.slider-thumbnail');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let currentSlide = 0;

function goToSlide(index) {
  currentSlide = index;
  const translateX = -index * slideWidth;
  sliderWrapper.style.transform = `translateX(${translateX}px)`;
}

function activateThumbnail(index) {
  sliderThumbnails.forEach((thumbnail, i) => {
    if (i === index) {
      thumbnail.classList.add('active');
    } else {
      thumbnail.classList.remove('active');
    }
  });
}

function slideLeft() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
    activateThumbnail(currentSlide - 1);
  }
}

function slideRight() {
  if (currentSlide < sliderSlides.length - 1) {
    goToSlide(currentSlide + 1);
    activateThumbnail(currentSlide + 1);
  }
}

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

sliderThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    goToSlide(index);
    activateThumbnail(index);
  });
});

// Initialize the first slide and active thumbnail
goToSlide(0);
activateThumbnail(0);



// v01

// function goToSlide(index) {
//   const translateX = -index * slideWidth;
//   sliderWrapper.style.transform = `translateX(${translateX}px)`;
// }

// function activateThumbnail(index) {
//   const sliderThumbnails = document.querySelectorAll('.slider-thumbnail');
//   sliderThumbnails.forEach((thumbnail, i) => {
//     if (i === index) {
//       thumbnail.classList.add('active');
//     } else {
//       thumbnail.classList.remove('active');
//     }
//   });
// }

// const sliderThumbnails = document.querySelectorAll('.slider-thumbnail');
// sliderThumbnails.forEach((thumbnail, index) => {
//   thumbnail.addEventListener('click', () => {
//     goToSlide(index);
//     activateThumbnail(index);
//   });
// });

// // Initialize the first slide and active thumbnail
// goToSlide(0);
// activateThumbnail(0);
