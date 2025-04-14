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
