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

searchBtn.addEventListener('click', () => {
  if (filmNameInput.value.trim() !== "") {
    alert("Searching for: " + filmNameInput.value);
    // You can replace alert with your search logic
  }
});
