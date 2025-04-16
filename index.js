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
document.addEventListener("DOMContentLoaded", function() {
  const heroBg = document.querySelector('.parallax-bg');
  
  new simpleParallax(heroBg, {
    orientation: 'down',
    scale: 1.8, // Ajusta según necesidad
    delay: 0,
    overflow: true,
    transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
  });
});