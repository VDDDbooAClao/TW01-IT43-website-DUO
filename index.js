const carousel = document.getElementById('my-carousel');
const prevBtn = document.querySelector('.carousel-btn-prev');
const nextBtn = document.querySelector('.carousel-btn-next');

const cardWidth = 370;
const gap = 100; 
const cardsPerPage = 4;
const scrollAmount = (cardWidth + gap) * cardsPerPage;

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});


const purchaseBtn = document.getElementById('purchaseBtn');
const trailerBtn = document.getElementById('trailerBtn');
const modal = document.getElementById('purchaseModal');
const closeBtn = modal.querySelector('.close');

// Show modal when Purchase is clicked
purchaseBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Redirect to YouTube when Trailer is clicked
trailerBtn.addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=-tnxzJ0SSOw', '_blank');
});
