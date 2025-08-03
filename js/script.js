// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navMenu = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    }
  });
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

const testimonialsGrid = document.querySelector(".testimonials-grid");
let currentIndex = 0;

function showTestimonial(index) {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const cardWidth = testimonialCards[0].offsetWidth;
  testimonialsGrid.style.transform = `translateX(-${index * cardWidth
    }px)`;
}

const bikesGrid = document.querySelector(".bikes-grid");
const bikeCardTemplate = document.querySelector("#bike-card-template");

async function loadBikes(bikes) {
  try {
    bikesGrid.innerHTML = '';

    const productsWithImages = bikes.filter(productData => productData.images && productData.images.length > 0);
    const firstTenProducts = productsWithImages.slice(0, 10);

    firstTenProducts.forEach(productData => {
      const bikeCard = bikeCardTemplate.content.cloneNode(true);
      const { product, salePrice, images } = productData;

      bikeCard.querySelector(".bike-badge").textContent = product.type || 'Destacada';

      const firstImage = images.find(img => img.primary) || images[0];
      bikeCard.querySelector(".bike-image img").src = firstImage.url;
      bikeCard.querySelector(".bike-image img").alt = `${product.brand} ${product.model}`;
      bikeCard.querySelector("h3").textContent = `${product.brand} ${product.model}`;
      bikeCard.querySelector(".spec-year").textContent = product.year;
      bikeCard.querySelector(".spec-km").textContent = `${product.mileage} km`;
      bikeCard.querySelector(".spec-cc").textContent = `${product.cylinder}cc`;
      bikeCard.querySelector(".bike-price").innerHTML = `${new Intl.NumberFormat('es-AR').format(salePrice)} <span>ARS</span>`;
      bikesGrid.appendChild(bikeCard);
    });
  } catch (error) {
    console.error("Error fetching bikes:", error);
    bikesGrid.innerHTML = '<p>Error al cargar las motos. Por favor, intente más tarde.</p>';
  }
}

// Benefits Data
const benefits = [
  {
    icon: "fas fa-shield-alt",
    title: "Garantía en todas las motos",
    description: "Todas nuestras motos pasan por una revisión técnica completa y cuentan con garantía.",
  },
  {
    icon: "fas fa-hand-holding-usd",
    title: "Financiación personalizada",
    description: "Planes de pago adaptados a tus necesidades. Tasas competitivas y aprobación rápida.",
  },
  {
    icon: "fas fa-tools",
    title: "Revisión técnica completa",
    description: "Cada moto pasa por nuestro taller especializado para garantizar su óptimo funcionamiento.",
  },
  {
    icon: "fas fa-bolt",
    title: "Entrega inmediata",
    description: "Recibí tu moto en el momento con todos los papeles en regla y lista para rodar.",
  },
];

// Populate Benefit Cards
const benefitsGrid = document.querySelector(".benefits-grid");
const benefitCardTemplate = document.querySelector("#benefit-card-template");

benefits.forEach((benefit) => {
  const benefitCard = benefitCardTemplate.content.cloneNode(true);

  benefitCard.querySelector(".benefit-icon i").className = benefit.icon;
  benefitCard.querySelector("h3").textContent = benefit.title;
  benefitCard.querySelector("p").textContent = benefit.description;

  benefitsGrid.appendChild(benefitCard);
});

// How It Works Data
const steps = [
  {
    number: "1",
    title: "Elegí tu moto",
    description: "Seleccioná el modelo que más te guste de nuestro catálogo.",
  },
  {
    number: "2",
    title: "Contactanos",
    description: "Agendá una visita para ver y probar la moto.",
  },
  {
    number: "3",
    title: "Personalizá tu pago",
    description: "Elegí la forma de pago que mejor se adapte a tus necesidades.",
  },
  {
    number: "4",
    title: "Recibí tu moto",
    description: "Retirala en nuestro local o te la llevamos a domicilio.",
  },
];

// Populate Step Cards
const stepsContainer = document.querySelector(".steps-container");
const stepTemplate = document.querySelector("#step-template");

steps.forEach((step) => {
  const stepCard = stepTemplate.content.cloneNode(true);

  stepCard.querySelector(".step-number").textContent = step.number;
  stepCard.querySelector("h3").textContent = step.title;
  stepCard.querySelector("p").textContent = step.description;

  stepsContainer.appendChild(stepCard);
});

function loadReviews(data) {
  const testimonialCardTemplate = document.querySelector("#testimonial-card-template");
  const testimonialCard = testimonialCardTemplate.content.cloneNode(true);

  const firstFiveReviews = data.slice(0, 5);
  firstFiveReviews.forEach(review => {
    testimonialCard.querySelector(".testimonial-content").textContent = data.textHtml;
    testimonialCard.querySelector(".author-img img").src = data.reviewerPictureUrl;
    testimonialCard.querySelector(".author-img img").alt = data.reviewerName;
    testimonialCard.querySelector("h4").textContent = data.reviewerName;

    const ratingContainer = testimonialCard.querySelector(".rating");
    for (let i = 0; i < data.rating; i++) {
      const star = document.createElement("i");
      star.className = "fas fa-star";
      ratingContainer.appendChild(star);
    }

    testimonialsGrid.appendChild(testimonialCard);
  })
}



// FAQ Data
const faqs = [
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo, transferencia bancaria y todos los principales medios de pago electrónico. Además, ofrecemos planes de financiación a través de bancos y entidades crediticias asociadas, con opciones de hasta 48 cuotas.",
  },
  {
    question: "¿Puedo revisar la moto antes de comprarla?",
    answer: "¡Absolutamente! Entendemos lo importante que es asegurarse de la moto perfecta. Por eso, te invitamos a visitar nuestras instalaciones para ver en persona cualquiera de nuestras motos. Podrás inspeccionarla detalladamente, verificar todos sus componentes y resolver cualquier duda que tengas con nuestro equipo.",
  },
  {
    question: "¿Hacen servicio técnico postventa?",
    answer: "Sí, contamos con taller propio especializado en todas las marcas que comercializamos.",
  },
  {
    question: "¿Puedo entregar mi moto actual como parte de pago?",
    answer: "Sí, aceptamos tu moto actual como parte de pago. Nuestros técnicos la evaluarán y te ofreceremos un valor de mercado justo que podrás descontar del precio de la moto que deseas adquirir.",
  },
];

// Populate FAQ Items
const faqContainer = document.querySelector(".faq-container");
const faqItemTemplate = document.querySelector("#faq-item-template");

faqs.forEach((faq) => {
  const faqItem = faqItemTemplate.content.cloneNode(true);

  faqItem.querySelector(".faq-question").textContent = faq.question;
  faqItem.querySelector(".faq-answer").textContent = faq.answer;

  faqContainer.appendChild(faqItem);
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close other items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

// Brands Data
const brands = [
  {
    src: "assets/yamaha.svg",
    alt: "Yamaha",
  },
  {
    src: "assets/honda.svg",
    alt: "Honda",
  },
  {
    src: "assets/corven.svg",
    alt: "Corven",
  },
  {
    src: "assets/motomel_.svg",
    alt: "Motomel",
  },
  {
    src: "assets/gilera.svg",
    alt: "Gilera",
  },
  {
    src: "assets/tvs.svg",
    alt: "TVS",
  },
  {
    src: "assets/siam.svg",
    alt: "Siam",
  },
  {
    src: "assets/bajaj.svg",
    alt: "Bajaj",
  },
];

// Populate Brand Items
const brandsGrid = document.querySelector(".brands-grid");
const brandItemTemplate = document.querySelector("#brand-item-template");

brands.forEach((brand) => {
  const brandItem = brandItemTemplate.content.cloneNode(true);

  brandItem.querySelector("img").src = brand.src;
  brandItem.querySelector("img").alt = brand.alt;

  brandsGrid.appendChild(brandItem);
});

// Social Links Data
const socialLinks = [
  {
    href: "https://www.facebook.com/motosdbm",
    icon: "fab fa-facebook-f",
  },
  {
    href: "https://www.instagram.com/dbmmotos/",
    icon: "fab fa-instagram",
  },
  {
    href: "https://wa.me/5491173608326?text=Hola,%20quiero%20información%20sobre%20sus%20motos",
    icon: "fab fa-whatsapp",
  },
  {
    href: "https://maps.app.goo.gl/qZ5ydZGazjmu46VS6",
    icon: "fas fa-map-marker-alt",
  },
];

// Populate Social Links
const socialLinksContainer = document.querySelector(".social-links");
const socialLinkTemplate = document.querySelector("#social-link-template");

socialLinks.forEach((link) => {
  const socialLink = socialLinkTemplate.content.cloneNode(true);

  socialLink.querySelector("a").href = link.href;
  socialLink.querySelector("i").className = link.icon;

  socialLinksContainer.appendChild(socialLink);
});

// Footer Links Data
const footerLinks = [
  "Lunes a Viernes: 10:00 - 19:00",
  "Sábados: 10:00 - 13:00",
  "Domingos: Cerrado",
  "Feriados: Consultar",
];

// Populate Footer Links
const footerLinksContainer = document.querySelector(".footer-links");
const footerLinkTemplate = document.querySelector("#footer-link-template");

footerLinks.forEach((linkText) => {
  const footerLink = footerLinkTemplate.content.cloneNode(true);

  footerLink.querySelector("li").textContent = linkText;

  footerLinksContainer.appendChild(footerLink);
});

// Contact Info Data
const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    text: "Av. Rivadavia 10801, Liniers, CABA",
  },
  {
    icon: "fas fa-phone",
    text: "+54 11 7360-8326",
  },
  {
    icon: "fas fa-envelope",
    text: "motos.dbm@gmail.com",
  },
];

// Populate Contact Info
const contactInfoContainer = document.querySelector(".contact-info");
const contactInfoTemplate = document.querySelector("#contact-info-template");

contactInfo.forEach((info) => {
  const contactInfoItem = contactInfoTemplate.content.cloneNode(true);

  contactInfoItem.querySelector("i").className = info.icon;
  contactInfoItem.querySelector("span").textContent = info.text;

  contactInfoContainer.appendChild(contactInfoItem);
});


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

    fetch("https://api.dbmmotos.com.ar/dbm_content.json", { mode: 'cors' })
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

fetchPageContent().then(data => {
  loadBikes(data.products);
  loadReviews(data.reviews)
});
