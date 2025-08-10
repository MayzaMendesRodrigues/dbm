
const modal = document.getElementById("bike-modal");
const closeButton = document.querySelector(".close-button");
const carouselSlides = document.querySelector(".carousel-slides");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-slides img');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  carouselSlides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = "none";
  }
});

function openModal(productData) {
  const { product, salePrice, images } = productData;

  carouselSlides.innerHTML = '';
  const hasMultipleImages = images && images.length > 1;

  if (images && images.length > 0) {
    images.forEach(img => {
      const imgElement = document.createElement('img');
      imgElement.src = img.url;
      carouselSlides.appendChild(imgElement);
    });
  } else {
    const imgElement = document.createElement('img');
    imgElement.src = 'assets/dbmblack.svg';
    carouselSlides.appendChild(imgElement);
  }

  prevButton.style.display = hasMultipleImages ? 'block' : 'none';
  nextButton.style.display = hasMultipleImages ? 'block' : 'none';

  slideIndex = 0;
  showSlide(slideIndex);

  const modalTitle = modal.querySelector('.modal-bike-info h3');
  const modalYear = modal.querySelector('.spec-year');
  const modalKm = modal.querySelector('.spec-km');
  const modalCc = modal.querySelector('.spec-cc');
  const modalPrice = modal.querySelector('.modal-bike-price');
  const whatsappButton = modal.querySelector('.btn-whatsapp-modal');

  modalTitle.textContent = `${product.brand} ${product.model}`;
  modalYear.textContent = product.year;
  modalKm.textContent = `${product.mileage} km`;
  modalCc.textContent = `${product.cylinder}cc`;
  modalPrice.innerHTML = `${new Intl.NumberFormat('es-AR').format(salePrice)} <span>ARS</span>`;
  whatsappButton.href = `https://wa.me/5491173608326?text=Hola,%20estoy%20interesado%20en%20la%20moto%20${product.brand}%20${product.model}`;

  modal.style.display = "block";
}
