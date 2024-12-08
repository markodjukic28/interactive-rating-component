const btnSubmit = document.querySelector('.btn-submit');
const ratingButtons = document.querySelectorAll('.rating .num-rate');
const container = document.querySelector('.container');
const containerSubmit = document.querySelector('.container-submit');
const submitSelected = document.querySelector('.submit-selected');

let selectedRating = null;

ratingButtons.forEach(button => {
  button.classList.remove('active-btn', 'selected-btn');
});

btnSubmit.disabled = true;

ratingButtons.forEach(button => {
  button.addEventListener('click', function () {
    ratingButtons.forEach(b => {
      b.classList.remove('active-btn', 'selected-btn');
    });

    this.classList.add('active-btn', 'selected-btn');

    selectedRating = this.textContent;

    btnSubmit.disabled = false;
  });
});

btnSubmit.addEventListener('click', function () {
  if (selectedRating) {
    submitSelected.textContent = `You selected ${selectedRating} out of 5`;
  }

  container.style.display = 'none';
  containerSubmit.style.display = 'block';
});
