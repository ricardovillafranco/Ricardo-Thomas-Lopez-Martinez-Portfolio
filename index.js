// Platzi certificates slider
new Swiper('.platzi-swiper', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Oracle certificates slider
new Swiper('.oracle-swiper', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});




// Inicializar parallax solo en el fondo del hero
// document.addEventListener("DOMContentLoaded", function() {
//   const heroBg = document.querySelector('.parallax-bg');
  
//   new simpleParallax(heroBg, {
//     orientation: 'down',
//     scale: 1.8, // Ajusta según necesidad
//     delay: 0,
//     overflow: true,
//     transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
//   });
// });


// Configuración final con detección de dispositivo
document.addEventListener("DOMContentLoaded", function() {
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const heroBg = document.querySelector('.parallax-bg');

new simpleParallax(heroBg, {
  orientation: isMobile ? 'up' : 'down', // Dirección diferente en mobile
  scale: isMobile ? 1.2 : 2.2,
  delay: isMobile ? 0.2 : 0.6,
  overflow: true,
  transition: 'linear',
  breakpoint: 768,
  maxTransition: 50,
  customWrapper: ".parallax-container"
});
});

// FAQ accordion functionality
    document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        // Toggle current question
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
        
        // Close other open questions
        faqQuestions.forEach(otherQuestion => {
          if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
            otherQuestion.classList.remove('active');
            otherQuestion.nextElementSibling.classList.remove('active');
          }
        });
      });
    });
    
    // Accessibility enhancements
    faqQuestions.forEach(question => {
      question.setAttribute('role', 'button');
      question.setAttribute('aria-expanded', 'false');
      
      question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        question.setAttribute('aria-expanded', !isExpanded);
      });
    });
  });
