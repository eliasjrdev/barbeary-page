var slideIndex = 0;
var slideWidth = 0;
var slidesContainer = document.querySelector('.slides');

showSlide();

function changeSlide(n) {
  slideIndex += n;
  slidesContainer.style.transform = `translateX(${slideIndex * -slideWidth}px)`;

  if (slideIndex >= slidesContainer.children.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slidesContainer.children.length - 1;
  }
}

function showSlide() {
  var slides = document.querySelectorAll('.slides img');
  slideWidth = slides[0].offsetWidth;
}


