// MAKING CLICKABLE SIDE NAV PANEL
const sideContainer = document.querySelector('.side-container');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  sideContainer.classList.toggle('open');
});
hamburger.addEventListener('blur', () => {
  sideContainer.classList.remove('open');
});

// MAKING AUTO CAROUSEL
const cards = document.querySelectorAll('.carousel-card');
let currentCarouselPosition = 0;
for (let i = 0; i < cards.length; i++) {
  cards[i].style.transform = `translateX(${i}00%)`;
}
function moveCarousel() {
  currentCarouselPosition++;
  if (currentCarouselPosition === cards.length){
    currentCarouselPosition = 0;
  }
  for (let i = 0; i < cards.length; i++){
    // const currentTranslateX = window.getComputedStyle(cards[i]).getPropertyValue("transform");
    // console.log(currentTranslateX);
    cards[i].style.transform = `translateX(${i - currentCarouselPosition}00%)`;
  }
}

setInterval(moveCarousel, 5000);

console.log(screen.width);
