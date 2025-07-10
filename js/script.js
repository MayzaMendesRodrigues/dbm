
// Mobile Menu Toggle
    const mobileMenu = document.querySelector(".mobile-menu");
    const navMenu = document.querySelector("nav ul");

    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
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

    // Testimonials slider (simple version)
    const testimonialsGrid = document.querySelector(".testimonials-grid");
    let currentIndex = 0;

    function showTestimonial(index) {
      const testimonialCards = document.querySelectorAll(".testimonial-card");
      const cardWidth = testimonialCards[0].offsetWidth;
      testimonialsGrid.style.transform = `translateX(-${
        index * cardWidth
      }px)`;
    }

    // Featured Bikes Data
const bikes = [
  {
    badge: "Destacada",
    image: "https://instagram.fpsr1-1.fna.fbcdn.net/v/t39.30808-6/496003464_1361313191729115_5027130973323952250_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEyMDB4MTIwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fpsr1-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QGowgK7zhykc_LwZ1Hfa3is9DHQ64xFMb_FpLmGu6uLQNx2_hTb-sg6v2IEueEfVHU&_nc_ohc=XWBG9omyvAcQ7kNvwG2Ne9G&_nc_gid=4Nw_GL_HWAbxXr5fhb7cYA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzYyODk1MzkzODg1NjQ4MTMzMQ%3D%3D.3-ccb7-5&oh=00_AfOddxUEN63m4lBca8qeye-ghyaGbKegPGdgIhl5cbGyFw&oe=6862A7FC&_nc_sid=22de04",
    alt: "Rouser NS 200",
    name: "Rouser Ns 200",
    year: "2023",
    km: "18.000 km",
    cc: "200cc",
    price: "$4.200.000 <span>ARS</span>",
  },
  {
    badge: "Oferta",
    image: "https://instagram.fpsr1-1.fna.fbcdn.net/v/t39.30808-6/496947144_1364660788061022_1975973596662365392_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE2MDB4MTYwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fpsr1-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QGowgK7zhykc_LwZ1Hfa3is9DHQ64xFMb_FpLmGu6uLQNx2_hTb-sg6v2IEueEfVHU&_nc_ohc=v-iIEVTRSHQQ7kNvwHAfM-G&_nc_gid=4Nw_GL_HWAbxXr5fhb7cYA&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzYzMjU3OTA5MTkwMTI2ODQxNA%3D%3D.3-ccb7-5&oh=00_AfPxbHKtZSkQLUvCca8wdbaeKD03Nn4fRUJLNjpshbMSuw&oe=6862BB2B&_nc_sid=22de04",
    alt: "Beta Tempo 150",
    name: "Beta Tempo 150",
    year: "2021",
    km: "12.900 km",
    cc: "150cc",
    price: "$2.000.000 <span>AR</span>",
  },
  {
    badge: "Novedad",
    image: "https://instagram.fpsr1-1.fna.fbcdn.net/v/t39.30808-6/486147355_1323506635509771_7685600752346627125_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEyMDB4MTIwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fpsr1-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QHNKxFA9wEeVKAHuC67JnEmegjgzi245zKoKPjw9HV669aZq6-zHoofq0NnZfxvwFw&_nc_ohc=mSQR9XcLadgQ7kNvwEI71jA&_nc_gid=7Yf83692BjrEjll_432IHg&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzUyMjMwMzkwMzE0MTIwNDUzNA%3D%3D.3-ccb7-5&oh=00_AfPLEyxbFI6FN6uO9gMwi1LbKesKJ1vgEU5BD0_1GNBnFw&oe=6862C328&_nc_sid=22de04",
    alt: "Honda XR 150",
    name: "Honda XR 150",
    year: "2022",
    km: "13.000 km",
    cc: "150cc",
    price: "$4.500.000 <span>AR</span>",
  },
  {
    badge: "Recomendada",
    image: "https://instagram.fpsr1-1.fna.fbcdn.net/v/t39.30808-6/484850476_1320173575843077_5706947333673380218_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEyMDB4MTIwMC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fpsr1-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QE428a5iSlCEudYV7k3M4XYMif2kWKidhZKTl731wVvJppraf2vroTYXZBEavsenhE&_nc_ohc=4xAuLKqGVOkQ7kNvwHPS4ta&_nc_gid=gDUHbbXRIsJFliJST7LZWw&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzM5ODMwMzkxMTkyNzc0MjE2OQ%3D%3D.3-ccb7-5&oh=00_AfNe2ts6TJ0UqIF1E0qkMCvJ0XV48i75YVGTAnmVJ7m2ow&oe=6862C109&_nc_sid=22de04",
    alt: "Bajaj Dominar D400",
    name: "Bajaj Dominar D400",
    year: "2022",
    km: "2.000 km",
    cc: "645cc",
    price: "$6.800.000 <span>AR</span>",
  },
];

// Populate Bike Cards
const bikesGrid = document.querySelector(".bikes-grid");
const bikeCardTemplate = document.querySelector("#bike-card-template");

bikes.forEach((bike) => {
  const bikeCard = bikeCardTemplate.content.cloneNode(true);

  bikeCard.querySelector(".bike-badge").textContent = bike.badge;
  bikeCard.querySelector(".bike-image img").src = bike.image;
  bikeCard.querySelector(".bike-image img").alt = bike.alt;
  bikeCard.querySelector("h3").textContent = bike.name;
  bikeCard.querySelector(".spec-year").textContent = bike.year;
  bikeCard.querySelector(".spec-km").textContent = bike.km;
  bikeCard.querySelector(".spec-cc").textContent = bike.cc;
  bikeCard.querySelector(".bike-price").innerHTML = bike.price;

  bikesGrid.appendChild(bikeCard);
});

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

// Testimonials Data
const testimonials = [
  {
    content: "compre mi primer moto en 2022, y en 2025 volvi x otra!!! la verdad, excelente atención y venta!! pronto volveremos x mas!!!!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXbu7sYzZ4HPu5xM8dA3TIk0rzis9HCoPijkuYmlHY7igXpLhaA=w72-h72-p-rp-mo-ba3-br100",
    alt: "Tamara Fernandez",
    author: "Tamara Fernandez",
    buy: "",
    rating: 5,
  },
  {
    content: "La verdad muy buena atención del vendedor Gabriel. Y demás personal y muy satisfecho con la compra de mi TVS 200 4V RTR.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocIvy7E1gPP5gS01lJFJEYq8Se24BrgQow6F_FUfYv9dGGlxIA=w72-h72-p-rp-mo-br100",
    alt: "Ismael Martinez",
    author: "Ismael Martinez",
    buy: "Compra: TVS 200 4V RTR",
    rating: 5,
  },
  {
    content: "Tenía para vender una moto complicada, por la antiguedad, por ser una moto modificada y porque tenia una complicación con el patentamiento. En si la moto estaba buenisima, pero no era un caso facil. En DBM motos me ayudaron desde el primer momento con toda la gestión, fue un lujo. La moto la vendieron en semanas, por la plata que esperaba, y se hicieron cargo de todo. Me imagino que el comprador estará feliz con mi ex Cafe Racer, yo feliz de que tenga un nuevo dueño que pueda disfrutarla más.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVirm6Uw2gxxm9rqfzDdKFGSxA5UbWzZidgKLYNMsDQHl1PfbzY=w72-h72-p-rp-mo-br100",
    alt: "Fernando Moroni",
    author: "Fernando Moroni",
    buy: "Venta: Cafe Racer",
    rating: 5,
  },
];

// Populate Testimonial Cards
const testimonialCardTemplate = document.querySelector("#testimonial-card-template");

testimonials.forEach((testimonial) => {
  const testimonialCard = testimonialCardTemplate.content.cloneNode(true);

  testimonialCard.querySelector(".testimonial-content").textContent = testimonial.content;
  testimonialCard.querySelector(".author-img img").src = testimonial.image;
  testimonialCard.querySelector(".author-img img").alt = testimonial.alt;
  testimonialCard.querySelector("h4").textContent = testimonial.author;
  testimonialCard.querySelector(".author-buy").textContent = testimonial.buy;

  const ratingContainer = testimonialCard.querySelector(".rating");
  for (let i = 0; i < testimonial.rating; i++) {
    const star = document.createElement("i");
    star.className = "fas fa-star";
    ratingContainer.appendChild(star);
  }

  testimonialsGrid.appendChild(testimonialCard);
});

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
    src: "assets/motomel.svg",
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
    // You can add next/prev buttons and event listeners to control the slider
    // For simplicity, this example doesn't include them.
