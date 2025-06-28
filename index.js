

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
  