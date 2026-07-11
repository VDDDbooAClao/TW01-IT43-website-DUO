const filmNameInput = document.getElementById('filmName');
const searchBtn = document.getElementById('searchBtn');

filmNameInput.addEventListener('input', () => {
  if (filmNameInput.value.trim() !== "") {
    searchBtn.disabled = false;
    searchBtn.classList.add('enabled');
  } else {
    searchBtn.disabled = true;
    searchBtn.classList.remove('enabled');
  }
});

const track = document.querySelector('.carousel-track');
const pages = document.querySelectorAll('.grid-page');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function scrollToPage(index) {
  const page = pages[index];
  if (page) {
    track.scrollTo({
      left: page.offsetLeft,
      behavior: 'smooth'
    });
  }
}

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  scrollToPage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, pages.length - 1);
  scrollToPage(currentIndex);
});


