const bikesGrid = document.querySelector(".bikes-grid");
const bikeCardTemplate = document.querySelector("#bike-card-template");

let allProducts = [];
let displayedProducts = [];
const productsPerLoad = 12;
let loadOffset = 0;

// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.padding = "10px 0";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.padding = "15px 0";
    header.style.boxShadow = "none";
  }
});

function appendBikes(bikes) {
  try {
    if (bikes.length === 0 && loadOffset === 0) {
      bikesGrid.innerHTML = '<p>No se encontraron motos con ese criterio de búsqueda.</p>';
      return;
    }

    bikes.forEach(productData => {
      const bikeCard = bikeCardTemplate.content.cloneNode(true);
      const { product, salePrice, images } = productData;

      bikeCard.querySelector(".bike-badge").textContent = product.type || 'Destacada';

      let imageUrl = 'assets/dbmblack.svg';
      if (images && images.length > 0) {
        const firstImage = images.find(img => img.primary) || images[0];
        imageUrl = firstImage.url;
      }

      bikeCard.querySelector(".bike-image img").src = imageUrl;
      bikeCard.querySelector(".bike-image img").alt = `${product.brand} ${product.model}`;
      bikeCard.querySelector("h3").textContent = `${product.brand} ${product.model}`;
      bikeCard.querySelector(".spec-year").textContent = product.year;
      bikeCard.querySelector(".spec-km").textContent = `${product.mileage} km`;
      bikeCard.querySelector(".spec-cc").textContent = `${product.cylinder}cc`;
      bikeCard.querySelector(".bike-price").innerHTML = `${new Intl.NumberFormat('es-AR').format(salePrice)} <span>ARS</span>`;

      const cardElement = bikeCard.querySelector('.bike-card');
      cardElement.style.cursor = 'pointer';
      cardElement.addEventListener('click', () => openModal(productData));

      bikesGrid.appendChild(bikeCard);
    });
  } catch (error) {
    console.error("Error fetching bikes:", error);
    bikesGrid.innerHTML = '<p>Error al cargar las motos. Por favor, intente más tarde.</p>';
  }
}

function loadMoreBikes() {
  const productsToLoad = displayedProducts.slice(loadOffset, loadOffset + productsPerLoad);
  appendBikes(productsToLoad);
  loadOffset += productsPerLoad;
}


function resetAndLoadBikes(bikes) {
  bikesGrid.innerHTML = '';
  loadOffset = 0;
  displayedProducts = bikes;
  loadMoreBikes();
}

function filterBikes(searchText) {
  const filteredProducts = allProducts.filter(productData => {
    const { product } = productData;
    const brand = product.brand.toLowerCase();
    const model = product.model.toLowerCase();
    const search = searchText.toLowerCase();
    return brand.includes(search) || model.includes(search);
  });
  resetAndLoadBikes(filteredProducts);
}

const pageContentCacheKey = 'page-content-key';
const pageContentCacheDuration = 12 * 60 * 60 * 1000;

function fetchPageContent() {
  return new Promise(function(resolve) {
    const cachedData = localStorage.getItem(pageContentCacheKey);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      const isCacheValid = (new Date().getTime() - timestamp) < pageContentCacheDuration;
      if (isCacheValid) {
        resolve(data);
        return;
      }
    }

    const url = "https://api.dbmmotos.com.ar/dbm_content.json";

    fetch(url, { mode: 'cors' })
      .then(response => {
        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          resolve(null);
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          localStorage.setItem(
            pageContentCacheKey,
            JSON.stringify({ timestamp: new Date().getTime(), data })
          );
          resolve(data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        resolve(null);
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchPageContent().then(data => {
    allProducts = data.products;
    resetAndLoadBikes(allProducts);

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
      filterBikes(e.target.value);
    });
  });
});

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    if (loadOffset < displayedProducts.length) {
      loadMoreBikes();
    }
  }
});

const socialLinksContainer = document.querySelector('.social-links');
const socialLinkTemplate = document.getElementById('social-link-template');
const footerLinksContainer = document.querySelector('.footer-links');
const footerLinkTemplate = document.getElementById('footer-link-template');
const contactInfoContainer = document.querySelector('.contact-info');
const contactInfoTemplate = document.getElementById('contact-info-template');

const socialLinks = [
  { href: 'https://www.instagram.com/dbmmotos/', iconClass: 'fab fa-instagram' },
  { href: 'https://www.facebook.com/dbmmotos', iconClass: 'fab fa-facebook-f' },
];

const footerLinks = [
  'Lunes a Viernes: 9:00 - 18:00',
  'Sábados: 9:00 - 13:00',
  'Domingos y feriados: Cerrado'
];

const contactInfo = [
  { iconClass: 'fas fa-map-marker-alt', text: 'Av. Rivadavia 9223, CABA' },
  { iconClass: 'fas fa-phone', text: '+54 9 11 7360-8326' },
  { iconClass: 'fas fa-envelope', text: 'dbmmotos@gmail.com' }
];

function populateTemplate(container, template, items, callback) {
  items.forEach(item => {
    const clone = template.content.cloneNode(true);
    callback(clone, item);
    container.appendChild(clone);
  });
}

populateTemplate(socialLinksContainer, socialLinkTemplate, socialLinks, (clone, item) => {
  const link = clone.querySelector('a');
  link.href = item.href;
  link.target = '_blank';
  const icon = clone.querySelector('i');
  icon.className = item.iconClass;
});

populateTemplate(footerLinksContainer, footerLinkTemplate, footerLinks, (clone, item) => {
  const li = clone.querySelector('li');
  li.textContent = item;
});

populateTemplate(contactInfoContainer, contactInfoTemplate, contactInfo, (clone, item) => {
  const icon = clone.querySelector('i');
  icon.className = item.iconClass;
  const span = clone.querySelector('span');
  span.textContent = item.text;
});
