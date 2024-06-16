var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: 'true',
    grabCursor: true,
//   slidesPerGroup: 3,
//   keyboard: {
//     enabled: true,
//   },
//   breakpoints: {
//     769: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//     },
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints:{
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    950: {
        slidesPerView: 3,
    },
  },
});