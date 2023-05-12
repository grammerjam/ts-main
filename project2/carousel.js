document.addEventListener('DOMContentLoaded', function() {
  const slideContainer = document.querySelector('.carousel-container');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  const slideWidth = slideContainer.clientWidth;
  const slideCount = slideContainer.children[0].childElementCount;
  const slidesPerPage = 3;
  let currentIndex = 0;

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
    } 
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });

  nextButton.addEventListener('click', function() {
    console.log(currentIndex)
    if (currentIndex <= Math.ceil(slideCount / slidesPerPage) - 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });
});


/* Open */
function openNav() {
  document.getElementById("nav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("nav").style.height = "0%";
}