
// Mobile Menu Toggle
    const mobileMenu = document.querySelector(".mobile-menu");
    const navMenu = document.querySelector("nav ul");

    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
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
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    let currentIndex = 0;

    function showTestimonial(index) {
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
    // You can add next/prev buttons and event listeners to control the slider
    // For simplicity, this example doesn't include them.
