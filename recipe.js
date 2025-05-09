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
    cards[i].style.transform = `translateX(${i - currentCarouselPosition}00%)`;
  }
}

const movingCarousel = setInterval(moveCarousel, 5000);

// MAKING RECIPE CARD FLIPPING FEATURE
const descButtons = document.querySelectorAll('.turn-recipe-card');
const reflips = document.querySelectorAll('.recipe-card-back button');
descButtons.forEach((desc) => {
  desc.addEventListener('click', () => {
    const card = desc.parentElement.parentElement.parentElement.parentElement;
    card.style.transform = "rotateY(.5turn)";
  });
});
reflips.forEach((reflip) => {
  reflip.addEventListener('click', () => {
    const card = reflip.parentElement.parentElement;
    card.style.transform = "rotateY(0)";
  });
});


