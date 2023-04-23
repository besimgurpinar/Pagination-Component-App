const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const pageItems = document.querySelectorAll('.page-item');

let currentPage = 1;

function updatePagination() {
  pageItems.forEach((item) => {
    const pageLink = item.querySelector('.page-link');
    const pageNumber = parseInt(pageLink.textContent);
    if (pageNumber === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  if (currentPage === 1) {
    previousButton.classList.add('disabled');
  } else {
    previousButton.classList.remove('disabled');
  }

  if (currentPage === pageItems.length - 2) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < pageItems.length - 2) {
    currentPage++;
    updatePagination();
  }
});

updatePagination();
