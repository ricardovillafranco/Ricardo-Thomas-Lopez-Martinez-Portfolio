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


document.addEventListener('DOMContentLoaded', function() {
  particlesJS("cyber-particles", {
    "particles": {
      "number": { "value": 150, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": ["#00f0ff", "#ff00ff", "#ff0000"] },
      "shape": {
        "type": "edge",
        "stroke": { "width": 0, "color": "#000000" },
        "polygon": { "nb_sides": 5 }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": { "enable": true, "speed": 1, "opacity_min": 0.1 }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": { "enable": true, "speed": 4, "size_min": 0.3 }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00f0ff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      },
      "modes": {
        "repulse": { "distance": 100, "duration": 0.4 },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
});